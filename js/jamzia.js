// JamZia™ v1.0 — Java-style State Management
// AppState enum and StateManager class

const AppState = Object.freeze({
  HOME: 'HOME',
  UNIVERSE: 'UNIVERSE',
  PLATFORM: 'PLATFORM',
  PRICING: 'PRICING',
  ABOUT: 'ABOUT',
  LOGIN: 'LOGIN'
});

class StateManager {
  constructor() {
    this.currentState = AppState.HOME;
    this.currentUniverse = null;
    this.currentPlatform = null;
    this.accessGranted = false;
    this.user = null;
    console.log('[JamZia v1.0] StateManager initialized — Black Diamond Design');
  }

  // Java-style transition method
  transition(newState, data = null) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] StateManager.transition: ${this.currentState} → ${newState}`);
    
    // Exit current state
    this.exitState(this.currentState);
    
    // Update state
    this.currentState = newState;
    
    // Enter new state
    this.enterState(newState, data);
  }

  enterState(state, data) {
    switch(state) {
      case AppState.HOME:
        this.enterHomeState();
        break;
      case AppState.UNIVERSE:
        this.enterUniverseState(data);
        break;
      case AppState.PLATFORM:
        this.enterPlatformState(data);
        break;
      case AppState.LOGIN:
        this.enterLoginState();
        break;
    }
  }

  exitState(state) {
    console.log(`[StateManager] Exiting ${state}`);
  }

  enterHomeState() {
    console.log('[StateManager] Entering HOME state — SORME™ Search + Layer 1/2 MFCs');
    document.body.className = 'state-home';
  }

  enterUniverseState(universe) {
    this.currentUniverse = universe;
    console.log(`[StateManager] Entering UNIVERSE state — ${universe} platform grid`);
  }

  enterPlatformState(platform) {
    this.currentPlatform = platform;
    console.log(`[StateManager] Entering PLATFORM state — ${platform} app detail`);
  }

  enterLoginState() {
    console.log('[StateManager] Entering LOGIN state');
  }

  // Action methods
  login() {
    this.transition(AppState.LOGIN);
    alert('🔐 JamZia™ Login\n\nEnter credentials to access your account.\n\nDesign: Black Diamond (#081F5C, #7096D1, #F7F2EB)');
  }

  toggleAccess() {
    this.accessGranted = !this.accessGranted;
    if (this.accessGranted) {
      alert('✓ Access Granted!\n\nWelcome to JamZia™ — The Everything App\nLayer 1: JamVideo™ + JamAudio™ (Primary)\nLayer 2: 7 MFC Ecosystem');
    } else {
      alert('Get Access Now\n\nPricing: $299/mo or $2,990/year');
    }
  }

  navigateToUniverse(universe) {
    this.transition(AppState.UNIVERSE, universe);
    window.location.href = `/${universe.toLowerCase().replace('jam', '')}/`;
  }

  navigateToPlatform(platform) {
    this.transition(AppState.PLATFORM, platform);
  }
}

// Global state manager instance
const stateManager = new StateManager();

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('🎬 JamZia™ v1.0 — Black Diamond Design System loaded');
  console.log('🎨 Colors: #000000, #081F5C, #7096D1, #EDF1F6, #D0E3FF, #F7F2EB');
  console.log('📐 Layout: Layer 1 (JamVideo + JamAudio) + Layer 2 (7 MFCs)');
  stateManager.enterHomeState();
});
