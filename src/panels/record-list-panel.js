import { PolymerElement, html } from '@polymer/polymer/polymer-element'

import '@vaadin/vaadin-grid/vaadin-grid'
import '@vaadin/vaadin-button/vaadin-button'

import { RecordData, SampleRecordData } from '../../assets/schemas/RecordData'

class RecordListPanel extends PolymerElement {
  static get template() {
    return html`
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
    `
  }

  static get properties() {
    return {
      recordDatas: {
        type: Array,
        notify: true,
        value: () => {
          return RecordData.create(SampleRecordData)
        }
      },
      selectedRecordData: {
        type: Object,
        notify: true
      }
    }
  }

  onGridActiveItemChanged(evt) {
    const recordDataGrid = this.shadowRoot.querySelector('vaadin-grid')
    const selectedItem = evt.detail.value
    recordDataGrid.selectedItems = selectedItem ? [selectedItem] : []
    this.set('selectedRecordData', selectedItem)
  }

  displayStatus(status) {
    switch (status) {
      case 'monitoring':
        return '监控中'
      case 'recording':
        return '录制中'
      case 'free':
        return '闲置中'
      default:
        return ''
    }
  }
}

window.customElements.define('record-list-panel', RecordListPanel)
