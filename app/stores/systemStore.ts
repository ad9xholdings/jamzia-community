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
    
    if (socket) {
      socket.close();
    }
    
    set({ validationMessage: "Establishing secure link to RockNext..." });
    
    const newSocket = io(url, {
      transports: ['websocket'],
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
    });
    
    newSocket.on('connect', () => {
      console.log('[RockNext] WebSocket connected');
      set({ 
        isConnected: true,
        validationMessage: "Authenticating with RockNext Validation Engine..."
      });
      newSocket.emit('request_validation');
    });
    
    newSocket.on('disconnect', () => {
      console.log('[RockNext] WebSocket disconnected');
      set({ 
        isConnected: false,
        isValidated: false,
        validationMessage: "Validation Link Severed. Connection interrupted.",
        socket: null
      });
    });
    
    newSocket.on('connect_error', () => {
      set({ 
        isConnected: false,
        isValidated: false,
        validationMessage: "Unable to establish validation link. RockNext service unreachable.",
        socket: null
      });
    });
    
    newSocket.on('validation_success', (data: ValidationBlock) => {
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
      set({ 
        isValidated: false,
        validationMessage: `Validation failed: ${reason}. System access suspended.`
      });
    });
    
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
    
    newSocket.on('domain_health', (update: { domain: string; health: { status: 'operational' | 'degraded' | 'down'; score: number } }) => {
      const { domainHealth } = get();
      set({
        domainHealth: {
          ...domainHealth,
          [update.domain]: update.health
        }
      });
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
  }
}));
