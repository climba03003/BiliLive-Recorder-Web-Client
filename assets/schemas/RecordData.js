import BaseSchema from "./BaseSchema.js";
export class RecordData extends BaseSchema {
  create(o) {
    if (o.roomId) this.roomId = o.roomId;
    if (o.realRoomId) this.realRoomId = o.realRoomId;
    if (o.streamerName) this.streamerName = o.streamerName;
    if (o.status) this.status = o.status;
    if (o.downloadSpeedKiBps) this.downloadSpeedKiBps = o.downloadSpeedKiBps;else this.downloadSpeedKiBps = 0;
    if (o.downloadSpeedPersentage) this.downloadSpeedPersentage = o.downloadSpeedPersentage;else this.downloadSpeedPersentage = 0;
    if (o.clipCount) this.clipCount = o.clipCount;
  }

  update(o) {
    if (o.roomId) this.roomId = o.roomId;
    if (o.realRoomId) this.realRoomId = o.realRoomId;
    if (o.streamerName) this.streamerName = o.streamerName;
    if (o.status) this.status = o.status;
    if (o.downloadSpeedKiBps) this.downloadSpeedKiBps = o.downloadSpeedKiBps;
    if (o.downloadSpeedPersentage) this.downloadSpeedPersentage = o.downloadSpeedPersentage;
    if (o.clipCount) this.clipCount = o.clipCount;
  }

  get roomId() {
    return this._roomId;
  }

  set roomId(roomId) {
    this._roomId = Number(roomId);
  }

  get realRoomId() {
    return this._realRoomId;
  }

  set realRoomId(realRoomId) {
    this._realRoomId = Number(realRoomId);
  }

  get streamerName() {
    return this._streamerName;
  }

  set streamerName(streamerName) {
    this._streamerName = String(streamerName);
  }

  get status() {
    return this._status;
  }

  set status(status) {
    this._status = String(status);
  }

  get downloadSpeedKiBps() {
    return Number(this._downloadSpeedKiBps).toFixed(2);
  }

  set downloadSpeedKiBps(downloadSpeedKiBps) {
    this._downloadSpeedKiBps = String(downloadSpeedKiBps);
  }

  get downloadSpeedPersentage() {
    return Number(this._downloadSpeedPersentage).toFixed(2);
  }

  set downloadSpeedPersentage(downloadSpeedPersentage) {
    this._downloadSpeedPersentage = String(downloadSpeedPersentage);
  }

  get clipCount() {
    return this._clipCount;
  }

  set clipCount(clipCount) {
    this._clipCount = Number(clipCount);
  }

  toJSON() {
    let o = super.toJSON();
    if (this.roomId) o.roomId = this.roomId;
    if (this.realRoomId) o.realRoomId = this.realRoomId;
    if (this.streamerName) o.streamerName = this.streamerName;
    if (this.status) o.status = this.status;
    if (this.downloadSpeedKiBps) o.downloadSpeedKiBps = this.downloadSpeedKiBps;
    if (this.downloadSpeedPersentage) o.downloadSpeedPersentage = this.downloadSpeedPersentage;
    if (this.clipCount) o.clipCount = this.clipCount;
    return o;
  }

}
export const SampleRecordData = [{
  roomId: 1,
  realRoomId: 1,
  streamerName: 1,
  status: 'monitoring',
  downloadSpeedKiBps: 0,
  downloadSpeedPersentage: 0,
  clipCount: 0
}, {
  roomId: 2,
  realRoomId: 2,
  streamerName: 2,
  status: 'recording',
  downloadSpeedKiBps: 52.4383783,
  downloadSpeedPersentage: 13.555,
  clipCount: 0
}, {
  roomId: 3,
  realRoomId: 3,
  streamerName: 3,
  status: 'free',
  downloadSpeedKiBps: 0,
  downloadSpeedPersentage: 0,
  clipCount: 0
}, {
  roomId: 4,
  realRoomId: 4,
  streamerName: 4,
  status: '',
  downloadSpeedKiBps: 0,
  downloadSpeedPersentage: 0,
  clipCount: 0
}];
export default RecordData;