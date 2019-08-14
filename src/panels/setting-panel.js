define(["../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@vaadin/vaadin-form-layout/vaadin-form-layout.js","../../node_modules/@vaadin/vaadin-text-field/vaadin-text-field.js","../../node_modules/@vaadin/vaadin-button/vaadin-button.js"],function(_polymerElement,_vaadinFormLayout,_vaadinTextField,_vaadinButton){"use strict";class SettingPanel extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
        :host {
          padding: var(--lumo-space-s);
          box-sizing: border-box;
        }

        .form-padding {
          display: block;
          padding: var(--lumo-space-s);
          box-sizing: border-box;
        }
      </style>
      <vaadin-form-layout>
        <vaadin-text-field colspan="1" readonly label="房间号" value="[[selectedRecordData.roomId]]"></vaadin-text-field>
        <vaadin-text-field colspan="1" readonly label="原房间号" value="[[selectedRecordData.realRoomId]]"></vaadin-text-field>
        <vaadin-text-field colspan="2" readonly label="主播名字" value="[[selectedRecordData.streamerName]]"></vaadin-text-field>
        <vaadin-text-field colspan="2" readonly label="录制状态" value="[[displayStatus(selectedRecordData.status)]]"></vaadin-text-field>
        <vaadin-text-field colspan="2" readonly label="剪辑数量" value="[[selectedRecordData.clipCount]]"></vaadin-text-field>
        <vaadin-text-field
          colspan="1"
          readonly
          label="下载速度"
          value="[[displayDownloadSpeedKiBps(selectedRecordData.downloadSpeedKiBps)]]"
        ></vaadin-text-field>
        <vaadin-text-field
          readonly
          colspan="1"
          label="速度百分比"
          value="[[displayDownloadSpeedPersentage(selectedRecordData.downloadSpeedPersentage)]]"
        ></vaadin-text-field>
        <vaadin-button colspan="1" on-click="onClickEnableAutoRec">启用自动录制</vaadin-button>
        <vaadin-button colspan="1" on-click="onClickDisableAutoRec" theme="error">禁用自动录制</vaadin-button>
        <vaadin-button colspan="1" on-click="onClickTriggerRec">手动触发开始录制</vaadin-button>
        <vaadin-button colspan="1" on-click="onClickCutRec" theme="error">切断当前录制</vaadin-button>
        <vaadin-button colspan="2" on-click="onClickRemoveRecRoom" theme="error">删除这个直播间</vaadin-button>
        <div colspan="2" class="form-padding"></div>
        <vaadin-text-field colspan="1" label="房间号" value="{{addRoomId}}"></vaadin-text-field>
        <vaadin-button colspan="1" on-click="onClickAddRoom">添加</vaadin-button>
        <div colspan="2" class="form-padding"></div>
        <vaadin-button colspan="1" on-click="onClickEnableAllAutoRec">启用所有直播间</vaadin-button>
        <vaadin-button colspan="1" on-click="onClickDisableAllAutoRec" theme="error">禁用所有直播间</vaadin-button>
      </vaadin-form-layout>
    `}static get properties(){return{selectedRecordData:{type:Object,notify:!0},addRoomId:Number}}onClickEnableAutoRec(){this.dispatchCustomEvent("auto-rec-changed",{value:!0,roomId:this.selectedRecordData.roomId})}onClickDisableAutoRec(){this.dispatchCustomEvent("auto-rec-changed",{value:!1,roomId:this.selectedRecordData.roomId})}onClickTriggerRec(){this.dispatchCustomEvent("rec-changed",{value:!0,roomId:this.selectedRecordData.roomId})}onClickCutRec(){this.dispatchCustomEvent("rec-changed",{value:!1,roomId:this.selectedRecordData.roomId})}onClickRemoveRecRoom(){this.dispatchCustomEvent("remove-room",{value:this.selectedRecordData.roomId})}onClickAddRoom(){this.dispatchCustomEvent("add-room",{value:this.addRoomId})}onClickEnableAllAutoRec(){this.dispatchCustomEvent("all-auto-rec-changed",{value:!0})}onClickDisableAllAutoRec(){this.dispatchCustomEvent("all-auto-rec-changed",{value:!1})}displayStatus(status){switch(status){case"monitoring":return"\u76D1\u63A7\u4E2D";case"recording":return"\u5F55\u5236\u4E2D";case"free":return"\u95F2\u7F6E\u4E2D";default:return"";}}displayDownloadSpeedKiBps(downloadSpeedKiBps){return downloadSpeedKiBps?`${downloadSpeedKiBps} KiB/s`:""}displayDownloadSpeedPersentage(downloadSpeedPersentage){return downloadSpeedPersentage?`${downloadSpeedPersentage} %`:""}dispatchCustomEvent(eventName,detail,bubbles=!0,composed=!0){this.dispatchEvent(new CustomEvent(eventName,{detail:detail,bubbles:bubbles,composed:composed}))}}window.customElements.define("setting-panel",SettingPanel)});