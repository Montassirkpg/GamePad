import React from 'react';
import './ConfigurationPanel.css';

function ConfigurationPanel() {
  return (
    <div className="configuration-panel">
      <h2>CONFIGURATION</h2>
      <div className="config-option">
        <label>Base Console</label>
        <button>Je fournis la console</button>
        <button>Je n'ai pas de console à fournir (+40€)</button>
      </div>
      <div className="config-option">
        <label>Coque</label>
        <input type="checkbox" defaultChecked />
      </div>
      <div className="config-option">
        <label>Écran IPS Rétroéclairé</label>
        <input type="checkbox" />
      </div>
      <div className="config-option">
        <label>Boutons</label>
        <input type="checkbox" />
      </div>
      <div className="config-option">
        <label>Pads</label>
        <input type="checkbox" />
      </div>
      <div className="config-option">
        <label>Lanière</label>
        <input type="checkbox" />
      </div>
    </div>
  );
}

export default ConfigurationPanel;
