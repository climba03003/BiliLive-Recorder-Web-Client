define(["../node_modules/@polymer/polymer/polymer-element.js","../node_modules/@polymer/polymer/lib/utils/settings.js","../node_modules/@vaadin/vaadin-lumo-styles/color.js","../node_modules/@vaadin/vaadin-lumo-styles/typography.js","../node_modules/@vaadin/vaadin-split-layout/vaadin-split-layout.js","./panels/log-panel.js","./panels/record-list-panel.js","./panels/setting-panel.js","../assets/schemas/RecordData.js"],function(_polymerElement,_settings,_color,_typography,_vaadinSplitLayout,_logPanel,_recordListPanel,_settingPanel,_RecordData){"use strict";// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
(0,_settings.setPassiveTouchGestures)(!0);// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
// eslint-disable-next-line no-undef
(0,_settings.setRootPath)(BililiveRecorderAppGlobals.rootPath);class BililiveRecorderApp extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style include="lumo-color lumo-typography">
        :host {
          display: block;
          width: 100%;
          height: 100vh;
        }

        .left-panel,
        .right-panel {
          height: 100vh;
        }

        .left-panel {
          width: 55%;
        }

        .right-panel {
          width: 45%;
        }

        record-list-panel,
        log-panel {
          height: 50%;
        }
      </style>
      <vaadin-split-layout>
        <vaadin-split-layout orientation="vertical" class="left-panel">
          <record-list-panel record-datas="{{recordDatas}}" selected-record-data="{{selectedRecordData}}"></record-list-panel>
          <log-panel></log-panel>
        </vaadin-split-layout>
        <setting-panel
          class="right-panel"
          selected-record-data="{{selectedRecordData}}"
          on-auto-rec-changed="onAutoRecChanged"
          on-rec-changed="onRecChanged"
          on-remove-room="onRemoveRoom"
        ></setting-panel>
      </vaadin-split-layout>
    `}static get properties(){return{recordDatas:Array,selectedRecordData:Object}}static get observers(){return["onChanged(recordDatas.*, selectedRecordData)"]}onAutoRecChanged(evt){console.log(evt);let recordIndex=_RecordData.RecordData.findIndex(this.recordDatas,"roomId",evt.detail.roomId);this.set(`recordDatas.${recordIndex}.status`,evt.detail.value?"monitoring":"free");this.clearAndSet("selectedRecordData.status",evt.detail.value?"monitoring":"free");// this.set('selectedRecordData', {})
// this.set('selectedRecordData', this.get(`recordDatas.${recordIndex}`))
}onRecChanged(evt){console.log(evt);let recordIndex=_RecordData.RecordData.findIndex(this.recordDatas,"roomId",evt.detail.roomId);this.set(`recordDatas.${recordIndex}.status`,evt.detail.value?"recording":"monitoring");this.clearAndSet("selectedRecordData.status",evt.detail.value?"recording":"monitoring");// this.set('selectedRecordData', {})
// this.set('selectedRecordData', this.get(`recordDatas.${recordIndex}`))
}onRemoveRoom(evt){console.log(evt);let recordIndex=_RecordData.RecordData.findIndex(this.recordDatas,"roomId",evt.detail.value);this.splice("recordDatas",recordIndex,1);this.set("selectedRecordData",{})}clearAndSet(path,value){this.set(path,value);const hostPath=path.split(".")[0];let oldVar=this.get(hostPath);this.set(hostPath,{});this.set(hostPath,oldVar)}onChanged(){console.log(this.selectedRecordData)}}window.customElements.define("bililive-recorder-app",BililiveRecorderApp)});