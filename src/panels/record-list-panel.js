define(["../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@vaadin/vaadin-grid/vaadin-grid.js","../../node_modules/@vaadin/vaadin-button/vaadin-button.js","../../assets/schemas/RecordData.js"],function(_polymerElement,_vaadinGrid,_vaadinButton,_RecordData){"use strict";class RecordListPanel extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
        :host {
          display: flex;
          flex: 1 1 auto;
        }

        vaadin-grid {
          flex: 1 1 auto;
          height: 100%;
        }

        vaadin-grid vaadin-button {
          width: 100%;
        }
      </style>
      <vaadin-grid items="[[recordDatas]]" theme="compact no-border no-row-borders row-stripes" on-active-item-changed="onGridActiveItemChanged">
        <vaadin-grid-column path="roomId" header="回放剪辑按钮" text-align="center">
          <template>
            <vaadin-button>剪辑</vaadin-button>
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column path="roomId" header="房间号" text-align="center"></vaadin-grid-column>
        <vaadin-grid-column path="realRoomId" header="原房间号" text-align="center"></vaadin-grid-column>
        <vaadin-grid-column path="streamerName" header="主播名字" text-align="center"></vaadin-grid-column>
        <vaadin-grid-column path="status" header="当前状态" text-align="center">
          <template>
            [[displayStatus(item.status)]]
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column path="downloadSpeedKiBps" header="下载速度" text-align="center">
          <template>
            [[item.downloadSpeedKiBps]] KiB/s
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column path="downloadSpeedPersentage" header="速度百分比" text-align="center">
          <template>
            [[item.downloadSpeedPersentage]] %
          </template>
        </vaadin-grid-column>
        <vaadin-grid-column path="clipCount" header="剪辑数量" text-align="center"></vaadin-grid-column>
      </vaadin-grid>
    `}static get properties(){return{recordDatas:{type:Array,notify:!0,value:()=>{return _RecordData.RecordData.create(_RecordData.SampleRecordData)}},selectedRecordData:{type:Object,notify:!0}}}onGridActiveItemChanged(evt){const recordDataGrid=this.shadowRoot.querySelector("vaadin-grid"),selectedItem=evt.detail.value;recordDataGrid.selectedItems=selectedItem?[selectedItem]:[];this.set("selectedRecordData",selectedItem)}displayStatus(status){switch(status){case"monitoring":return"\u76D1\u63A7\u4E2D";case"recording":return"\u5F55\u5236\u4E2D";case"free":return"\u95F2\u7F6E\u4E2D";default:return"";}}}window.customElements.define("record-list-panel",RecordListPanel)});