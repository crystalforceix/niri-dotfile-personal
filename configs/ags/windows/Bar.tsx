import { App, Astal, Gdk, Gtk } from "astal/gtk3"
import DateTime from "../widgets/DateTime"
import Workspaces from "../widgets/Workspaces"
import Tray from "../widgets/Tray"
import AudioBluetooth from "../widgets/AudioBluetooth"
import LaptopStuff from "../widgets/LaptopStuff"
import AstalBattery from "gi://AstalBattery?version=0.1"
import ResourceUsage from "../widgets/ResourceUsage"

const battery = AstalBattery.get_default()

export default function Bar(monitor: Gdk.Monitor) {
  return <window
    name="bar"
    className="Bar"
    gdkmonitor={monitor}
    exclusivity={Astal.Exclusivity.EXCLUSIVE}
    anchor={Astal.WindowAnchor.TOP
      | Astal.WindowAnchor.LEFT
      | Astal.WindowAnchor.RIGHT}
    application={App}>
    <centerbox>
      <box className="left" hexpand halign={Gtk.Align.START}>
        <Workspaces forMonitor={monitor} showInactiveIcons></Workspaces>
        <ResourceUsage />
      </box>
      <box className="center" hexpand>
      <DateTime />
      </box>
      <box className="right" hexpand halign={Gtk.Align.END}>
        <Tray />
        <AudioBluetooth />
        {battery.isPresent && <LaptopStuff />}
      </box>
    </centerbox>
  </window>
}
