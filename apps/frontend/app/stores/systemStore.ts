import { create } from 'zustand';
import { io, Socket } from 'socket.io-client';

interface ValidationBlock {
  timestamp: number;
  integrityScore: number;
  aiReliabilityIndex: number;
  spatialGrade: number;
  securityStatus: 'secure' | 'at-risk' | 'breach';
  infrastructureHealth: number;
}

interface SystemState {
  // Connection State
  socket: Socket | null;
  isConnected: boolean;
  isValidated: boolean;
  validationMessage: string | null;
  lastValidationBlock: ValidationBlock | null;
  
  // Real-time Metrics
  integrityScore: number;
  aiReliabilityIndex: number;
  spatialGrade: number;
  securityStatus: 'secure' | 'at-risk' | 'breach';
  infrastructureHealth: number;
  
  // Domain Status
  domainHealth: Record<string, { status: 'operational' | 'degraded' | 'down'; score: number }>;
  
  // Actions
  initializeWebSocket: (url: string) => void;
  reconnect: () => void;
  disconnect: () => void;
  updateValidationBlock: (block: ValidationBlock) => void;
  updateDomainHealth: (domain: string, health: { status: 'operational' | 'degraded' | 'down'; score: number }) => void;
}

export const useSystemStore = create<SystemState>((set, get) => ({
  socket: null,
  isConnected: false,
  isValidated: false,
  validationMessage: null,
  lastValidationBlock: null,
  
  integrityScore: 100,
  aiReliabilityIndex: 100,
  spatialGrade: 100,
  securityStatus: 'secure',
  infrastructureHealth: 100,
  
  domainHealth: {
    access: { status: 'operational', score: 100 },
    intelligence: { status: 'operational', score: 100 },
    audit: { status: 'operational', score: 100 },
    bridge: { status: 'operational', score: 100 },
    continuum: { status: 'operational', score: 100 },
    dex: { status: 'operational', score: 100 },
    essence: { status: 'operational', score: 100 },
    foundation: { status: 'operational', score: 100 },
    growth: { status: 'operational', score: 100 },
    horizon: { status: 'operational', score: 100 },
    monitor: { status: 'operational', score: 100 },
  },
  
  initializeWebSocket: (url: string) => {
    const { socket } = get();
    
    // Close existing connection
    if (socket) {
      socket.close();
    }
    
    set({ validationMessage: "Establishing secure link..." });
    
    const newSocket = io(url, {
      transports: ['websocket'],
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
    });
    
    newSocket.on('connect', () => {
      console.log('[JamZia] WebSocket connected');
      set({ 
        isConnected: true,
        validationMessage: "Authenticating with Audit Engine..."
      });
      
      // Request initial validation
      newSocket.emit('request_validation');
    });
    
    newSocket.on('disconnect', (reason) => {
      console.log('[JamZia] WebSocket disconnected:', reason);
      set({ 
        isConnected: false,
        isValidated: false,
        validationMessage: "Validation Link Severed. Connection interrupted.",
        socket: null
      });
    });
    
    newSocket.on('connect_error', (error) => {
      console.error('[JamZia] Connection error:', error);
      set({ 
        isConnected: false,
        isValidated: false,
        validationMessage: "Unable to establish validation link. Monitor service unreachable.",
        socket: null
      });
    });
    
    // Handle validation response
    newSocket.on('validation_success', (data: ValidationBlock) => {
      console.log('[JamZia] Validation successful:', data);
      set({ 
        isValidated: true,
        lastValidationBlock: data,
        integrityScore: data.integrityScore,
        aiReliabilityIndex: data.aiReliabilityIndex,
        spatialGrade: data.spatialGrade,
        securityStatus: data.securityStatus,
        infrastructureHealth: data.infrastructureHealth,
        validationMessage: null
      });
    });
    
    newSocket.on('validation_failure', (reason: string) => {
      console.error('[JamZia] Validation failed:', reason);
      set({ 
        isValidated: false,
        validationMessage: `Validation failed: ${reason}. System access suspended.`
      });
    });
    
    // Handle audit stream updates
    newSocket.on('audit_update', (block: ValidationBlock) => {
      set({ 
        lastValidationBlock: block,
        integrityScore: block.integrityScore,
        aiReliabilityIndex: block.aiReliabilityIndex,
        spatialGrade: block.spatialGrade,
        securityStatus: block.securityStatus,
        infrastructureHealth: block.infrastructureHealth
      });
    });
    
    // Handle domain health updates
    newSocket.on('domain_health', (update: { domain: string; health: { status: 'operational' | 'degraded' | 'down'; score: number } }) => {
      const { domainHealth } = get();
      set({
        domainHealth: {
          ...domainHealth,
          [update.domain]: update.health
        }
      });
    });
    
    // Handle billing throttle notification
    newSocket.on('billing_throttle', (data: { domain: string; reason: string }) => {
      console.warn('[JamZia] Billing throttled for domain:', data.domain, data.reason);
      // This would trigger a UI notification
    });
    
    set({ socket: newSocket });
  },
  
  reconnect: () => {
    const { initializeWebSocket } = get();
    set({ 
      isConnected: false,
      isValidated: false,
      validationMessage: "Attempting to re-establish validation link..."
    });
    initializeWebSocket('ws://localhost:3001');
  },
  
  disconnect: () => {
    const { socket } = get();
    if (socket) {
      socket.close();
    }
    set({ 
      socket: null,
      isConnected: false,
      isValidated: false
    });
  },
  
  updateValidationBlock: (block: ValidationBlock) => {
    set({ lastValidationBlock: block });
  },
  
  updateDomainHealth: (domain: string, health: { status: 'operational' | 'degraded' | 'down'; score: number }) => {
    const { domainHealth } = get();
    set({
      domainHealth: {
        ...domainHealth,
        [domain]: health
      }
    });
  }
}));
