import React, { Component } from "react";
// ↓ ここはTimの動画（React 17以前）と違い、React 18の作法を守ります
import { createRoot } from "react-dom/client";
import HomePage from "./HomePage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="center">
        <HomePage />
      </div>
    );
  }
}

// ↓ Timの動画と同じように、App.jsのファイルの一番下で描画（レンダリング）させます
const appDiv = document.getElementById("app");
if (appDiv) {
  const root = createRoot(appDiv);
  root.render(<App name="You" />);
}
