define(["exports","meta"],function(_exports,meta){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.$documentWaitDefault=documentWait;_exports.addListener=addListener;_exports.afterNextRender=afterNextRender;_exports.applyCss=applyCss;_exports.applyStyle=applyStyle;_exports.applyStylePlaceHolder=applyStylePlaceHolder;_exports.beforeNextRender=beforeNextRender;_exports.calculateSplices=calculateSplices;_exports.camelToDashCase=camelToDashCase;_exports.createScopeStyle=createScopeStyle;_exports.cssFromModule=cssFromModule;_exports.cssFromModuleImports=cssFromModuleImports;_exports.cssFromModules=cssFromModules;_exports.cssFromTemplate=cssFromTemplate;_exports.dashToCamelCase=dashToCamelCase;_exports.deepTargetFind=deepTargetFind;_exports.detectMixin=_detectMixin;_exports.dumpRegistrations=dumpRegistrations;_exports.elementHasBuiltCss=elementHasBuiltCss;_exports.elementsAreInvalid=elementsAreInvalid;_exports.findMatchingParen=findMatchingParen;_exports.flush$2=flush;_exports.forEachRule=forEachRule;_exports.gatherStyleText=gatherStyleText;_exports.get=_get;_exports.getBuildComment=getBuildComment;_exports.getComputedStyleValue=_getComputedStyleValue;_exports.getCssBuild=getCssBuild;_exports.getIsExtends=getIsExtends;_exports.hideElementsGlobally=hideElementsGlobally;_exports.incrementInstanceCount=incrementInstanceCount;_exports.invalidate=invalidate;_exports.invalidateTemplate=invalidateTemplate;_exports.isAncestor=isAncestor;_exports.isDescendant=isDescendant;_exports.isKeyframesSelector=isKeyframesSelector;_exports.isOptimalCssBuild=isOptimalCssBuild;_exports.isPath=isPath;_exports.isTargetedBuild=isTargetedBuild;_exports.isUnscopedStyle=isUnscopedStyle;_exports.isValid=isValid;_exports.isValidating=isValidating;_exports.matches=matches;_exports.mixinBehaviors=mixinBehaviors;_exports.modelForElement=_modelForElement;_exports.normalize=normalize;_exports.parse=parse;_exports.pathFromUrl=pathFromUrl;_exports.prevent=_prevent;_exports.processUnscopedStyle=processUnscopedStyle;_exports.processVariableAndFallback=processVariableAndFallback;_exports.register=register$1;_exports.register$1=register;_exports.removeCustomPropAssignment=removeCustomPropAssignment;_exports.removeListener=removeListener;_exports.resetMouseCanceller=resetMouseCanceller;_exports.resolveCss=resolveCss;_exports.resolveUrl=_resolveUrl;_exports.root=root;_exports.rulesForStyle=rulesForStyle;_exports.scopeSubtree=_scopeSubtree;_exports.set=_set;_exports.setElementClassRaw=setElementClassRaw;_exports.setTouchAction=setTouchAction;_exports.split=split;_exports.splitSelectorList=splitSelectorList;_exports.startValidating=startValidating;_exports.startValidatingTemplate=startValidatingTemplate;_exports.stringify=stringify;_exports.stylesFromModule=stylesFromModule;_exports.stylesFromModuleImports=stylesFromModuleImports;_exports.stylesFromModules=stylesFromModules;_exports.stylesFromTemplate=stylesFromTemplate;_exports.templateIsValid=templateIsValid;_exports.templateIsValidating=templateIsValidating;_exports.templatize=_templatize;_exports.toCssText=toCssText;_exports.translate=translate;_exports.updateNativeProperties=updateNativeProperties;_exports.ANIMATION_MATCH=_exports.A11yMixin=_exports.$wrap=_exports.$version=_exports.$vaadinUsageStatistics=_exports.$vaadinThemePropertyMixin=_exports.$vaadinThemableMixin=_exports.$vaadinTextFieldMixin=_exports.$vaadinTextField=_exports.$vaadinTextArea=_exports.$vaadinSplitLayout=_exports.$vaadinGridTemplatizer=_exports.$vaadinGridStylingMixin=_exports.$vaadinGridSortMixin=_exports.$vaadinGridSelectionMixin=_exports.$vaadinGridScroller=_exports.$vaadinGridScrollMixin=_exports.$vaadinGridRowDetailsMixin=_exports.$vaadinGridKeyboardNavigationMixin=_exports.$vaadinGridFilterMixin=_exports.$vaadinGridEventContextMixin=_exports.$vaadinGridDynamicColumnsMixin=_exports.$vaadinGridDragAndDropMixin=_exports.$vaadinGridDataProviderMixin=_exports.$vaadinGridColumnResizingMixin=_exports.$vaadinGridColumnReorderingMixin=_exports.$vaadinGridColumn=_exports.$vaadinGridArrayDataProviderMixin=_exports.$vaadinGridActiveItemMixin=_exports.$vaadinGridA11yMixin=_exports.$vaadinGrid=_exports.$vaadinFormLayout=_exports.$vaadinElementMixin=_exports.$vaadinDevelopmentModeDetector=_exports.$vaadinControlStateMixin=_exports.$vaadinCheckbox=_exports.$vaadinButton=_exports.$unscopedStyleHandler=_exports.$templatizerBehavior=_exports.$templatize=_exports.$templateStamp=_exports.$templateMapDefault=_exports.$templateMap=_exports.$telemetry=_exports.$styleUtil=_exports.$styleSettings=_exports.$styleGather=_exports.$settings=_exports.$scopeSubtree=_exports.$resolveUrl=_exports.$renderStatus=_exports.$propertyEffects=_exports.$propertyAccessors=_exports.$propertiesMixin=_exports.$propertiesChanged=_exports.$polymerLegacy=_exports.$polymerFn=_exports.$polymerElement=_exports.$polymerDom=_exports.$path=_exports.$mutableDataBehavior=_exports.$mutableData=_exports.$mixin=_exports.$legacyElementMixin=_exports.$ironScrollTargetBehavior=_exports.$ironResizableBehavior=_exports.$ironList=_exports.$htmlTag=_exports.$hideTemplateControls=_exports.$gestures=_exports.$gestureEventListeners=_exports.$flush=_exports.$flattenedNodesObserver=_exports.$elementMixin=_exports.$domRepeat=_exports.$domModule=_exports.$domIf=_exports.$domBind=_exports.$documentWait=_exports.$dirMixin=_exports.$debounce=_exports.$customStyleInterfaceDefault=_exports.$customStyleInterface$1=_exports.$customStyle=_exports.$cssParse=_exports.$commonUtils=_exports.$commonRegex=_exports.$class=_exports.$caseMap=_exports.$async=_exports.$arraySplice=_exports.$arraySelector=_exports.$applyShimUtils=_exports.$applyShimDefault=_exports.$applyShim$1=_exports.RecordData=_exports.$RecordDataDefault=_exports.$RecordData=_exports.$BaseSchemaDefault=_exports.$BaseSchema=void 0;_exports.idlePeriod=_exports.htmlLiteral=_exports.html$2=_exports.html$1=_exports.html=_exports.gestures=_exports.flushDebouncers=_exports.flush$1=_exports.flush=_exports.findOriginalTarget=_exports.dom=_exports.disableRuntime=_exports.dedupingMixin=_exports.cssBuild=_exports.cancelSyntheticClickEvents=_exports.animationFrame=_exports.allowTemplateFromDomModule=_exports.enqueueDebouncer$1=_exports.enqueueDebouncer=_exports.addDebouncer=_exports.add=_exports.VAR_CONSUMED=_exports.VAR_ASSIGN=_exports.ThemePropertyMixin=_exports.ThemableMixin=_exports.TextFieldMixin=_exports.TextFieldElement=_exports.TextAreaElement=_exports.Templatizer$1=_exports.Templatizer=_exports.TemplateStamp=_exports.TemplateInstanceBase=_exports.StylingMixin=_exports.StyleNode=_exports.SplitLayoutElement=_exports.SortMixin=_exports.SelectionMixin=_exports.ScrollerElement=_exports.ScrollMixin=_exports.SampleRecordData=_exports.RowDetailsMixin=_exports.PropertyEffects=_exports.PropertyAccessors=_exports.PropertiesMixin=_exports.PropertiesChanged=_exports.PolymerIronList=_exports.PolymerElement=_exports.Polymer$1=_exports.Polymer=_exports.OptionalMutableDataBehavior=_exports.OptionalMutableData=_exports.MutableDataBehavior=_exports.MutableData=_exports.MIXIN_MATCH=_exports.MEDIA_MATCH=_exports.Lumo=_exports.LegacyElementMixin=_exports.KeyboardNavigationMixin=_exports.ItemCache=_exports.IronScrollTargetBehavior=_exports.IronResizableBehavior=_exports.IS_VAR=_exports.HOST_SUFFIX=_exports.HOST_PREFIX=_exports.GridElement=_exports.GridColumnElement=_exports.GestureEventListeners=_exports.FormLayoutElement=_exports.FlattenedNodesObserver=_exports.FilterMixin=_exports.EventContextMixin=_exports.EventApi=_exports.ElementMixin$1=_exports.ElementMixin=_exports.DynamicColumnsMixin=_exports.DragAndDropMixin=_exports.DomRepeat=_exports.DomModule=_exports.DomIf=_exports.DomBind=_exports.DomApi=_exports.DirMixin=_exports.Debouncer=_exports.DataProviderMixin=_exports.CustomStyleProvider=_exports.CustomStyleInterfaceInterface=_exports.CustomStyle=_exports.ControlStateMixin=_exports.ColumnResizingMixin=_exports.ColumnReorderingMixin=_exports.ColumnBaseMixin=_exports.Class=_exports.CheckboxElement=_exports.ButtonElement=_exports.Base=_exports.BRACKETED=_exports.ArraySelectorMixin=_exports.ArraySelector=_exports.ArrayDataProviderMixin=_exports.ActiveItemMixin=void 0;_exports.wrap$1=_exports.wrap=_exports.version$1=_exports.version=_exports.useShadow=_exports.useNativeCustomElements=_exports.useNativeCSSProperties=_exports.usageStatistics=_exports.updateStyles=_exports.types=_exports.timeOut=_exports.syncInitialRender=_exports.strictTemplatePolicy=_exports.setSyncInitialRender=_exports.setStrictTemplatePolicy=_exports.setSanitizeDOMValue=_exports.setRootPath=_exports.setPassiveTouchGestures=_exports.setLegacyOptimizations=_exports.setCancelSyntheticClickEvents=_exports.setAllowTemplateFromDomModule=_exports.scopingAttribute=_exports.sanitizeDOMValue=_exports.runIfDevelopmentMode=_exports.rootPath=_exports.remove=_exports.registrations=_exports.recognizers=_exports.passiveTouchGestures=_exports.nativeShadow=_exports.nativeCssVariables=_exports.microTask=_exports.matchesSelector=_exports.legacyOptimizations=_exports.isDeep=_exports.instanceCount=void 0;meta=babelHelpers.interopRequireWildcard(meta);function _templateObject20_7280bdd0bea211e98f44c3131ec74eb1(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style include=\"lumo-color lumo-typography\">\n        :host {\n          display: block;\n          width: 100%;\n          height: 100vh;\n        }\n\n        .left-panel,\n        .right-panel {\n          height: 100vh;\n        }\n\n        .left-panel {\n          width: 55%;\n        }\n\n        .right-panel {\n          width: 45%;\n        }\n\n        record-list-panel,\n        log-panel {\n          height: 50%;\n        }\n      </style>\n      <vaadin-split-layout>\n        <vaadin-split-layout orientation=\"vertical\" class=\"left-panel\">\n          <record-list-panel record-datas=\"{{recordDatas}}\" selected-record-data=\"{{selectedRecordData}}\"></record-list-panel>\n          <log-panel></log-panel>\n        </vaadin-split-layout>\n        <setting-panel\n          class=\"right-panel\"\n          selected-record-data=\"{{selectedRecordData}}\"\n          on-auto-rec-changed=\"onAutoRecChanged\"\n          on-rec-changed=\"onRecChanged\"\n          on-remove-room=\"onRemoveRoom\"\n        ></setting-panel>\n      </vaadin-split-layout>\n    "]);_templateObject20_7280bdd0bea211e98f44c3131ec74eb1=function _templateObject20_7280bdd0bea211e98f44c3131ec74eb1(){return data};return data}function _templateObject19_7280bdd0bea211e98f44c3131ec74eb1(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          padding: var(--lumo-space-s);\n          box-sizing: border-box;\n        }\n\n        .form-padding {\n          display: block;\n          padding: var(--lumo-space-s);\n          box-sizing: border-box;\n        }\n      </style>\n      <vaadin-form-layout>\n        <vaadin-text-field colspan=\"1\" readonly label=\"\u623F\u95F4\u53F7\" value=\"[[selectedRecordData.roomId]]\"></vaadin-text-field>\n        <vaadin-text-field colspan=\"1\" readonly label=\"\u539F\u623F\u95F4\u53F7\" value=\"[[selectedRecordData.realRoomId]]\"></vaadin-text-field>\n        <vaadin-text-field colspan=\"2\" readonly label=\"\u4E3B\u64AD\u540D\u5B57\" value=\"[[selectedRecordData.streamerName]]\"></vaadin-text-field>\n        <vaadin-text-field colspan=\"2\" readonly label=\"\u5F55\u5236\u72B6\u6001\" value=\"[[displayStatus(selectedRecordData.status)]]\"></vaadin-text-field>\n        <vaadin-text-field colspan=\"2\" readonly label=\"\u526A\u8F91\u6570\u91CF\" value=\"[[selectedRecordData.clipCount]]\"></vaadin-text-field>\n        <vaadin-text-field\n          colspan=\"1\"\n          readonly\n          label=\"\u4E0B\u8F7D\u901F\u5EA6\"\n          value=\"[[displayDownloadSpeedKiBps(selectedRecordData.downloadSpeedKiBps)]]\"\n        ></vaadin-text-field>\n        <vaadin-text-field\n          readonly\n          colspan=\"1\"\n          label=\"\u901F\u5EA6\u767E\u5206\u6BD4\"\n          value=\"[[displayDownloadSpeedPersentage(selectedRecordData.downloadSpeedPersentage)]]\"\n        ></vaadin-text-field>\n        <vaadin-button colspan=\"1\" on-click=\"onClickEnableAutoRec\">\u542F\u7528\u81EA\u52A8\u5F55\u5236</vaadin-button>\n        <vaadin-button colspan=\"1\" on-click=\"onClickDisableAutoRec\" theme=\"error\">\u7981\u7528\u81EA\u52A8\u5F55\u5236</vaadin-button>\n        <vaadin-button colspan=\"1\" on-click=\"onClickTriggerRec\">\u624B\u52A8\u89E6\u53D1\u5F00\u59CB\u5F55\u5236</vaadin-button>\n        <vaadin-button colspan=\"1\" on-click=\"onClickCutRec\" theme=\"error\">\u5207\u65AD\u5F53\u524D\u5F55\u5236</vaadin-button>\n        <vaadin-button colspan=\"2\" on-click=\"onClickRemoveRecRoom\" theme=\"error\">\u5220\u9664\u8FD9\u4E2A\u76F4\u64AD\u95F4</vaadin-button>\n        <div colspan=\"2\" class=\"form-padding\"></div>\n        <vaadin-text-field colspan=\"1\" label=\"\u623F\u95F4\u53F7\" value=\"{{addRoomId}}\"></vaadin-text-field>\n        <vaadin-button colspan=\"1\" on-click=\"onClickAddRoom\">\u6DFB\u52A0</vaadin-button>\n        <div colspan=\"2\" class=\"form-padding\"></div>\n        <vaadin-button colspan=\"1\" on-click=\"onClickEnableAllAutoRec\">\u542F\u7528\u6240\u6709\u76F4\u64AD\u95F4</vaadin-button>\n        <vaadin-button colspan=\"1\" on-click=\"onClickDisableAllAutoRec\" theme=\"error\">\u7981\u7528\u6240\u6709\u76F4\u64AD\u95F4</vaadin-button>\n      </vaadin-form-layout>\n    "]);_templateObject19_7280bdd0bea211e98f44c3131ec74eb1=function _templateObject19_7280bdd0bea211e98f44c3131ec74eb1(){return data};return data}function _templateObject18_7280bdd0bea211e98f44c3131ec74eb1(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: flex;\n          flex: 1 1 auto;\n        }\n\n        vaadin-grid {\n          flex: 1 1 auto;\n          height: 100%;\n        }\n\n        vaadin-grid vaadin-button {\n          width: 100%;\n        }\n      </style>\n      <vaadin-grid items=\"[[recordDatas]]\" theme=\"compact no-border no-row-borders row-stripes\" on-active-item-changed=\"onGridActiveItemChanged\">\n        <vaadin-grid-column path=\"roomId\" header=\"\u56DE\u653E\u526A\u8F91\u6309\u94AE\" text-align=\"center\">\n          <template>\n            <vaadin-button>\u526A\u8F91</vaadin-button>\n          </template>\n        </vaadin-grid-column>\n        <vaadin-grid-column path=\"roomId\" header=\"\u623F\u95F4\u53F7\" text-align=\"center\"></vaadin-grid-column>\n        <vaadin-grid-column path=\"realRoomId\" header=\"\u539F\u623F\u95F4\u53F7\" text-align=\"center\"></vaadin-grid-column>\n        <vaadin-grid-column path=\"streamerName\" header=\"\u4E3B\u64AD\u540D\u5B57\" text-align=\"center\"></vaadin-grid-column>\n        <vaadin-grid-column path=\"status\" header=\"\u5F53\u524D\u72B6\u6001\" text-align=\"center\">\n          <template>\n            [[displayStatus(item.status)]]\n          </template>\n        </vaadin-grid-column>\n        <vaadin-grid-column path=\"downloadSpeedKiBps\" header=\"\u4E0B\u8F7D\u901F\u5EA6\" text-align=\"center\">\n          <template>\n            [[item.downloadSpeedKiBps]] KiB/s\n          </template>\n        </vaadin-grid-column>\n        <vaadin-grid-column path=\"downloadSpeedPersentage\" header=\"\u901F\u5EA6\u767E\u5206\u6BD4\" text-align=\"center\">\n          <template>\n            [[item.downloadSpeedPersentage]] %\n          </template>\n        </vaadin-grid-column>\n        <vaadin-grid-column path=\"clipCount\" header=\"\u526A\u8F91\u6570\u91CF\" text-align=\"center\"></vaadin-grid-column>\n      </vaadin-grid>\n    "]);_templateObject18_7280bdd0bea211e98f44c3131ec74eb1=function _templateObject18_7280bdd0bea211e98f44c3131ec74eb1(){return data};return data}function _templateObject17_7280bdd0bea211e98f44c3131ec74eb1(){var data=babelHelpers.taggedTemplateLiteral(["\n      <style>\n        :host {\n          padding: var(--lumo-space-s);\n        }\n\n        vaadin-text-area {\n          width: 100%;\n          height: 100%;\n          box-sizing: border-box;\n        }\n      </style>\n      <vaadin-text-area></vaadin-text-area>\n    "]);_templateObject17_7280bdd0bea211e98f44c3131ec74eb1=function _templateObject17_7280bdd0bea211e98f44c3131ec74eb1(){return data};return data}function _templateObject16_7280bdd0bea211e98f44c3131ec74eb1(){var data=babelHelpers.taggedTemplateLiteral(["<dom-module id=\"lumo-text-field\" theme-for=\"vaadin-text-field\">\n  <template>\n    <style include=\"lumo-required-field lumo-field-button\">\n      :host {\n        --lumo-text-field-size: var(--lumo-size-m);\n        color: var(--lumo-body-text-color);\n        font-size: var(--lumo-font-size-m);\n        font-family: var(--lumo-font-family);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n        padding: var(--lumo-space-xs) 0;\n      }\n\n      :host::before {\n        height: var(--lumo-text-field-size);\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n      }\n\n      :host([focused]:not([readonly])) [part=\"label\"] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part=\"input-field\"] ::slotted([part=\"value\"]) {\n        cursor: inherit;\n        min-height: var(--lumo-text-field-size);\n        padding: 0 0.25em;\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);\n        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);\n      }\n\n      [part=\"value\"]:focus,\n      [part=\"input-field\"] ::slotted(input):focus,\n      [part=\"input-field\"] ::slotted(textarea):focus {\n        -webkit-mask-image: none;\n        mask-image: none;\n      }\n\n      /*\n        TODO: CSS custom property in `mask-image` causes crash in Edge\n        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/\n      */\n      @-moz-document url-prefix() {\n        [part=\"value\"],\n        [part=\"input-field\"] ::slotted(input),\n        [part=\"input-field\"] ::slotted(textarea),\n        [part=\"input-field\"] ::slotted([part=\"value\"]) {\n          mask-image: var(--_lumo-text-field-overflow-mask-image);\n        }\n      }\n\n      [part=\"value\"]::-webkit-input-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]:-ms-input-placeholder {\n        color: inherit;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]::-moz-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]::placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.1s;\n        opacity: 0.5;\n      }\n\n      [part=\"input-field\"] {\n        border-radius: var(--lumo-border-radius);\n        background-color: var(--lumo-contrast-10pct);\n        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);\n        font-weight: 500;\n        line-height: 1;\n        position: relative;\n        cursor: text;\n        box-sizing: border-box;\n      }\n\n      /* Used for hover and activation effects */\n      [part=\"input-field\"]::after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        border-radius: inherit;\n        pointer-events: none;\n        background-color: var(--lumo-contrast-50pct);\n        opacity: 0;\n        transition: transform 0.15s, opacity 0.2s;\n        transform-origin: 100% 0;\n      }\n\n      /* Hover */\n\n      :host(:hover:not([readonly]):not([focused])) [part=\"label\"] {\n        color: var(--lumo-body-text-color);\n      }\n\n      :host(:hover:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n        opacity: 0.1;\n      }\n\n      /* Touch device adjustment */\n      @media (pointer: coarse) {\n        :host(:hover:not([readonly]):not([focused])) [part=\"label\"] {\n          color: var(--lumo-secondary-text-color);\n        }\n\n        :host(:hover:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n          opacity: 0;\n        }\n\n        :host(:active:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n          opacity: 0.2;\n        }\n      }\n\n      /* Trigger when not focusing using the keyboard */\n      :host([focused]:not([focus-ring]):not([readonly])) [part=\"input-field\"]::after {\n        transform: scaleX(0);\n        transition-duration: 0.15s, 1s;\n      }\n\n      /* Focus-ring */\n\n      :host([focus-ring]) [part=\"input-field\"] {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      /* Read-only and disabled */\n      :host([readonly]) [part=\"value\"]::-webkit-input-placeholder,\n      :host([disabled]) [part=\"value\"]::-webkit-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]:-ms-input-placeholder,\n      :host([disabled]) [part=\"value\"]:-ms-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]::-moz-placeholder,\n      :host([disabled]) [part=\"value\"]::-moz-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]::placeholder,\n      :host([disabled]) [part=\"value\"]::placeholder {\n        opacity: 0;\n      }\n\n      /* Read-only */\n\n      :host([readonly]) [part=\"input-field\"] {\n        color: var(--lumo-secondary-text-color);\n        background-color: transparent;\n        cursor: default;\n      }\n\n      :host([readonly]) [part=\"input-field\"]::after {\n        background-color: transparent;\n        opacity: 1;\n        border: 1px dashed var(--lumo-contrast-30pct);\n      }\n\n      /* Disabled style */\n\n      :host([disabled]) {\n        pointer-events: none;\n      }\n\n      :host([disabled]) [part=\"input-field\"] {\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      :host([disabled]) [part=\"label\"],\n      :host([disabled]) [part=\"value\"],\n      :host([disabled]) [part=\"input-field\"] ::slotted(*) {\n        color: var(--lumo-disabled-text-color);\n        -webkit-text-fill-color: var(--lumo-disabled-text-color);\n      }\n\n      /* Invalid style */\n\n      :host([invalid]) [part=\"input-field\"] {\n        background-color: var(--lumo-error-color-10pct);\n      }\n\n      :host([invalid]) [part=\"input-field\"]::after {\n        background-color: var(--lumo-error-color-50pct);\n      }\n\n      :host([invalid][focus-ring]) [part=\"input-field\"] {\n        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);\n      }\n\n      :host([input-prevented]) [part=\"input-field\"] {\n        color: var(--lumo-error-text-color);\n      }\n\n      /* Small theme */\n\n      :host([theme~=\"small\"]) {\n        font-size: var(--lumo-font-size-s);\n        --lumo-text-field-size: var(--lumo-size-s);\n      }\n\n      :host([theme~=\"small\"][has-label]) [part=\"label\"] {\n        font-size: var(--lumo-font-size-xs);\n      }\n\n      :host([theme~=\"small\"][has-label]) [part=\"error-message\"] {\n        font-size: var(--lumo-font-size-xxs);\n      }\n\n      /* Text align */\n\n      :host([theme~=\"align-center\"]) [part=\"value\"] {\n        text-align: center;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      :host([theme~=\"align-right\"]) [part=\"value\"] {\n        text-align: right;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      @-moz-document url-prefix() {\n        /* Firefox is smart enough to align overflowing text to right */\n        :host([theme~=\"align-right\"]) [part=\"value\"] {\n          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);\n        }\n      }\n\n      /* Slotted content */\n\n      [part=\"input-field\"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {\n        color: var(--lumo-secondary-text-color);\n        font-weight: 400;\n      }\n\n      /* Slotted icons */\n\n      [part=\"input-field\"] ::slotted(iron-icon) {\n        color: var(--lumo-contrast-60pct);\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n\n      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n      [part=\"input-field\"] ::slotted(iron-icon[icon^=\"vaadin:\"]) {\n        padding: 0.25em;\n        box-sizing: border-box !important;\n      }\n\n      [part=\"clear-button\"]::before {\n        content: var(--lumo-icons-cross);\n      }\n    </style>\n  </template>\n</dom-module>"],["<dom-module id=\"lumo-text-field\" theme-for=\"vaadin-text-field\">\n  <template>\n    <style include=\"lumo-required-field lumo-field-button\">\n      :host {\n        --lumo-text-field-size: var(--lumo-size-m);\n        color: var(--lumo-body-text-color);\n        font-size: var(--lumo-font-size-m);\n        font-family: var(--lumo-font-family);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n        padding: var(--lumo-space-xs) 0;\n      }\n\n      :host::before {\n        height: var(--lumo-text-field-size);\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n      }\n\n      :host([focused]:not([readonly])) [part=\"label\"] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part=\"input-field\"] ::slotted([part=\"value\"]) {\n        cursor: inherit;\n        min-height: var(--lumo-text-field-size);\n        padding: 0 0.25em;\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);\n        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);\n      }\n\n      [part=\"value\"]:focus,\n      [part=\"input-field\"] ::slotted(input):focus,\n      [part=\"input-field\"] ::slotted(textarea):focus {\n        -webkit-mask-image: none;\n        mask-image: none;\n      }\n\n      /*\n        TODO: CSS custom property in \\`mask-image\\` causes crash in Edge\n        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/\n      */\n      @-moz-document url-prefix() {\n        [part=\"value\"],\n        [part=\"input-field\"] ::slotted(input),\n        [part=\"input-field\"] ::slotted(textarea),\n        [part=\"input-field\"] ::slotted([part=\"value\"]) {\n          mask-image: var(--_lumo-text-field-overflow-mask-image);\n        }\n      }\n\n      [part=\"value\"]::-webkit-input-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]:-ms-input-placeholder {\n        color: inherit;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]::-moz-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]::placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.1s;\n        opacity: 0.5;\n      }\n\n      [part=\"input-field\"] {\n        border-radius: var(--lumo-border-radius);\n        background-color: var(--lumo-contrast-10pct);\n        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);\n        font-weight: 500;\n        line-height: 1;\n        position: relative;\n        cursor: text;\n        box-sizing: border-box;\n      }\n\n      /* Used for hover and activation effects */\n      [part=\"input-field\"]::after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        border-radius: inherit;\n        pointer-events: none;\n        background-color: var(--lumo-contrast-50pct);\n        opacity: 0;\n        transition: transform 0.15s, opacity 0.2s;\n        transform-origin: 100% 0;\n      }\n\n      /* Hover */\n\n      :host(:hover:not([readonly]):not([focused])) [part=\"label\"] {\n        color: var(--lumo-body-text-color);\n      }\n\n      :host(:hover:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n        opacity: 0.1;\n      }\n\n      /* Touch device adjustment */\n      @media (pointer: coarse) {\n        :host(:hover:not([readonly]):not([focused])) [part=\"label\"] {\n          color: var(--lumo-secondary-text-color);\n        }\n\n        :host(:hover:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n          opacity: 0;\n        }\n\n        :host(:active:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n          opacity: 0.2;\n        }\n      }\n\n      /* Trigger when not focusing using the keyboard */\n      :host([focused]:not([focus-ring]):not([readonly])) [part=\"input-field\"]::after {\n        transform: scaleX(0);\n        transition-duration: 0.15s, 1s;\n      }\n\n      /* Focus-ring */\n\n      :host([focus-ring]) [part=\"input-field\"] {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      /* Read-only and disabled */\n      :host([readonly]) [part=\"value\"]::-webkit-input-placeholder,\n      :host([disabled]) [part=\"value\"]::-webkit-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]:-ms-input-placeholder,\n      :host([disabled]) [part=\"value\"]:-ms-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]::-moz-placeholder,\n      :host([disabled]) [part=\"value\"]::-moz-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]::placeholder,\n      :host([disabled]) [part=\"value\"]::placeholder {\n        opacity: 0;\n      }\n\n      /* Read-only */\n\n      :host([readonly]) [part=\"input-field\"] {\n        color: var(--lumo-secondary-text-color);\n        background-color: transparent;\n        cursor: default;\n      }\n\n      :host([readonly]) [part=\"input-field\"]::after {\n        background-color: transparent;\n        opacity: 1;\n        border: 1px dashed var(--lumo-contrast-30pct);\n      }\n\n      /* Disabled style */\n\n      :host([disabled]) {\n        pointer-events: none;\n      }\n\n      :host([disabled]) [part=\"input-field\"] {\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      :host([disabled]) [part=\"label\"],\n      :host([disabled]) [part=\"value\"],\n      :host([disabled]) [part=\"input-field\"] ::slotted(*) {\n        color: var(--lumo-disabled-text-color);\n        -webkit-text-fill-color: var(--lumo-disabled-text-color);\n      }\n\n      /* Invalid style */\n\n      :host([invalid]) [part=\"input-field\"] {\n        background-color: var(--lumo-error-color-10pct);\n      }\n\n      :host([invalid]) [part=\"input-field\"]::after {\n        background-color: var(--lumo-error-color-50pct);\n      }\n\n      :host([invalid][focus-ring]) [part=\"input-field\"] {\n        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);\n      }\n\n      :host([input-prevented]) [part=\"input-field\"] {\n        color: var(--lumo-error-text-color);\n      }\n\n      /* Small theme */\n\n      :host([theme~=\"small\"]) {\n        font-size: var(--lumo-font-size-s);\n        --lumo-text-field-size: var(--lumo-size-s);\n      }\n\n      :host([theme~=\"small\"][has-label]) [part=\"label\"] {\n        font-size: var(--lumo-font-size-xs);\n      }\n\n      :host([theme~=\"small\"][has-label]) [part=\"error-message\"] {\n        font-size: var(--lumo-font-size-xxs);\n      }\n\n      /* Text align */\n\n      :host([theme~=\"align-center\"]) [part=\"value\"] {\n        text-align: center;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      :host([theme~=\"align-right\"]) [part=\"value\"] {\n        text-align: right;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      @-moz-document url-prefix() {\n        /* Firefox is smart enough to align overflowing text to right */\n        :host([theme~=\"align-right\"]) [part=\"value\"] {\n          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);\n        }\n      }\n\n      /* Slotted content */\n\n      [part=\"input-field\"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {\n        color: var(--lumo-secondary-text-color);\n        font-weight: 400;\n      }\n\n      /* Slotted icons */\n\n      [part=\"input-field\"] ::slotted(iron-icon) {\n        color: var(--lumo-contrast-60pct);\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n\n      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n      [part=\"input-field\"] ::slotted(iron-icon[icon^=\"vaadin:\"]) {\n        padding: 0.25em;\n        box-sizing: border-box !important;\n      }\n\n      [part=\"clear-button\"]::before {\n        content: var(--lumo-icons-cross);\n      }\n    </style>\n  </template>\n</dom-module>"]);_templateObject16_7280bdd0bea211e98f44c3131ec74eb1=function _templateObject16_7280bdd0bea211e98f44c3131ec74eb1(){return data};return data}function _templateObject15_7280bdd0bea211e98f44c3131ec74eb1(){var data=babelHelpers.taggedTemplateLiteral(["<dom-module id=\"lumo-text-area\" theme-for=\"vaadin-text-area\">\n  <template>\n    <style include=\"lumo-text-field\">\n      [part=\"input-field\"],\n      [part=\"input-field\"] ::slotted(textarea) {\n        /* Equal to the implicit padding in vaadin-text-field */\n        padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);\n        padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);\n        height: auto;\n        box-sizing: border-box;\n        transition: background-color 0.1s;\n        line-height: var(--lumo-line-height-s);\n      }\n\n      :host(:not([readonly])) [part=\"input-field\"]::after {\n        display: none;\n      }\n\n      :host([readonly]) [part=\"input-field\"] {\n        border: 1px dashed var(--lumo-contrast-30pct);\n      }\n\n      :host([readonly]) [part=\"input-field\"]::after {\n        border: none;\n      }\n\n      :host(:hover:not([readonly]):not([focused])) [part=\"input-field\"] {\n        background-color: var(--lumo-contrast-20pct);\n      }\n\n      @media (pointer: coarse) {\n        :host(:hover:not([readonly]):not([focused])) [part=\"input-field\"] {\n          background-color: var(--lumo-contrast-10pct);\n        }\n\n        :host(:active:not([readonly]):not([focused])) [part=\"input-field\"] {\n          background-color: var(--lumo-contrast-20pct);\n        }\n      }\n\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(textarea) {\n        line-height: inherit;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      /* Vertically align icon prefix/suffix with the first line of text */\n      [part=\"input-field\"] ::slotted(iron-icon) {\n        margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);\n      }\n\n      [part=\"input-field\"] [part=\"value\"],\n      [part=\"input-field\"] ::slotted(textarea) {\n        white-space: pre-wrap; /* override `nowrap` from <vaadin-text-field> */\n        align-self: stretch; /* override `baseline` from <vaadin-text-field> */\n      }\n    </style>\n  </template>\n</dom-module>"],["<dom-module id=\"lumo-text-area\" theme-for=\"vaadin-text-area\">\n  <template>\n    <style include=\"lumo-text-field\">\n      [part=\"input-field\"],\n      [part=\"input-field\"] ::slotted(textarea) {\n        /* Equal to the implicit padding in vaadin-text-field */\n        padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);\n        padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);\n        height: auto;\n        box-sizing: border-box;\n        transition: background-color 0.1s;\n        line-height: var(--lumo-line-height-s);\n      }\n\n      :host(:not([readonly])) [part=\"input-field\"]::after {\n        display: none;\n      }\n\n      :host([readonly]) [part=\"input-field\"] {\n        border: 1px dashed var(--lumo-contrast-30pct);\n      }\n\n      :host([readonly]) [part=\"input-field\"]::after {\n        border: none;\n      }\n\n      :host(:hover:not([readonly]):not([focused])) [part=\"input-field\"] {\n        background-color: var(--lumo-contrast-20pct);\n      }\n\n      @media (pointer: coarse) {\n        :host(:hover:not([readonly]):not([focused])) [part=\"input-field\"] {\n          background-color: var(--lumo-contrast-10pct);\n        }\n\n        :host(:active:not([readonly]):not([focused])) [part=\"input-field\"] {\n          background-color: var(--lumo-contrast-20pct);\n        }\n      }\n\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(textarea) {\n        line-height: inherit;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      /* Vertically align icon prefix/suffix with the first line of text */\n      [part=\"input-field\"] ::slotted(iron-icon) {\n        margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);\n      }\n\n      [part=\"input-field\"] [part=\"value\"],\n      [part=\"input-field\"] ::slotted(textarea) {\n        white-space: pre-wrap; /* override \\`nowrap\\` from <vaadin-text-field> */\n        align-self: stretch; /* override \\`baseline\\` from <vaadin-text-field> */\n      }\n    </style>\n  </template>\n</dom-module>"]);_templateObject15_7280bdd0bea211e98f44c3131ec74eb1=function _templateObject15_7280bdd0bea211e98f44c3131ec74eb1(){return data};return data}function _templateObject14_7280bdd0bea211e98f44c3131ec74eb1(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"vaadin-text-field-shared-styles\">\n      /* polymer-cli linter breaks with empty line */\n    </style>\n\n    <div class=\"vaadin-text-field-container\">\n\n      <label part=\"label\" on-click=\"focus\" id=\"[[_labelId]]\">[[label]]</label>\n\n      <div part=\"input-field\" id=\"[[_inputId]]\">\n\n        <slot name=\"prefix\"></slot>\n\n        <slot name=\"input\">\n          <input part=\"value\">\n        </slot>\n\n        <div part=\"clear-button\" id=\"clearButton\" role=\"button\" aria-label$=\"[[i18n.clear]]\"></div>\n        <slot name=\"suffix\"></slot>\n\n      </div>\n\n      <div part=\"error-message\" id=\"[[_errorId]]\" aria-live=\"assertive\" aria-hidden$=\"[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]\">[[errorMessage]]</div>\n\n    </div>\n"],["\n    <style include=\"vaadin-text-field-shared-styles\">\n      /* polymer-cli linter breaks with empty line */\n    </style>\n\n    <div class=\"vaadin-text-field-container\">\n\n      <label part=\"label\" on-click=\"focus\" id=\"[[_labelId]]\">[[label]]</label>\n\n      <div part=\"input-field\" id=\"[[_inputId]]\">\n\n        <slot name=\"prefix\"></slot>\n\n        <slot name=\"input\">\n          <input part=\"value\">\n        </slot>\n\n        <div part=\"clear-button\" id=\"clearButton\" role=\"button\" aria-label\\$=\"[[i18n.clear]]\"></div>\n        <slot name=\"suffix\"></slot>\n\n      </div>\n\n      <div part=\"error-message\" id=\"[[_errorId]]\" aria-live=\"assertive\" aria-hidden\\$=\"[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]\">[[errorMessage]]</div>\n\n    </div>\n"]);_templateObject14_7280bdd0bea211e98f44c3131ec74eb1=function _templateObject14_7280bdd0bea211e98f44c3131ec74eb1(){return data};return data}function _templateObject13_7280bdd0bea211e98f44c3131ec74eb1(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"vaadin-text-field-shared-styles\">\n      .vaadin-text-area-container {\n        flex: auto;\n        max-height: inherit; /* MSIE 11 */\n        min-height: inherit; /* MSIE 11 */\n      }\n\n      /* The label and the error message should neither grow nor shrink. */\n      [part=\"label\"],\n      [part=\"error-message\"] {\n        flex: none;\n      }\n\n      [part=\"input-field\"] {\n        overflow: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      [part=\"value\"] {\n        resize: none;\n      }\n\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(*) {\n        align-self: flex-start;\n      }\n\n      @keyframes vaadin-text-area-appear {\n        to {\n          opacity: 1;\n        }\n      }\n\n      :host {\n        animation: 1ms vaadin-text-area-appear;\n      }\n    </style>\n\n    <div class=\"vaadin-text-area-container\">\n\n      <label part=\"label\" on-click=\"focus\" id=\"[[_labelId]]\">[[label]]</label>\n\n      <div part=\"input-field\" id=\"[[_inputId]]\">\n\n        <slot name=\"prefix\"></slot>\n\n        <slot name=\"textarea\">\n          <textarea part=\"value\"></textarea>\n        </slot>\n\n        <div part=\"clear-button\" id=\"clearButton\" role=\"button\" aria-label$=\"[[i18n.clear]]\"></div>\n        <slot name=\"suffix\"></slot>\n\n      </div>\n\n      <div part=\"error-message\" id=\"[[_errorId]]\" aria-live=\"assertive\" aria-hidden$=\"[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]\">[[errorMessage]]</div>\n\n    </div>\n"],["\n    <style include=\"vaadin-text-field-shared-styles\">\n      .vaadin-text-area-container {\n        flex: auto;\n        max-height: inherit; /* MSIE 11 */\n        min-height: inherit; /* MSIE 11 */\n      }\n\n      /* The label and the error message should neither grow nor shrink. */\n      [part=\"label\"],\n      [part=\"error-message\"] {\n        flex: none;\n      }\n\n      [part=\"input-field\"] {\n        overflow: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      [part=\"value\"] {\n        resize: none;\n      }\n\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(*) {\n        align-self: flex-start;\n      }\n\n      @keyframes vaadin-text-area-appear {\n        to {\n          opacity: 1;\n        }\n      }\n\n      :host {\n        animation: 1ms vaadin-text-area-appear;\n      }\n    </style>\n\n    <div class=\"vaadin-text-area-container\">\n\n      <label part=\"label\" on-click=\"focus\" id=\"[[_labelId]]\">[[label]]</label>\n\n      <div part=\"input-field\" id=\"[[_inputId]]\">\n\n        <slot name=\"prefix\"></slot>\n\n        <slot name=\"textarea\">\n          <textarea part=\"value\"></textarea>\n        </slot>\n\n        <div part=\"clear-button\" id=\"clearButton\" role=\"button\" aria-label\\$=\"[[i18n.clear]]\"></div>\n        <slot name=\"suffix\"></slot>\n\n      </div>\n\n      <div part=\"error-message\" id=\"[[_errorId]]\" aria-live=\"assertive\" aria-hidden\\$=\"[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]\">[[errorMessage]]</div>\n\n    </div>\n"]);_templateObject13_7280bdd0bea211e98f44c3131ec74eb1=function _templateObject13_7280bdd0bea211e98f44c3131ec74eb1(){return data};return data}function _templateObject12_7280bdd0bea211e98f44c3131ec74eb1(){var data=babelHelpers.taggedTemplateLiteral(["<dom-module id=\"lumo-split-layout\" theme-for=\"vaadin-split-layout\">\n  <template>\n    <style>\n      [part=\"splitter\"] {\n        min-width: var(--lumo-space-s);\n        min-height: var(--lumo-space-s);\n        background-color: var(--lumo-contrast-5pct);\n        transition: 0.1s background-color;\n      }\n\n      [part=\"handle\"] {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: var(--lumo-size-m);\n        height: var(--lumo-size-m);\n      }\n\n      [part=\"handle\"]::after {\n        content: \"\";\n        display: block;\n        width: 4px;\n        height: 100%;\n        max-width: 100%;\n        max-height: 100%;\n        border-radius: var(--lumo-border-radius);\n        background-color: var(--lumo-contrast-30pct);\n        transition: 0.1s opacity, 0.1s background-color;\n      }\n\n      :host([orientation=\"vertical\"]) [part=\"handle\"]::after {\n        width: 100%;\n        height: 4px;\n      }\n\n      /* Hover style */\n\n      [part=\"splitter\"]:hover [part=\"handle\"]::after {\n        background-color: var(--lumo-contrast-40pct);\n      }\n\n      /* Disable hover for touch devices */\n      @media (pointer: coarse) {\n        [part=\"splitter\"]:hover [part=\"handle\"]::after {\n          background-color: var(--lumo-contrast-30pct);\n        }\n      }\n\n      /* Active style */\n\n      [part=\"splitter\"]:active [part=\"handle\"]::after {\n        background-color: var(--lumo-contrast-50pct);\n      }\n\n      /* Small/minimal */\n\n      :host([theme~=\"small\"]) > [part=\"splitter\"] {\n        border-left: 1px solid var(--lumo-contrast-10pct);\n        border-top: 1px solid var(--lumo-contrast-10pct);\n      }\n\n      :host([theme~=\"small\"]) > [part=\"splitter\"],\n      :host([theme~=\"minimal\"]) > [part=\"splitter\"] {\n        min-width: 0;\n        min-height: 0;\n        background-color: transparent;\n      }\n\n      :host([theme~=\"small\"]) > [part=\"splitter\"]::after,\n      :host([theme~=\"minimal\"]) > [part=\"splitter\"]::after {\n        content: \"\";\n        position: absolute;\n        top: -4px;\n        right: -4px;\n        bottom: -4px;\n        left: -4px;\n      }\n\n      :host([theme~=\"small\"]) > [part=\"splitter\"] > [part=\"handle\"]::after,\n      :host([theme~=\"minimal\"]) > [part=\"splitter\"] > [part=\"handle\"]::after {\n        opacity: 0;\n      }\n\n      :host([theme~=\"small\"]) > [part=\"splitter\"]:hover > [part=\"handle\"]::after,\n      :host([theme~=\"small\"]) > [part=\"splitter\"]:active > [part=\"handle\"]::after,\n      :host([theme~=\"minimal\"]) > [part=\"splitter\"]:hover > [part=\"handle\"]::after,\n      :host([theme~=\"minimal\"]) > [part=\"splitter\"]:active > [part=\"handle\"]::after {\n        opacity: 1;\n      }\n    </style>\n  </template>\n</dom-module>"]);_templateObject12_7280bdd0bea211e98f44c3131ec74eb1=function _templateObject12_7280bdd0bea211e98f44c3131ec74eb1(){return data};return data}function _templateObject11_7280bdd0bea211e98f44c3131ec74eb1(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: flex;\n        overflow: hidden !important;\n        transform: translateZ(0);\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host([orientation=\"vertical\"]) {\n        flex-direction: column;\n      }\n\n      :host ::slotted(*) {\n        flex: 1 1 auto;\n        overflow: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      [part=\"splitter\"] {\n        flex: none;\n        position: relative;\n        z-index: 1;\n        overflow: visible;\n        min-width: 8px;\n        min-height: 8px;\n      }\n\n      :host(:not([orientation=\"vertical\"])) > [part=\"splitter\"] {\n        cursor: ew-resize;\n      }\n\n      :host([orientation=\"vertical\"]) > [part=\"splitter\"] {\n        cursor: ns-resize;\n      }\n\n      [part=\"handle\"] {\n        width: 40px;\n        height: 40px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate3d(-50%, -50%, 0);\n      }\n    </style>\n    <slot id=\"primary\" name=\"primary\"></slot>\n    <div part=\"splitter\" id=\"splitter\" on-track=\"_onHandleTrack\" on-down=\"_setPointerEventsNone\" on-up=\"_restorePointerEvents\">\n      <div part=\"handle\"></div>\n    </div>\n    <slot id=\"secondary\" name=\"secondary\"></slot>\n\n    <div hidden=\"\">\n      <!-- Workaround to fix a Shady style scoping issue caused by dynamic slot naming of the child elements (primary/secondary) -->\n      <slot></slot>\n    </div>\n"]);_templateObject11_7280bdd0bea211e98f44c3131ec74eb1=function _templateObject11_7280bdd0bea211e98f44c3131ec74eb1(){return data};return data}function _templateObject10_7280bdd0bea211e98f44c3131ec74eb1(){var data=babelHelpers.taggedTemplateLiteral(["<dom-module id=\"lumo-grid\" theme-for=\"vaadin-grid\">\n  <template>\n    <style>\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        line-height: var(--lumo-line-height-s);\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n        box-sizing: border-box;\n        -webkit-text-size-adjust: 100%;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n\n        /* For internal use only */\n        --_lumo-grid-border-color: var(--lumo-contrast-20pct);\n        --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);\n        --_lumo-grid-border-width: 1px;\n        --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);\n      }\n\n      /* No (outer) border */\n\n      :host(:not([theme~=\"no-border\"])) {\n        border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);\n      }\n\n      /* Cell styles */\n\n      [part~=\"cell\"] {\n        min-height: var(--lumo-size-m);\n        background-color: var(--lumo-base-color);\n      }\n\n      [part~=\"cell\"] ::slotted(vaadin-grid-cell-content) {\n        cursor: default;\n        padding: var(--lumo-space-xs) var(--lumo-space-m);\n      }\n\n      /* Apply row borders by default and introduce the \"no-row-borders\" variant */\n      :host(:not([theme~=\"no-row-borders\"])) [part~=\"cell\"]:not([part~=\"details-cell\"]) {\n        border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);\n      }\n\n      /* Hide first body row top border */\n      :host(:not([theme~=\"no-row-borders\"])) [part=\"row\"][first] [part~=\"cell\"]:not([part~=\"details-cell\"]) {\n        border-top: 0;\n        min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));\n      }\n\n      /* Focus-ring */\n\n      [part~=\"cell\"]:focus {\n        outline: none;\n      }\n\n      :host([navigating]) [part~=\"cell\"]:focus::before {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        pointer-events: none;\n        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      /* Drag and Drop styles */\n      :host([dragover])::after {\n        content: \"\";\n        position: absolute;\n        z-index: 100;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        pointer-events: none;\n        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      [part~=\"row\"][dragover] {\n        z-index: 100 !important;\n      }\n\n      [part~=\"row\"][dragover] [part~=\"cell\"] {\n        overflow: visible;\n      }\n\n      [part~=\"row\"][dragover] [part~=\"cell\"]::after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        height: calc(var(--_lumo-grid-border-width) + 2px);\n        pointer-events: none;\n        background: var(--lumo-primary-color-50pct);\n      }\n\n      :host([theme~=\"no-row-borders\"]) [dragover] [part~=\"cell\"]::after {\n        height: 2px;\n      }\n\n      [part~=\"row\"][dragover=\"below\"] [part~=\"cell\"]::after {\n        top: 100%;\n        bottom: auto;\n        margin-top: -1px;\n      }\n\n      [part~=\"row\"][dragover=\"above\"] [part~=\"cell\"]::after {\n        top: auto;\n        bottom: 100%;\n        margin-bottom: -1px;\n      }\n\n      [part~=\"row\"][details-opened][dragover=\"below\"] [part~=\"cell\"]:not([part~=\"details-cell\"])::after,\n      [part~=\"row\"][details-opened][dragover=\"above\"] [part~=\"details-cell\"]::after {\n        display: none;\n      }\n\n      [part~=\"row\"][dragover][dragover=\"on-top\"] [part~=\"cell\"]::after {\n        height: 100%;\n      }\n\n      [part~=\"row\"][dragstart] {\n        /* Add bottom-space to the row so the drag number doesn't get clipped. Needed for IE/Edge */\n        border-bottom: 100px solid transparent;\n        z-index: 100 !important;\n        opacity: 0.9;\n      }\n\n      [part~=\"row\"][dragstart] [part~=\"cell\"] {\n        border: none !important;\n        box-shadow: none !important;\n      }\n\n      [part~=\"row\"][dragstart] [part~=\"cell\"][last-column] {\n        border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;\n      }\n\n      [part~=\"row\"][dragstart] [part~=\"cell\"][first-column] {\n        border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);\n      }\n\n      [ios] [part~=\"row\"][dragstart] [part~=\"cell\"] {\n        background: var(--lumo-primary-color-50pct);\n      }\n\n      #scroller:not([ios]) [part~=\"row\"][dragstart]:not([dragstart=\"\"])::after {\n        display: block;\n        position: absolute;\n        left: var(--_grid-drag-start-x);\n        top: var(--_grid-drag-start-y);\n        z-index: 100;\n        content: attr(dragstart);\n        align-items: center;\n        justify-content: center;\n        box-sizing: border-box;\n        padding: calc(var(--lumo-space-xs) * 0.8);\n        color: var(--lumo-error-contrast-color);\n        background-color: var(--lumo-error-color);\n        border-radius: var(--lumo-border-radius-m);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-xxs);\n        line-height: 1;\n        font-weight: 500;\n        text-transform: initial;\n        letter-spacing: initial;\n        min-width: calc(var(--lumo-size-s) * 0.7);\n        text-align: center;\n      }\n\n      /* Headers and footers */\n\n      [part~=\"header-cell\"] ::slotted(vaadin-grid-cell-content),\n      [part~=\"footer-cell\"] ::slotted(vaadin-grid-cell-content),\n      [part~=\"reorder-ghost\"] {\n        font-size: var(--lumo-font-size-s);\n        font-weight: 500;\n      }\n\n      [part~=\"footer-cell\"] ::slotted(vaadin-grid-cell-content) {\n        font-weight: 400;\n      }\n\n      [part=\"row\"]:only-child [part~=\"header-cell\"] {\n        min-height: var(--lumo-size-xl);\n      }\n\n      /* Header borders */\n\n      /* Hide first header row top border */\n      :host(:not([theme~=\"no-row-borders\"])) [part=\"row\"]:first-child [part~=\"header-cell\"] {\n        border-top: 0;\n      }\n\n      [part=\"row\"]:last-child [part~=\"header-cell\"] {\n        border-bottom: var(--_lumo-grid-border-width) solid transparent;\n      }\n\n      :host(:not([theme~=\"no-row-borders\"])) [part=\"row\"]:last-child [part~=\"header-cell\"] {\n        border-bottom-color: var(--_lumo-grid-secondary-border-color);\n      }\n\n      /* Overflow uses a stronger border color */\n      :host([overflow~=\"top\"]) [part=\"row\"]:last-child [part~=\"header-cell\"] {\n        border-bottom-color: var(--_lumo-grid-border-color);\n      }\n\n      /* Footer borders */\n\n      [part=\"row\"]:first-child [part~=\"footer-cell\"] {\n        border-top: var(--_lumo-grid-border-width) solid transparent;\n      }\n\n      :host(:not([theme~=\"no-row-borders\"])) [part=\"row\"]:first-child [part~=\"footer-cell\"] {\n        border-top-color: var(--_lumo-grid-secondary-border-color);\n      }\n\n      /* Overflow uses a stronger border color */\n      :host([overflow~=\"bottom\"]) [part=\"row\"]:first-child [part~=\"footer-cell\"] {\n        border-top-color: var(--_lumo-grid-border-color);\n      }\n\n      /* Column reordering */\n\n      :host([reordering]) [part~=\"cell\"] {\n        background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);\n      }\n\n      :host([reordering]) [part~=\"cell\"][reorder-status=\"allowed\"] {\n        background: var(--lumo-base-color);\n      }\n\n      :host([reordering]) [part~=\"cell\"][reorder-status=\"dragging\"] {\n        background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);\n      }\n\n      [part~=\"reorder-ghost\"] {\n        opacity: 0.85;\n        box-shadow: var(--lumo-box-shadow-s);\n        /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */\n        padding: var(--lumo-space-s) var(--lumo-space-m) !important;\n      }\n\n      /* Column resizing */\n\n      [part=\"resize-handle\"] {\n        width: 3px;\n        background-color: var(--lumo-primary-color-50pct);\n        opacity: 0;\n        transition: opacity 0.2s;\n      }\n\n      :host(:not([reordering])) *:not([column-resizing]) [part~=\"cell\"]:hover [part=\"resize-handle\"],\n      [part=\"resize-handle\"]:active {\n        opacity: 1;\n        transition-delay: 0.15s;\n      }\n\n      /* Column borders */\n\n      :host([theme~=\"column-borders\"]) [part~=\"cell\"]:not([last-column]):not([part~=\"details-cell\"]) {\n        border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);\n      }\n\n      /* Frozen columns */\n\n      [last-frozen] {\n        border-right: var(--_lumo-grid-border-width) solid transparent;\n        overflow: hidden;\n      }\n\n      :host([overflow~=\"left\"]) [part~=\"cell\"][last-frozen]:not([part~=\"details-cell\"]) {\n        border-right-color: var(--_lumo-grid-border-color);\n      }\n\n      /* Row stripes */\n\n      :host([theme~=\"row-stripes\"]) [part~=\"row\"]:not([odd]) [part~=\"body-cell\"],\n      :host([theme~=\"row-stripes\"]) [part~=\"row\"]:not([odd]) [part~=\"details-cell\"] {\n        background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));\n        background-repeat: repeat-x;\n      }\n\n      /* Selected row */\n\n      /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */\n      :host(:not([reordering])) [part~=\"row\"][selected] {\n        z-index: 1;\n      }\n\n      :host(:not([reordering])) [part~=\"row\"][selected] [part~=\"body-cell\"]:not([part~=\"details-cell\"]) {\n        background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));\n        background-repeat: repeat;\n      }\n\n      /* Cover the border of an unselected row */\n      :host(:not([theme~=\"no-row-borders\"])) [part~=\"row\"][selected] [part~=\"cell\"]:not([part~=\"details-cell\"]) {\n        box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);\n      }\n\n      /* Compact */\n\n      :host([theme~=\"compact\"]) [part=\"row\"]:only-child [part~=\"header-cell\"] {\n        min-height: var(--lumo-size-m);\n      }\n\n      :host([theme~=\"compact\"]) [part~=\"cell\"] {\n        min-height: var(--lumo-size-s);\n      }\n\n      :host([theme~=\"compact\"]) [part=\"row\"][first] [part~=\"cell\"]:not([part~=\"details-cell\"]) {\n        min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));\n      }\n\n      :host([theme~=\"compact\"]) [part~=\"cell\"] ::slotted(vaadin-grid-cell-content) {\n        padding: var(--lumo-space-xs) var(--lumo-space-s);\n      }\n\n      /* Wrap cell contents */\n\n      :host([theme~=\"wrap-cell-content\"]) [part~=\"cell\"] ::slotted(vaadin-grid-cell-content) {\n        white-space: normal;\n      }\n    </style>\n  </template>\n</dom-module><dom-module theme-for=\"vaadin-checkbox\" id=\"vaadin-grid-select-all-checkbox-lumo\">\n  <template>\n    <style>\n      :host(.vaadin-grid-select-all-checkbox) {\n        font-size: var(--lumo-font-size-m);\n      }\n   </style>\n  </template>\n</dom-module>"]);_templateObject10_7280bdd0bea211e98f44c3131ec74eb1=function _templateObject10_7280bdd0bea211e98f44c3131ec74eb1(){return data};return data}function _templateObject9_7280bdd0bea211e98f44c3131ec74eb1(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"vaadin-grid-styles\"></style>\n\n    <div id=\"scroller\" no-scrollbars$=\"[[!_scrollbarWidth]]\" wheel-scrolling$=\"[[_wheelScrolling]]\" safari$=\"[[_safari]]\" ios$=\"[[_ios]]\" loading$=\"[[loading]]\" edge$=\"[[_edge]]\" firefox$=\"[[_firefox]]\" ie$=\"[[_ie]]\" column-reordering-allowed$=\"[[columnReorderingAllowed]]\">\n\n      <table id=\"table\" role=\"grid\" aria-multiselectable=\"true\" tabindex=\"0\">\n        <caption id=\"fixedsizer\" class=\"sizer\" part=\"row\"></caption>\n        <thead id=\"header\" role=\"rowgroup\"></thead>\n        <tbody id=\"items\" role=\"rowgroup\"></tbody>\n        <tfoot id=\"footer\" role=\"rowgroup\"></tfoot>\n      </table>\n\n      <div part=\"reorder-ghost\"></div>\n      <vaadin-grid-outer-scroller id=\"outerscroller\" _touch-device=\"[[_touchDevice]]\" scroll-target=\"[[scrollTarget]]\" scroll-handler=\"[[_this]]\" no-scrollbars=\"[[!_scrollbarWidth]]\">\n        <div id=\"outersizer\" class=\"sizer\" part=\"row\"></div>\n      </vaadin-grid-outer-scroller>\n    </div>\n\n    <!-- The template needs at least one slot or else shady doesn't distribute -->\n    <slot name=\"nodistribute\"></slot>\n\n    <div id=\"focusexit\" tabindex=\"0\"></div>\n"],["\n    <style include=\"vaadin-grid-styles\"></style>\n\n    <div id=\"scroller\" no-scrollbars\\$=\"[[!_scrollbarWidth]]\" wheel-scrolling\\$=\"[[_wheelScrolling]]\" safari\\$=\"[[_safari]]\" ios\\$=\"[[_ios]]\" loading\\$=\"[[loading]]\" edge\\$=\"[[_edge]]\" firefox\\$=\"[[_firefox]]\" ie\\$=\"[[_ie]]\" column-reordering-allowed\\$=\"[[columnReorderingAllowed]]\">\n\n      <table id=\"table\" role=\"grid\" aria-multiselectable=\"true\" tabindex=\"0\">\n        <caption id=\"fixedsizer\" class=\"sizer\" part=\"row\"></caption>\n        <thead id=\"header\" role=\"rowgroup\"></thead>\n        <tbody id=\"items\" role=\"rowgroup\"></tbody>\n        <tfoot id=\"footer\" role=\"rowgroup\"></tfoot>\n      </table>\n\n      <div part=\"reorder-ghost\"></div>\n      <vaadin-grid-outer-scroller id=\"outerscroller\" _touch-device=\"[[_touchDevice]]\" scroll-target=\"[[scrollTarget]]\" scroll-handler=\"[[_this]]\" no-scrollbars=\"[[!_scrollbarWidth]]\">\n        <div id=\"outersizer\" class=\"sizer\" part=\"row\"></div>\n      </vaadin-grid-outer-scroller>\n    </div>\n\n    <!-- The template needs at least one slot or else shady doesn't distribute -->\n    <slot name=\"nodistribute\"></slot>\n\n    <div id=\"focusexit\" tabindex=\"0\"></div>\n"]);_templateObject9_7280bdd0bea211e98f44c3131ec74eb1=function _templateObject9_7280bdd0bea211e98f44c3131ec74eb1(){return data};return data}function _templateObject8_7280bdd0bea211e98f44c3131ec74eb1(){var data=babelHelpers.taggedTemplateLiteral(["\n  <style>\n    @keyframes vaadin-grid-appear {\n      to {\n        opacity: 1;\n      }\n    }\n\n    :host {\n      display: block;\n      animation: 1ms vaadin-grid-appear;\n      height: 400px;\n      flex: 1 1 auto;\n      align-self: stretch;\n      position: relative;\n    }\n\n    :host([hidden]) {\n      display: none !important;\n    }\n\n    #scroller {\n      display: block;\n      transform: translateY(0);\n      width: auto;\n      height: auto;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n    }\n\n    :host([height-by-rows]) {\n      height: auto;\n      align-self: flex-start;\n      flex-grow: 0;\n      width: 100%;\n    }\n\n    :host([height-by-rows]) #scroller {\n      width: 100%;\n      height: 100%;\n      position: relative;\n    }\n\n    #table {\n      display: block;\n      width: 100%;\n      height: 100%;\n      overflow: auto;\n      z-index: -2;\n      position: relative;\n      outline: none;\n    }\n\n    #header {\n      display: block;\n      position: absolute;\n      top: 0;\n      width: 100%;\n    }\n\n    th {\n      text-align: inherit;\n    }\n\n    /* Safari doesn't work with \"inherit\" */\n    [safari] th {\n      text-align: initial;\n    }\n\n    #footer {\n      display: block;\n      position: absolute;\n      bottom: 0;\n      width: 100%;\n    }\n\n    #items {\n      display: block;\n      width: 100%;\n      position: relative;\n      z-index: -1;\n    }\n\n    #items,\n    #outersizer,\n    #fixedsizer {\n      border-top: 0 solid transparent;\n      border-bottom: 0 solid transparent;\n    }\n\n    [part~=\"row\"] {\n      display: flex;\n      width: 100%;\n      box-sizing: border-box;\n      margin: 0;\n    }\n\n    [part~=\"row\"][loading] [part~=\"body-cell\"] ::slotted(vaadin-grid-cell-content) {\n      opacity: 0;\n    }\n\n    #items [part~=\"row\"] {\n      position: absolute;\n    }\n\n    #items [part~=\"row\"]:empty {\n      height: 1em;\n    }\n\n    [part~=\"cell\"]:not([part~=\"details-cell\"]) {\n      flex-shrink: 0;\n      flex-grow: 1;\n      box-sizing: border-box;\n      display: flex;\n      width: 100%;\n      position: relative;\n      align-items: center;\n      padding: 0;\n      white-space: nowrap;\n    }\n\n    [part~=\"details-cell\"] {\n      position: absolute;\n      bottom: 0;\n      width: 100%;\n      box-sizing: border-box;\n      padding: 0;\n    }\n\n    [part~=\"cell\"] ::slotted(vaadin-grid-cell-content) {\n      display: block;\n      width: 100%;\n      box-sizing: border-box;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    [hidden] {\n      display: none !important;\n    }\n\n    [frozen] {\n      z-index: 2;\n      will-change: transform;\n    }\n\n    #outerscroller {\n      /* Needed (at least) for Android Chrome */\n      z-index: 0;\n    }\n\n    #scroller:not([safari]) #outerscroller {\n      /* Needed for Android Chrome (#1020). Can't be applied to Safari\n      since it would re-introduce the sub-pixel overflow bug (#853) */\n      will-change: transform;\n    }\n\n    [no-scrollbars]:not([safari]):not([firefox]) #outerscroller,\n    [no-scrollbars][safari] #table,\n    [no-scrollbars][firefox] #table {\n      overflow: hidden;\n    }\n\n    [no-scrollbars]:not([safari]):not([firefox]) #outerscroller {\n      pointer-events: none;\n    }\n\n    /* Reordering styles */\n    :host([reordering]) [part~=\"cell\"] ::slotted(vaadin-grid-cell-content),\n    :host([reordering]) [part~=\"resize-handle\"],\n    #scroller[no-content-pointer-events] [part~=\"cell\"] ::slotted(vaadin-grid-cell-content) {\n      pointer-events: none;\n    }\n\n    [part~=\"reorder-ghost\"] {\n      visibility: hidden;\n      position: fixed;\n      pointer-events: none;\n      opacity: 0.5;\n\n      /* Prevent overflowing the grid in Firefox */\n      top: 0;\n      left: 0;\n    }\n\n    :host([reordering]) {\n      -moz-user-select: none;\n      -webkit-user-select: none;\n      user-select: none;\n    }\n\n    #scroller[ie][column-reordering-allowed] [part~=\"header-cell\"] {\n      -ms-user-select: none;\n    }\n\n    :host([reordering]) #outerscroller {\n      -webkit-overflow-scrolling: auto !important;\n    }\n\n    /* Resizing styles */\n    [part~=\"resize-handle\"] {\n      position: absolute;\n      top: 0;\n      right: 0;\n      height: 100%;\n      cursor: col-resize;\n      z-index: 1;\n    }\n\n    [part~=\"resize-handle\"]::before {\n      position: absolute;\n      content: \"\";\n      height: 100%;\n      width: 35px;\n      transform: translateX(-50%);\n    }\n\n    [last-column] [part~=\"resize-handle\"]::before,\n    [last-frozen] [part~=\"resize-handle\"]::before {\n      width: 18px;\n      transform: none;\n      right: 0;\n    }\n\n    #scroller[column-resizing] {\n      -ms-user-select: none;\n      -moz-user-select: none;\n      -webkit-user-select: none;\n      user-select: none;\n    }\n\n    /* Sizer styles */\n    .sizer {\n      display: flex;\n      position: relative;\n      width: 100%;\n      visibility: hidden;\n    }\n\n    .sizer [part~=\"details-cell\"] {\n      display: none !important;\n    }\n\n    .sizer [part~=\"cell\"][hidden] {\n      display: none !important;\n    }\n\n    .sizer [part~=\"cell\"] {\n      display: block;\n      flex-shrink: 0;\n      line-height: 0;\n      margin-top: -1em;\n      height: 0 !important;\n      min-height: 0 !important;\n      max-height: 0 !important;\n      padding: 0 !important;\n    }\n\n    .sizer [part~=\"cell\"]::before {\n      content: \"-\";\n    }\n\n    .sizer [part~=\"cell\"] ::slotted(vaadin-grid-cell-content) {\n      display: none !important;\n    }\n\n    /* Fixed mode (Tablet Edge) */\n    #fixedsizer {\n      position: absolute;\n    }\n\n    :not([edge][no-scrollbars]) #fixedsizer {\n      display: none;\n    }\n\n    [edge][no-scrollbars] {\n      /* Any value other than \u2018none\u2019 for the transform results in the creation of both a stacking context and\n      a containing block. The object acts as a containing block for fixed positioned descendants. */\n      transform: translateZ(0);\n      overflow: hidden;\n    }\n\n    [edge][no-scrollbars] #header,\n    [edge][no-scrollbars] #footer {\n      position: fixed;\n    }\n\n    [edge][no-scrollbars] #items {\n      position: fixed;\n      width: 100%;\n      will-change: transform;\n    }\n  </style>\n"]);_templateObject8_7280bdd0bea211e98f44c3131ec74eb1=function _templateObject8_7280bdd0bea211e98f44c3131ec74eb1(){return data};return data}function _templateObject7_7280bdd0bea211e98f44c3131ec74eb1(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        top: 0;\n        box-sizing: border-box;\n        overflow: auto;\n      }\n\n      :host([passthrough]) {\n        pointer-events: none;\n      }\n    </style>\n\n    <slot></slot>\n"]);_templateObject7_7280bdd0bea211e98f44c3131ec74eb1=function _templateObject7_7280bdd0bea211e98f44c3131ec74eb1(){return data};return data}function _templateObject6_7280bdd0bea211e98f44c3131ec74eb1(){var data=babelHelpers.taggedTemplateLiteral(["<dom-module id=\"lumo-form-layout\" theme-for=\"vaadin-form-layout\">\n  <template>\n    <style>\n      :host {\n        --vaadin-form-layout-column-spacing: var(--lumo-space-l);\n      }\n    </style>\n  </template>\n</dom-module>"]);_templateObject6_7280bdd0bea211e98f44c3131ec74eb1=function _templateObject6_7280bdd0bea211e98f44c3131ec74eb1(){return data};return data}function _templateObject5_7280bdd0bea211e98f44c3131ec74eb1(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        max-width: 100%;\n        animation: 1ms vaadin-form-layout-appear;\n        /* CSS API for host */\n        --vaadin-form-layout-column-spacing: 2em; /* (default) */\n        align-self: stretch;\n      }\n\n      @keyframes vaadin-form-layout-appear {\n        to {\n          opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */\n        }\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      #layout {\n        display: flex;\n\n        align-items: baseline; /* default `stretch` is not appropriate */\n\n        flex-wrap: wrap; /* the items should wrap */\n      }\n\n      #layout ::slotted(*) {\n        /* Items should neither grow nor shrink. */\n        flex-grow: 0;\n        flex-shrink: 0;\n\n        /* Margins make spacing between the columns */\n        margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));\n        margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));\n      }\n\n      #layout ::slotted(br) {\n        display: none;\n      }\n    </style>\n    <div id=\"layout\">\n      <slot id=\"slot\"></slot>\n    </div>\n"],["\n    <style>\n      :host {\n        display: block;\n        max-width: 100%;\n        animation: 1ms vaadin-form-layout-appear;\n        /* CSS API for host */\n        --vaadin-form-layout-column-spacing: 2em; /* (default) */\n        align-self: stretch;\n      }\n\n      @keyframes vaadin-form-layout-appear {\n        to {\n          opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */\n        }\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      #layout {\n        display: flex;\n\n        align-items: baseline; /* default \\`stretch\\` is not appropriate */\n\n        flex-wrap: wrap; /* the items should wrap */\n      }\n\n      #layout ::slotted(*) {\n        /* Items should neither grow nor shrink. */\n        flex-grow: 0;\n        flex-shrink: 0;\n\n        /* Margins make spacing between the columns */\n        margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));\n        margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));\n      }\n\n      #layout ::slotted(br) {\n        display: none;\n      }\n    </style>\n    <div id=\"layout\">\n      <slot id=\"slot\"></slot>\n    </div>\n"]);_templateObject5_7280bdd0bea211e98f44c3131ec74eb1=function _templateObject5_7280bdd0bea211e98f44c3131ec74eb1(){return data};return data}function _templateObject4_7280bdd0bea211e98f44c3131ec74eb1(){var data=babelHelpers.taggedTemplateLiteral(["<dom-module id=\"lumo-checkbox\" theme-for=\"vaadin-checkbox\">\n  <template>\n    <style include=\"lumo-checkbox-style lumo-checkbox-effects\">\n      /* IE11 only */\n      ::-ms-backdrop,\n      [part=\"checkbox\"] {\n        line-height: 1;\n      }\n    </style>\n  </template>\n</dom-module><dom-module id=\"lumo-checkbox-style\">\n  <template>\n    <style>\n      :host {\n        -webkit-tap-highlight-color: transparent;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        cursor: default;\n        outline: none;\n      }\n\n      [part=\"label\"]:not([empty]) {\n        margin: 0.1875em 0.875em 0.1875em 0.375em;\n      }\n\n      [part=\"checkbox\"] {\n        width: calc(1em + 2px);\n        height: calc(1em + 2px);\n        margin: 0.1875em;\n        position: relative;\n        border-radius: var(--lumo-border-radius);\n        background-color: var(--lumo-contrast-20pct);\n        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;\n        pointer-events: none;\n        line-height: 1.2;\n      }\n\n      :host([indeterminate]) [part=\"checkbox\"],\n      :host([checked]) [part=\"checkbox\"] {\n        background-color: var(--lumo-primary-color);\n      }\n\n      /* Needed to align the checkbox nicely on the baseline */\n      [part=\"checkbox\"]::before {\n        content: \"\\2003\";\n      }\n\n      /* Checkmark */\n      [part=\"checkbox\"]::after {\n        content: \"\";\n        display: inline-block;\n        width: 0;\n        height: 0;\n        border: 0 solid var(--lumo-primary-contrast-color);\n        border-width: 0.1875em 0 0 0.1875em;\n        box-sizing: border-box;\n        transform-origin: 0 0;\n        position: absolute;\n        top: 0.8125em;\n        left: 0.5em;\n        transform: scale(0.55) rotate(-135deg);\n        opacity: 0;\n      }\n\n      :host([checked]) [part=\"checkbox\"]::after {\n        opacity: 1;\n        width: 0.625em;\n        height: 1.0625em;\n      }\n\n      /* Indeterminate checkmark */\n\n      :host([indeterminate]) [part=\"checkbox\"]::after {\n        transform: none;\n        opacity: 1;\n        top: 45%;\n        height: 10%;\n        left: 22%;\n        right: 22%;\n        width: auto;\n        border: 0;\n        background-color: var(--lumo-primary-contrast-color);\n        transition: opacity 0.25s;\n      }\n\n      /* Focus ring */\n\n      :host([focus-ring]) [part=\"checkbox\"] {\n        box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);\n      }\n\n      /* Disabled */\n\n      :host([disabled]) {\n        pointer-events: none;\n        color: var(--lumo-disabled-text-color);\n      }\n\n      :host([disabled]) [part=\"label\"] ::slotted(*) {\n        color: inherit;\n      }\n\n      :host([disabled]) [part=\"checkbox\"] {\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      :host([disabled]) [part=\"checkbox\"]::after {\n        border-color: var(--lumo-contrast-30pct);\n      }\n\n      :host([indeterminate][disabled]) [part=\"checkbox\"]::after {\n        background-color: var(--lumo-contrast-30pct);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id=\"lumo-checkbox-effects\">\n  <template>\n    <style>\n      /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */\n      :host(:hover) [part=\"checkbox\"]::after {\n        transition: width 0.1s, height 0.25s;\n      }\n\n      /* Used for activation \"halo\" */\n      [part=\"checkbox\"]::before {\n        color: transparent;\n        display: inline-block;\n        width: 100%;\n        height: 100%;\n        border-radius: inherit;\n        background-color: inherit;\n        transform: scale(1.4);\n        opacity: 0;\n        transition: transform 0.1s, opacity 0.8s;\n      }\n\n      /* Hover */\n\n      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part=\"checkbox\"] {\n        background-color: var(--lumo-contrast-30pct);\n      }\n\n      /* Disable hover for touch devices */\n      @media (pointer: coarse) {\n        :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part=\"checkbox\"] {\n          background-color: var(--lumo-contrast-20pct);\n        }\n      }\n\n      /* Active */\n\n      :host([active]) [part=\"checkbox\"] {\n        transform: scale(0.9);\n        transition-duration: 0.05s;\n      }\n\n      :host([active][checked]) [part=\"checkbox\"] {\n        transform: scale(1.1);\n      }\n\n      :host([active]:not([checked])) [part=\"checkbox\"]::before {\n        transition-duration: 0.01s, 0.01s;\n        transform: scale(0);\n        opacity: 0.4;\n      }\n    </style>\n  </template>\n</dom-module>"],["<dom-module id=\"lumo-checkbox\" theme-for=\"vaadin-checkbox\">\n  <template>\n    <style include=\"lumo-checkbox-style lumo-checkbox-effects\">\n      /* IE11 only */\n      ::-ms-backdrop,\n      [part=\"checkbox\"] {\n        line-height: 1;\n      }\n    </style>\n  </template>\n</dom-module><dom-module id=\"lumo-checkbox-style\">\n  <template>\n    <style>\n      :host {\n        -webkit-tap-highlight-color: transparent;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        cursor: default;\n        outline: none;\n      }\n\n      [part=\"label\"]:not([empty]) {\n        margin: 0.1875em 0.875em 0.1875em 0.375em;\n      }\n\n      [part=\"checkbox\"] {\n        width: calc(1em + 2px);\n        height: calc(1em + 2px);\n        margin: 0.1875em;\n        position: relative;\n        border-radius: var(--lumo-border-radius);\n        background-color: var(--lumo-contrast-20pct);\n        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;\n        pointer-events: none;\n        line-height: 1.2;\n      }\n\n      :host([indeterminate]) [part=\"checkbox\"],\n      :host([checked]) [part=\"checkbox\"] {\n        background-color: var(--lumo-primary-color);\n      }\n\n      /* Needed to align the checkbox nicely on the baseline */\n      [part=\"checkbox\"]::before {\n        content: \"\\\\2003\";\n      }\n\n      /* Checkmark */\n      [part=\"checkbox\"]::after {\n        content: \"\";\n        display: inline-block;\n        width: 0;\n        height: 0;\n        border: 0 solid var(--lumo-primary-contrast-color);\n        border-width: 0.1875em 0 0 0.1875em;\n        box-sizing: border-box;\n        transform-origin: 0 0;\n        position: absolute;\n        top: 0.8125em;\n        left: 0.5em;\n        transform: scale(0.55) rotate(-135deg);\n        opacity: 0;\n      }\n\n      :host([checked]) [part=\"checkbox\"]::after {\n        opacity: 1;\n        width: 0.625em;\n        height: 1.0625em;\n      }\n\n      /* Indeterminate checkmark */\n\n      :host([indeterminate]) [part=\"checkbox\"]::after {\n        transform: none;\n        opacity: 1;\n        top: 45%;\n        height: 10%;\n        left: 22%;\n        right: 22%;\n        width: auto;\n        border: 0;\n        background-color: var(--lumo-primary-contrast-color);\n        transition: opacity 0.25s;\n      }\n\n      /* Focus ring */\n\n      :host([focus-ring]) [part=\"checkbox\"] {\n        box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);\n      }\n\n      /* Disabled */\n\n      :host([disabled]) {\n        pointer-events: none;\n        color: var(--lumo-disabled-text-color);\n      }\n\n      :host([disabled]) [part=\"label\"] ::slotted(*) {\n        color: inherit;\n      }\n\n      :host([disabled]) [part=\"checkbox\"] {\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      :host([disabled]) [part=\"checkbox\"]::after {\n        border-color: var(--lumo-contrast-30pct);\n      }\n\n      :host([indeterminate][disabled]) [part=\"checkbox\"]::after {\n        background-color: var(--lumo-contrast-30pct);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id=\"lumo-checkbox-effects\">\n  <template>\n    <style>\n      /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */\n      :host(:hover) [part=\"checkbox\"]::after {\n        transition: width 0.1s, height 0.25s;\n      }\n\n      /* Used for activation \"halo\" */\n      [part=\"checkbox\"]::before {\n        color: transparent;\n        display: inline-block;\n        width: 100%;\n        height: 100%;\n        border-radius: inherit;\n        background-color: inherit;\n        transform: scale(1.4);\n        opacity: 0;\n        transition: transform 0.1s, opacity 0.8s;\n      }\n\n      /* Hover */\n\n      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part=\"checkbox\"] {\n        background-color: var(--lumo-contrast-30pct);\n      }\n\n      /* Disable hover for touch devices */\n      @media (pointer: coarse) {\n        :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part=\"checkbox\"] {\n          background-color: var(--lumo-contrast-20pct);\n        }\n      }\n\n      /* Active */\n\n      :host([active]) [part=\"checkbox\"] {\n        transform: scale(0.9);\n        transition-duration: 0.05s;\n      }\n\n      :host([active][checked]) [part=\"checkbox\"] {\n        transform: scale(1.1);\n      }\n\n      :host([active]:not([checked])) [part=\"checkbox\"]::before {\n        transition-duration: 0.01s, 0.01s;\n        transform: scale(0);\n        opacity: 0.4;\n      }\n    </style>\n  </template>\n</dom-module>"]);_templateObject4_7280bdd0bea211e98f44c3131ec74eb1=function _templateObject4_7280bdd0bea211e98f44c3131ec74eb1(){return data};return data}function _templateObject3_7280bdd0bea211e98f44c3131ec74eb1(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      label {\n        display: inline-flex;\n        align-items: baseline;\n        outline: none;\n      }\n\n      [part=\"checkbox\"] {\n        position: relative;\n        display: inline-block;\n        flex: none;\n      }\n\n      input[type=\"checkbox\"] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: inherit;\n        margin: 0;\n      }\n\n      :host([disabled]) {\n        -webkit-tap-highlight-color: transparent;\n      }\n    </style>\n\n    <label>\n      <span part=\"checkbox\">\n        <input type=\"checkbox\" checked=\"{{checked::change}}\" disabled$=\"[[disabled]]\" indeterminate=\"{{indeterminate::change}}\" role=\"presentation\" tabindex=\"-1\">\n      </span>\n\n      <span part=\"label\">\n        <slot></slot>\n      </span>\n    </label>\n"],["\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      label {\n        display: inline-flex;\n        align-items: baseline;\n        outline: none;\n      }\n\n      [part=\"checkbox\"] {\n        position: relative;\n        display: inline-block;\n        flex: none;\n      }\n\n      input[type=\"checkbox\"] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: inherit;\n        margin: 0;\n      }\n\n      :host([disabled]) {\n        -webkit-tap-highlight-color: transparent;\n      }\n    </style>\n\n    <label>\n      <span part=\"checkbox\">\n        <input type=\"checkbox\" checked=\"{{checked::change}}\" disabled\\$=\"[[disabled]]\" indeterminate=\"{{indeterminate::change}}\" role=\"presentation\" tabindex=\"-1\">\n      </span>\n\n      <span part=\"label\">\n        <slot></slot>\n      </span>\n    </label>\n"]);_templateObject3_7280bdd0bea211e98f44c3131ec74eb1=function _templateObject3_7280bdd0bea211e98f44c3131ec74eb1(){return data};return data}function _templateObject2_7280bdd0bea211e98f44c3131ec74eb1(){var data=babelHelpers.taggedTemplateLiteral(["<dom-module id=\"lumo-button\" theme-for=\"vaadin-button\">\n  <template>\n    <style>\n      :host {\n        /* Sizing */\n        --lumo-button-size: var(--lumo-size-m);\n        min-width: calc(var(--lumo-button-size) * 2);\n        height: var(--lumo-button-size);\n        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);\n        margin: var(--lumo-space-xs) 0;\n        box-sizing: border-box;\n        /* Style */\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 500;\n        color: var(--_lumo-button-color, var(--lumo-primary-text-color));\n        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));\n        border-radius: var(--lumo-border-radius);\n        cursor: default;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Set only for the internal parts so we don\u2019t affect the host vertical alignment */\n      [part=\"label\"],\n      [part=\"prefix\"],\n      [part=\"suffix\"] {\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      [part=\"label\"] {\n        padding: calc(var(--lumo-button-size) / 6) 0;\n      }\n\n      :host([theme~=\"small\"]) {\n        font-size: var(--lumo-font-size-s);\n        --lumo-button-size: var(--lumo-size-s);\n      }\n\n      :host([theme~=\"large\"]) {\n        font-size: var(--lumo-font-size-l);\n        --lumo-button-size: var(--lumo-size-l);\n      }\n\n      /* This needs to be the last selector for it to take priority */\n      :host([disabled][disabled]) {\n        pointer-events: none;\n        color: var(--lumo-disabled-text-color);\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      /* For interaction states */\n      :host::before,\n      :host::after {\n        content: \"\";\n        /* We rely on the host always being relative */\n        position: absolute;\n        z-index: 1;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-color: currentColor;\n        border-radius: inherit;\n        opacity: 0;\n        transition: opacity 0.2s;\n        pointer-events: none;\n      }\n\n      /* Hover */\n\n      :host(:hover)::before {\n        opacity: 0.05;\n      }\n\n      /* Disable hover for touch devices */\n      @media (pointer: coarse) {\n        :host(:not([active]):hover)::before {\n          opacity: 0;\n        }\n      }\n\n      /* Active */\n\n      :host::after {\n        transition: opacity 1.4s, transform 0.1s;\n        filter: blur(8px);\n      }\n\n      :host([active])::before {\n        opacity: 0.1;\n        transition-duration: 0s;\n      }\n\n      :host([active])::after {\n        opacity: 0.1;\n        transition-duration: 0s, 0s;\n        transform: scale(0);\n      }\n\n      /* Keyboard focus */\n\n      :host([focus-ring]) {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      /* Types (primary, tertiary, tertiary-inline */\n\n      :host([theme~=\"tertiary\"]),\n      :host([theme~=\"tertiary-inline\"]) {\n        background-color: transparent !important;\n        transition: opacity 0.2s;\n        min-width: 0;\n      }\n\n      :host([theme~=\"tertiary\"])::before,\n      :host([theme~=\"tertiary-inline\"])::before {\n        display: none;\n      }\n\n      :host([theme~=\"tertiary\"]) {\n        padding: 0 calc(var(--lumo-button-size) / 6);\n      }\n\n      @media (hover: hover) {\n        :host([theme*=\"tertiary\"]:not([active]):hover) {\n          opacity: 0.8;\n        }\n      }\n\n      :host([theme~=\"tertiary\"][active]),\n      :host([theme~=\"tertiary-inline\"][active]) {\n        opacity: 0.5;\n        transition-duration: 0s;\n      }\n\n      :host([theme~=\"tertiary-inline\"]) {\n        margin: 0;\n        height: auto;\n        padding: 0;\n        line-height: inherit;\n        font-size: inherit;\n      }\n\n      :host([theme~=\"tertiary-inline\"]) [part=\"label\"] {\n        padding: 0;\n        overflow: visible;\n        line-height: inherit;\n      }\n\n      :host([theme~=\"primary\"]) {\n        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));\n        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));\n        font-weight: 600;\n        min-width: calc(var(--lumo-button-size) * 2.5);\n      }\n\n      :host([theme~=\"primary\"][disabled]) {\n        background-color: var(--lumo-primary-color-50pct);\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      :host([theme~=\"primary\"]:hover)::before {\n        opacity: 0.1;\n      }\n\n      :host([theme~=\"primary\"][active])::before {\n        background-color: var(--lumo-shade-20pct);\n      }\n\n      @media (pointer: coarse) {\n        :host([theme~=\"primary\"][active])::before {\n          background-color: var(--lumo-shade-60pct);\n        }\n\n        :host([theme~=\"primary\"]:not([active]):hover)::before {\n          opacity: 0;\n        }\n      }\n\n      :host([theme~=\"primary\"][active])::after {\n        opacity: 0.2;\n      }\n\n      /* Colors (success, error, contrast) */\n\n      :host([theme~=\"success\"]) {\n        color: var(--lumo-success-text-color);\n      }\n\n      :host([theme~=\"success\"][theme~=\"primary\"]) {\n        background-color: var(--lumo-success-color);\n        color: var(--lumo-success-contrast-color);\n      }\n\n      :host([theme~=\"success\"][theme~=\"primary\"][disabled]) {\n        background-color: var(--lumo-success-color-50pct);\n      }\n\n      :host([theme~=\"error\"]) {\n        color: var(--lumo-error-text-color);\n      }\n\n      :host([theme~=\"error\"][theme~=\"primary\"]) {\n        background-color: var(--lumo-error-color);\n        color: var(--lumo-error-contrast-color);\n      }\n\n      :host([theme~=\"error\"][theme~=\"primary\"][disabled]) {\n        background-color: var(--lumo-error-color-50pct);\n      }\n\n      :host([theme~=\"contrast\"]) {\n        color: var(--lumo-contrast);\n      }\n\n      :host([theme~=\"contrast\"][theme~=\"primary\"]) {\n        background-color: var(--lumo-contrast);\n        color: var(--lumo-base-color);\n      }\n\n      :host([theme~=\"contrast\"][theme~=\"primary\"][disabled]) {\n        background-color: var(--lumo-contrast-50pct);\n      }\n\n      /* Icons */\n\n      [part] ::slotted(iron-icon) {\n        display: inline-block;\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n\n      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n      [part] ::slotted(iron-icon[icon^=\"vaadin:\"]) {\n        padding: 0.25em;\n        box-sizing: border-box !important;\n      }\n\n      [part=\"prefix\"] {\n        margin-left: -0.25em;\n        margin-right: 0.25em;\n      }\n\n      [part=\"suffix\"] {\n        margin-left: 0.25em;\n        margin-right: -0.25em;\n      }\n\n      /* Icon-only */\n\n      :host([theme~=\"icon\"]:not([theme~=\"tertiary-inline\"])) {\n        min-width: var(--lumo-button-size);\n        padding-left: calc(var(--lumo-button-size) / 4);\n        padding-right: calc(var(--lumo-button-size) / 4);\n      }\n\n      :host([theme~=\"icon\"]) [part=\"prefix\"],\n      :host([theme~=\"icon\"]) [part=\"suffix\"] {\n        margin-left: 0;\n        margin-right: 0;\n      }\n    </style>\n  </template>\n</dom-module>"]);_templateObject2_7280bdd0bea211e98f44c3131ec74eb1=function _templateObject2_7280bdd0bea211e98f44c3131ec74eb1(){return data};return data}function _templateObject_7280bdd0bea211e98f44c3131ec74eb1(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        outline: none;\n        white-space: nowrap;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      /* Ensure the button is always aligned on the baseline */\n      .vaadin-button-container::before {\n        content: \"\\2003\";\n        display: inline-block;\n        width: 0;\n      }\n\n      .vaadin-button-container {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        width: 100%;\n        height: 100%;\n        min-height: inherit;\n        text-shadow: inherit;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      [part=\"prefix\"],\n      [part=\"suffix\"] {\n        flex: none;\n      }\n\n      [part=\"label\"] {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      #button {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: inherit;\n      }\n    </style>\n    <div class=\"vaadin-button-container\">\n      <div part=\"prefix\">\n        <slot name=\"prefix\"></slot>\n      </div>\n      <div part=\"label\">\n        <slot></slot>\n      </div>\n      <div part=\"suffix\">\n        <slot name=\"suffix\"></slot>\n      </div>\n    </div>\n    <button id=\"button\" type=\"button\"></button>\n"],["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        outline: none;\n        white-space: nowrap;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      /* Ensure the button is always aligned on the baseline */\n      .vaadin-button-container::before {\n        content: \"\\\\2003\";\n        display: inline-block;\n        width: 0;\n      }\n\n      .vaadin-button-container {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        width: 100%;\n        height: 100%;\n        min-height: inherit;\n        text-shadow: inherit;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      [part=\"prefix\"],\n      [part=\"suffix\"] {\n        flex: none;\n      }\n\n      [part=\"label\"] {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      #button {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: inherit;\n      }\n    </style>\n    <div class=\"vaadin-button-container\">\n      <div part=\"prefix\">\n        <slot name=\"prefix\"></slot>\n      </div>\n      <div part=\"label\">\n        <slot></slot>\n      </div>\n      <div part=\"suffix\">\n        <slot name=\"suffix\"></slot>\n      </div>\n    </div>\n    <button id=\"button\" type=\"button\"></button>\n"]);_templateObject_7280bdd0bea211e98f44c3131ec74eb1=function _templateObject_7280bdd0bea211e98f44c3131ec74eb1(){return data};return data}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){keys.push.apply(keys,Object.getOwnPropertySymbols(object))}if(enumerableOnly)keys=keys.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(source,!0).forEach(function(key){babelHelpers.defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}var BaseSchema=/*#__PURE__*/function(){function BaseSchema(o){babelHelpers.classCallCheck(this,BaseSchema);if("undefined"!==typeof o)this.create(o)}babelHelpers.createClass(BaseSchema,[{key:"create",value:function create(o){throw new Error("You should implement your own create method.")}},{key:"update",value:function update(o){throw new Error("You should implement your own update method.")}},{key:"toJSON",value:function toJSON(){return{}}},{key:"toString",value:function toString(){return JSON.stringify(this.toJSON())}}],[{key:"create",value:function create(o){if(Array.isArray(o)){for(var r=[],i=0;i<o.length;i++){r.push(new this(o[i]))}return r}else{return new this(o)}}},{key:"find",value:function find(from,paths,value){// From is Empty then Result Must be Empty
if(!Array.isArray(from)||0===from.length)return null;paths=paths.split(".");return from.find(function(o){var comp=o,_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _iterator=paths[Symbol.iterator](),_step,_path;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){_path=_step.value;comp=comp[_path]}}catch(err){_didIteratorError=!0;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&null!=_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}return comp===value})}},{key:"findIndex",value:function findIndex(from,paths,value){// From is Empty then Result Must be Empty
if(!Array.isArray(from)||0===from.length)return null;paths=paths.split(".");return from.findIndex(function(o){var comp=o,_iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var _iterator2=paths[Symbol.iterator](),_step2,_path2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0){_path2=_step2.value;comp=comp[_path2]}}catch(err){_didIteratorError2=!0;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&null!=_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}}return comp===value})}}]);return BaseSchema}();_exports.$BaseSchemaDefault=BaseSchema;var BaseSchema$1={default:BaseSchema};_exports.$BaseSchema=BaseSchema$1;var RecordData=/*#__PURE__*/function(_BaseSchema){babelHelpers.inherits(RecordData,_BaseSchema);function RecordData(){babelHelpers.classCallCheck(this,RecordData);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(RecordData).apply(this,arguments))}babelHelpers.createClass(RecordData,[{key:"create",value:function create(o){if(o.roomId)this.roomId=o.roomId;if(o.realRoomId)this.realRoomId=o.realRoomId;if(o.streamerName)this.streamerName=o.streamerName;if(o.status)this.status=o.status;if(o.downloadSpeedKiBps)this.downloadSpeedKiBps=o.downloadSpeedKiBps;else this.downloadSpeedKiBps=0;if(o.downloadSpeedPersentage)this.downloadSpeedPersentage=o.downloadSpeedPersentage;else this.downloadSpeedPersentage=0;if(o.clipCount)this.clipCount=o.clipCount}},{key:"update",value:function update(o){if(o.roomId)this.roomId=o.roomId;if(o.realRoomId)this.realRoomId=o.realRoomId;if(o.streamerName)this.streamerName=o.streamerName;if(o.status)this.status=o.status;if(o.downloadSpeedKiBps)this.downloadSpeedKiBps=o.downloadSpeedKiBps;if(o.downloadSpeedPersentage)this.downloadSpeedPersentage=o.downloadSpeedPersentage;if(o.clipCount)this.clipCount=o.clipCount}},{key:"toJSON",value:function toJSON(){var o=babelHelpers.get(babelHelpers.getPrototypeOf(RecordData.prototype),"toJSON",this).call(this);if(this.roomId)o.roomId=this.roomId;if(this.realRoomId)o.realRoomId=this.realRoomId;if(this.streamerName)o.streamerName=this.streamerName;if(this.status)o.status=this.status;if(this.downloadSpeedKiBps)o.downloadSpeedKiBps=this.downloadSpeedKiBps;if(this.downloadSpeedPersentage)o.downloadSpeedPersentage=this.downloadSpeedPersentage;if(this.clipCount)o.clipCount=this.clipCount;return o}},{key:"roomId",get:function get(){return this._roomId},set:function set(roomId){this._roomId=+roomId}},{key:"realRoomId",get:function get(){return this._realRoomId},set:function set(realRoomId){this._realRoomId=+realRoomId}},{key:"streamerName",get:function get(){return this._streamerName},set:function set(streamerName){this._streamerName=streamerName+""}},{key:"status",get:function get(){return this._status},set:function set(status){this._status=status+""}},{key:"downloadSpeedKiBps",get:function get(){return(+this._downloadSpeedKiBps).toFixed(2)},set:function set(downloadSpeedKiBps){this._downloadSpeedKiBps=downloadSpeedKiBps+""}},{key:"downloadSpeedPersentage",get:function get(){return(+this._downloadSpeedPersentage).toFixed(2)},set:function set(downloadSpeedPersentage){this._downloadSpeedPersentage=downloadSpeedPersentage+""}},{key:"clipCount",get:function get(){return this._clipCount},set:function set(clipCount){this._clipCount=+clipCount}}]);return RecordData}(BaseSchema);_exports.RecordData=_exports.$RecordDataDefault=RecordData;var SampleRecordData=[{roomId:1,realRoomId:1,streamerName:1,status:"monitoring",downloadSpeedKiBps:0,downloadSpeedPersentage:0,clipCount:0},{roomId:2,realRoomId:2,streamerName:2,status:"recording",downloadSpeedKiBps:52.4383783,downloadSpeedPersentage:13.555,clipCount:0},{roomId:3,realRoomId:3,streamerName:3,status:"free",downloadSpeedKiBps:0,downloadSpeedPersentage:0,clipCount:0},{roomId:4,realRoomId:4,streamerName:4,status:"",downloadSpeedKiBps:0,downloadSpeedPersentage:0,clipCount:0}];_exports.SampleRecordData=SampleRecordData;var RecordData$1={RecordData:RecordData,SampleRecordData:SampleRecordData,default:RecordData};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$RecordData=RecordData$1;"use strict";var nativeShadow=!(window.ShadyDOM&&window.ShadyDOM.inUse);_exports.nativeShadow=nativeShadow;var nativeCssVariables_;/**
                          * @param {(ShadyCSSOptions | ShadyCSSInterface)=} settings
                          */function calcCssVariables(settings){if(settings&&settings.shimcssproperties){nativeCssVariables_=!1}else{// chrome 49 has semi-working css vars, check if box-shadow works
// safari 9.1 has a recalc bug: https://bugs.webkit.org/show_bug.cgi?id=155782
// However, shim css custom properties are only supported with ShadyDOM enabled,
// so fall back on native if we do not detect ShadyDOM
// Edge 15: custom properties used in ::before and ::after will also be used in the parent element
// https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12414257/
nativeCssVariables_=nativeShadow||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}}/** @type {string | undefined} */var cssBuild;_exports.cssBuild=cssBuild;if(window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0){_exports.cssBuild=cssBuild=window.ShadyCSS.cssBuild}/** @type {boolean} */var disableRuntime=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);_exports.disableRuntime=disableRuntime;if(window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0){nativeCssVariables_=window.ShadyCSS.nativeCss}else if(window.ShadyCSS){calcCssVariables(window.ShadyCSS);// reset window variable to let ShadyCSS API take its place
window.ShadyCSS=void 0}else{calcCssVariables(window.WebComponents&&window.WebComponents.flags)}// Hack for type error under new type inference which doesn't like that
// nativeCssVariables is updated in a function and assigns the type
// `function(): ?` instead of `boolean`.
var nativeCssVariables=/** @type {boolean} */nativeCssVariables_;_exports.nativeCssVariables=nativeCssVariables;var styleSettings={nativeShadow:nativeShadow,get cssBuild(){return cssBuild},disableRuntime:disableRuntime,nativeCssVariables:nativeCssVariables};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /*
      Extremely simple css parser. Intended to be not more than what we need
      and definitely not necessarily correct =).
      */_exports.$styleSettings=styleSettings;"use strict";/** @unrestricted */var StyleNode=function StyleNode(){babelHelpers.classCallCheck(this,StyleNode);/** @type {number} */this.start=0;/** @type {number} */this.end=0;/** @type {StyleNode} */this.previous=null;/** @type {StyleNode} */this.parent=null;/** @type {Array<StyleNode>} */this.rules=null;/** @type {string} */this.parsedCssText="";/** @type {string} */this.cssText="";/** @type {boolean} */this.atRule=!1;/** @type {number} */this.type=0;/** @type {string} */this.keyframesName="";/** @type {string} */this.selector="";/** @type {string} */this.parsedSelector=""};/**
   * @param {string} text
   * @return {StyleNode}
   */_exports.StyleNode=StyleNode;function parse(text){text=clean(text);return parseCss(lex(text),text)}// remove stuff we don't care about that may hinder parsing
/**
 * @param {string} cssText
 * @return {string}
 */function clean(cssText){return cssText.replace(RX.comments,"").replace(RX.port,"")}// super simple {...} lexer that returns a node tree
/**
 * @param {string} text
 * @return {StyleNode}
 */function lex(text){var root=new StyleNode;root.start=0;root.end=text.length;for(var n=root,i=0,l=text.length;i<l;i++){if(text[i]===OPEN_BRACE){if(!n.rules){n.rules=[]}var _p=n,previous=_p.rules[_p.rules.length-1]||null;n=new StyleNode;n.start=i+1;n.parent=_p;n.previous=previous;_p.rules.push(n)}else if(text[i]===CLOSE_BRACE){n.end=i+1;n=n.parent||root}}return root}// add selectors/cssText to node tree
/**
 * @param {StyleNode} node
 * @param {string} text
 * @return {StyleNode}
 */function parseCss(node,text){var t=text.substring(node.start,node.end-1);node.parsedCssText=node.cssText=t.trim();if(node.parent){var ss=node.previous?node.previous.end:node.parent.start;t=text.substring(ss,node.start-1);t=_expandUnicodeEscapes(t);t=t.replace(RX.multipleSpaces," ");// TODO(sorvell): ad hoc; make selector include only after last ;
// helps with mixin syntax
t=t.substring(t.lastIndexOf(";")+1);var s=node.parsedSelector=node.selector=t.trim();node.atRule=0===s.indexOf(AT_START);// note, support a subset of rule types...
if(node.atRule){if(0===s.indexOf(MEDIA_START)){node.type=types.MEDIA_RULE}else if(s.match(RX.keyframesRule)){node.type=types.KEYFRAMES_RULE;node.keyframesName=node.selector.split(RX.multipleSpaces).pop()}}else{if(0===s.indexOf(VAR_START)){node.type=types.MIXIN_RULE}else{node.type=types.STYLE_RULE}}}var r$=node.rules;if(r$){for(var i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){parseCss(r,text)}}return node}/**
   * conversion of sort unicode escapes with spaces like `\33 ` (and longer) into
   * expanded form that doesn't require trailing space `\000033`
   * @param {string} s
   * @return {string}
   */function _expandUnicodeEscapes(s){return s.replace(/\\([0-9a-f]{1,6})\s/gi,function(){var code=arguments[1],repeat=6-code.length;while(repeat--){code="0"+code}return"\\"+code})}/**
   * stringify parsed css.
   * @param {StyleNode} node
   * @param {boolean=} preserveProperties
   * @param {string=} text
   * @return {string}
   */function stringify(node,preserveProperties){var text=2<arguments.length&&arguments[2]!==void 0?arguments[2]:"",cssText="";if(node.cssText||node.rules){var r$=node.rules;if(r$&&!_hasMixinRules(r$)){for(var i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){cssText=stringify(r,preserveProperties,cssText)}}else{cssText=preserveProperties?node.cssText:removeCustomProps(node.cssText);cssText=cssText.trim();if(cssText){cssText="  "+cssText+"\n"}}}// emit rule if there is cssText
if(cssText){if(node.selector){text+=node.selector+" "+OPEN_BRACE+"\n"}text+=cssText;if(node.selector){text+=CLOSE_BRACE+"\n\n"}}return text}/**
   * @param {Array<StyleNode>} rules
   * @return {boolean}
   */function _hasMixinRules(rules){var r=rules[0];return!!r&&!!r.selector&&0===r.selector.indexOf(VAR_START)}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomProps(cssText){cssText=removeCustomPropAssignment(cssText);return removeCustomPropApply(cssText)}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomPropAssignment(cssText){return cssText.replace(RX.customProp,"").replace(RX.mixinProp,"")}/**
   * @param {string} cssText
   * @return {string}
   */function removeCustomPropApply(cssText){return cssText.replace(RX.mixinApply,"").replace(RX.varApply,"")}/** @enum {number} */var types={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3};_exports.types=types;var OPEN_BRACE="{",CLOSE_BRACE="}",RX={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},VAR_START="--",MEDIA_START="@media",AT_START="@",cssParse={StyleNode:StyleNode,parse:parse,stringify:stringify,removeCustomPropAssignment:removeCustomPropAssignment,types:types};_exports.$cssParse=cssParse;/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */var VAR_ASSIGN=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi;_exports.VAR_ASSIGN=VAR_ASSIGN;var MIXIN_MATCH=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;_exports.MIXIN_MATCH=MIXIN_MATCH;var VAR_CONSUMED=/(--[\w-]+)\s*([:,;)]|$)/gi;_exports.VAR_CONSUMED=VAR_CONSUMED;var ANIMATION_MATCH=/(animation\s*:)|(animation-name\s*:)/;_exports.ANIMATION_MATCH=ANIMATION_MATCH;var MEDIA_MATCH=/@media\s(.*)/;_exports.MEDIA_MATCH=MEDIA_MATCH;var IS_VAR=/^--/;_exports.IS_VAR=IS_VAR;var BRACKETED=/\{[^}]*\}/g;_exports.BRACKETED=BRACKETED;var HOST_PREFIX="(?:^|[^.#[:])";_exports.HOST_PREFIX=HOST_PREFIX;var HOST_SUFFIX="($|[.:[\\s>+~])";_exports.HOST_SUFFIX=HOST_SUFFIX;var commonRegex={VAR_ASSIGN:VAR_ASSIGN,MIXIN_MATCH:MIXIN_MATCH,VAR_CONSUMED:VAR_CONSUMED,ANIMATION_MATCH:ANIMATION_MATCH,MEDIA_MATCH:MEDIA_MATCH,IS_VAR:IS_VAR,BRACKETED:BRACKETED,HOST_PREFIX:HOST_PREFIX,HOST_SUFFIX:HOST_SUFFIX};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$commonRegex=commonRegex;"use strict";/** @type {!Set<string>} */var styleTextSet=new Set,scopingAttribute="shady-unscoped";_exports.scopingAttribute=scopingAttribute;/**
                                                   * Add a specifically-marked style to the document directly, and only one copy of that style.
                                                   *
                                                   * @param {!HTMLStyleElement} style
                                                   * @return {undefined}
                                                   */function processUnscopedStyle(style){var text=style.textContent;if(!styleTextSet.has(text)){styleTextSet.add(text);var newStyle=style.cloneNode(!0);document.head.appendChild(newStyle)}}/**
   * Check if a style is supposed to be unscoped
   * @param {!HTMLStyleElement} style
   * @return {boolean} true if the style has the unscoping attribute
   */function isUnscopedStyle(style){return style.hasAttribute(scopingAttribute)}var unscopedStyleHandler={scopingAttribute:scopingAttribute,processUnscopedStyle:processUnscopedStyle,isUnscopedStyle:isUnscopedStyle};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$unscopedStyleHandler=unscopedStyleHandler;"use strict";function toCssText(rules,callback){if(!rules){return""}if("string"===typeof rules){rules=parse(rules)}if(callback){forEachRule(rules,callback)}return stringify(rules,nativeCssVariables)}/**
   * @param {HTMLStyleElement} style
   * @return {StyleNode}
   */function rulesForStyle(style){if(!style.__cssRules&&style.textContent){style.__cssRules=parse(style.textContent)}return style.__cssRules||null}// Tests if a rule is a keyframes selector, which looks almost exactly
// like a normal selector but is not (it has nothing to do with scoping
// for example).
/**
 * @param {StyleNode} rule
 * @return {boolean}
 */function isKeyframesSelector(rule){return!!rule.parent&&rule.parent.type===types.KEYFRAMES_RULE}/**
   * @param {StyleNode} node
   * @param {Function=} styleRuleCallback
   * @param {Function=} keyframesRuleCallback
   * @param {boolean=} onlyActiveRules
   */function forEachRule(node,styleRuleCallback,keyframesRuleCallback,onlyActiveRules){if(!node){return}var skipRules=!1,type=node.type;if(onlyActiveRules){if(type===types.MEDIA_RULE){var matchMedia=node.selector.match(MEDIA_MATCH);if(matchMedia){// if rule is a non matching @media rule, skip subrules
if(!window.matchMedia(matchMedia[1]).matches){skipRules=!0}}}}if(type===types.STYLE_RULE){styleRuleCallback(node)}else if(keyframesRuleCallback&&type===types.KEYFRAMES_RULE){keyframesRuleCallback(node)}else if(type===types.MIXIN_RULE){skipRules=!0}var r$=node.rules;if(r$&&!skipRules){for(var i=0,l=r$.length,r;i<l&&(r=r$[i]);i++){forEachRule(r,styleRuleCallback,keyframesRuleCallback,onlyActiveRules)}}}// add a string of cssText to the document.
/**
 * @param {string} cssText
 * @param {string} moniker
 * @param {Node} target
 * @param {Node} contextNode
 * @return {HTMLStyleElement}
 */function applyCss(cssText,moniker,target,contextNode){var style=createScopeStyle(cssText,moniker);applyStyle(style,target,contextNode);return style}/**
   * @param {string} cssText
   * @param {string} moniker
   * @return {HTMLStyleElement}
   */function createScopeStyle(cssText,moniker){var style=/** @type {HTMLStyleElement} */document.createElement("style");if(moniker){style.setAttribute("scope",moniker)}style.textContent=cssText;return style}/**
   * Track the position of the last added style for placing placeholders
   * @type {Node}
   */var lastHeadApplyNode=null;// insert a comment node as a styling position placeholder.
/**
 * @param {string} moniker
 * @return {!Comment}
 */function applyStylePlaceHolder(moniker){var placeHolder=document.createComment(" Shady DOM styles for "+moniker+" "),after=lastHeadApplyNode?lastHeadApplyNode.nextSibling:null,scope=document.head;scope.insertBefore(placeHolder,after||scope.firstChild);lastHeadApplyNode=placeHolder;return placeHolder}/**
   * @param {HTMLStyleElement} style
   * @param {?Node} target
   * @param {?Node} contextNode
   */function applyStyle(style,target,contextNode){target=target||document.head;var after=contextNode&&contextNode.nextSibling||target.firstChild;target.insertBefore(style,after);if(!lastHeadApplyNode){lastHeadApplyNode=style}else{// only update lastHeadApplyNode if the new style is inserted after the old lastHeadApplyNode
var position=style.compareDocumentPosition(lastHeadApplyNode);if(position===Node.DOCUMENT_POSITION_PRECEDING){lastHeadApplyNode=style}}}/**
   * @param {string} buildType
   * @return {boolean}
   */function isTargetedBuild(buildType){return nativeShadow?"shadow"===buildType:"shady"===buildType}/**
   * Walk from text[start] matching parens and
   * returns position of the outer end paren
   * @param {string} text
   * @param {number} start
   * @return {number}
   */function findMatchingParen(text,start){for(var level=0,i=start,l=text.length;i<l;i++){if("("===text[i]){level++}else if(")"===text[i]){if(0===--level){return i}}}return-1}/**
   * @param {string} str
   * @param {function(string, string, string, string)} callback
   */function processVariableAndFallback(str,callback){// find 'var('
var start=str.indexOf("var(");if(-1===start){// no var?, everything is prefix
return callback(str,"","","")}//${prefix}var(${inner})${suffix}
var end=findMatchingParen(str,start+3),inner=str.substring(start+4,end),prefix=str.substring(0,start),suffix=processVariableAndFallback(str.substring(end+1),callback),comma=inner.indexOf(",");// value and fallback args should be trimmed to match in property lookup
if(-1===comma){// variable, no fallback
return callback(prefix,inner.trim(),"",suffix)}// var(${value},${fallback})
var value=inner.substring(0,comma).trim(),fallback=inner.substring(comma+1).trim();return callback(prefix,value,fallback,suffix)}/**
   * @param {Element} element
   * @param {string} value
   */function setElementClassRaw(element,value){// use native setAttribute provided by ShadyDOM when setAttribute is patched
if(nativeShadow){element.setAttribute("class",value)}else{window.ShadyDOM.nativeMethods.setAttribute.call(element,"class",value)}}/**
   * @type {function(*):*}
   */var wrap=window.ShadyDOM&&window.ShadyDOM.wrap||function(node){return node};/**
                                                                                         * @param {Element | {is: string, extends: string}} element
                                                                                         * @return {{is: string, typeExtension: string}}
                                                                                         */_exports.wrap$1=wrap;function getIsExtends(element){var localName=element.localName,is="",typeExtension="";/*
                          NOTE: technically, this can be wrong for certain svg elements
                          with `-` in the name like `<font-face>`
                          */if(localName){if(-1<localName.indexOf("-")){is=localName}else{typeExtension=localName;is=element.getAttribute&&element.getAttribute("is")||""}}else{is=/** @type {?} */element.is;typeExtension=/** @type {?} */element.extends}return{is:is,typeExtension:typeExtension}}/**
   * @param {Element|DocumentFragment} element
   * @return {string}
   */function gatherStyleText(element){/** @type {!Array<string>} */for(var styleTextParts=[],styles=/** @type {!NodeList<!HTMLStyleElement>} */element.querySelectorAll("style"),i=0,style;i<styles.length;i++){style=styles[i];if(isUnscopedStyle(style)){if(!nativeShadow){processUnscopedStyle(style);style.parentNode.removeChild(style)}}else{styleTextParts.push(style.textContent);style.parentNode.removeChild(style)}}return styleTextParts.join("").trim()}/**
   * Split a selector separated by commas into an array in a smart way
   * @param {string} selector
   * @return {!Array<string>}
   */function splitSelectorList(selector){for(var parts=[],part="",i=0;0<=i&&i<selector.length;i++){// A selector with parentheses will be one complete part
if("("===selector[i]){// find the matching paren
var end=findMatchingParen(selector,i);// push the paren block into the part
part+=selector.slice(i,end+1);// move the index to after the paren block
i=end}else if(","===selector[i]){parts.push(part);part=""}else{part+=selector[i]}}// catch any pieces after the last comma
if(part){parts.push(part)}return parts}var CSS_BUILD_ATTR="css-build";/**
                                     * Return the polymer-css-build "build type" applied to this element
                                     *
                                     * @param {!HTMLElement} element
                                     * @return {string} Can be "", "shady", or "shadow"
                                     */function getCssBuild(element){if(cssBuild!==void 0){return(/** @type {string} */cssBuild)}if(element.__cssBuild===void 0){// try attribute first, as it is the common case
var attrValue=element.getAttribute(CSS_BUILD_ATTR);if(attrValue){element.__cssBuild=attrValue}else{var buildComment=getBuildComment(element);if(""!==buildComment){// remove build comment so it is not needlessly copied into every element instance
removeBuildComment(element)}element.__cssBuild=buildComment}}return element.__cssBuild||""}/**
   * Check if the given element, either a <template> or <style>, has been processed
   * by polymer-css-build.
   *
   * If so, then we can make a number of optimizations:
   * - polymer-css-build will decompose mixins into individual CSS Custom Properties,
   * so the ApplyShim can be skipped entirely.
   * - Under native ShadowDOM, the style text can just be copied into each instance
   * without modification
   * - If the build is "shady" and ShadyDOM is in use, the styling does not need
   * scoping beyond the shimming of CSS Custom Properties
   *
   * @param {!HTMLElement} element
   * @return {boolean}
   */function elementHasBuiltCss(element){return""!==getCssBuild(element)}/**
   * For templates made with tagged template literals, polymer-css-build will
   * insert a comment of the form `<!--css-build:shadow-->`
   *
   * @param {!HTMLElement} element
   * @return {string}
   */function getBuildComment(element){var buildComment="template"===element.localName?/** @type {!HTMLTemplateElement} */element.content.firstChild:element.firstChild;if(babelHelpers.instanceof(buildComment,Comment)){var commentParts=buildComment.textContent.trim().split(":");if(commentParts[0]===CSS_BUILD_ATTR){return commentParts[1]}}return""}/**
   * Check if the css build status is optimal, and do no unneeded work.
   *
   * @param {string=} cssBuild CSS build status
   * @return {boolean} css build is optimal or not
   */function isOptimalCssBuild(){var cssBuild=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"";// CSS custom property shim always requires work
if(""===cssBuild||!nativeCssVariables){return!1}return nativeShadow?"shadow"===cssBuild:"shady"===cssBuild}/**
   * @param {!HTMLElement} element
   */function removeBuildComment(element){var buildComment="template"===element.localName?/** @type {!HTMLTemplateElement} */element.content.firstChild:element.firstChild;buildComment.parentNode.removeChild(buildComment)}var styleUtil={toCssText:toCssText,rulesForStyle:rulesForStyle,isKeyframesSelector:isKeyframesSelector,forEachRule:forEachRule,applyCss:applyCss,createScopeStyle:createScopeStyle,applyStylePlaceHolder:applyStylePlaceHolder,applyStyle:applyStyle,isTargetedBuild:isTargetedBuild,findMatchingParen:findMatchingParen,processVariableAndFallback:processVariableAndFallback,setElementClassRaw:setElementClassRaw,wrap:wrap,getIsExtends:getIsExtends,gatherStyleText:gatherStyleText,splitSelectorList:splitSelectorList,getCssBuild:getCssBuild,elementHasBuiltCss:elementHasBuiltCss,getBuildComment:getBuildComment,isOptimalCssBuild:isOptimalCssBuild};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$styleUtil=styleUtil;"use strict";function updateNativeProperties(element,properties){// remove previous properties
for(var _p2 in properties){// NOTE: for bc with shim, don't apply null values.
if(null===_p2){element.style.removeProperty(_p2)}else{element.style.setProperty(_p2,properties[_p2])}}}/**
   * @param {Element} element
   * @param {string} property
   * @return {string}
   */function _getComputedStyleValue(element,property){/**
   * @const {string}
   */var value=window.getComputedStyle(element).getPropertyValue(property);if(!value){return""}else{return value.trim()}}/**
   * return true if `cssText` contains a mixin definition or consumption
   * @param {string} cssText
   * @return {boolean}
   */function _detectMixin(cssText){var has=MIXIN_MATCH.test(cssText)||VAR_ASSIGN.test(cssText);// reset state of the regexes
MIXIN_MATCH.lastIndex=0;VAR_ASSIGN.lastIndex=0;return has}var commonUtils={updateNativeProperties:updateNativeProperties,getComputedStyleValue:_getComputedStyleValue,detectMixin:_detectMixin};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /*
       * The apply shim simulates the behavior of `@apply` proposed at
       * https://tabatkins.github.io/specs/css-apply-rule/.
       * The approach is to convert a property like this:
       *
       *    --foo: {color: red; background: blue;}
       *
       * to this:
       *
       *    --foo_-_color: red;
       *    --foo_-_background: blue;
       *
       * Then where `@apply --foo` is used, that is converted to:
       *
       *    color: var(--foo_-_color);
       *    background: var(--foo_-_background);
       *
       * This approach generally works but there are some issues and limitations.
       * Consider, for example, that somewhere *between* where `--foo` is set and used,
       * another element sets it to:
       *
       *    --foo: { border: 2px solid red; }
       *
       * We must now ensure that the color and background from the previous setting
       * do not apply. This is accomplished by changing the property set to this:
       *
       *    --foo_-_border: 2px solid red;
       *    --foo_-_color: initial;
       *    --foo_-_background: initial;
       *
       * This works but introduces one new issue.
       * Consider this setup at the point where the `@apply` is used:
       *
       *    background: orange;
       *    `@apply` --foo;
       *
       * In this case the background will be unset (initial) rather than the desired
       * `orange`. We address this by altering the property set to use a fallback
       * value like this:
       *
       *    color: var(--foo_-_color);
       *    background: var(--foo_-_background, orange);
       *    border: var(--foo_-_border);
       *
       * Note that the default is retained in the property set and the `background` is
       * the desired `orange`. This leads us to a limitation.
       *
       * Limitation 1:
      
       * Only properties in the rule where the `@apply`
       * is used are considered as default values.
       * If another rule matches the element and sets `background` with
       * less specificity than the rule in which `@apply` appears,
       * the `background` will not be set.
       *
       * Limitation 2:
       *
       * When using Polymer's `updateStyles` api, new properties may not be set for
       * `@apply` properties.
      
      */_exports.$commonUtils=commonUtils;"use strict";var APPLY_NAME_CLEAN=/;\s*/m,INITIAL_INHERIT=/^\s*(initial)|(inherit)\s*$/,IMPORTANT=/\s*!important/,MIXIN_VAR_SEP="_-_",PropertyEntry,DependantsEntry,MixinMapEntry,MixinMap=/*#__PURE__*/function(){function MixinMap(){babelHelpers.classCallCheck(this,MixinMap);/** @type {!Object<string, !MixinMapEntry>} */this._map={}}/**
     * @param {string} name
     * @param {!PropertyEntry} props
     */babelHelpers.createClass(MixinMap,[{key:"set",value:function set(name,props){name=name.trim();this._map[name]={properties:props,dependants:{}}}/**
     * @param {string} name
     * @return {MixinMapEntry}
     */},{key:"get",value:function get(name){name=name.trim();return this._map[name]||null}}]);return MixinMap}(),invalidCallback=null,ApplyShim=/*#__PURE__*/function(){function ApplyShim(){babelHelpers.classCallCheck(this,ApplyShim);/** @type {?string} */this._currentElement=null;/** @type {HTMLMetaElement} */this._measureElement=null;this._map=new MixinMap}/**
     * return true if `cssText` contains a mixin definition or consumption
     * @param {string} cssText
     * @return {boolean}
     */babelHelpers.createClass(ApplyShim,[{key:"detectMixin",value:function detectMixin(cssText){return _detectMixin(cssText)}/**
     * Gather styles into one style for easier processing
     * @param {!HTMLTemplateElement} template
     * @return {HTMLStyleElement}
     */},{key:"gatherStyles",value:function gatherStyles(template){var styleText=gatherStyleText(template.content);if(styleText){var style=/** @type {!HTMLStyleElement} */document.createElement("style");style.textContent=styleText;template.content.insertBefore(style,template.content.firstChild);return style}return null}/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @return {StyleNode}
     */},{key:"transformTemplate",value:function transformTemplate(template,elementName){if(template._gatheredStyle===void 0){template._gatheredStyle=this.gatherStyles(template)}/** @type {HTMLStyleElement} */var style=template._gatheredStyle;return style?this.transformStyle(style,elementName):null}/**
     * @param {!HTMLStyleElement} style
     * @param {string} elementName
     * @return {StyleNode}
     */},{key:"transformStyle",value:function transformStyle(style){var elementName=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"",ast=rulesForStyle(style);this.transformRules(ast,elementName);style.textContent=toCssText(ast);return ast}/**
     * @param {!HTMLStyleElement} style
     * @return {StyleNode}
     */},{key:"transformCustomStyle",value:function transformCustomStyle(style){var _this=this,ast=rulesForStyle(style);forEachRule(ast,function(rule){if(":root"===rule.selector){rule.selector="html"}_this.transformRule(rule)});style.textContent=toCssText(ast);return ast}/**
     * @param {StyleNode} rules
     * @param {string} elementName
     */},{key:"transformRules",value:function transformRules(rules,elementName){var _this2=this;this._currentElement=elementName;forEachRule(rules,function(r){_this2.transformRule(r)});this._currentElement=null}/**
     * @param {!StyleNode} rule
     */},{key:"transformRule",value:function transformRule(rule){rule.cssText=this.transformCssText(rule.parsedCssText,rule);// :root was only used for variable assignment in property shim,
// but generates invalid selectors with real properties.
// replace with `:host > *`, which serves the same effect
if(":root"===rule.selector){rule.selector=":host > *"}}/**
     * @param {string} cssText
     * @param {!StyleNode} rule
     * @return {string}
     */},{key:"transformCssText",value:function transformCssText(cssText,rule){var _this3=this;// produce variables
cssText=cssText.replace(VAR_ASSIGN,function(matchText,propertyName,valueProperty,valueMixin){return _this3._produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule)});// consume mixins
return this._consumeCssProperties(cssText,rule)}/**
     * @param {string} property
     * @return {string}
     */},{key:"_getInitialValueForProperty",value:function _getInitialValueForProperty(property){if(!this._measureElement){this._measureElement=/** @type {HTMLMetaElement} */document.createElement("meta");this._measureElement.setAttribute("apply-shim-measure","");this._measureElement.style.all="initial";document.head.appendChild(this._measureElement)}return window.getComputedStyle(this._measureElement).getPropertyValue(property)}/**
     * Walk over all rules before this rule to find fallbacks for mixins
     *
     * @param {!StyleNode} startRule
     * @return {!Object}
     */},{key:"_fallbacksFromPreviousRules",value:function _fallbacksFromPreviousRules(startRule){var _this4=this,topRule=startRule;while(topRule.parent){topRule=topRule.parent}var fallbacks={},seenStartRule=!1;forEachRule(topRule,function(r){// stop when we hit the input rule
seenStartRule=seenStartRule||r===startRule;if(seenStartRule){return}// NOTE: Only matching selectors are "safe" for this fallback processing
// It would be prohibitive to run `matchesSelector()` on each selector,
// so we cheat and only check if the same selector string is used, which
// guarantees things like specificity matching
if(r.selector===startRule.selector){Object.assign(fallbacks,_this4._cssTextToMap(r.parsedCssText))}});return fallbacks}/**
     * replace mixin consumption with variable consumption
     * @param {string} text
     * @param {!StyleNode=} rule
     * @return {string}
     */},{key:"_consumeCssProperties",value:function _consumeCssProperties(text,rule){/** @type {Array} */var m=null;// loop over text until all mixins with defintions have been applied
while(m=MIXIN_MATCH.exec(text)){var matchText=m[0],mixinName=m[1],idx=m.index,applyPos=idx+matchText.indexOf("@apply"),afterApplyPos=idx+matchText.length,textBeforeApply=text.slice(0,applyPos),textAfterApply=text.slice(afterApplyPos),defaults=rule?this._fallbacksFromPreviousRules(rule):{};Object.assign(defaults,this._cssTextToMap(textBeforeApply));var replacement=this._atApplyToCssProperties(mixinName,defaults);// use regex match position to replace mixin, keep linear processing time
text="".concat(textBeforeApply).concat(replacement).concat(textAfterApply);// move regex search to _after_ replacement
MIXIN_MATCH.lastIndex=idx+replacement.length}return text}/**
     * produce variable consumption at the site of mixin consumption
     * `@apply` --foo; -> for all props (${propname}: var(--foo_-_${propname}, ${fallback[propname]}}))
     * Example:
     *  border: var(--foo_-_border); padding: var(--foo_-_padding, 2px)
     *
     * @param {string} mixinName
     * @param {Object} fallbacks
     * @return {string}
     */},{key:"_atApplyToCssProperties",value:function _atApplyToCssProperties(mixinName,fallbacks){mixinName=mixinName.replace(APPLY_NAME_CLEAN,"");var vars=[],mixinEntry=this._map.get(mixinName);// if we depend on a mixin before it is created
// make a sentinel entry in the map to add this element as a dependency for when it is defined.
if(!mixinEntry){this._map.set(mixinName,{});mixinEntry=this._map.get(mixinName)}if(mixinEntry){if(this._currentElement){mixinEntry.dependants[this._currentElement]=!0}var _p3,parts,f,properties=mixinEntry.properties;for(_p3 in properties){f=fallbacks&&fallbacks[_p3];parts=[_p3,": var(",mixinName,MIXIN_VAR_SEP,_p3];if(f){parts.push(",",f.replace(IMPORTANT,""))}parts.push(")");if(IMPORTANT.test(properties[_p3])){parts.push(" !important")}vars.push(parts.join(""))}}return vars.join("; ")}/**
     * @param {string} property
     * @param {string} value
     * @return {string}
     */},{key:"_replaceInitialOrInherit",value:function _replaceInitialOrInherit(property,value){var match=INITIAL_INHERIT.exec(value);if(match){if(match[1]){// initial
// replace `initial` with the concrete initial value for this property
value=this._getInitialValueForProperty(property)}else{// inherit
// with this purposfully illegal value, the variable will be invalid at
// compute time (https://www.w3.org/TR/css-variables/#invalid-at-computed-value-time)
// and for inheriting values, will behave similarly
// we cannot support the same behavior for non inheriting values like 'border'
value="apply-shim-inherit"}}return value}/**
     * "parse" a mixin definition into a map of properties and values
     * cssTextToMap('border: 2px solid black') -> ('border', '2px solid black')
     * @param {string} text
     * @param {boolean=} replaceInitialOrInherit
     * @return {!Object<string, string>}
     */},{key:"_cssTextToMap",value:function _cssTextToMap(text){for(var replaceInitialOrInherit=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,props=text.split(";"),property,value,out={},i=0,_p4,sp;i<props.length;i++){_p4=props[i];if(_p4){sp=_p4.split(":");// ignore lines that aren't definitions like @media
if(1<sp.length){property=sp[0].trim();// some properties may have ':' in the value, like data urls
value=sp.slice(1).join(":");if(replaceInitialOrInherit){value=this._replaceInitialOrInherit(property,value)}out[property]=value}}}return out}/**
     * @param {MixinMapEntry} mixinEntry
     */},{key:"_invalidateMixinEntry",value:function _invalidateMixinEntry(mixinEntry){if(!invalidCallback){return}for(var elementName in mixinEntry.dependants){if(elementName!==this._currentElement){invalidCallback(elementName)}}}/**
     * @param {string} matchText
     * @param {string} propertyName
     * @param {?string} valueProperty
     * @param {?string} valueMixin
     * @param {!StyleNode} rule
     * @return {string}
     */},{key:"_produceCssProperties",value:function _produceCssProperties(matchText,propertyName,valueProperty,valueMixin,rule){var _this5=this;// handle case where property value is a mixin
if(valueProperty){// form: --mixin2: var(--mixin1), where --mixin1 is in the map
processVariableAndFallback(valueProperty,function(prefix,value){if(value&&_this5._map.get(value)){valueMixin="@apply ".concat(value,";")}})}if(!valueMixin){return matchText}var mixinAsProperties=this._consumeCssProperties(""+valueMixin,rule),prefix=matchText.slice(0,matchText.indexOf("--")),mixinValues=this._cssTextToMap(mixinAsProperties,!0),combinedProps=mixinValues,mixinEntry=this._map.get(propertyName),oldProps=mixinEntry&&mixinEntry.properties;if(oldProps){// NOTE: since we use mixin, the map of properties is updated here
// and this is what we want.
combinedProps=Object.assign(Object.create(oldProps),mixinValues)}else{this._map.set(propertyName,combinedProps)}var out=[],p,v,needToInvalidate=!1;for(p in combinedProps){v=mixinValues[p];// if property not defined by current mixin, set initial
if(v===void 0){v="initial"}if(oldProps&&!(p in oldProps)){needToInvalidate=!0}out.push("".concat(propertyName).concat(MIXIN_VAR_SEP).concat(p,": ").concat(v))}if(needToInvalidate){this._invalidateMixinEntry(mixinEntry)}if(mixinEntry){mixinEntry.properties=combinedProps}// because the mixinMap is global, the mixin might conflict with
// a different scope's simple variable definition:
// Example:
// some style somewhere:
// --mixin1:{ ... }
// --mixin2: var(--mixin1);
// some other element:
// --mixin1: 10px solid red;
// --foo: var(--mixin1);
// In this case, we leave the original variable definition in place.
if(valueProperty){prefix="".concat(matchText,";").concat(prefix)}return"".concat(prefix).concat(out.join("; "),";")}}]);return ApplyShim}();_exports.$applyShimDefault=ApplyShim;/* exports */ /* eslint-disable no-self-assign */ApplyShim.prototype.detectMixin=ApplyShim.prototype.detectMixin;ApplyShim.prototype.transformStyle=ApplyShim.prototype.transformStyle;ApplyShim.prototype.transformCustomStyle=ApplyShim.prototype.transformCustomStyle;ApplyShim.prototype.transformRules=ApplyShim.prototype.transformRules;ApplyShim.prototype.transformRule=ApplyShim.prototype.transformRule;ApplyShim.prototype.transformTemplate=ApplyShim.prototype.transformTemplate;ApplyShim.prototype._separator=MIXIN_VAR_SEP;/* eslint-enable no-self-assign */Object.defineProperty(ApplyShim.prototype,"invalidCallback",{/** @return {?function(string)} */get:function get(){return invalidCallback},/** @param {?function(string)} cb */set:function set(cb){invalidCallback=cb}});var applyShim={default:ApplyShim};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$applyShim$1=applyShim;"use strict";/**
               * @const {!Object<string, !HTMLTemplateElement>}
               */var templateMap={};_exports.$templateMapDefault=templateMap;var templateMap$1={default:templateMap};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$templateMap=templateMap$1;"use strict";/*
               * Utilities for handling invalidating apply-shim mixins for a given template.
               *
               * The invalidation strategy involves keeping track of the "current" version of a template's mixins, and updating that count when a mixin is invalidated.
               * The template
               */ /** @const {string} */var CURRENT_VERSION="_applyShimCurrentVersion",NEXT_VERSION="_applyShimNextVersion",VALIDATING_VERSION="_applyShimValidatingVersion",promise=Promise.resolve();/** @const {string} */ /**
                                    * @param {string} elementName
                                    */function invalidate(elementName){var template=templateMap[elementName];if(template){invalidateTemplate(template)}}/**
   * This function can be called multiple times to mark a template invalid
   * and signal that the style inside must be regenerated.
   *
   * Use `startValidatingTemplate` to begin an asynchronous validation cycle.
   * During that cycle, call `templateIsValidating` to see if the template must
   * be revalidated
   * @param {HTMLTemplateElement} template
   */function invalidateTemplate(template){// default the current version to 0
template[CURRENT_VERSION]=template[CURRENT_VERSION]||0;// ensure the "validating for" flag exists
template[VALIDATING_VERSION]=template[VALIDATING_VERSION]||0;// increment the next version
template[NEXT_VERSION]=(template[NEXT_VERSION]||0)+1}/**
   * @param {string} elementName
   * @return {boolean}
   */function isValid(elementName){var template=templateMap[elementName];if(template){return templateIsValid(template)}return!0}/**
   * @param {HTMLTemplateElement} template
   * @return {boolean}
   */function templateIsValid(template){return template[CURRENT_VERSION]===template[NEXT_VERSION]}/**
   * @param {string} elementName
   * @return {boolean}
   */function isValidating(elementName){var template=templateMap[elementName];if(template){return templateIsValidating(template)}return!1}/**
   * Returns true if the template is currently invalid and `startValidating` has been called since the last invalidation.
   * If false, the template must be validated.
   * @param {HTMLTemplateElement} template
   * @return {boolean}
   */function templateIsValidating(template){return!templateIsValid(template)&&template[VALIDATING_VERSION]===template[NEXT_VERSION]}/**
   * the template is marked as `validating` for one microtask so that all instances
   * found in the tree crawl of `applyStyle` will update themselves,
   * but the template will only be updated once.
   * @param {string} elementName
  */function startValidating(elementName){var template=templateMap[elementName];startValidatingTemplate(template)}/**
   * Begin an asynchronous invalidation cycle.
   * This should be called after every validation of a template
   *
   * After one microtask, the template will be marked as valid until the next call to `invalidateTemplate`
   * @param {HTMLTemplateElement} template
   */function startValidatingTemplate(template){// remember that the current "next version" is the reason for this validation cycle
template[VALIDATING_VERSION]=template[NEXT_VERSION];// however, there only needs to be one async task to clear the counters
if(!template._validating){template._validating=!0;promise.then(function(){// sync the current version to let future invalidations cause a refresh cycle
template[CURRENT_VERSION]=template[NEXT_VERSION];template._validating=!1})}}/**
   * @return {boolean}
   */function elementsAreInvalid(){for(var elementName in templateMap){var template=templateMap[elementName];if(!templateIsValid(template)){return!0}}return!1}var applyShimUtils={invalidate:invalidate,invalidateTemplate:invalidateTemplate,isValid:isValid,templateIsValid:templateIsValid,isValidating:isValidating,templateIsValidating:templateIsValidating,startValidating:startValidating,startValidatingTemplate:startValidatingTemplate,elementsAreInvalid:elementsAreInvalid};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$applyShimUtils=applyShimUtils;"use strict";/** @type {Promise<void>} */var readyPromise=null,whenReady=window.HTMLImports&&window.HTMLImports.whenReady||null,resolveFn;/** @type {?function(?function())} */ /**
                * @param {?function()} callback
                */function documentWait(callback){requestAnimationFrame(function(){if(whenReady){whenReady(callback)}else{if(!readyPromise){readyPromise=new Promise(function(resolve){resolveFn=resolve});if("complete"===document.readyState){resolveFn()}else{document.addEventListener("readystatechange",function(){if("complete"===document.readyState){resolveFn()}})}}readyPromise.then(function(){callback&&callback()})}})}var documentWait$1={default:documentWait};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$documentWait=documentWait$1;"use strict";var CustomStyleProvider;_exports.CustomStyleProvider=CustomStyleProvider;var SEEN_MARKER="__seenByShadyCSS",CACHED_STYLE="__shadyCSSCachedStyle",transformFn=null,validateFn=null,CustomStyleInterface=/*#__PURE__*/function(){function CustomStyleInterface(){babelHelpers.classCallCheck(this,CustomStyleInterface);/** @type {!Array<!CustomStyleProvider>} */this.customStyles=[];this.enqueued=!1;// NOTE(dfreedm): use quotes here to prevent closure inlining to `function(){}`;
documentWait(function(){if(window.ShadyCSS.flushCustomStyles){window.ShadyCSS.flushCustomStyles()}})}/**
     * Queue a validation for new custom styles to batch style recalculations
     */babelHelpers.createClass(CustomStyleInterface,[{key:"enqueueDocumentValidation",value:function enqueueDocumentValidation(){if(this.enqueued||!validateFn){return}this.enqueued=!0;documentWait(validateFn)}/**
     * @param {!HTMLStyleElement} style
     */},{key:"addCustomStyle",value:function addCustomStyle(style){if(!style[SEEN_MARKER]){style[SEEN_MARKER]=!0;this.customStyles.push(style);this.enqueueDocumentValidation()}}/**
     * @param {!CustomStyleProvider} customStyle
     * @return {HTMLStyleElement}
     */},{key:"getStyleForCustomStyle",value:function getStyleForCustomStyle(customStyle){if(customStyle[CACHED_STYLE]){return customStyle[CACHED_STYLE]}var style;if(customStyle.getStyle){style=customStyle.getStyle()}else{style=customStyle}return style}/**
     * @return {!Array<!CustomStyleProvider>}
     */},{key:"processStyles",value:function processStyles(){for(var cs=this.customStyles,i=0,_customStyle;i<cs.length;i++){_customStyle=cs[i];if(_customStyle[CACHED_STYLE]){continue}var style=this.getStyleForCustomStyle(_customStyle);if(style){// HTMLImports polyfill may have cloned the style into the main document,
// which is referenced with __appliedElement.
var styleToTransform=/** @type {!HTMLStyleElement} */style.__appliedElement||style;if(transformFn){transformFn(styleToTransform)}_customStyle[CACHED_STYLE]=styleToTransform}}return cs}}]);return CustomStyleInterface}();_exports.$customStyleInterfaceDefault=CustomStyleInterface;/* eslint-disable no-self-assign */CustomStyleInterface.prototype.addCustomStyle=CustomStyleInterface.prototype.addCustomStyle;CustomStyleInterface.prototype.getStyleForCustomStyle=CustomStyleInterface.prototype.getStyleForCustomStyle;CustomStyleInterface.prototype.processStyles=CustomStyleInterface.prototype.processStyles;/* eslint-enable no-self-assign */Object.defineProperties(CustomStyleInterface.prototype,{transformCallback:{/** @return {?function(!HTMLStyleElement)} */get:function get(){return transformFn},/** @param {?function(!HTMLStyleElement)} fn */set:function set(fn){transformFn=fn}},validateCallback:{/** @return {?function()} */get:function get(){return validateFn},/**
     * @param {?function()} fn
     * @this {CustomStyleInterface}
     */set:function set(fn){var needsEnqueue=!1;if(!validateFn){needsEnqueue=!0}validateFn=fn;if(needsEnqueue){this.enqueueDocumentValidation()}}}});/** @typedef {{
     * customStyles: !Array<!CustomStyleProvider>,
     * addCustomStyle: function(!CustomStyleProvider),
     * getStyleForCustomStyle: function(!CustomStyleProvider): HTMLStyleElement,
     * findStyles: function(),
     * transformCallback: ?function(!HTMLStyleElement),
     * validateCallback: ?function()
     * }}
     */var CustomStyleInterfaceInterface={};_exports.CustomStyleInterfaceInterface=CustomStyleInterfaceInterface;var customStyleInterface={CustomStyleProvider:CustomStyleProvider,default:CustomStyleInterface,CustomStyleInterfaceInterface:CustomStyleInterfaceInterface};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$customStyleInterface$1=customStyleInterface;"use strict";var applyShim$1=new ApplyShim,ApplyShimInterface=/*#__PURE__*/function(){function ApplyShimInterface(){babelHelpers.classCallCheck(this,ApplyShimInterface);/** @type {?CustomStyleInterfaceInterface} */this.customStyleInterface=null;applyShim$1.invalidCallback=invalidate}babelHelpers.createClass(ApplyShimInterface,[{key:"ensure",value:function ensure(){var _this6=this;if(this.customStyleInterface){return}if(window.ShadyCSS.CustomStyleInterface){this.customStyleInterface=/** @type {!CustomStyleInterfaceInterface} */window.ShadyCSS.CustomStyleInterface;this.customStyleInterface.transformCallback=function(style){applyShim$1.transformCustomStyle(style)};this.customStyleInterface.validateCallback=function(){requestAnimationFrame(function(){if(_this6.customStyleInterface.enqueued){_this6.flushCustomStyles()}})}}}/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */},{key:"prepareTemplate",value:function prepareTemplate(template,elementName){this.ensure();if(elementHasBuiltCss(template)){return}templateMap[elementName]=template;var ast=applyShim$1.transformTemplate(template,elementName);// save original style ast to use for revalidating instances
template._styleAst=ast}},{key:"flushCustomStyles",value:function flushCustomStyles(){this.ensure();if(!this.customStyleInterface){return}var styles=this.customStyleInterface.processStyles();if(!this.customStyleInterface.enqueued){return}for(var i=0;i<styles.length;i++){var cs=styles[i],style=this.customStyleInterface.getStyleForCustomStyle(cs);if(style){applyShim$1.transformCustomStyle(style)}}this.customStyleInterface.enqueued=!1}/**
     * @param {HTMLElement} element
     * @param {Object=} properties
     */},{key:"styleSubtree",value:function styleSubtree(element,properties){this.ensure();if(properties){updateNativeProperties(element,properties)}if(element.shadowRoot){this.styleElement(element);for(var shadowChildren=/** @type {!ParentNode} */element.shadowRoot.children||element.shadowRoot.childNodes,i=0;i<shadowChildren.length;i++){this.styleSubtree(/** @type {HTMLElement} */shadowChildren[i])}}else{for(var children=element.children||element.childNodes,_i=0;_i<children.length;_i++){this.styleSubtree(/** @type {HTMLElement} */children[_i])}}}/**
     * @param {HTMLElement} element
     */},{key:"styleElement",value:function styleElement(element){this.ensure();var _getIsExtends=getIsExtends(element),is=_getIsExtends.is,template=templateMap[is];if(template&&elementHasBuiltCss(template)){return}if(template&&!templateIsValid(template)){// only revalidate template once
if(!templateIsValidating(template)){this.prepareTemplate(template,is);startValidatingTemplate(template)}// update this element instance
var _root=element.shadowRoot;if(_root){var style=/** @type {HTMLStyleElement} */_root.querySelector("style");if(style){// reuse the template's style ast, it has all the original css text
style.__cssRules=template._styleAst;style.textContent=toCssText(template._styleAst)}}}}/**
     * @param {Object=} properties
     */},{key:"styleDocument",value:function styleDocument(properties){this.ensure();this.styleSubtree(document.body,properties)}}]);return ApplyShimInterface}();if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){var applyShimInterface=new ApplyShimInterface,_CustomStyleInterface=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;/** @suppress {duplicate} */window.ShadyCSS={/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplate:function prepareTemplate(template,elementName,elementExtends){// eslint-disable-line no-unused-vars
applyShimInterface.flushCustomStyles();applyShimInterface.prepareTemplate(template,elementName)},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplateStyles:function prepareTemplateStyles(template,elementName,elementExtends){window.ShadyCSS.prepareTemplate(template,elementName,elementExtends)},/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */prepareTemplateDom:function prepareTemplateDom(template,elementName){},// eslint-disable-line no-unused-vars
/**
     * @param {!HTMLElement} element
     * @param {Object=} properties
     */styleSubtree:function styleSubtree(element,properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleSubtree(element,properties)},/**
     * @param {!HTMLElement} element
     */styleElement:function styleElement(element){applyShimInterface.flushCustomStyles();applyShimInterface.styleElement(element)},/**
     * @param {Object=} properties
     */styleDocument:function styleDocument(properties){applyShimInterface.flushCustomStyles();applyShimInterface.styleDocument(properties)},/**
     * @param {Element} element
     * @param {string} property
     * @return {string}
     */getComputedStyleValue:function getComputedStyleValue(element,property){return _getComputedStyleValue(element,property)},flushCustomStyles:function flushCustomStyles(){applyShimInterface.flushCustomStyles()},nativeCss:nativeCssVariables,nativeShadow:nativeShadow,cssBuild:cssBuild,disableRuntime:disableRuntime};if(_CustomStyleInterface){window.ShadyCSS.CustomStyleInterface=_CustomStyleInterface}}window.ShadyCSS.ApplyShim=applyShim$1;/**
                                         @license
                                         Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                                         This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                         The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                         The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                         Code distributed by Google as part of the polymer project is also
                                         subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                         */ /* eslint-disable no-unused-vars */ /**
                                                                                 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is replaced by the munged name for object[property]
                                                                                 * We cannot alias this function, so we have to use a small shim that has the same behavior when not compiling.
                                                                                 *
                                                                                 * @param {string} prop Property name
                                                                                 * @param {?Object} obj Reference object
                                                                                 * @return {string} Potentially renamed property name
                                                                                 */window.JSCompiler_renameProperty=function(prop,obj){return prop};/* eslint-enable */var CSS_URL_RX=/(url\()([^)]*)(\))/g,ABS_URL=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,workingURL,resolveDoc;/**
                 * Resolves the given URL against the provided `baseUri'.
                 *
                 * Note that this function performs no resolution for URLs that start
                 * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
                 * URL resolution, use `window.URL`.
                 *
                 * @param {string} url Input URL to resolve
                 * @param {?string=} baseURI Base URI to resolve the URL against
                 * @return {string} resolved URL
                 */function _resolveUrl(url,baseURI){if(url&&ABS_URL.test(url)){return url}if("//"===url){return url}// Lazy feature detection.
if(workingURL===void 0){workingURL=!1;try{var u=new URL("b","http://a");u.pathname="c%20d";workingURL="http://a/c%20d"===u.href}catch(e){// silently fail
}}if(!baseURI){baseURI=document.baseURI||window.location.href}if(workingURL){try{return new URL(url,baseURI).href}catch(e){// Bad url or baseURI structure. Do not attempt to resolve.
return url}}// Fallback to creating an anchor into a disconnected document.
if(!resolveDoc){resolveDoc=document.implementation.createHTMLDocument("temp");resolveDoc.base=resolveDoc.createElement("base");resolveDoc.head.appendChild(resolveDoc.base);resolveDoc.anchor=resolveDoc.createElement("a");resolveDoc.body.appendChild(resolveDoc.anchor)}resolveDoc.base.href=baseURI;resolveDoc.anchor.href=url;return resolveDoc.anchor.href||url}/**
   * Resolves any relative URL's in the given CSS text against the provided
   * `ownerDocument`'s `baseURI`.
   *
   * @param {string} cssText CSS text to process
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Processed CSS text with resolved URL's
   */function resolveCss(cssText,baseURI){return cssText.replace(CSS_URL_RX,function(m,pre,url,post){return pre+"'"+_resolveUrl(url.replace(/["']/g,""),baseURI)+"'"+post})}/**
   * Returns a path from a given `url`. The path includes the trailing
   * `/` from the url.
   *
   * @param {string} url Input URL to transform
   * @return {string} resolved path
   */function pathFromUrl(url){return url.substring(0,url.lastIndexOf("/")+1)}var resolveUrl$1={resolveUrl:_resolveUrl,resolveCss:resolveCss,pathFromUrl:pathFromUrl};_exports.$resolveUrl=resolveUrl$1;var useShadow=!window.ShadyDOM;_exports.useShadow=useShadow;var useNativeCSSProperties=!!(!window.ShadyCSS||window.ShadyCSS.nativeCss);_exports.useNativeCSSProperties=useNativeCSSProperties;var useNativeCustomElements=!window.customElements.polyfillWrapFlushCallback;/**
                                                                                          * Globally settable property that is automatically assigned to
                                                                                          * `ElementMixin` instances, useful for binding in templates to
                                                                                          * make URL's relative to an application's root.  Defaults to the main
                                                                                          * document URL, but can be overridden by users.  It may be useful to set
                                                                                          * `rootPath` to provide a stable application mount path when
                                                                                          * using client side routing.
                                                                                          */_exports.useNativeCustomElements=useNativeCustomElements;var rootPath=pathFromUrl(document.baseURI||window.location.href);/**
                                                                              * Sets the global rootPath property used by `ElementMixin` and
                                                                              * available via `rootPath`.
                                                                              *
                                                                              * @param {string} path The new root path
                                                                              * @return {void}
                                                                              */_exports.rootPath=rootPath;var setRootPath=function setRootPath(path){_exports.rootPath=rootPath=path};/**
    * A global callback used to sanitize any value before inserting it into the DOM.
    * The callback signature is:
    *
    *  function sanitizeDOMValue(value, name, type, node) { ... }
    *
    * Where:
    *
    * `value` is the value to sanitize.
    * `name` is the name of an attribute or property (for example, href).
    * `type` indicates where the value is being inserted: one of property, attribute, or text.
    * `node` is the node where the value is being inserted.
    *
    * @type {(function(*,string,string,Node):*)|undefined}
    */_exports.setRootPath=setRootPath;var sanitizeDOMValue=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;/**
                                                                                               * Sets the global sanitizeDOMValue available via this module's exported
                                                                                               * `sanitizeDOMValue` variable.
                                                                                               *
                                                                                               * @param {(function(*,string,string,Node):*)|undefined} newSanitizeDOMValue the global sanitizeDOMValue callback
                                                                                               * @return {void}
                                                                                               */_exports.sanitizeDOMValue=sanitizeDOMValue;var setSanitizeDOMValue=function setSanitizeDOMValue(newSanitizeDOMValue){_exports.sanitizeDOMValue=sanitizeDOMValue=newSanitizeDOMValue};/**
    * Globally settable property to make Polymer Gestures use passive TouchEvent listeners when recognizing gestures.
    * When set to `true`, gestures made from touch will not be able to prevent scrolling, allowing for smoother
    * scrolling performance.
    * Defaults to `false` for backwards compatibility.
    */_exports.setSanitizeDOMValue=setSanitizeDOMValue;var passiveTouchGestures=!1;/**
                                          * Sets `passiveTouchGestures` globally for all elements using Polymer Gestures.
                                          *
                                          * @param {boolean} usePassive enable or disable passive touch gestures globally
                                          * @return {void}
                                          */_exports.passiveTouchGestures=passiveTouchGestures;var setPassiveTouchGestures=function setPassiveTouchGestures(usePassive){_exports.passiveTouchGestures=passiveTouchGestures=usePassive};/**
    * Setting to ensure Polymer template evaluation only occurs based on tempates
    * defined in trusted script.  When true, `<dom-module>` re-registration is
    * disallowed, `<dom-bind>` is disabled, and `<dom-if>`/`<dom-repeat>`
    * templates will only evaluate in the context of a trusted element template.
    */_exports.setPassiveTouchGestures=setPassiveTouchGestures;var strictTemplatePolicy=!1;/**
                                          * Sets `strictTemplatePolicy` globally for all elements
                                          *
                                          * @param {boolean} useStrictPolicy enable or disable strict template policy
                                          *   globally
                                          * @return {void}
                                          */_exports.strictTemplatePolicy=strictTemplatePolicy;var setStrictTemplatePolicy=function setStrictTemplatePolicy(useStrictPolicy){_exports.strictTemplatePolicy=strictTemplatePolicy=useStrictPolicy};/**
    * Setting to enable dom-module lookup from Polymer.Element.  By default,
    * templates must be defined in script using the `static get template()`
    * getter and the `html` tag function.  To enable legacy loading of templates
    * via dom-module, set this flag to true.
    */_exports.setStrictTemplatePolicy=setStrictTemplatePolicy;var allowTemplateFromDomModule=!1;/**
                                                * Sets `lookupTemplateFromDomModule` globally for all elements
                                                *
                                                * @param {boolean} allowDomModule enable or disable template lookup
                                                *   globally
                                                * @return {void}
                                                */_exports.allowTemplateFromDomModule=allowTemplateFromDomModule;var setAllowTemplateFromDomModule=function setAllowTemplateFromDomModule(allowDomModule){_exports.allowTemplateFromDomModule=allowTemplateFromDomModule=allowDomModule};/**
    * Setting to skip processing style includes and re-writing urls in css styles.
    * Normally "included" styles are pulled into the element and all urls in styles
    * are re-written to be relative to the containing script url.
    * If no includes or relative urls are used in styles, these steps can be
    * skipped as an optimization.
    */_exports.setAllowTemplateFromDomModule=setAllowTemplateFromDomModule;var legacyOptimizations=!1;/**
                                         * Sets `legacyOptimizations` globally for all elements to enable optimizations
                                         * when only legacy based elements are used.
                                         *
                                         * @param {boolean} useLegacyOptimizations enable or disable legacy optimizations
                                         * includes and url rewriting
                                         * @return {void}
                                         */_exports.legacyOptimizations=legacyOptimizations;var setLegacyOptimizations=function setLegacyOptimizations(useLegacyOptimizations){_exports.legacyOptimizations=legacyOptimizations=useLegacyOptimizations};/**
    * Setting to perform initial rendering synchronously when running under ShadyDOM.
    * This matches the behavior of Polymer 1.
    */_exports.setLegacyOptimizations=setLegacyOptimizations;var syncInitialRender=!1;/**
                                       * Sets `syncInitialRender` globally for all elements to enable synchronous
                                       * initial rendering.
                                       *
                                       * @param {boolean} useSyncInitialRender enable or disable synchronous initial
                                       * rendering globally.
                                       * @return {void}
                                       */_exports.syncInitialRender=syncInitialRender;var setSyncInitialRender=function setSyncInitialRender(useSyncInitialRender){_exports.syncInitialRender=syncInitialRender=useSyncInitialRender};/**
    * Setting to cancel synthetic click events fired by older mobile browsers. Modern browsers
    * no longer fire synthetic click events, and the cancellation behavior can interfere
    * when programmatically clicking on elements.
    */_exports.setSyncInitialRender=setSyncInitialRender;var cancelSyntheticClickEvents=!0;/**
                                               * Sets `setCancelSyntheticEvents` globally for all elements to cancel synthetic click events.
                                               *
                                               * @param {boolean} useCancelSyntheticClickEvents enable or disable cancelling synthetic
                                               * events
                                               * @return {void}
                                               */_exports.cancelSyntheticClickEvents=cancelSyntheticClickEvents;var setCancelSyntheticClickEvents=function setCancelSyntheticClickEvents(useCancelSyntheticClickEvents){_exports.cancelSyntheticClickEvents=cancelSyntheticClickEvents=useCancelSyntheticClickEvents};_exports.setCancelSyntheticClickEvents=setCancelSyntheticClickEvents;var settings={useShadow:useShadow,useNativeCSSProperties:useNativeCSSProperties,useNativeCustomElements:useNativeCustomElements,get rootPath(){return rootPath},setRootPath:setRootPath,get sanitizeDOMValue(){return sanitizeDOMValue},setSanitizeDOMValue:setSanitizeDOMValue,get passiveTouchGestures(){return passiveTouchGestures},setPassiveTouchGestures:setPassiveTouchGestures,get strictTemplatePolicy(){return strictTemplatePolicy},setStrictTemplatePolicy:setStrictTemplatePolicy,get allowTemplateFromDomModule(){return allowTemplateFromDomModule},setAllowTemplateFromDomModule:setAllowTemplateFromDomModule,get legacyOptimizations(){return legacyOptimizations},setLegacyOptimizations:setLegacyOptimizations,get syncInitialRender(){return syncInitialRender},setSyncInitialRender:setSyncInitialRender,get cancelSyntheticClickEvents(){return cancelSyntheticClickEvents},setCancelSyntheticClickEvents:setCancelSyntheticClickEvents};_exports.$settings=settings;var dedupeId=0;/**
                   * @constructor
                   * @extends {Function}
                   * @private
                   */function MixinFunction(){}/** @type {(WeakMap | undefined)} */MixinFunction.prototype.__mixinApplications;/** @type {(Object | undefined)} */MixinFunction.prototype.__mixinSet;/* eslint-disable valid-jsdoc */ /**
                                                                      * Wraps an ES6 class expression mixin such that the mixin is only applied
                                                                      * if it has not already been applied its base argument. Also memoizes mixin
                                                                      * applications.
                                                                      *
                                                                      * @template T
                                                                      * @param {T} mixin ES6 class expression mixin to wrap
                                                                      * @return {T}
                                                                      * @suppress {invalidCasts}
                                                                      */var dedupingMixin=function dedupingMixin(mixin){var mixinApplications=/** @type {!MixinFunction} */mixin.__mixinApplications;if(!mixinApplications){mixinApplications=new WeakMap;/** @type {!MixinFunction} */mixin.__mixinApplications=mixinApplications}// maintain a unique id for each mixin
var mixinDedupeId=dedupeId++;function dedupingMixin(base){var baseSet=/** @type {!MixinFunction} */base.__mixinSet;if(baseSet&&baseSet[mixinDedupeId]){return base}var map=mixinApplications,extended=map.get(base);if(!extended){extended=/** @type {!Function} */mixin(base);map.set(base,extended)}// copy inherited mixin set from the extended class, or the base class
// NOTE: we avoid use of Set here because some browser (IE11)
// cannot extend a base Set via the constructor.
var mixinSet=Object.create(/** @type {!MixinFunction} */extended.__mixinSet||baseSet||null);mixinSet[mixinDedupeId]=!0;/** @type {!MixinFunction} */extended.__mixinSet=mixinSet;return extended}return dedupingMixin};/* eslint-enable valid-jsdoc */_exports.dedupingMixin=dedupingMixin;var mixin={dedupingMixin:dedupingMixin};_exports.$mixin=mixin;var modules={},lcModules={};/**
                     * Sets a dom-module into the global registry by id.
                     *
                     * @param {string} id dom-module id
                     * @param {DomModule} module dom-module instance
                     * @return {void}
                     */function setModule(id,module){// store id separate from lowercased id so that
// in all cases mixedCase id will stored distinctly
// and lowercase version is a fallback
modules[id]=lcModules[id.toLowerCase()]=module}/**
   * Retrieves a dom-module from the global registry by id.
   *
   * @param {string} id dom-module id
   * @return {DomModule!} dom-module instance
   */function findModule(id){return modules[id]||lcModules[id.toLowerCase()]}function styleOutsideTemplateCheck(inst){if(inst.querySelector("style")){console.warn("dom-module %s has style outside template",inst.id)}}/**
   * The `dom-module` element registers the dom it contains to the name given
   * by the module's id attribute. It provides a unified database of dom
   * accessible via its static `import` API.
   *
   * A key use case of `dom-module` is for providing custom element `<template>`s
   * via HTML imports that are parsed by the native HTML parser, that can be
   * relocated during a bundling pass and still looked up by `id`.
   *
   * Example:
   *
   *     <dom-module id="foo">
   *       <img src="stuff.png">
   *     </dom-module>
   *
   * Then in code in some other location that cannot access the dom-module above
   *
   *     let img = customElements.get('dom-module').import('foo', 'img');
   *
   * @customElement
   * @extends HTMLElement
   * @summary Custom element that provides a registry of relocatable DOM content
   *   by `id` that is agnostic to bundling.
   * @unrestricted
   */var DomModule=/*#__PURE__*/function(_HTMLElement){babelHelpers.inherits(DomModule,_HTMLElement);function DomModule(){babelHelpers.classCallCheck(this,DomModule);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DomModule).apply(this,arguments))}babelHelpers.createClass(DomModule,[{key:"attributeChangedCallback",/* eslint-disable no-unused-vars */ /**
                                         * @param {string} name Name of attribute.
                                         * @param {?string} old Old value of attribute.
                                         * @param {?string} value Current value of attribute.
                                         * @param {?string} namespace Attribute namespace.
                                         * @return {void}
                                         * @override
                                         */value:function attributeChangedCallback(name,old,value,namespace){if(old!==value){this.register()}}/* eslint-enable no-unused-args */ /**
                                        * The absolute URL of the original location of this `dom-module`.
                                        *
                                        * This value will differ from this element's `ownerDocument` in the
                                        * following ways:
                                        * - Takes into account any `assetpath` attribute added during bundling
                                        *   to indicate the original location relative to the bundled location
                                        * - Uses the HTMLImports polyfill's `importForElement` API to ensure
                                        *   the path is relative to the import document's location since
                                        *   `ownerDocument` is not currently polyfilled
                                        */},{key:"register",/**
     * Registers the dom-module at a given id. This method should only be called
     * when a dom-module is imperatively created. For
     * example, `document.createElement('dom-module').register('foo')`.
     * @param {string=} id The id at which to register the dom-module.
     * @return {void}
     */value:function register(id){id=id||this.id;if(id){// Under strictTemplatePolicy, reject and null out any re-registered
// dom-module since it is ambiguous whether first-in or last-in is trusted
if(strictTemplatePolicy&&findModule(id)!==void 0){setModule(id,null);throw new Error("strictTemplatePolicy: dom-module ".concat(id," re-registered"))}this.id=id;setModule(id,this);styleOutsideTemplateCheck(this)}}},{key:"assetpath",get:function get(){// Don't override existing assetpath.
if(!this.__assetpath){// note: assetpath set via an attribute must be relative to this
// element's location; accomodate polyfilled HTMLImports
var owner=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,url=_resolveUrl(this.getAttribute("assetpath")||"",owner.baseURI);this.__assetpath=pathFromUrl(url)}return this.__assetpath}}],[{key:"import",/**
     * Retrieves the element specified by the css `selector` in the module
     * registered by `id`. For example, this.import('foo', 'img');
     * @param {string} id The id of the dom-module in which to search.
     * @param {string=} selector The css selector by which to find the element.
     * @return {Element} Returns the element which matches `selector` in the
     * module registered at the specified `id`.
     *
     * @export
     * @nocollapse Referred to indirectly in style-gather.js
     */value:function _import(id,selector){if(id){var m=findModule(id);if(m&&selector){return m.querySelector(selector)}return m}return null}},{key:"observedAttributes",/** @override */get:function get(){return["id"]}}]);return DomModule}(babelHelpers.wrapNativeSuper(HTMLElement));_exports.DomModule=DomModule;DomModule.prototype.modules=modules;customElements.define("dom-module",DomModule);var domModule={DomModule:DomModule};_exports.$domModule=domModule;var MODULE_STYLE_LINK_SELECTOR="link[rel=import][type~=css]",INCLUDE_ATTR="include",SHADY_UNSCOPED_ATTR="shady-unscoped";/**
                                               * @param {string} moduleId .
                                               * @return {?DomModule} .
                                               */function importModule(moduleId){return(/** @type {?DomModule} */DomModule.import(moduleId))}function styleForImport(importDoc){// NOTE: polyfill affordance.
// under the HTMLImports polyfill, there will be no 'body',
// but the import pseudo-doc can be used directly.
var container=importDoc.body?importDoc.body:importDoc,importCss=resolveCss(container.textContent,importDoc.baseURI),style=document.createElement("style");style.textContent=importCss;return style}/** @typedef {{assetpath: string}} */var templateWithAssetPath;// eslint-disable-line no-unused-vars
/**
 * Returns a list of <style> elements in a space-separated list of `dom-module`s.
 *
 * @function
 * @param {string} moduleIds List of dom-module id's within which to
 * search for css.
 * @return {!Array<!HTMLStyleElement>} Array of contained <style> elements
 */function stylesFromModules(moduleIds){for(var modules=moduleIds.trim().split(/\s+/),styles=[],i=0;i<modules.length;i++){styles.push.apply(styles,babelHelpers.toConsumableArray(stylesFromModule(modules[i])))}return styles}/**
   * Returns a list of <style> elements in a given `dom-module`.
   * Styles in a `dom-module` can come either from `<style>`s within the
   * first `<template>`, or else from one or more
   * `<link rel="import" type="css">` links outside the template.
   *
   * @param {string} moduleId dom-module id to gather styles from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   */function stylesFromModule(moduleId){var m=importModule(moduleId);if(!m){console.warn("Could not find style data in module named",moduleId);return[]}if(m._styles===void 0){var styles=[];// module imports: <link rel="import" type="css">
styles.push.apply(styles,babelHelpers.toConsumableArray(_stylesFromModuleImports(m)));// include css from the first template in the module
var template=/** @type {?HTMLTemplateElement} */m.querySelector("template");if(template){styles.push.apply(styles,babelHelpers.toConsumableArray(stylesFromTemplate(template,/** @type {templateWithAssetPath} */m.assetpath)))}m._styles=styles}return m._styles}/**
   * Returns the `<style>` elements within a given template.
   *
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string=} baseURI baseURI for style content
   * @return {!Array<!HTMLStyleElement>} Array of styles
   */function stylesFromTemplate(template,baseURI){if(!template._styles){for(var styles=[],e$=template.content.querySelectorAll("style"),i=0;i<e$.length;i++){var e=e$[i],include=e.getAttribute(INCLUDE_ATTR);// support style sharing by allowing styles to "include"
// other dom-modules that contain styling
if(include){styles.push.apply(styles,babelHelpers.toConsumableArray(stylesFromModules(include).filter(function(item,index,self){return self.indexOf(item)===index})))}if(baseURI){e.textContent=resolveCss(e.textContent,/** @type {string} */baseURI)}styles.push(e)}template._styles=styles}return template._styles}/**
   * Returns a list of <style> elements  from stylesheets loaded via `<link rel="import" type="css">` links within the specified `dom-module`.
   *
   * @param {string} moduleId Id of `dom-module` to gather CSS from
   * @return {!Array<!HTMLStyleElement>} Array of contained styles.
   */function stylesFromModuleImports(moduleId){var m=importModule(moduleId);return m?_stylesFromModuleImports(m):[]}/**
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {!Array<!HTMLStyleElement>} Array of contained styles
   */function _stylesFromModuleImports(module){for(var styles=[],p$=module.querySelectorAll(MODULE_STYLE_LINK_SELECTOR),i=0,_p5;i<p$.length;i++){_p5=p$[i];if(_p5.import){var importDoc=_p5.import,unscoped=_p5.hasAttribute(SHADY_UNSCOPED_ATTR);if(unscoped&&!importDoc._unscopedStyle){var style=styleForImport(importDoc);style.setAttribute(SHADY_UNSCOPED_ATTR,"");importDoc._unscopedStyle=style}else if(!importDoc._style){importDoc._style=styleForImport(importDoc)}styles.push(unscoped?importDoc._unscopedStyle:importDoc._style)}}return styles}/**
   *
   * Returns CSS text of styles in a space-separated list of `dom-module`s.
   * Note: This method is deprecated, use `stylesFromModules` instead.
   *
   * @deprecated
   * @param {string} moduleIds List of dom-module id's within which to
   * search for css.
   * @return {string} Concatenated CSS content from specified `dom-module`s
   */function cssFromModules(moduleIds){for(var modules=moduleIds.trim().split(/\s+/),cssText="",i=0;i<modules.length;i++){cssText+=cssFromModule(modules[i])}return cssText}/**
   * Returns CSS text of styles in a given `dom-module`.  CSS in a `dom-module`
   * can come either from `<style>`s within the first `<template>`, or else
   * from one or more `<link rel="import" type="css">` links outside the
   * template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromModule` instead.
   *
   * @deprecated
   * @param {string} moduleId dom-module id to gather styles from
   * @return {string} Concatenated CSS content from specified `dom-module`
   */function cssFromModule(moduleId){var m=importModule(moduleId);if(m&&m._cssText===void 0){// module imports: <link rel="import" type="css">
var cssText=_cssFromModuleImports(m),t=/** @type {?HTMLTemplateElement} */m.querySelector("template");// include css from the first template in the module
if(t){cssText+=cssFromTemplate(t,/** @type {templateWithAssetPath} */m.assetpath)}m._cssText=cssText||null}if(!m){console.warn("Could not find style data in module named",moduleId)}return m&&m._cssText||""}/**
   * Returns CSS text of `<styles>` within a given template.
   *
   * Any `<styles>` processed are removed from their original location.
   * Note: This method is deprecated, use `styleFromTemplate` instead.
   *
   * @deprecated
   * @param {!HTMLTemplateElement} template Template to gather styles from
   * @param {string} baseURI Base URI to resolve the URL against
   * @return {string} Concatenated CSS content from specified template
   */function cssFromTemplate(template,baseURI){// if element is a template, get content from its .content
for(var cssText="",e$=stylesFromTemplate(template,baseURI),i=0,e;i<e$.length;i++){e=e$[i];if(e.parentNode){e.parentNode.removeChild(e)}cssText+=e.textContent}return cssText}/**
   * Returns CSS text from stylesheets loaded via `<link rel="import" type="css">`
   * links within the specified `dom-module`.
   *
   * Note: This method is deprecated, use `stylesFromModuleImports` instead.
   *
   * @deprecated
   *
   * @param {string} moduleId Id of `dom-module` to gather CSS from
   * @return {string} Concatenated CSS content from links in specified `dom-module`
   */function cssFromModuleImports(moduleId){var m=importModule(moduleId);return m?_cssFromModuleImports(m):""}/**
   * @deprecated
   * @param {!HTMLElement} module dom-module element that could contain `<link rel="import" type="css">` styles
   * @return {string} Concatenated CSS content from links in the dom-module
   */function _cssFromModuleImports(module){for(var cssText="",styles=_stylesFromModuleImports(module),i=0;i<styles.length;i++){cssText+=styles[i].textContent}return cssText}var styleGather={stylesFromModules:stylesFromModules,stylesFromModule:stylesFromModule,stylesFromTemplate:stylesFromTemplate,stylesFromModuleImports:stylesFromModuleImports,cssFromModules:cssFromModules,cssFromModule:cssFromModule,cssFromTemplate:cssFromTemplate,cssFromModuleImports:cssFromModuleImports};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /* eslint-disable valid-jsdoc */ /**
                                        * Node wrapper to ensure ShadowDOM safe operation regardless of polyfill
                                        * presence or mode. Note that with the introduction of `ShadyDOM.noPatch`,
                                        * a node wrapper must be used to access ShadowDOM API.
                                        * This is similar to using `Polymer.dom` but relies exclusively
                                        * on the presence of the ShadyDOM polyfill rather than requiring the loading
                                        * of legacy (Polymer.dom) API.
                                        * @type {function(Node):Node}
                                        */_exports.$styleGather=styleGather;var wrap$1=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?function(n){return ShadyDOM.patch(n)}:function(n){return n};_exports.wrap=wrap$1;var wrap$2={wrap:wrap$1};_exports.$wrap=wrap$2;function isPath(path){return 0<=path.indexOf(".")}/**
   * Returns the root property name for the given path.
   *
   * Example:
   *
   * ```
   * root('foo.bar.baz') // 'foo'
   * root('foo')         // 'foo'
   * ```
   *
   * @param {string} path Path string
   * @return {string} Root property name
   */function root(path){var dotIndex=path.indexOf(".");if(-1===dotIndex){return path}return path.slice(0,dotIndex)}/**
   * Given `base` is `foo.bar`, `foo` is an ancestor, `foo.bar` is not
   * Returns true if the given path is an ancestor of the base path.
   *
   * Example:
   *
   * ```
   * isAncestor('foo.bar', 'foo')         // true
   * isAncestor('foo.bar', 'foo.bar')     // false
   * isAncestor('foo.bar', 'foo.bar.baz') // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is an ancestor of `base`.
   */function isAncestor(base,path){//     base.startsWith(path + '.');
return 0===base.indexOf(path+".")}/**
   * Given `base` is `foo.bar`, `foo.bar.baz` is an descendant
   *
   * Example:
   *
   * ```
   * isDescendant('foo.bar', 'foo.bar.baz') // true
   * isDescendant('foo.bar', 'foo.bar')     // false
   * isDescendant('foo.bar', 'foo')         // false
   * ```
   *
   * @param {string} base Path string to test against.
   * @param {string} path Path string to test.
   * @return {boolean} True if `path` is a descendant of `base`.
   */function isDescendant(base,path){//     path.startsWith(base + '.');
return 0===path.indexOf(base+".")}/**
   * Replaces a previous base path with a new base path, preserving the
   * remainder of the path.
   *
   * User must ensure `path` has a prefix of `base`.
   *
   * Example:
   *
   * ```
   * translate('foo.bar', 'zot', 'foo.bar.baz') // 'zot.baz'
   * ```
   *
   * @param {string} base Current base string to remove
   * @param {string} newBase New base string to replace with
   * @param {string} path Path to translate
   * @return {string} Translated string
   */function translate(base,newBase,path){return newBase+path.slice(base.length)}/**
   * @param {string} base Path string to test against
   * @param {string} path Path string to test
   * @return {boolean} True if `path` is equal to `base`
   */function matches(base,path){return base===path||isAncestor(base,path)||isDescendant(base,path)}/**
   * Converts array-based paths to flattened path.  String-based paths
   * are returned as-is.
   *
   * Example:
   *
   * ```
   * normalize(['foo.bar', 0, 'baz'])  // 'foo.bar.0.baz'
   * normalize('foo.bar.0.baz')        // 'foo.bar.0.baz'
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {string} Flattened path
   */function normalize(path){if(Array.isArray(path)){for(var parts=[],i=0,args;i<path.length;i++){args=path[i].toString().split(".");for(var j=0;j<args.length;j++){parts.push(args[j])}}return parts.join(".")}else{return path}}/**
   * Splits a path into an array of property names. Accepts either arrays
   * of path parts or strings.
   *
   * Example:
   *
   * ```
   * split(['foo.bar', 0, 'baz'])  // ['foo', 'bar', '0', 'baz']
   * split('foo.bar.0.baz')        // ['foo', 'bar', '0', 'baz']
   * ```
   *
   * @param {string | !Array<string|number>} path Input path
   * @return {!Array<string>} Array of path parts
   * @suppress {checkTypes}
   */function split(path){if(Array.isArray(path)){return normalize(path).split(".")}return path.toString().split(".")}/**
   * Reads a value from a path.  If any sub-property in the path is `undefined`,
   * this method returns `undefined` (will never throw.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to read
   * @param {Object=} info If an object is provided to `info`, the normalized
   *  (flattened) path will be set to `info.path`.
   * @return {*} Value at path, or `undefined` if the path could not be
   *  fully dereferenced.
   */function _get(root,path,info){// Loop over path parts[0..n-1] and dereference
for(var prop=root,parts=split(path),i=0;i<parts.length;i++){if(!prop){return}var part=parts[i];prop=prop[part]}if(info){info.path=parts.join(".")}return prop}/**
   * Sets a value to a path.  If any sub-property in the path is `undefined`,
   * this method will no-op.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to set
   * @param {*} value Value to set to path
   * @return {string | undefined} The normalized version of the input path
   */function _set(root,path,value){var prop=root,parts=split(path),last=parts[parts.length-1];if(1<parts.length){// Loop over path parts[0..n-2] and dereference
for(var i=0,part;i<parts.length-1;i++){part=parts[i];prop=prop[part];if(!prop){return}}// Set value to object at end of path
prop[last]=value}else{// Simple property set
prop[path]=value}return parts.join(".")}/**
   * Returns true if the given string is a structured data path (has dots).
   *
   * This function is deprecated.  Use `isPath` instead.
   *
   * Example:
   *
   * ```
   * isDeep('foo.bar.baz') // true
   * isDeep('foo')         // false
   * ```
   *
   * @deprecated
   * @param {string} path Path string
   * @return {boolean} True if the string contained one or more dots
   */var isDeep=isPath;_exports.isDeep=isDeep;var path={isPath:isPath,root:root,isAncestor:isAncestor,isDescendant:isDescendant,translate:translate,matches:matches,normalize:normalize,split:split,get:_get,set:_set,isDeep:isDeep};_exports.$path=path;var caseMap={},DASH_TO_CAMEL=/-[a-z]/g,CAMEL_TO_DASH=/([A-Z])/g;/**
                                   * @fileoverview Module with utilities for converting between "dash-case" and
                                   * "camelCase" identifiers.
                                   */ /**
                                       * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
                                       * (e.g. `fooBarBaz`).
                                       *
                                       * @param {string} dash Dash-case identifier
                                       * @return {string} Camel-case representation of the identifier
                                       */function dashToCamelCase(dash){return caseMap[dash]||(caseMap[dash]=0>dash.indexOf("-")?dash:dash.replace(DASH_TO_CAMEL,function(m){return m[1].toUpperCase()}))}/**
   * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
   * (e.g. `foo-bar-baz`).
   *
   * @param {string} camel Camel-case identifier
   * @return {string} Dash-case representation of the identifier
   */function camelToDashCase(camel){return caseMap[camel]||(caseMap[camel]=camel.replace(CAMEL_TO_DASH,"-$1").toLowerCase())}var caseMap$1={dashToCamelCase:dashToCamelCase,camelToDashCase:camelToDashCase};_exports.$caseMap=caseMap$1;var microtaskCurrHandle=0,microtaskLastHandle=0,microtaskCallbacks=[],microtaskNodeContent=0,microtaskNode=document.createTextNode("");new window.MutationObserver(microtaskFlush).observe(microtaskNode,{characterData:!0});function microtaskFlush(){for(var len=microtaskCallbacks.length,i=0,cb;i<len;i++){cb=microtaskCallbacks[i];if(cb){try{cb()}catch(e){setTimeout(function(){throw e})}}}microtaskCallbacks.splice(0,len);microtaskLastHandle+=len}/**
   * Async interface wrapper around `setTimeout`.
   *
   * @namespace
   * @summary Async interface wrapper around `setTimeout`.
   */var timeOut={/**
   * Returns a sub-module with the async interface providing the provided
   * delay.
   *
   * @memberof timeOut
   * @param {number=} delay Time to wait before calling callbacks in ms
   * @return {!AsyncInterface} An async timeout interface
   */after:function after(delay){return{run:function run(fn){return window.setTimeout(fn,delay)},cancel:function cancel(handle){window.clearTimeout(handle)}}},/**
   * Enqueues a function called in the next task.
   *
   * @memberof timeOut
   * @param {!Function} fn Callback to run
   * @param {number=} delay Delay in milliseconds
   * @return {number} Handle used for canceling task
   */run:function run(fn,delay){return window.setTimeout(fn,delay)},/**
   * Cancels a previously enqueued `timeOut` callback.
   *
   * @memberof timeOut
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel:function cancel(handle){window.clearTimeout(handle)}};_exports.timeOut=timeOut;var animationFrame={/**
   * Enqueues a function called at `requestAnimationFrame` timing.
   *
   * @memberof animationFrame
   * @param {function(number):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */run:function run(fn){return window.requestAnimationFrame(fn)},/**
   * Cancels a previously enqueued `animationFrame` callback.
   *
   * @memberof animationFrame
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel:function cancel(handle){window.cancelAnimationFrame(handle)}};_exports.animationFrame=animationFrame;var idlePeriod={/**
   * Enqueues a function called at `requestIdleCallback` timing.
   *
   * @memberof idlePeriod
   * @param {function(!IdleDeadline):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */run:function run(fn){return window.requestIdleCallback?window.requestIdleCallback(fn):window.setTimeout(fn,16)},/**
   * Cancels a previously enqueued `idlePeriod` callback.
   *
   * @memberof idlePeriod
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel:function cancel(handle){window.cancelIdleCallback?window.cancelIdleCallback(handle):window.clearTimeout(handle)}};_exports.idlePeriod=idlePeriod;var microTask={/**
   * Enqueues a function called at microtask timing.
   *
   * @memberof microTask
   * @param {!Function=} callback Callback to run
   * @return {number} Handle used for canceling task
   */run:function run(callback){microtaskNode.textContent=microtaskNodeContent++;microtaskCallbacks.push(callback);return microtaskCurrHandle++},/**
   * Cancels a previously enqueued `microTask` callback.
   *
   * @memberof microTask
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel:function cancel(handle){var idx=handle-microtaskLastHandle;if(0<=idx){if(!microtaskCallbacks[idx]){throw new Error("invalid async handle: "+handle)}microtaskCallbacks[idx]=null}}};_exports.microTask=microTask;var async={timeOut:timeOut,animationFrame:animationFrame,idlePeriod:idlePeriod,microTask:microTask};_exports.$async=async;var microtask=microTask,PropertiesChanged=dedupingMixin(/**
                                                 * @template T
                                                 * @param {function(new:T)} superClass Class to apply mixin to.
                                                 * @return {function(new:T)} superClass with mixin applied.
                                                 */function(superClass){/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_PropertiesChanged}
   * @unrestricted
   */var PropertiesChanged=/*#__PURE__*/function(_superClass){babelHelpers.inherits(PropertiesChanged,_superClass);babelHelpers.createClass(PropertiesChanged,[{key:"_createPropertyAccessor",//eslint-disable-line no-unused-vars
/**
     * Creates a setter/getter pair for the named property with its own
     * local storage.  The getter returns the value in the local storage,
     * and the setter calls `_setProperty`, which updates the local storage
     * for the property and enqueues a `_propertiesChanged` callback.
     *
     * This method may be called on a prototype or an instance.  Calling
     * this method may overwrite a property value that already exists on
     * the prototype/instance by creating the accessor.
     *
     * @param {string} property Name of the property
     * @param {boolean=} readOnly When true, no setter is created; the
     *   protected `_setProperty` function must be used to set the property
     * @return {void}
     * @protected
     * @override
     */value:function _createPropertyAccessor(property,readOnly){this._addPropertyToAttributeMap(property);if(!this.hasOwnProperty("__dataHasAccessor")){this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)}if(!this.__dataHasAccessor[property]){this.__dataHasAccessor[property]=!0;this._definePropertyAccessor(property,readOnly)}}/**
       * Adds the given `property` to a map matching attribute names
       * to property names, using `attributeNameForProperty`. This map is
       * used when deserializing attribute values to properties.
       *
       * @param {string} property Name of the property
       * @override
       */},{key:"_addPropertyToAttributeMap",value:function _addPropertyToAttributeMap(property){if(!this.hasOwnProperty("__dataAttributes")){this.__dataAttributes=Object.assign({},this.__dataAttributes)}if(!this.__dataAttributes[property]){var _attr=this.constructor.attributeNameForProperty(property);this.__dataAttributes[_attr]=property}}/**
       * Defines a property accessor for the given property.
       * @param {string} property Name of the property
       * @param {boolean=} readOnly When true, no setter is created
       * @return {void}
       * @override
       */},{key:"_definePropertyAccessor",value:function _definePropertyAccessor(property,readOnly){Object.defineProperty(this,property,{/* eslint-disable valid-jsdoc */ /** @this {PropertiesChanged} */get:function get(){return this._getProperty(property)},/** @this {PropertiesChanged} */set:readOnly?function(){}:function(value){this._setProperty(property,value)}/* eslint-enable */})}}],[{key:"createProperties",/**
     * Creates property accessors for the given property names.
     * @param {!Object} props Object whose keys are names of accessors.
     * @return {void}
     * @protected
     * @nocollapse
     */value:function createProperties(props){var proto=this.prototype;for(var prop in props){// don't stomp an existing accessor
if(!(prop in proto)){proto._createPropertyAccessor(prop)}}}/**
       * Returns an attribute name that corresponds to the given property.
       * The attribute name is the lowercased property name. Override to
       * customize this mapping.
       * @param {string} property Property to convert
       * @return {string} Attribute name corresponding to the given property.
       *
       * @protected
       * @nocollapse
       */},{key:"attributeNameForProperty",value:function attributeNameForProperty(property){return property.toLowerCase()}/**
       * Override point to provide a type to which to deserialize a value to
       * a given property.
       * @param {string} name Name of property
       *
       * @protected
       * @nocollapse
       */},{key:"typeForProperty",value:function typeForProperty(name){}}]);function PropertiesChanged(){var _this7;babelHelpers.classCallCheck(this,PropertiesChanged);_this7=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertiesChanged).call(this));/** @type {boolean} */_this7.__dataEnabled=!1;_this7.__dataReady=!1;_this7.__dataInvalid=!1;_this7.__data={};_this7.__dataPending=null;_this7.__dataOld=null;_this7.__dataInstanceProps=null;_this7.__serializing=!1;_this7._initializeProperties();return _this7}/**
       * Lifecycle callback called when properties are enabled via
       * `_enableProperties`.
       *
       * Users may override this function to implement behavior that is
       * dependent on the element having its property data initialized, e.g.
       * from defaults (initialized from `constructor`, `_initializeProperties`),
       * `attributeChangedCallback`, or values propagated from host e.g. via
       * bindings.  `super.ready()` must be called to ensure the data system
       * becomes enabled.
       *
       * @return {void}
       * @public
       * @override
       */babelHelpers.createClass(PropertiesChanged,[{key:"ready",value:function ready(){this.__dataReady=!0;this._flushProperties()}/**
       * Initializes the local storage for property accessors.
       *
       * Provided as an override point for performing any setup work prior
       * to initializing the property accessor system.
       *
       * @return {void}
       * @protected
       * @override
       */},{key:"_initializeProperties",value:function _initializeProperties(){// Capture instance properties; these will be set into accessors
// during first flush. Don't set them here, since we want
// these to overwrite defaults/constructor assignments
for(var _p6 in this.__dataHasAccessor){if(this.hasOwnProperty(_p6)){this.__dataInstanceProps=this.__dataInstanceProps||{};this.__dataInstanceProps[_p6]=this[_p6];delete this[_p6]}}}/**
       * Called at ready time with bag of instance properties that overwrote
       * accessors when the element upgraded.
       *
       * The default implementation sets these properties back into the
       * setter at ready time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @return {void}
       * @protected
       * @override
       */},{key:"_initializeInstanceProperties",value:function _initializeInstanceProperties(props){Object.assign(this,props)}/**
       * Updates the local storage for a property (via `_setPendingProperty`)
       * and enqueues a `_proeprtiesChanged` callback.
       *
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {void}
       * @protected
       * @override
       */},{key:"_setProperty",value:function _setProperty(property,value){if(this._setPendingProperty(property,value)){this._invalidateProperties()}}/**
       * Returns the value for the given property.
       * @param {string} property Name of property
       * @return {*} Value for the given property
       * @protected
       * @override
       */},{key:"_getProperty",value:function _getProperty(property){return this.__data[property]}/* eslint-disable no-unused-vars */ /**
                                           * Updates the local storage for a property, records the previous value,
                                           * and adds it to the set of "pending changes" that will be passed to the
                                           * `_propertiesChanged` callback.  This method does not enqueue the
                                           * `_propertiesChanged` callback.
                                           *
                                           * @param {string} property Name of the property
                                           * @param {*} value Value to set
                                           * @param {boolean=} ext Not used here; affordance for closure
                                           * @return {boolean} Returns true if the property changed
                                           * @protected
                                           * @override
                                           */},{key:"_setPendingProperty",value:function _setPendingProperty(property,value,ext){var old=this.__data[property],changed=this._shouldPropertyChange(property,value,old);if(changed){if(!this.__dataPending){this.__dataPending={};this.__dataOld={}}// Ensure old is captured from the last turn
if(this.__dataOld&&!(property in this.__dataOld)){this.__dataOld[property]=old}this.__data[property]=value;this.__dataPending[property]=value}return changed}/* eslint-enable */ /**
                           * Marks the properties as invalid, and enqueues an async
                           * `_propertiesChanged` callback.
                           *
                           * @return {void}
                           * @protected
                           * @override
                           */},{key:"_invalidateProperties",value:function _invalidateProperties(){var _this8=this;if(!this.__dataInvalid&&this.__dataReady){this.__dataInvalid=!0;microtask.run(function(){if(_this8.__dataInvalid){_this8.__dataInvalid=!1;_this8._flushProperties()}})}}/**
       * Call to enable property accessor processing. Before this method is
       * called accessor values will be set but side effects are
       * queued. When called, any pending side effects occur immediately.
       * For elements, generally `connectedCallback` is a normal spot to do so.
       * It is safe to call this method multiple times as it only turns on
       * property accessors once.
       *
       * @return {void}
       * @protected
       * @override
       */},{key:"_enableProperties",value:function _enableProperties(){if(!this.__dataEnabled){this.__dataEnabled=!0;if(this.__dataInstanceProps){this._initializeInstanceProperties(this.__dataInstanceProps);this.__dataInstanceProps=null}this.ready()}}/**
       * Calls the `_propertiesChanged` callback with the current set of
       * pending changes (and old values recorded when pending changes were
       * set), and resets the pending set of changes. Generally, this method
       * should not be called in user code.
       *
       * @return {void}
       * @protected
       * @override
       */},{key:"_flushProperties",value:function _flushProperties(){var props=this.__data,changedProps=this.__dataPending,old=this.__dataOld;if(this._shouldPropertiesChange(props,changedProps,old)){this.__dataPending=null;this.__dataOld=null;this._propertiesChanged(props,changedProps,old)}}/**
       * Called in `_flushProperties` to determine if `_propertiesChanged`
       * should be called. The default implementation returns true if
       * properties are pending. Override to customize when
       * `_propertiesChanged` is called.
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {boolean} true if changedProps is truthy
       * @override
       */},{key:"_shouldPropertiesChange",value:function _shouldPropertiesChange(currentProps,changedProps,oldProps){// eslint-disable-line no-unused-vars
return!!changedProps}/**
       * Callback called when any properties with accessors created via
       * `_createPropertyAccessor` have been set.
       *
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {void}
       * @protected
       * @override
       */},{key:"_propertiesChanged",value:function _propertiesChanged(currentProps,changedProps,oldProps){}// eslint-disable-line no-unused-vars
/**
     * Method called to determine whether a property value should be
     * considered as a change and cause the `_propertiesChanged` callback
     * to be enqueued.
     *
     * The default implementation returns `true` if a strict equality
     * check fails. The method always returns false for `NaN`.
     *
     * Override this method to e.g. provide stricter checking for
     * Objects/Arrays when using immutable patterns.
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     *   and enqueue a `_proeprtiesChanged` callback
     * @protected
     * @override
     */},{key:"_shouldPropertyChange",value:function _shouldPropertyChange(property,value,old){return(// Strict equality check
old!==value&&(// This ensures (old==NaN, value==NaN) always returns false
old===old||value===value))}/**
       * Implements native Custom Elements `attributeChangedCallback` to
       * set an attribute value to a property via `_attributeToProperty`.
       *
       * @param {string} name Name of attribute that changed
       * @param {?string} old Old attribute value
       * @param {?string} value New attribute value
       * @param {?string} namespace Attribute namespace.
       * @return {void}
       * @suppress {missingProperties} Super may or may not implement the callback
       * @override
       */},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,old,value,namespace){if(old!==value){this._attributeToProperty(name,value)}if(babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesChanged.prototype),"attributeChangedCallback",this)){babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesChanged.prototype),"attributeChangedCallback",this).call(this,name,old,value,namespace)}}/**
       * Deserializes an attribute to its associated property.
       *
       * This method calls the `_deserializeValue` method to convert the string to
       * a typed value.
       *
       * @param {string} attribute Name of attribute to deserialize.
       * @param {?string} value of the attribute.
       * @param {*=} type type to deserialize to, defaults to the value
       * returned from `typeForProperty`
       * @return {void}
       * @override
       */},{key:"_attributeToProperty",value:function _attributeToProperty(attribute,value,type){if(!this.__serializing){var map=this.__dataAttributes,property=map&&map[attribute]||attribute;this[property]=this._deserializeValue(value,type||this.constructor.typeForProperty(property))}}/**
       * Serializes a property to its associated attribute.
       *
       * @suppress {invalidCasts} Closure can't figure out `this` is an element.
       *
       * @param {string} property Property name to reflect.
       * @param {string=} attribute Attribute name to reflect to.
       * @param {*=} value Property value to refect.
       * @return {void}
       * @override
       */},{key:"_propertyToAttribute",value:function _propertyToAttribute(property,attribute,value){this.__serializing=!0;value=3>arguments.length?this[property]:value;this._valueToNodeAttribute(/** @type {!HTMLElement} */this,value,attribute||this.constructor.attributeNameForProperty(property));this.__serializing=!1}/**
       * Sets a typed value to an HTML attribute on a node.
       *
       * This method calls the `_serializeValue` method to convert the typed
       * value to a string.  If the `_serializeValue` method returns `undefined`,
       * the attribute will be removed (this is the default for boolean
       * type `false`).
       *
       * @param {Element} node Element to set attribute to.
       * @param {*} value Value to serialize.
       * @param {string} attribute Attribute name to serialize to.
       * @return {void}
       * @override
       */},{key:"_valueToNodeAttribute",value:function _valueToNodeAttribute(node,value,attribute){var str=this._serializeValue(value);if("class"===attribute||"name"===attribute||"slot"===attribute){node=/** @type {?Element} */wrap$1(node)}if(str===void 0){node.removeAttribute(attribute)}else{node.setAttribute(attribute,str)}}/**
       * Converts a typed JavaScript value to a string.
       *
       * This method is called when setting JS property values to
       * HTML attributes.  Users may override this method to provide
       * serialization for custom types.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided
       * property  value.
       * @override
       */},{key:"_serializeValue",value:function _serializeValue(value){switch(babelHelpers.typeof(value)){case"boolean":return value?"":void 0;default:return null!=value?value.toString():void 0;}}/**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called when reading HTML attribute values to
       * JS properties.  Users may override this method to provide
       * deserialization for custom `type`s. Types for `Boolean`, `String`,
       * and `Number` convert attributes to the expected types.
       *
       * @param {?string} value Value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       * @override
       */},{key:"_deserializeValue",value:function _deserializeValue(value,type){switch(type){case Boolean:return null!==value;case Number:return+value;default:return value;}}}]);return PropertiesChanged}(superClass);return PropertiesChanged});/**
                              * Element class mixin that provides basic meta-programming for creating one
                              * or more property accessors (getter/setter pair) that enqueue an async
                              * (batched) `_propertiesChanged` callback.
                              *
                              * For basic usage of this mixin, call `MyClass.createProperties(props)`
                              * once at class definition time to create property accessors for properties
                              * named in props, implement `_propertiesChanged` to react as desired to
                              * property changes, and implement `static get observedAttributes()` and
                              * include lowercase versions of any property names that should be set from
                              * attributes. Last, call `this._enableProperties()` in the element's
                              * `connectedCallback` to enable the accessors.
                              *
                              * @mixinFunction
                              * @polymer
                              * @summary Element class mixin for reacting to property changes from
                              *   generated property accessors.
                              * @template T
                              * @param {function(new:T)} superClass Class to apply mixin to.
                              * @return {function(new:T)} superClass with mixin applied.
                              */_exports.PropertiesChanged=PropertiesChanged;var propertiesChanged={PropertiesChanged:PropertiesChanged};// that won't have their values "saved" by `saveAccessorValue`, since
// reading from an HTMLElement accessor from the context of a prototype throws
_exports.$propertiesChanged=propertiesChanged;var nativeProperties={},proto=HTMLElement.prototype;while(proto){for(var props=Object.getOwnPropertyNames(proto),i=0;i<props.length;i++){nativeProperties[props[i]]=!0}proto=Object.getPrototypeOf(proto)}/**
   * Used to save the value of a property that will be overridden with
   * an accessor. If the `model` is a prototype, the values will be saved
   * in `__dataProto`, and it's up to the user (or downstream mixin) to
   * decide how/when to set these values back into the accessors.
   * If `model` is already an instance (it has a `__data` property), then
   * the value will be set as a pending property, meaning the user should
   * call `_invalidateProperties` or `_flushProperties` to take effect
   *
   * @param {Object} model Prototype or instance
   * @param {string} property Name of property
   * @return {void}
   * @private
   */function saveAccessorValue(model,property){// Don't read/store value for any native properties since they could throw
if(!nativeProperties[property]){var value=model[property];if(value!==void 0){if(model.__data){// Adding accessor to instance; update the property
// It is the user's responsibility to call _flushProperties
model._setPendingProperty(property,value)}else{// Adding accessor to proto; save proto's value for instance-time use
if(!model.__dataProto){model.__dataProto={}}else if(!model.hasOwnProperty(JSCompiler_renameProperty("__dataProto",model))){model.__dataProto=Object.create(model.__dataProto)}model.__dataProto[property]=value}}}}/**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin:
   *
   * -   Declare attributes to observe via the standard `static get
   *     observedAttributes()`. Use `dash-case` attribute names to represent
   *     `camelCase` property names.
   * -   Implement the `_propertiesChanged` callback on the class.
   * -   Call `MyClass.createPropertiesForAttributes()` **once** on the class to
   *     generate property accessors for each observed attribute. This must be
   *     called before the first instance is created, for example, by calling it
   *     before calling `customElements.define`. It can also be called lazily from
   *     the element's `constructor`, as long as it's guarded so that the call is
   *     only made once, when the first instance is created.
   * -   Call `this._enableProperties()` in the element's `connectedCallback` to
   *     enable the accessors.
   *
   * Any `observedAttributes` will automatically be
   * deserialized via `attributeChangedCallback` and set to the associated
   * property using `dash-case`-to-`camelCase` convention.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */var PropertyAccessors=dedupingMixin(function(superClass){/**
   * @constructor
   * @implements {Polymer_PropertiesChanged}
   * @unrestricted
   * @private
   */var base=PropertiesChanged(superClass),PropertyAccessors=/*#__PURE__*/function(_base){babelHelpers.inherits(PropertyAccessors,_base);function PropertyAccessors(){babelHelpers.classCallCheck(this,PropertyAccessors);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertyAccessors).apply(this,arguments))}babelHelpers.createClass(PropertyAccessors,[{key:"_initializeProperties",/**
       * Overrides PropertiesChanged implementation to initialize values for
       * accessors created for values that already existed on the element
       * prototype.
       *
       * @return {void}
       * @protected
       * @override
       */value:function _initializeProperties(){if(this.__dataProto){this._initializeProtoProperties(this.__dataProto);this.__dataProto=null}babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype),"_initializeProperties",this).call(this)}/**
       * Called at instance time with bag of properties that were overwritten
       * by accessors on the prototype when accessors were created.
       *
       * The default implementation sets these properties back into the
       * setter at instance time.  This method is provided as an override
       * point for customizing or providing more efficient initialization.
       *
       * @param {Object} props Bag of property values that were overwritten
       *   when creating property accessors.
       * @return {void}
       * @protected
       * @override
       */},{key:"_initializeProtoProperties",value:function _initializeProtoProperties(props){for(var _p7 in props){this._setProperty(_p7,props[_p7])}}/**
       * Ensures the element has the given attribute. If it does not,
       * assigns the given value to the attribute.
       *
       * @suppress {invalidCasts} Closure can't figure out `this` is infact an
       *     element
       *
       * @param {string} attribute Name of attribute to ensure is set.
       * @param {string} value of the attribute.
       * @return {void}
       * @override
       */},{key:"_ensureAttribute",value:function _ensureAttribute(attribute,value){var el=/** @type {!HTMLElement} */this;if(!el.hasAttribute(attribute)){this._valueToNodeAttribute(el,value,attribute)}}/**
       * Overrides PropertiesChanged implemention to serialize objects as JSON.
       *
       * @param {*} value Property value to serialize.
       * @return {string | undefined} String serialized from the provided property
       *     value.
       * @override
       */},{key:"_serializeValue",value:function _serializeValue(value){/* eslint-disable no-fallthrough */switch(babelHelpers.typeof(value)){case"object":if(babelHelpers.instanceof(value,Date)){return value.toString()}else if(value){try{return JSON.stringify(value)}catch(x){return""}}default:return babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype),"_serializeValue",this).call(this,value);}}/**
       * Converts a string to a typed JavaScript value.
       *
       * This method is called by Polymer when reading HTML attribute values to
       * JS properties.  Users may override this method on Polymer element
       * prototypes to provide deserialization for custom `type`s.  Note,
       * the `type` argument is the value of the `type` field provided in the
       * `properties` configuration object for a given property, and is
       * by convention the constructor for the type to deserialize.
       *
       *
       * @param {?string} value Attribute value to deserialize.
       * @param {*=} type Type to deserialize the string to.
       * @return {*} Typed value deserialized from the provided string.
       * @override
       */},{key:"_deserializeValue",value:function _deserializeValue(value,type){/**
       * @type {*}
       */var outValue;switch(type){case Object:try{outValue=JSON.parse(/** @type {string} */value)}catch(x){// allow non-JSON literals like Strings and Numbers
outValue=value}break;case Array:try{outValue=JSON.parse(/** @type {string} */value)}catch(x){outValue=null;console.warn("Polymer::Attributes: couldn't decode Array as JSON: ".concat(value))}break;case Date:outValue=isNaN(value)?value+"":+value;outValue=new Date(outValue);break;default:outValue=babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype),"_deserializeValue",this).call(this,value,type);break;}return outValue}/* eslint-enable no-fallthrough */ /**
                                          * Overrides PropertiesChanged implementation to save existing prototype
                                          * property value so that it can be reset.
                                          * @param {string} property Name of the property
                                          * @param {boolean=} readOnly When true, no setter is created
                                          *
                                          * When calling on a prototype, any overwritten values are saved in
                                          * `__dataProto`, and it is up to the subclasser to decide how/when
                                          * to set those properties back into the accessor.  When calling on an
                                          * instance, the overwritten value is set via `_setPendingProperty`,
                                          * and the user should call `_invalidateProperties` or `_flushProperties`
                                          * for the values to take effect.
                                          * @protected
                                          * @return {void}
                                          * @override
                                          */},{key:"_definePropertyAccessor",value:function _definePropertyAccessor(property,readOnly){saveAccessorValue(this,property);babelHelpers.get(babelHelpers.getPrototypeOf(PropertyAccessors.prototype),"_definePropertyAccessor",this).call(this,property,readOnly)}/**
       * Returns true if this library created an accessor for the given property.
       *
       * @param {string} property Property name
       * @return {boolean} True if an accessor was created
       * @override
       */},{key:"_hasAccessor",value:function _hasAccessor(property){return this.__dataHasAccessor&&this.__dataHasAccessor[property]}/**
       * Returns true if the specified property has a pending change.
       *
       * @param {string} prop Property name
       * @return {boolean} True if property has a pending change
       * @protected
       * @override
       */},{key:"_isPropertyPending",value:function _isPropertyPending(prop){return!!(this.__dataPending&&prop in this.__dataPending)}}],[{key:"createPropertiesForAttributes",/**
     * Generates property accessors for all attributes in the standard
     * static `observedAttributes` array.
     *
     * Attribute names are mapped to property names using the `dash-case` to
     * `camelCase` convention
     *
     * @return {void}
     * @nocollapse
     */value:function createPropertiesForAttributes(){for(var a$=/** @type {?} */this.observedAttributes,_i2=0;_i2<a$.length;_i2++){this.prototype._createPropertyAccessor(dashToCamelCase(a$[_i2]))}}/**
       * Returns an attribute name that corresponds to the given property.
       * By default, converts camel to dash case, e.g. `fooBar` to `foo-bar`.
       * @param {string} property Property to convert
       * @return {string} Attribute name corresponding to the given property.
       *
       * @protected
       * @nocollapse
       */},{key:"attributeNameForProperty",value:function attributeNameForProperty(property){return camelToDashCase(property)}}]);return PropertyAccessors}(base);/**
                                                  * @polymer
                                                  * @mixinClass
                                                  * @implements {Polymer_PropertyAccessors}
                                                  * @extends {base}
                                                  * @unrestricted
                                                  */return PropertyAccessors});_exports.PropertyAccessors=PropertyAccessors;var propertyAccessors={PropertyAccessors:PropertyAccessors};// This is a clear layering violation and gives favored-nation status to
// dom-if and dom-repeat templates.  This is a conceit we're choosing to keep
// a.) to ease 1.x backwards-compatibility due to loss of `is`, and
// b.) to maintain if/repeat capability in parser-constrained elements
//     (e.g. table, select) in lieu of native CE type extensions without
//     massive new invention in this space (e.g. directive system)
_exports.$propertyAccessors=propertyAccessors;var templateExtensions={"dom-if":!0,"dom-repeat":!0};function wrapTemplateExtension(node){var is=node.getAttribute("is");if(is&&templateExtensions[is]){var t=node;t.removeAttribute("is");node=t.ownerDocument.createElement(is);t.parentNode.replaceChild(node,t);node.appendChild(t);while(t.attributes.length){node.setAttribute(t.attributes[0].name,t.attributes[0].value);t.removeAttribute(t.attributes[0].name)}}return node}function findTemplateNode(root,nodeInfo){// recursively ascend tree until we hit root
var parent=nodeInfo.parentInfo&&findTemplateNode(root,nodeInfo.parentInfo);// unwind the stack, returning the indexed node at each level
if(parent){// note: marginally faster than indexing via childNodes
// (http://jsperf.com/childnodes-lookup)
for(var n=parent.firstChild,_i3=0;n;n=n.nextSibling){if(nodeInfo.parentIndex===_i3++){return n}}}else{return root}}// construct `$` map (from id annotations)
function applyIdToMap(inst,map,node,nodeInfo){if(nodeInfo.id){map[nodeInfo.id]=node}}// install event listeners (from event annotations)
function applyEventListener(inst,node,nodeInfo){if(nodeInfo.events&&nodeInfo.events.length){for(var j=0,e$=nodeInfo.events,e;j<e$.length&&(e=e$[j]);j++){inst._addMethodEventListenerToNode(node,e.name,e.value,inst)}}}// push configuration references at configure time
function applyTemplateContent(inst,node,nodeInfo){if(nodeInfo.templateInfo){node._templateInfo=nodeInfo.templateInfo}}function createNodeEventHandler(context,eventName,methodName){// Instances can optionally have a _methodHost which allows redirecting where
// to find methods. Currently used by `templatize`.
context=context._methodHost||context;var handler=function handler(e){if(context[methodName]){context[methodName](e,e.detail)}else{console.warn("listener method `"+methodName+"` not defined")}};return handler}/**
   * Element mixin that provides basic template parsing and stamping, including
   * the following template-related features for stamped templates:
   *
   * - Declarative event listeners (`on-eventname="listener"`)
   * - Map of node id's to stamped node instances (`this.$.id`)
   * - Nested template content caching/removal and re-installation (performance
   *   optimization)
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin that provides basic template parsing and stamping
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */var TemplateStamp=dedupingMixin(/**
                                             * @template T
                                             * @param {function(new:T)} superClass Class to apply mixin to.
                                             * @return {function(new:T)} superClass with mixin applied.
                                             */function(superClass){/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_TemplateStamp}
   */var TemplateStamp=/*#__PURE__*/function(_superClass2){babelHelpers.inherits(TemplateStamp,_superClass2);function TemplateStamp(){babelHelpers.classCallCheck(this,TemplateStamp);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TemplateStamp).apply(this,arguments))}babelHelpers.createClass(TemplateStamp,[{key:"_stampTemplate",/**
       * Clones the provided template content and returns a document fragment
       * containing the cloned dom.
       *
       * The template is parsed (once and memoized) using this library's
       * template parsing features, and provides the following value-added
       * features:
       * * Adds declarative event listeners for `on-event="handler"` attributes
       * * Generates an "id map" for all nodes with id's under `$` on returned
       *   document fragment
       * * Passes template info including `content` back to templates as
       *   `_templateInfo` (a performance optimization to avoid deep template
       *   cloning)
       *
       * Note that the memoized template parsing process is destructive to the
       * template: attributes for bindings and declarative event listeners are
       * removed after being noted in notes, and any nested `<template>.content`
       * is removed and stored in notes as well.
       *
       * @param {!HTMLTemplateElement} template Template to stamp
       * @return {!StampedTemplate} Cloned template content
       * @override
       */value:function _stampTemplate(template){// Polyfill support: bootstrap the template if it has not already been
if(template&&!template.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate){HTMLTemplateElement.decorate(template)}var templateInfo=this.constructor._parseTemplate(template),nodeInfo=templateInfo.nodeInfoList,content=templateInfo.content||template.content,dom=/** @type {DocumentFragment} */document.importNode(content,!0);// NOTE: ShadyDom optimization indicating there is an insertion point
dom.__noInsertionPoint=!templateInfo.hasInsertionPoint;var nodes=dom.nodeList=Array(nodeInfo.length);dom.$={};for(var _i4=0,l=nodeInfo.length,info,node;_i4<l&&(info=nodeInfo[_i4]);_i4++){node=nodes[_i4]=findTemplateNode(dom,info);applyIdToMap(this,dom.$,node,info);applyTemplateContent(this,node,info);applyEventListener(this,node,info)}dom=/** @type {!StampedTemplate} */dom;// eslint-disable-line no-self-assign
return dom}/**
       * Adds an event listener by method name for the event provided.
       *
       * This method generates a handler function that looks up the method
       * name at handling time.
       *
       * @param {!EventTarget} node Node to add listener on
       * @param {string} eventName Name of event
       * @param {string} methodName Name of method
       * @param {*=} context Context the method will be called on (defaults
       *   to `node`)
       * @return {Function} Generated handler function
       * @override
       */},{key:"_addMethodEventListenerToNode",value:function _addMethodEventListenerToNode(node,eventName,methodName,context){context=context||node;var handler=createNodeEventHandler(context,eventName,methodName);this._addEventListenerToNode(node,eventName,handler);return handler}/**
       * Override point for adding custom or simulated event handling.
       *
       * @param {!EventTarget} node Node to add event listener to
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to add
       * @return {void}
       * @override
       */},{key:"_addEventListenerToNode",value:function _addEventListenerToNode(node,eventName,handler){node.addEventListener(eventName,handler)}/**
       * Override point for adding custom or simulated event handling.
       *
       * @param {!EventTarget} node Node to remove event listener from
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to remove
       * @return {void}
       * @override
       */},{key:"_removeEventListenerFromNode",value:function _removeEventListenerFromNode(node,eventName,handler){node.removeEventListener(eventName,handler)}}],[{key:"_parseTemplate",/**
     * Scans a template to produce template metadata.
     *
     * Template-specific metadata are stored in the object returned, and node-
     * specific metadata are stored in objects in its flattened `nodeInfoList`
     * array.  Only nodes in the template that were parsed as nodes of
     * interest contain an object in `nodeInfoList`.  Each `nodeInfo` object
     * contains an `index` (`childNodes` index in parent) and optionally
     * `parent`, which points to node info of its parent (including its index).
     *
     * The template metadata object returned from this method has the following
     * structure (many fields optional):
     *
     * ```js
     *   {
     *     // Flattened list of node metadata (for nodes that generated metadata)
     *     nodeInfoList: [
     *       {
     *         // `id` attribute for any nodes with id's for generating `$` map
     *         id: {string},
     *         // `on-event="handler"` metadata
     *         events: [
     *           {
     *             name: {string},   // event name
     *             value: {string},  // handler method name
     *           }, ...
     *         ],
     *         // Notes when the template contained a `<slot>` for shady DOM
     *         // optimization purposes
     *         hasInsertionPoint: {boolean},
     *         // For nested `<template>`` nodes, nested template metadata
     *         templateInfo: {object}, // nested template metadata
     *         // Metadata to allow efficient retrieval of instanced node
     *         // corresponding to this metadata
     *         parentInfo: {number},   // reference to parent nodeInfo>
     *         parentIndex: {number},  // index in parent's `childNodes` collection
     *         infoIndex: {number},    // index of this `nodeInfo` in `templateInfo.nodeInfoList`
     *       },
     *       ...
     *     ],
     *     // When true, the template had the `strip-whitespace` attribute
     *     // or was nested in a template with that setting
     *     stripWhitespace: {boolean},
     *     // For nested templates, nested template content is moved into
     *     // a document fragment stored here; this is an optimization to
     *     // avoid the cost of nested template cloning
     *     content: {DocumentFragment}
     *   }
     * ```
     *
     * This method kicks off a recursive treewalk as follows:
     *
     * ```
     *    _parseTemplate <---------------------+
     *      _parseTemplateContent              |
     *        _parseTemplateNode  <------------|--+
     *          _parseTemplateNestedTemplate --+  |
     *          _parseTemplateChildNodes ---------+
     *          _parseTemplateNodeAttributes
     *            _parseTemplateNodeAttribute
     *
     * ```
     *
     * These methods may be overridden to add custom metadata about templates
     * to either `templateInfo` or `nodeInfo`.
     *
     * Note that this method may be destructive to the template, in that
     * e.g. event annotations may be removed after being noted in the
     * template metadata.
     *
     * @param {!HTMLTemplateElement} template Template to parse
     * @param {TemplateInfo=} outerTemplateInfo Template metadata from the outer
     *   template, for parsing nested templates
     * @return {!TemplateInfo} Parsed template metadata
     * @nocollapse
     */value:function _parseTemplate(template,outerTemplateInfo){// since a template may be re-used, memo-ize metadata
if(!template._templateInfo){// TODO(rictic): fix typing
var/** ? */templateInfo=template._templateInfo={};templateInfo.nodeInfoList=[];templateInfo.stripWhiteSpace=outerTemplateInfo&&outerTemplateInfo.stripWhiteSpace||template.hasAttribute("strip-whitespace");// TODO(rictic): fix typing
this._parseTemplateContent(template,templateInfo,/** @type {?} */{parent:null})}return template._templateInfo}/**
       * See docs for _parseTemplateNode.
       *
       * @param {!HTMLTemplateElement} template .
       * @param {!TemplateInfo} templateInfo .
       * @param {!NodeInfo} nodeInfo .
       * @return {boolean} .
       * @nocollapse
       */},{key:"_parseTemplateContent",value:function _parseTemplateContent(template,templateInfo,nodeInfo){return this._parseTemplateNode(template.content,templateInfo,nodeInfo)}/**
       * Parses template node and adds template and node metadata based on
       * the current node, and its `childNodes` and `attributes`.
       *
       * This method may be overridden to add custom node or template specific
       * metadata based on this node.
       *
       * @param {Node} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @nocollapse
       */},{key:"_parseTemplateNode",value:function _parseTemplateNode(node,templateInfo,nodeInfo){var noted=!1,element=/** @type {!HTMLTemplateElement} */node;if("template"==element.localName&&!element.hasAttribute("preserve-content")){noted=this._parseTemplateNestedTemplate(element,templateInfo,nodeInfo)||noted}else if("slot"===element.localName){// For ShadyDom optimization, indicating there is an insertion point
templateInfo.hasInsertionPoint=!0}if(element.firstChild){this._parseTemplateChildNodes(element,templateInfo,nodeInfo)}if(element.hasAttributes&&element.hasAttributes()){noted=this._parseTemplateNodeAttributes(element,templateInfo,nodeInfo)||noted}return noted}/**
       * Parses template child nodes for the given root node.
       *
       * This method also wraps whitelisted legacy template extensions
       * (`is="dom-if"` and `is="dom-repeat"`) with their equivalent element
       * wrappers, collapses text nodes, and strips whitespace from the template
       * if the `templateInfo.stripWhitespace` setting was provided.
       *
       * @param {Node} root Root node whose `childNodes` will be parsed
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {void}
       */},{key:"_parseTemplateChildNodes",value:function _parseTemplateChildNodes(root,templateInfo,nodeInfo){if("script"===root.localName||"style"===root.localName){return}for(var node=root.firstChild,parentIndex=0,next;node;node=next){// Wrap templates
if("template"==node.localName){node=wrapTemplateExtension(node)}// collapse adjacent textNodes: fixes an IE issue that can cause
// text nodes to be inexplicably split =(
// note that root.normalize() should work but does not so we do this
// manually.
next=node.nextSibling;if(node.nodeType===Node.TEXT_NODE){var/** Node */n=next;while(n&&n.nodeType===Node.TEXT_NODE){node.textContent+=n.textContent;next=n.nextSibling;root.removeChild(n);n=next}// optionally strip whitespace
if(templateInfo.stripWhiteSpace&&!node.textContent.trim()){root.removeChild(node);continue}}var childInfo=/** @type {!NodeInfo} */{parentIndex:parentIndex,parentInfo:nodeInfo};if(this._parseTemplateNode(node,templateInfo,childInfo)){childInfo.infoIndex=templateInfo.nodeInfoList.push(childInfo)-1}// Increment if not removed
if(node.parentNode){parentIndex++}}}/**
       * Parses template content for the given nested `<template>`.
       *
       * Nested template info is stored as `templateInfo` in the current node's
       * `nodeInfo`. `template.content` is removed and stored in `templateInfo`.
       * It will then be the responsibility of the host to set it back to the
       * template and for users stamping nested templates to use the
       * `_contentForTemplate` method to retrieve the content for this template
       * (an optimization to avoid the cost of cloning nested template content).
       *
       * @param {HTMLTemplateElement} node Node to parse (a <template>)
       * @param {TemplateInfo} outerTemplateInfo Template metadata for current template
       *   that includes the template `node`
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @nocollapse
       */},{key:"_parseTemplateNestedTemplate",value:function _parseTemplateNestedTemplate(node,outerTemplateInfo,nodeInfo){// TODO(rictic): the type of node should be non-null
var element=/** @type {!HTMLTemplateElement} */node,templateInfo=this._parseTemplate(element,outerTemplateInfo),content=templateInfo.content=element.content.ownerDocument.createDocumentFragment();content.appendChild(element.content);nodeInfo.templateInfo=templateInfo;return!0}/**
       * Parses template node attributes and adds node metadata to `nodeInfo`
       * for nodes of interest.
       *
       * @param {Element} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current
       *     template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @nocollapse
       */},{key:"_parseTemplateNodeAttributes",value:function _parseTemplateNodeAttributes(node,templateInfo,nodeInfo){// Make copy of original attribute list, since the order may change
// as attributes are added and removed
for(var noted=!1,attrs=Array.from(node.attributes),_i5=attrs.length-1,a;a=attrs[_i5];_i5--){noted=this._parseTemplateNodeAttribute(node,templateInfo,nodeInfo,a.name,a.value)||noted}return noted}/**
       * Parses a single template node attribute and adds node metadata to
       * `nodeInfo` for attributes of interest.
       *
       * This implementation adds metadata for `on-event="handler"` attributes
       * and `id` attributes.
       *
       * @param {Element} node Node to parse
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @param {string} name Attribute name
       * @param {string} value Attribute value
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @nocollapse
       */},{key:"_parseTemplateNodeAttribute",value:function _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){// events (on-*)
if("on-"===name.slice(0,3)){node.removeAttribute(name);nodeInfo.events=nodeInfo.events||[];nodeInfo.events.push({name:name.slice(3),value:value});return!0}// static id
else if("id"===name){nodeInfo.id=value;return!0}return!1}/**
       * Returns the `content` document fragment for a given template.
       *
       * For nested templates, Polymer performs an optimization to cache nested
       * template content to avoid the cost of cloning deeply nested templates.
       * This method retrieves the cached content for a given template.
       *
       * @param {HTMLTemplateElement} template Template to retrieve `content` for
       * @return {DocumentFragment} Content fragment
       * @nocollapse
       */},{key:"_contentForTemplate",value:function _contentForTemplate(template){var templateInfo=/** @type {HTMLTemplateElementWithInfo} */template._templateInfo;return templateInfo&&templateInfo.content||template.content}}]);return TemplateStamp}(superClass);return TemplateStamp});_exports.TemplateStamp=TemplateStamp;var templateStamp={TemplateStamp:TemplateStamp};// from multiple properties in the same turn
_exports.$templateStamp=templateStamp;var dedupeId$1=0,TYPES={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},capitalAttributeRegex=/[A-Z]/,DataTrigger,DataEffect;/**
                    * Property effect types; effects are stored on the prototype using these keys
                    * @enum {string}
                    */ //eslint-disable-line no-unused-vars
/**
 * Ensures that the model has an own-property map of effects for the given type.
 * The model may be a prototype or an instance.
 *
 * Property effects are stored as arrays of effects by property in a map,
 * by named type on the model. e.g.
 *
 *   __computeEffects: {
 *     foo: [ ... ],
 *     bar: [ ... ]
 *   }
 *
 * If the model does not yet have an effect map for the type, one is created
 * and returned.  If it does, but it is not an own property (i.e. the
 * prototype had effects), the the map is deeply cloned and the copy is
 * set on the model and returned, ready for new effects to be added.
 *
 * @param {Object} model Prototype or instance
 * @param {string} type Property effect type
 * @return {Object} The own-property map of effects for the given type
 * @private
 */function ensureOwnEffectMap(model,type){var effects=model[type];if(!effects){effects=model[type]={}}else if(!model.hasOwnProperty(type)){effects=model[type]=Object.create(model[type]);for(var _p8 in effects){for(var protoFx=effects[_p8],instFx=effects[_p8]=Array(protoFx.length),_i6=0;_i6<protoFx.length;_i6++){instFx[_i6]=protoFx[_i6]}}}return effects}// -- effects ----------------------------------------------
/**
 * Runs all effects of a given type for the given set of property changes
 * on an instance.
 *
 * @param {!Polymer_PropertyEffects} inst The instance with effects to run
 * @param {?Object} effects Object map of property-to-Array of effects
 * @param {?Object} props Bag of current property changes
 * @param {?Object=} oldProps Bag of previous values for changed properties
 * @param {boolean=} hasPaths True with `props` contains one or more paths
 * @param {*=} extraArgs Additional metadata to pass to effect function
 * @return {boolean} True if an effect ran for this property
 * @private
 */function runEffects(inst,effects,props,oldProps,hasPaths,extraArgs){if(effects){var ran=!1,id=dedupeId$1++;for(var prop in props){if(runEffectsForProperty(inst,/** @type {!Object} */effects,id,prop,props,oldProps,hasPaths,extraArgs)){ran=!0}}return ran}return!1}/**
   * Runs a list of effects for a given property.
   *
   * @param {!Polymer_PropertyEffects} inst The instance with effects to run
   * @param {!Object} effects Object map of property-to-Array of effects
   * @param {number} dedupeId Counter used for de-duping effects
   * @param {string} prop Name of changed property
   * @param {*} props Changed properties
   * @param {*} oldProps Old properties
   * @param {boolean=} hasPaths True with `props` contains one or more paths
   * @param {*=} extraArgs Additional metadata to pass to effect function
   * @return {boolean} True if an effect ran for this property
   * @private
   */function runEffectsForProperty(inst,effects,dedupeId,prop,props,oldProps,hasPaths,extraArgs){var ran=!1,rootProperty=hasPaths?root(prop):prop,fxs=effects[rootProperty];if(fxs){for(var _i7=0,l=fxs.length,fx;_i7<l&&(fx=fxs[_i7]);_i7++){if((!fx.info||fx.info.lastRun!==dedupeId)&&(!hasPaths||pathMatchesTrigger(prop,fx.trigger))){if(fx.info){fx.info.lastRun=dedupeId}fx.fn(inst,prop,props,oldProps,fx.info,hasPaths,extraArgs);ran=!0}}}return ran}/**
   * Determines whether a property/path that has changed matches the trigger
   * criteria for an effect.  A trigger is a descriptor with the following
   * structure, which matches the descriptors returned from `parseArg`.
   * e.g. for `foo.bar.*`:
   * ```
   * trigger: {
   *   name: 'a.b',
   *   structured: true,
   *   wildcard: true
   * }
   * ```
   * If no trigger is given, the path is deemed to match.
   *
   * @param {string} path Path or property that changed
   * @param {?DataTrigger} trigger Descriptor
   * @return {boolean} Whether the path matched the trigger
   */function pathMatchesTrigger(path,trigger){if(trigger){var triggerPath=/** @type {string} */trigger.name;return triggerPath==path||!!(trigger.structured&&isAncestor(triggerPath,path))||!!(trigger.wildcard&&isDescendant(triggerPath,path))}else{return!0}}/**
   * Implements the "observer" effect.
   *
   * Calls the method with `info.methodName` on the instance, passing the
   * new and old values.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */function runObserverEffect(inst,property,props,oldProps,info){var fn="string"===typeof info.method?inst[info.method]:info.method,changedProp=info.property;if(fn){fn.call(inst,inst.__data[changedProp],oldProps[changedProp])}else if(!info.dynamicFn){console.warn("observer method `"+info.method+"` not defined")}}/**
   * Runs "notify" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * will dispatch path notification events in the case that the property
   * changed was a path and the root property for that path didn't have a
   * "notify" effect.  This is to maintain 1.0 behavior that did not require
   * `notify: true` to ensure object sub-property notifications were
   * sent.
   *
   * @param {!Polymer_PropertyEffects} inst The instance with effects to run
   * @param {Object} notifyProps Bag of properties to notify
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */function runNotifyEffects(inst,notifyProps,props,oldProps,hasPaths){// Notify
var fxs=inst[TYPES.NOTIFY],notified,id=dedupeId$1++;// Try normal notify effects; if none, fall back to try path notification
for(var prop in notifyProps){if(notifyProps[prop]){if(fxs&&runEffectsForProperty(inst,fxs,id,prop,props,oldProps,hasPaths)){notified=!0}else if(hasPaths&&notifyPath(inst,prop,props)){notified=!0}}}// Flush host if we actually notified and host was batching
// And the host has already initialized clients; this prevents
// an issue with a host observing data changes before clients are ready.
var host;if(notified&&(host=inst.__dataHost)&&host._invalidateProperties){host._invalidateProperties()}}/**
   * Dispatches {property}-changed events with path information in the detail
   * object to indicate a sub-path of the property was changed.
   *
   * @param {!Polymer_PropertyEffects} inst The element from which to fire the
   *     event
   * @param {string} path The path that was changed
   * @param {Object} props Bag of current property changes
   * @return {boolean} Returns true if the path was notified
   * @private
   */function notifyPath(inst,path,props){var rootProperty=root(path);if(rootProperty!==path){var eventName=camelToDashCase(rootProperty)+"-changed";dispatchNotifyEvent(inst,eventName,props[path],path);return!0}return!1}/**
   * Dispatches {property}-changed events to indicate a property (or path)
   * changed.
   *
   * @param {!Polymer_PropertyEffects} inst The element from which to fire the
   *     event
   * @param {string} eventName The name of the event to send
   *     ('{property}-changed')
   * @param {*} value The value of the changed property
   * @param {string | null | undefined} path If a sub-path of this property
   *     changed, the path that changed (optional).
   * @return {void}
   * @private
   * @suppress {invalidCasts}
   */function dispatchNotifyEvent(inst,eventName,value,path){var detail={value:value,queueProperty:!0};if(path){detail.path=path}wrap$1(/** @type {!HTMLElement} */inst).dispatchEvent(new CustomEvent(eventName,{detail:detail}))}/**
   * Implements the "notify" effect.
   *
   * Dispatches a non-bubbling event named `info.eventName` on the instance
   * with a detail object containing the new `value`.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */function runNotifyEffect(inst,property,props,oldProps,info,hasPaths){var rootProperty=hasPaths?root(property):property,path=rootProperty!=property?property:null,value=path?_get(inst,path):inst.__data[property];if(path&&value===void 0){value=props[property];// specifically for .splices
}dispatchNotifyEvent(inst,info.eventName,value,path)}/**
   * Handler function for 2-way notification events. Receives context
   * information captured in the `addNotifyListener` closure from the
   * `__notifyListeners` metadata.
   *
   * Sets the value of the notified property to the host property or path.  If
   * the event contained path information, translate that path to the host
   * scope's name for that path first.
   *
   * @param {CustomEvent} event Notification event (e.g. '<property>-changed')
   * @param {!Polymer_PropertyEffects} inst Host element instance handling the
   *     notification event
   * @param {string} fromProp Child element property that was bound
   * @param {string} toPath Host property/path that was bound
   * @param {boolean} negate Whether the binding was negated
   * @return {void}
   * @private
   */function handleNotification(event,inst,fromProp,toPath,negate){var value,detail=/** @type {Object} */event.detail,fromPath=detail&&detail.path;if(fromPath){toPath=translate(fromProp,toPath,fromPath);value=detail&&detail.value}else{value=event.currentTarget[fromProp]}value=negate?!value:value;if(!inst[TYPES.READ_ONLY]||!inst[TYPES.READ_ONLY][toPath]){if(inst._setPendingPropertyOrPath(toPath,value,!0,!!fromPath)&&(!detail||!detail.queueProperty)){inst._invalidateProperties()}}}/**
   * Implements the "reflect" effect.
   *
   * Sets the attribute named `info.attrName` to the given property value.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */function runReflectEffect(inst,property,props,oldProps,info){var value=inst.__data[property];if(sanitizeDOMValue){value=sanitizeDOMValue(value,info.attrName,"attribute",/** @type {Node} */inst)}inst._propertyToAttribute(property,info.attrName,value)}/**
   * Runs "computed" effects for a set of changed properties.
   *
   * This method differs from the generic `runEffects` method in that it
   * continues to run computed effects based on the output of each pass until
   * there are no more newly computed properties.  This ensures that all
   * properties that will be computed by the initial set of changes are
   * computed before other effects (binding propagation, observers, and notify)
   * run.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {?Object} changedProps Bag of changed properties
   * @param {?Object} oldProps Bag of previous values for changed properties
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @return {void}
   * @private
   */function runComputedEffects(inst,changedProps,oldProps,hasPaths){var computeEffects=inst[TYPES.COMPUTE];if(computeEffects){var inputProps=changedProps;while(runEffects(inst,computeEffects,inputProps,oldProps,hasPaths)){Object.assign(/** @type {!Object} */oldProps,inst.__dataOld);Object.assign(/** @type {!Object} */changedProps,inst.__dataPending);inputProps=inst.__dataPending;inst.__dataPending=null}}}/**
   * Implements the "computed property" effect by running the method with the
   * values of the arguments specified in the `info` object and setting the
   * return value to the computed property specified.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {?Object} props Bag of current property changes
   * @param {?Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {void}
   * @private
   */function runComputedEffect(inst,property,props,oldProps,info){var result=runMethodEffect(inst,property,props,oldProps,info),computedProp=info.methodInfo;if(inst.__dataHasAccessor&&inst.__dataHasAccessor[computedProp]){inst._setPendingProperty(computedProp,result,!0)}else{inst[computedProp]=result}}/**
   * Computes path changes based on path links set up using the `linkPaths`
   * API.
   *
   * @param {!Polymer_PropertyEffects} inst The instance whose props are changing
   * @param {string} path Path that has changed
   * @param {*} value Value of changed path
   * @return {void}
   * @private
   */function computeLinkedPaths(inst,path,value){var links=inst.__dataLinkedPaths;if(links){var link;for(var a in links){var b=links[a];if(isDescendant(a,path)){link=translate(a,b,path);inst._setPendingPropertyOrPath(link,value,!0,!0)}else if(isDescendant(b,path)){link=translate(b,a,path);inst._setPendingPropertyOrPath(link,value,!0,!0)}}}}// -- bindings ----------------------------------------------
/**
 * Adds binding metadata to the current `nodeInfo`, and binding effects
 * for all part dependencies to `templateInfo`.
 *
 * @param {Function} constructor Class that `_parseTemplate` is currently
 *   running on
 * @param {TemplateInfo} templateInfo Template metadata for current template
 * @param {NodeInfo} nodeInfo Node metadata for current template node
 * @param {string} kind Binding kind, either 'property', 'attribute', or 'text'
 * @param {string} target Target property name
 * @param {!Array<!BindingPart>} parts Array of binding part metadata
 * @param {string=} literal Literal text surrounding binding parts (specified
 *   only for 'property' bindings, since these must be initialized as part
 *   of boot-up)
 * @return {void}
 * @private
 */function addBinding(constructor,templateInfo,nodeInfo,kind,target,parts,literal){// Create binding metadata and add to nodeInfo
nodeInfo.bindings=nodeInfo.bindings||[];var/** Binding */binding={kind:kind,target:target,parts:parts,literal:literal,isCompound:1!==parts.length};nodeInfo.bindings.push(binding);// Add listener info to binding metadata
if(shouldAddListener(binding)){var _binding$parts$=binding.parts[0],event=_binding$parts$.event,negate=_binding$parts$.negate;binding.listenerEvent=event||camelToDashCase(target)+"-changed";binding.listenerNegate=negate}// Add "propagate" property effects to templateInfo
for(var index=templateInfo.nodeInfoList.length,_i8=0,part;_i8<binding.parts.length;_i8++){part=binding.parts[_i8];part.compoundIndex=_i8;addEffectForBindingPart(constructor,templateInfo,binding,part,index)}}/**
   * Adds property effects to the given `templateInfo` for the given binding
   * part.
   *
   * @param {Function} constructor Class that `_parseTemplate` is currently
   *   running on
   * @param {TemplateInfo} templateInfo Template metadata for current template
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {number} index Index into `nodeInfoList` for this node
   * @return {void}
   */function addEffectForBindingPart(constructor,templateInfo,binding,part,index){if(!part.literal){if("attribute"===binding.kind&&"-"===binding.target[0]){console.warn("Cannot set attribute "+binding.target+" because \"-\" is not a valid attribute starting character")}else{for(var dependencies=part.dependencies,info={index:index,binding:binding,part:part,evaluator:constructor},j=0,trigger;j<dependencies.length;j++){trigger=dependencies[j];if("string"==typeof trigger){trigger=parseArg(trigger);trigger.wildcard=!0}constructor._addTemplatePropertyEffect(templateInfo,trigger.rootProperty,{fn:runBindingEffect,info:info,trigger:trigger})}}}}/**
   * Implements the "binding" (property/path binding) effect.
   *
   * Note that binding syntax is overridable via `_parseBindings` and
   * `_evaluateBinding`.  This method will call `_evaluateBinding` for any
   * non-literal parts returned from `_parseBindings`.  However,
   * there is no support for _path_ bindings via custom binding parts,
   * as this is specific to Polymer's path binding syntax.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} path Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @param {boolean} hasPaths True with `props` contains one or more paths
   * @param {Array} nodeList List of nodes associated with `nodeInfoList` template
   *   metadata
   * @return {void}
   * @private
   */function runBindingEffect(inst,path,props,oldProps,info,hasPaths,nodeList){var node=nodeList[info.index],binding=info.binding,part=info.part;// Subpath notification: transform path and set to client
// e.g.: foo="{{obj.sub}}", path: 'obj.sub.prop', set 'foo.prop'=obj.sub.prop
if(hasPaths&&part.source&&path.length>part.source.length&&"property"==binding.kind&&!binding.isCompound&&node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[binding.target]){var value=props[path];path=translate(part.source,binding.target,path);if(node._setPendingPropertyOrPath(path,value,!1,!0)){inst._enqueueClient(node)}}else{var _value=info.evaluator._evaluateBinding(inst,part,path,props,oldProps,hasPaths);// Propagate value to child
applyBindingValue(inst,node,binding,part,_value)}}/**
   * Sets the value for an "binding" (binding) effect to a node,
   * either as a property or attribute.
   *
   * @param {!Polymer_PropertyEffects} inst The instance owning the binding effect
   * @param {Node} node Target node for binding
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @param {*} value Value to set
   * @return {void}
   * @private
   */function applyBindingValue(inst,node,binding,part,value){value=computeBindingValue(node,value,binding,part);if(sanitizeDOMValue){value=sanitizeDOMValue(value,binding.target,binding.kind,node)}if("attribute"==binding.kind){// Attribute binding
inst._valueToNodeAttribute(/** @type {Element} */node,value,binding.target)}else{// Property binding
var prop=binding.target;if(node.__isPropertyEffectsClient&&node.__dataHasAccessor&&node.__dataHasAccessor[prop]){if(!node[TYPES.READ_ONLY]||!node[TYPES.READ_ONLY][prop]){if(node._setPendingProperty(prop,value)){inst._enqueueClient(node)}}}else{inst._setUnmanagedPropertyToNode(node,prop,value)}}}/**
   * Transforms an "binding" effect value based on compound & negation
   * effect metadata, as well as handling for special-case properties
   *
   * @param {Node} node Node the value will be set to
   * @param {*} value Value to set
   * @param {!Binding} binding Binding metadata
   * @param {!BindingPart} part Binding part metadata
   * @return {*} Transformed value to set
   * @private
   */function computeBindingValue(node,value,binding,part){if(binding.isCompound){var storage=node.__dataCompoundStorage[binding.target];storage[part.compoundIndex]=value;value=storage.join("")}if("attribute"!==binding.kind){// Some browsers serialize `undefined` to `"undefined"`
if("textContent"===binding.target||"value"===binding.target&&("input"===node.localName||"textarea"===node.localName)){value=value==void 0?"":value}}return value}/**
   * Returns true if a binding's metadata meets all the requirements to allow
   * 2-way binding, and therefore a `<property>-changed` event listener should be
   * added:
   * - used curly braces
   * - is a property (not attribute) binding
   * - is not a textContent binding
   * - is not compound
   *
   * @param {!Binding} binding Binding metadata
   * @return {boolean} True if 2-way listener should be added
   * @private
   */function shouldAddListener(binding){return!!binding.target&&"attribute"!=binding.kind&&"text"!=binding.kind&&!binding.isCompound&&"{"===binding.parts[0].mode}/**
   * Setup compound binding storage structures, notify listeners, and dataHost
   * references onto the bound nodeList.
   *
   * @param {!Polymer_PropertyEffects} inst Instance that bas been previously
   *     bound
   * @param {TemplateInfo} templateInfo Template metadata
   * @return {void}
   * @private
   */function setupBindings(inst,templateInfo){// Setup compound storage, dataHost, and notify listeners
var nodeList=templateInfo.nodeList,nodeInfoList=templateInfo.nodeInfoList;if(nodeInfoList.length){for(var _i9=0;_i9<nodeInfoList.length;_i9++){var info=nodeInfoList[_i9],node=nodeList[_i9],bindings=info.bindings;if(bindings){for(var _i10=0,binding;_i10<bindings.length;_i10++){binding=bindings[_i10];setupCompoundStorage(node,binding);addNotifyListener(node,inst,binding)}}node.__dataHost=inst}}}/**
   * Initializes `__dataCompoundStorage` local storage on a bound node with
   * initial literal data for compound bindings, and sets the joined
   * literal parts to the bound property.
   *
   * When changes to compound parts occur, they are first set into the compound
   * storage array for that property, and then the array is joined to result in
   * the final value set to the property/attribute.
   *
   * @param {Node} node Bound node to initialize
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */function setupCompoundStorage(node,binding){if(binding.isCompound){// Create compound storage map
for(var storage=node.__dataCompoundStorage||(node.__dataCompoundStorage={}),parts=binding.parts,literals=Array(parts.length),j=0;j<parts.length;j++){literals[j]=parts[j].literal}var target=binding.target;storage[target]=literals;// Configure properties with their literal parts
if(binding.literal&&"property"==binding.kind){// Note, className needs style scoping so this needs wrapping.
// We may also want to consider doing this for `textContent` and
// `innerHTML`.
if("className"===target){node=wrap$1(node)}node[target]=binding.literal}}}/**
   * Adds a 2-way binding notification event listener to the node specified
   *
   * @param {Object} node Child element to add listener to
   * @param {!Polymer_PropertyEffects} inst Host element instance to handle
   *     notification event
   * @param {Binding} binding Binding metadata
   * @return {void}
   * @private
   */function addNotifyListener(node,inst,binding){if(binding.listenerEvent){var part=binding.parts[0];node.addEventListener(binding.listenerEvent,function(e){handleNotification(e,inst,binding.target,part.source,part.negate)})}}// -- for method-based effects (complexObserver & computed) --------------
/**
 * Adds property effects for each argument in the method signature (and
 * optionally, for the method name if `dynamic` is true) that calls the
 * provided effect function.
 *
 * @param {Element | Object} model Prototype or instance
 * @param {!MethodSignature} sig Method signature metadata
 * @param {string} type Type of property effect to add
 * @param {Function} effectFn Function to run when arguments change
 * @param {*=} methodInfo Effect-specific information to be included in
 *   method effect metadata
 * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
 *   method names should be included as a dependency to the effect. Note,
 *   defaults to true if the signature is static (sig.static is true).
 * @return {void}
 * @private
 */function createMethodEffect(model,sig,type,effectFn,methodInfo,dynamicFn){dynamicFn=sig.static||dynamicFn&&("object"!==babelHelpers.typeof(dynamicFn)||dynamicFn[sig.methodName]);for(var info={methodName:sig.methodName,args:sig.args,methodInfo:methodInfo,dynamicFn:dynamicFn},_i11=0,arg;_i11<sig.args.length&&(arg=sig.args[_i11]);_i11++){if(!arg.literal){model._addPropertyEffect(arg.rootProperty,type,{fn:effectFn,info:info,trigger:arg})}}if(dynamicFn){model._addPropertyEffect(sig.methodName,type,{fn:effectFn,info:info})}}/**
   * Calls a method with arguments marshaled from properties on the instance
   * based on the method signature contained in the effect metadata.
   *
   * Multi-property observers, computed properties, and inline computing
   * functions call this function to invoke the method, then use the return
   * value accordingly.
   *
   * @param {!Polymer_PropertyEffects} inst The instance the effect will be run on
   * @param {string} property Name of property
   * @param {Object} props Bag of current property changes
   * @param {Object} oldProps Bag of previous values for changed properties
   * @param {?} info Effect metadata
   * @return {*} Returns the return value from the method invocation
   * @private
   */function runMethodEffect(inst,property,props,oldProps,info){// Instances can optionally have a _methodHost which allows redirecting where
// to find methods. Currently used by `templatize`.
var context=inst._methodHost||inst,fn=context[info.methodName];if(fn){var args=inst._marshalArgs(info.args,property,props);return fn.apply(context,args)}else if(!info.dynamicFn){console.warn("method `"+info.methodName+"` not defined")}}var emptyArray=[],IDENT="(?:"+"[a-zA-Z_$][\\w.:$\\-*]*"+")",NUMBER="(?:"+"[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?"+")",SQUOTE_STRING="(?:"+"'(?:[^'\\\\]|\\\\.)*'"+")",DQUOTE_STRING="(?:"+"\"(?:[^\"\\\\]|\\\\.)*\""+")",STRING="(?:"+SQUOTE_STRING+"|"+DQUOTE_STRING+")",ARGUMENT="(?:("+IDENT+"|"+NUMBER+"|"+STRING+")\\s*"+")",ARGUMENTS="(?:"+ARGUMENT+"(?:,\\s*"+ARGUMENT+")*"+")",ARGUMENT_LIST="(?:"+"\\(\\s*"+"(?:"+ARGUMENTS+"?"+")"+"\\)\\s*"+")",BINDING="("+IDENT+"\\s*"+ARGUMENT_LIST+"?"+")",OPEN_BRACKET="(\\[\\[|{{)"+"\\s*",CLOSE_BRACKET="(?:]]|}})",NEGATE="(?:(!)\\s*)?",EXPRESSION=OPEN_BRACKET+NEGATE+BINDING+CLOSE_BRACKET,bindingRegex=new RegExp(EXPRESSION,"g");// Regular expressions used for binding
/**
                                                   * Create a string from binding parts of all the literal parts
                                                   *
                                                   * @param {!Array<BindingPart>} parts All parts to stringify
                                                   * @return {string} String made from the literal parts
                                                   */function literalFromParts(parts){for(var s="",_i12=0,literal;_i12<parts.length;_i12++){literal=parts[_i12].literal;s+=literal||""}return s}/**
   * Parses an expression string for a method signature, and returns a metadata
   * describing the method in terms of `methodName`, `static` (whether all the
   * arguments are literals), and an array of `args`
   *
   * @param {string} expression The expression to parse
   * @return {?MethodSignature} The method metadata object if a method expression was
   *   found, otherwise `undefined`
   * @private
   */function parseMethod(expression){// tries to match valid javascript property names
var m=expression.match(/([^\s]+?)\(([\s\S]*)\)/);if(m){var methodName=m[1],sig={methodName:methodName,static:!0,args:emptyArray};if(m[2].trim()){// replace escaped commas with comma entity, split on un-escaped commas
var args=m[2].replace(/\\,/g,"&comma;").split(",");return parseArgs(args,sig)}else{return sig}}return null}/**
   * Parses an array of arguments and sets the `args` property of the supplied
   * signature metadata object. Sets the `static` property to false if any
   * argument is a non-literal.
   *
   * @param {!Array<string>} argList Array of argument names
   * @param {!MethodSignature} sig Method signature metadata object
   * @return {!MethodSignature} The updated signature metadata object
   * @private
   */function parseArgs(argList,sig){sig.args=argList.map(function(rawArg){var arg=parseArg(rawArg);if(!arg.literal){sig.static=!1}return arg},this);return sig}/**
   * Parses an individual argument, and returns an argument metadata object
   * with the following fields:
   *
   *   {
   *     value: 'prop',        // property/path or literal value
   *     literal: false,       // whether argument is a literal
   *     structured: false,    // whether the property is a path
   *     rootProperty: 'prop', // the root property of the path
   *     wildcard: false       // whether the argument was a wildcard '.*' path
   *   }
   *
   * @param {string} rawArg The string value of the argument
   * @return {!MethodArg} Argument metadata object
   * @private
   */function parseArg(rawArg){// clean up whitespace
var arg=rawArg.trim()// replace comma entity with comma
.replace(/&comma;/g,",")// repair extra escape sequences; note only commas strictly need
// escaping, but we allow any other char to be escaped since its
// likely users will do this
.replace(/\\(.)/g,"$1"),a={name:arg,value:"",literal:!1},fc=arg[0];// basic argument descriptor
if("-"===fc){fc=arg[1]}if("0"<=fc&&"9">=fc){fc="#"}switch(fc){case"'":case"\"":a.value=arg.slice(1,-1);a.literal=!0;break;case"#":a.value=+arg;a.literal=!0;break;}// if not literal, look for structured path
if(!a.literal){a.rootProperty=root(arg);// detect structured path (has dots)
a.structured=isPath(arg);if(a.structured){a.wildcard=".*"==arg.slice(-2);if(a.wildcard){a.name=arg.slice(0,-2)}}}return a}function getArgValue(data,props,path){var value=_get(data,path);// when data is not stored e.g. `splices`, get the value from changedProps
// TODO(kschaaf): Note, this can cause a rare issue where the wildcard
// info.value could pull a stale value out of changedProps during a reentrant
// change that sets the value back to undefined.
// https://github.com/Polymer/polymer/issues/5479
if(value===void 0){value=props[path]}return value}// data api
/**
 * Sends array splice notifications (`.splices` and `.length`)
 *
 * Note: this implementation only accepts normalized paths
 *
 * @param {!Polymer_PropertyEffects} inst Instance to send notifications to
 * @param {Array} array The array the mutations occurred on
 * @param {string} path The path to the array that was mutated
 * @param {Array} splices Array of splice records
 * @return {void}
 * @private
 */function _notifySplices(inst,array,path,splices){inst.notifyPath(path+".splices",{indexSplices:splices});inst.notifyPath(path+".length",array.length)}/**
   * Creates a splice record and sends an array splice notification for
   * the described mutation
   *
   * Note: this implementation only accepts normalized paths
   *
   * @param {!Polymer_PropertyEffects} inst Instance to send notifications to
   * @param {Array} array The array the mutations occurred on
   * @param {string} path The path to the array that was mutated
   * @param {number} index Index at which the array mutation occurred
   * @param {number} addedCount Number of added items
   * @param {Array} removed Array of removed items
   * @return {void}
   * @private
   */function notifySplice(inst,array,path,index,addedCount,removed){_notifySplices(inst,array,path,[{index:index,addedCount:addedCount,removed:removed,object:array,type:"splice"}])}/**
   * Returns an upper-cased version of the string.
   *
   * @param {string} name String to uppercase
   * @return {string} Uppercased string
   * @private
   */function upper(name){return name[0].toUpperCase()+name.substring(1)}/**
   * Element class mixin that provides meta-programming for Polymer's template
   * binding and data observation (collectively, "property effects") system.
   *
   * This mixin uses provides the following key static methods for adding
   * property effects to an element class:
   * - `addPropertyEffect`
   * - `createPropertyObserver`
   * - `createMethodObserver`
   * - `createNotifyingProperty`
   * - `createReadOnlyProperty`
   * - `createReflectedProperty`
   * - `createComputedProperty`
   * - `bindTemplate`
   *
   * Each method creates one or more property accessors, along with metadata
   * used by this mixin's implementation of `_propertiesChanged` to perform
   * the property effects.
   *
   * Underscored versions of the above methods also exist on the element
   * prototype for adding property effects on instances at runtime.
   *
   * Note that this mixin overrides several `PropertyAccessors` methods, in
   * many cases to maintain guarantees provided by the Polymer 1.x features;
   * notably it changes property accessors to be synchronous by default
   * whereas the default when using `PropertyAccessors` standalone is to be
   * async by default.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin TemplateStamp
   * @appliesMixin PropertyAccessors
   * @summary Element class mixin that provides meta-programming for Polymer's
   * template binding and data observation system.
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */var PropertyEffects=dedupingMixin(function(superClass){/**
   * @constructor
   * @implements {Polymer_PropertyAccessors}
   * @implements {Polymer_TemplateStamp}
   * @unrestricted
   * @private
   */var propertyEffectsBase=TemplateStamp(PropertyAccessors(superClass)),PropertyEffects=/*#__PURE__*/function(_propertyEffectsBase){babelHelpers.inherits(PropertyEffects,_propertyEffectsBase);function PropertyEffects(){var _this9;babelHelpers.classCallCheck(this,PropertyEffects);_this9=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertyEffects).call(this));/** @type {boolean} */ // Used to identify users of this mixin, ala instanceof
_this9.__isPropertyEffectsClient=!0;/** @type {number} */ // NOTE: used to track re-entrant calls to `_flushProperties`
// path changes dirty check against `__dataTemp` only during one "turn"
// and are cleared when `__dataCounter` returns to 0.
_this9.__dataCounter=0;/** @type {boolean} */_this9.__dataClientsReady;/** @type {Array} */_this9.__dataPendingClients;/** @type {Object} */_this9.__dataToNotify;/** @type {Object} */_this9.__dataLinkedPaths;/** @type {boolean} */_this9.__dataHasPaths;/** @type {Object} */_this9.__dataCompoundStorage;/** @type {Polymer_PropertyEffects} */_this9.__dataHost;/** @type {!Object} */_this9.__dataTemp;/** @type {boolean} */_this9.__dataClientsInitialized;/** @type {!Object} */_this9.__data;/** @type {!Object|null} */_this9.__dataPending;/** @type {!Object} */_this9.__dataOld;/** @type {Object} */_this9.__computeEffects;/** @type {Object} */_this9.__reflectEffects;/** @type {Object} */_this9.__notifyEffects;/** @type {Object} */_this9.__propagateEffects;/** @type {Object} */_this9.__observeEffects;/** @type {Object} */_this9.__readOnly;/** @type {!TemplateInfo} */_this9.__templateInfo;return _this9}/**
       * @return {!Object<string, string>} Effect prototype property name map.
       */babelHelpers.createClass(PropertyEffects,[{key:"_initializeProperties",/**
       * @override
       * @return {void}
       */value:function _initializeProperties(){babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects.prototype),"_initializeProperties",this).call(this);hostStack.registerHost(this);this.__dataClientsReady=!1;this.__dataPendingClients=null;this.__dataToNotify=null;this.__dataLinkedPaths=null;this.__dataHasPaths=!1;// May be set on instance prior to upgrade
this.__dataCompoundStorage=this.__dataCompoundStorage||null;this.__dataHost=this.__dataHost||null;this.__dataTemp={};this.__dataClientsInitialized=!1}/**
       * Overrides `PropertyAccessors` implementation to provide a
       * more efficient implementation of initializing properties from
       * the prototype on the instance.
       *
       * @override
       * @param {Object} props Properties to initialize on the prototype
       * @return {void}
       */},{key:"_initializeProtoProperties",value:function _initializeProtoProperties(props){this.__data=Object.create(props);this.__dataPending=Object.create(props);this.__dataOld={}}/**
       * Overrides `PropertyAccessors` implementation to avoid setting
       * `_setProperty`'s `shouldNotify: true`.
       *
       * @override
       * @param {Object} props Properties to initialize on the instance
       * @return {void}
       */},{key:"_initializeInstanceProperties",value:function _initializeInstanceProperties(props){var readOnly=this[TYPES.READ_ONLY];for(var prop in props){if(!readOnly||!readOnly[prop]){this.__dataPending=this.__dataPending||{};this.__dataOld=this.__dataOld||{};this.__data[prop]=this.__dataPending[prop]=props[prop]}}}// Prototype setup ----------------------------------------
/**
     * Equivalent to static `addPropertyEffect` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * @override
     * @param {string} property Property that should trigger the effect
     * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @param {Object=} effect Effect metadata object
     * @return {void}
     * @protected
     */},{key:"_addPropertyEffect",value:function _addPropertyEffect(property,type,effect){this._createPropertyAccessor(property,type==TYPES.READ_ONLY);// effects are accumulated into arrays per property based on type
var effects=ensureOwnEffectMap(this,type)[property];if(!effects){effects=this[type][property]=[]}effects.push(effect)}/**
       * Removes the given property effect.
       *
       * @override
       * @param {string} property Property the effect was associated with
       * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @param {Object=} effect Effect metadata object to remove
       * @return {void}
       */},{key:"_removePropertyEffect",value:function _removePropertyEffect(property,type,effect){var effects=ensureOwnEffectMap(this,type)[property],idx=effects.indexOf(effect);if(0<=idx){effects.splice(idx,1)}}/**
       * Returns whether the current prototype/instance has a property effect
       * of a certain type.
       *
       * @override
       * @param {string} property Property name
       * @param {string=} type Effect type, from this.PROPERTY_EFFECT_TYPES
       * @return {boolean} True if the prototype/instance has an effect of this
       *     type
       * @protected
       */},{key:"_hasPropertyEffect",value:function _hasPropertyEffect(property,type){var effects=this[type];return!!(effects&&effects[property])}/**
       * Returns whether the current prototype/instance has a "read only"
       * accessor for the given property.
       *
       * @override
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this
       *     type
       * @protected
       */},{key:"_hasReadOnlyEffect",value:function _hasReadOnlyEffect(property){return this._hasPropertyEffect(property,TYPES.READ_ONLY)}/**
       * Returns whether the current prototype/instance has a "notify"
       * property effect for the given property.
       *
       * @override
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this
       *     type
       * @protected
       */},{key:"_hasNotifyEffect",value:function _hasNotifyEffect(property){return this._hasPropertyEffect(property,TYPES.NOTIFY)}/**
       * Returns whether the current prototype/instance has a "reflect to
       * attribute" property effect for the given property.
       *
       * @override
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this
       *     type
       * @protected
       */},{key:"_hasReflectEffect",value:function _hasReflectEffect(property){return this._hasPropertyEffect(property,TYPES.REFLECT)}/**
       * Returns whether the current prototype/instance has a "computed"
       * property effect for the given property.
       *
       * @override
       * @param {string} property Property name
       * @return {boolean} True if the prototype/instance has an effect of this
       *     type
       * @protected
       */},{key:"_hasComputedEffect",value:function _hasComputedEffect(property){return this._hasPropertyEffect(property,TYPES.COMPUTE)}// Runtime ----------------------------------------
/**
     * Sets a pending property or path.  If the root property of the path in
     * question had no accessor, the path is set, otherwise it is enqueued
     * via `_setPendingProperty`.
     *
     * This function isolates relatively expensive functionality necessary
     * for the public API (`set`, `setProperties`, `notifyPath`, and property
     * change listeners via {{...}} bindings), such that it is only done
     * when paths enter the system, and not at every propagation step.  It
     * also sets a `__dataHasPaths` flag on the instance which is used to
     * fast-path slower path-matching code in the property effects host paths.
     *
     * `path` can be a path string or array of path parts as accepted by the
     * public API.
     *
     * @override
     * @param {string | !Array<number|string>} path Path to set
     * @param {*} value Value to set
     * @param {boolean=} shouldNotify Set to true if this change should
     *  cause a property notification event dispatch
     * @param {boolean=} isPathNotification If the path being set is a path
     *   notification of an already changed value, as opposed to a request
     *   to set and notify the change.  In the latter `false` case, a dirty
     *   check is performed and then the value is set to the path before
     *   enqueuing the pending property change.
     * @return {boolean} Returns true if the property/path was enqueued in
     *   the pending changes bag.
     * @protected
     */},{key:"_setPendingPropertyOrPath",value:function _setPendingPropertyOrPath(path,value,shouldNotify,isPathNotification){if(isPathNotification||root(Array.isArray(path)?path[0]:path)!==path){// Dirty check changes being set to a path against the actual object,
// since this is the entry point for paths into the system; from here
// the only dirty checks are against the `__dataTemp` cache to prevent
// duplicate work in the same turn only. Note, if this was a notification
// of a change already set to a path (isPathNotification: true),
// we always let the change through and skip the `set` since it was
// already dirty checked at the point of entry and the underlying
// object has already been updated
if(!isPathNotification){var old=_get(this,path);path=/** @type {string} */_set(this,path,value);// Use property-accessor's simpler dirty check
if(!path||!babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects.prototype),"_shouldPropertyChange",this).call(this,path,value,old)){return!1}}this.__dataHasPaths=!0;if(this._setPendingProperty(/**@type{string}*/path,value,shouldNotify)){computeLinkedPaths(this,/**@type{string}*/path,value);return!0}}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[path]){return this._setPendingProperty(/**@type{string}*/path,value,shouldNotify)}else{this[path]=value}}return!1}/**
       * Applies a value to a non-Polymer element/node's property.
       *
       * The implementation makes a best-effort at binding interop:
       * Some native element properties have side-effects when
       * re-setting the same value (e.g. setting `<input>.value` resets the
       * cursor position), so we do a dirty-check before setting the value.
       * However, for better interop with non-Polymer custom elements that
       * accept objects, we explicitly re-set object changes coming from the
       * Polymer world (which may include deep object changes without the
       * top reference changing), erring on the side of providing more
       * information.
       *
       * Users may override this method to provide alternate approaches.
       *
       * @override
       * @param {!Node} node The node to set a property on
       * @param {string} prop The property to set
       * @param {*} value The value to set
       * @return {void}
       * @protected
       */},{key:"_setUnmanagedPropertyToNode",value:function _setUnmanagedPropertyToNode(node,prop,value){// It is a judgment call that resetting primitives is
// "bad" and resettings objects is also "good"; alternatively we could
// implement a whitelist of tag & property values that should never
// be reset (e.g. <input>.value && <select>.value)
if(value!==node[prop]||"object"==babelHelpers.typeof(value)){// Note, className needs style scoping so this needs wrapping.
if("className"===prop){node=/** @type {!Node} */wrap$1(node)}node[prop]=value}}/**
       * Overrides the `PropertiesChanged` implementation to introduce special
       * dirty check logic depending on the property & value being set:
       *
       * 1. Any value set to a path (e.g. 'obj.prop': 42 or 'obj.prop': {...})
       *    Stored in `__dataTemp`, dirty checked against `__dataTemp`
       * 2. Object set to simple property (e.g. 'prop': {...})
       *    Stored in `__dataTemp` and `__data`, dirty checked against
       *    `__dataTemp` by default implementation of `_shouldPropertyChange`
       * 3. Primitive value set to simple property (e.g. 'prop': 42)
       *    Stored in `__data`, dirty checked against `__data`
       *
       * The dirty-check is important to prevent cycles due to two-way
       * notification, but paths and objects are only dirty checked against any
       * previous value set during this turn via a "temporary cache" that is
       * cleared when the last `_propertiesChanged` exits. This is so:
       * a. any cached array paths (e.g. 'array.3.prop') may be invalidated
       *    due to array mutations like shift/unshift/splice; this is fine
       *    since path changes are dirty-checked at user entry points like `set`
       * b. dirty-checking for objects only lasts one turn to allow the user
       *    to mutate the object in-place and re-set it with the same identity
       *    and have all sub-properties re-propagated in a subsequent turn.
       *
       * The temp cache is not necessarily sufficient to prevent invalid array
       * paths, since a splice can happen during the same turn (with pathological
       * user code); we could introduce a "fixup" for temporarily cached array
       * paths if needed: https://github.com/Polymer/polymer/issues/4227
       *
       * @override
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @param {boolean=} shouldNotify True if property should fire notification
       *   event (applies only for `notify: true` properties)
       * @return {boolean} Returns true if the property changed
       */},{key:"_setPendingProperty",value:function _setPendingProperty(property,value,shouldNotify){var propIsPath=this.__dataHasPaths&&isPath(property),prevProps=propIsPath?this.__dataTemp:this.__data;if(this._shouldPropertyChange(property,value,prevProps[property])){if(!this.__dataPending){this.__dataPending={};this.__dataOld={}}// Ensure old is captured from the last turn
if(!(property in this.__dataOld)){this.__dataOld[property]=this.__data[property]}// Paths are stored in temporary cache (cleared at end of turn),
// which is used for dirty-checking, all others stored in __data
if(propIsPath){this.__dataTemp[property]=value}else{this.__data[property]=value}// All changes go into pending property bag, passed to _propertiesChanged
this.__dataPending[property]=value;// Track properties that should notify separately
if(propIsPath||this[TYPES.NOTIFY]&&this[TYPES.NOTIFY][property]){this.__dataToNotify=this.__dataToNotify||{};this.__dataToNotify[property]=shouldNotify}return!0}return!1}/**
       * Overrides base implementation to ensure all accessors set `shouldNotify`
       * to true, for per-property notification tracking.
       *
       * @override
       * @param {string} property Name of the property
       * @param {*} value Value to set
       * @return {void}
       */},{key:"_setProperty",value:function _setProperty(property,value){if(this._setPendingProperty(property,value,!0)){this._invalidateProperties()}}/**
       * Overrides `PropertyAccessor`'s default async queuing of
       * `_propertiesChanged`: if `__dataReady` is false (has not yet been
       * manually flushed), the function no-ops; otherwise flushes
       * `_propertiesChanged` synchronously.
       *
       * @override
       * @return {void}
       */},{key:"_invalidateProperties",value:function _invalidateProperties(){if(this.__dataReady){this._flushProperties()}}/**
       * Enqueues the given client on a list of pending clients, whose
       * pending property changes can later be flushed via a call to
       * `_flushClients`.
       *
       * @override
       * @param {Object} client PropertyEffects client to enqueue
       * @return {void}
       * @protected
       */},{key:"_enqueueClient",value:function _enqueueClient(client){this.__dataPendingClients=this.__dataPendingClients||[];if(client!==this){this.__dataPendingClients.push(client)}}/**
       * Overrides superclass implementation.
       *
       * @override
       * @return {void}
       * @protected
       */},{key:"_flushProperties",value:function _flushProperties(){this.__dataCounter++;babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects.prototype),"_flushProperties",this).call(this);this.__dataCounter--}/**
       * Flushes any clients previously enqueued via `_enqueueClient`, causing
       * their `_flushProperties` method to run.
       *
       * @override
       * @return {void}
       * @protected
       */},{key:"_flushClients",value:function _flushClients(){if(!this.__dataClientsReady){this.__dataClientsReady=!0;this._readyClients();// Override point where accessors are turned on; importantly,
// this is after clients have fully readied, providing a guarantee
// that any property effects occur only after all clients are ready.
this.__dataReady=!0}else{this.__enableOrFlushClients()}}// NOTE: We ensure clients either enable or flush as appropriate. This
// handles two corner cases:
// (1) clients flush properly when connected/enabled before the host
// enables; e.g.
//   (a) Templatize stamps with no properties and does not flush and
//   (b) the instance is inserted into dom and
//   (c) then the instance flushes.
// (2) clients enable properly when not connected/enabled when the host
// flushes; e.g.
//   (a) a template is runtime stamped and not yet connected/enabled
//   (b) a host sets a property, causing stamped dom to flush
//   (c) the stamped dom enables.
},{key:"__enableOrFlushClients",value:function __enableOrFlushClients(){var clients=this.__dataPendingClients;if(clients){this.__dataPendingClients=null;for(var _i13=0,client;_i13<clients.length;_i13++){client=clients[_i13];if(!client.__dataEnabled){client._enableProperties()}else if(client.__dataPending){client._flushProperties()}}}}/**
       * Perform any initial setup on client dom. Called before the first
       * `_flushProperties` call on client dom and before any element
       * observers are called.
       *
       * @override
       * @return {void}
       * @protected
       */},{key:"_readyClients",value:function _readyClients(){this.__enableOrFlushClients()}/**
       * Sets a bag of property changes to this instance, and
       * synchronously processes all effects of the properties as a batch.
       *
       * Property names must be simple properties, not paths.  Batched
       * path propagation is not supported.
       *
       * @override
       * @param {Object} props Bag of one or more key-value pairs whose key is
       *   a property and value is the new value to set for that property.
       * @param {boolean=} setReadOnly When true, any private values set in
       *   `props` will be set. By default, `setProperties` will not set
       *   `readOnly: true` root properties.
       * @return {void}
       * @public
       */},{key:"setProperties",value:function setProperties(props,setReadOnly){for(var _path3 in props){if(setReadOnly||!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][_path3]){//TODO(kschaaf): explicitly disallow paths in setProperty?
// wildcard observers currently only pass the first changed path
// in the `info` object, and you could do some odd things batching
// paths, e.g. {'foo.bar': {...}, 'foo': null}
this._setPendingPropertyOrPath(_path3,props[_path3],!0)}}this._invalidateProperties()}/**
       * Overrides `PropertyAccessors` so that property accessor
       * side effects are not enabled until after client dom is fully ready.
       * Also calls `_flushClients` callback to ensure client dom is enabled
       * that was not enabled as a result of flushing properties.
       *
       * @override
       * @return {void}
       */},{key:"ready",value:function ready(){// It is important that `super.ready()` is not called here as it
// immediately turns on accessors. Instead, we wait until `readyClients`
// to enable accessors to provide a guarantee that clients are ready
// before processing any accessors side effects.
this._flushProperties();// If no data was pending, `_flushProperties` will not `flushClients`
// so ensure this is done.
if(!this.__dataClientsReady){this._flushClients()}// Before ready, client notifications do not trigger _flushProperties.
// Therefore a flush is necessary here if data has been set.
if(this.__dataPending){this._flushProperties()}}/**
       * Implements `PropertyAccessors`'s properties changed callback.
       *
       * Runs each class of effects for the batch of changed properties in
       * a specific order (compute, propagate, reflect, observe, notify).
       *
       * @override
       * @param {!Object} currentProps Bag of all current accessor values
       * @param {?Object} changedProps Bag of properties changed since the last
       *   call to `_propertiesChanged`
       * @param {?Object} oldProps Bag of previous values for each property
       *   in `changedProps`
       * @return {void}
       */},{key:"_propertiesChanged",value:function _propertiesChanged(currentProps,changedProps,oldProps){// ----------------------------
// let c = Object.getOwnPropertyNames(changedProps || {});
// window.debug && console.group(this.localName + '#' + this.id + ': ' + c);
// if (window.debug) { debugger; }
// ----------------------------
var hasPaths=this.__dataHasPaths;this.__dataHasPaths=!1;// Compute properties
runComputedEffects(this,changedProps,oldProps,hasPaths);// Clear notify properties prior to possible reentry (propagate, observe),
// but after computing effects have a chance to add to them
var notifyProps=this.__dataToNotify;this.__dataToNotify=null;// Propagate properties to clients
this._propagatePropertyChanges(changedProps,oldProps,hasPaths);// Flush clients
this._flushClients();// Reflect properties
runEffects(this,this[TYPES.REFLECT],changedProps,oldProps,hasPaths);// Observe properties
runEffects(this,this[TYPES.OBSERVE],changedProps,oldProps,hasPaths);// Notify properties to host
if(notifyProps){runNotifyEffects(this,notifyProps,changedProps,oldProps,hasPaths)}// Clear temporary cache at end of turn
if(1==this.__dataCounter){this.__dataTemp={}}// ----------------------------
// window.debug && console.groupEnd(this.localName + '#' + this.id + ': ' + c);
// ----------------------------
}/**
       * Called to propagate any property changes to stamped template nodes
       * managed by this element.
       *
       * @override
       * @param {Object} changedProps Bag of changed properties
       * @param {Object} oldProps Bag of previous values for changed properties
       * @param {boolean} hasPaths True with `props` contains one or more paths
       * @return {void}
       * @protected
       */},{key:"_propagatePropertyChanges",value:function _propagatePropertyChanges(changedProps,oldProps,hasPaths){if(this[TYPES.PROPAGATE]){runEffects(this,this[TYPES.PROPAGATE],changedProps,oldProps,hasPaths)}var templateInfo=this.__templateInfo;while(templateInfo){runEffects(this,templateInfo.propertyEffects,changedProps,oldProps,hasPaths,templateInfo.nodeList);templateInfo=templateInfo.nextTemplateInfo}}/**
       * Aliases one data path as another, such that path notifications from one
       * are routed to the other.
       *
       * @override
       * @param {string | !Array<string|number>} to Target path to link.
       * @param {string | !Array<string|number>} from Source path to link.
       * @return {void}
       * @public
       */},{key:"linkPaths",value:function linkPaths(to,from){to=normalize(to);from=normalize(from);this.__dataLinkedPaths=this.__dataLinkedPaths||{};this.__dataLinkedPaths[to]=from}/**
       * Removes a data path alias previously established with `_linkPaths`.
       *
       * Note, the path to unlink should be the target (`to`) used when
       * linking the paths.
       *
       * @override
       * @param {string | !Array<string|number>} path Target path to unlink.
       * @return {void}
       * @public
       */},{key:"unlinkPaths",value:function unlinkPaths(path){path=normalize(path);if(this.__dataLinkedPaths){delete this.__dataLinkedPaths[path]}}/**
       * Notify that an array has changed.
       *
       * Example:
       *
       *     this.items = [ {name: 'Jim'}, {name: 'Todd'}, {name: 'Bill'} ];
       *     ...
       *     this.items.splice(1, 1, {name: 'Sam'});
       *     this.items.push({name: 'Bob'});
       *     this.notifySplices('items', [
       *       { index: 1, removed: [{name: 'Todd'}], addedCount: 1,
       *         object: this.items, type: 'splice' },
       *       { index: 3, removed: [], addedCount: 1,
       *         object: this.items, type: 'splice'}
       *     ]);
       *
       * @param {string} path Path that should be notified.
       * @param {Array} splices Array of splice records indicating ordered
       *   changes that occurred to the array. Each record should have the
       *   following fields:
       *    * index: index at which the change occurred
       *    * removed: array of items that were removed from this index
       *    * addedCount: number of new items added at this index
       *    * object: a reference to the array in question
       *    * type: the string literal 'splice'
       *
       *   Note that splice records _must_ be normalized such that they are
       *   reported in index order (raw results from `Object.observe` are not
       *   ordered and must be normalized/merged before notifying).
       *
       * @override
       * @return {void}
       * @public
       */},{key:"notifySplices",value:function notifySplices(path,splices){var info={path:""},array=/** @type {Array} */_get(this,path,info);_notifySplices(this,array,info.path,splices)}/**
       * Convenience method for reading a value from a path.
       *
       * Note, if any part in the path is undefined, this method returns
       * `undefined` (this method does not throw when dereferencing undefined
       * paths).
       *
       * @override
       * @param {(string|!Array<(string|number)>)} path Path to the value
       *   to read.  The path may be specified as a string (e.g. `foo.bar.baz`)
       *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
       *   bracketed expressions are not supported; string-based path parts
       *   *must* be separated by dots.  Note that when dereferencing array
       *   indices, the index may be used as a dotted part directly
       *   (e.g. `users.12.name` or `['users', 12, 'name']`).
       * @param {Object=} root Root object from which the path is evaluated.
       * @return {*} Value at the path, or `undefined` if any part of the path
       *   is undefined.
       * @public
       */},{key:"get",value:function get(path,root){return _get(root||this,path)}/**
       * Convenience method for setting a value to a path and notifying any
       * elements bound to the same path.
       *
       * Note, if any part in the path except for the last is undefined,
       * this method does nothing (this method does not throw when
       * dereferencing undefined paths).
       *
       * @override
       * @param {(string|!Array<(string|number)>)} path Path to the value
       *   to write.  The path may be specified as a string (e.g. `'foo.bar.baz'`)
       *   or an array of path parts (e.g. `['foo.bar', 'baz']`).  Note that
       *   bracketed expressions are not supported; string-based path parts
       *   *must* be separated by dots.  Note that when dereferencing array
       *   indices, the index may be used as a dotted part directly
       *   (e.g. `'users.12.name'` or `['users', 12, 'name']`).
       * @param {*} value Value to set at the specified path.
       * @param {Object=} root Root object from which the path is evaluated.
       *   When specified, no notification will occur.
       * @return {void}
       * @public
       */},{key:"set",value:function set(path,value,root){if(root){_set(root,path,value)}else{if(!this[TYPES.READ_ONLY]||!this[TYPES.READ_ONLY][/** @type {string} */path]){if(this._setPendingPropertyOrPath(path,value,!0)){this._invalidateProperties()}}}}/**
       * Adds items onto the end of the array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.push`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @override
       * @param {string | !Array<string|number>} path Path to array.
       * @param {...*} items Items to push onto array
       * @return {number} New length of the array.
       * @public
       */},{key:"push",value:function push(path){for(var info={path:""},array=/** @type {Array}*/_get(this,path,info),len=array.length,_len=arguments.length,items=Array(1<_len?_len-1:0),_key=1;_key<_len;_key++){items[_key-1]=arguments[_key]}var ret=array.push.apply(array,items);if(items.length){notifySplice(this,array,info.path,len,items.length,[])}return ret}/**
       * Removes an item from the end of array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.pop`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @override
       * @param {string | !Array<string|number>} path Path to array.
       * @return {*} Item that was removed.
       * @public
       */},{key:"pop",value:function pop(path){var info={path:""},array=/** @type {Array} */_get(this,path,info),hadLength=!!array.length,ret=array.pop();if(hadLength){notifySplice(this,array,info.path,array.length,0,[ret])}return ret}/**
       * Starting from the start index specified, removes 0 or more items
       * from the array and inserts 0 or more new items in their place.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.splice`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @override
       * @param {string | !Array<string|number>} path Path to array.
       * @param {number} start Index from which to start removing/inserting.
       * @param {number=} deleteCount Number of items to remove.
       * @param {...*} items Items to insert into array.
       * @return {Array} Array of removed items.
       * @public
       */},{key:"splice",value:function splice(path,start,deleteCount){for(var _len2=arguments.length,items=Array(3<_len2?_len2-3:0),_key2=3;_key2<_len2;_key2++){items[_key2-3]=arguments[_key2]}var info={path:""},array=/** @type {Array} */_get(this,path,info);// Normalize fancy native splice handling of crazy start values
if(0>start){start=array.length-Math.floor(-start)}else if(start){start=Math.floor(start)}// array.splice does different things based on the number of arguments
// you pass in. Therefore, array.splice(0) and array.splice(0, undefined)
// do different things. In the former, the whole array is cleared. In the
// latter, no items are removed.
// This means that we need to detect whether 1. one of the arguments
// is actually passed in and then 2. determine how many arguments
// we should pass on to the native array.splice
//
var ret;// Omit any additional arguments if they were not passed in
if(2===arguments.length){ret=array.splice(start);// Either start was undefined and the others were defined, but in this
// case we can safely pass on all arguments
//
// Note: this includes the case where none of the arguments were passed in,
// e.g. this.splice('array'). However, if both start and deleteCount
// are undefined, array.splice will not modify the array (as expected)
}else{ret=array.splice.apply(array,[start,deleteCount].concat(items))}// At the end, check whether any items were passed in (e.g. insertions)
// or if the return array contains items (e.g. deletions).
// Only notify if items were added or deleted.
if(items.length||ret.length){notifySplice(this,array,info.path,start,items.length,ret)}return ret}/**
       * Removes an item from the beginning of array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.pop`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @override
       * @param {string | !Array<string|number>} path Path to array.
       * @return {*} Item that was removed.
       * @public
       */},{key:"shift",value:function shift(path){var info={path:""},array=/** @type {Array} */_get(this,path,info),hadLength=!!array.length,ret=array.shift();if(hadLength){notifySplice(this,array,info.path,0,0,[ret])}return ret}/**
       * Adds items onto the beginning of the array at the path specified.
       *
       * The arguments after `path` and return value match that of
       * `Array.prototype.push`.
       *
       * This method notifies other paths to the same array that a
       * splice occurred to the array.
       *
       * @override
       * @param {string | !Array<string|number>} path Path to array.
       * @param {...*} items Items to insert info array
       * @return {number} New length of the array.
       * @public
       */},{key:"unshift",value:function unshift(path){for(var info={path:""},array=/** @type {Array} */_get(this,path,info),_len3=arguments.length,items=Array(1<_len3?_len3-1:0),_key3=1;_key3<_len3;_key3++){items[_key3-1]=arguments[_key3]}var ret=array.unshift.apply(array,items);if(items.length){notifySplice(this,array,info.path,0,items.length,[])}return ret}/**
       * Notify that a path has changed.
       *
       * Example:
       *
       *     this.item.user.name = 'Bob';
       *     this.notifyPath('item.user.name');
       *
       * @override
       * @param {string} path Path that should be notified.
       * @param {*=} value Value at the path (optional).
       * @return {void}
       * @public
       */},{key:"notifyPath",value:function notifyPath(path,value){/** @type {string} */var propPath;if(1==arguments.length){// Get value if not supplied
var info={path:""};value=_get(this,path,info);propPath=info.path}else if(Array.isArray(path)){// Normalize path if needed
propPath=normalize(path)}else{propPath=/** @type{string} */path}if(this._setPendingPropertyOrPath(propPath,value,!0,!0)){this._invalidateProperties()}}/**
       * Equivalent to static `createReadOnlyProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} property Property name
       * @param {boolean=} protectedSetter Creates a custom protected setter
       *   when `true`.
       * @return {void}
       * @protected
       */},{key:"_createReadOnlyProperty",value:function _createReadOnlyProperty(property,protectedSetter){this._addPropertyEffect(property,TYPES.READ_ONLY);if(protectedSetter){this["_set"+upper(property)]=/** @this {PropertyEffects} */function(value){this._setProperty(property,value)}}}/**
       * Equivalent to static `createPropertyObserver` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} property Property name
       * @param {string|function(*,*)} method Function or name of observer method
       *     to call
       * @param {boolean=} dynamicFn Whether the method name should be included as
       *   a dependency to the effect.
       * @return {void}
       * @protected
       */},{key:"_createPropertyObserver",value:function _createPropertyObserver(property,method,dynamicFn){var info={property:property,method:method,dynamicFn:!!dynamicFn};this._addPropertyEffect(property,TYPES.OBSERVE,{fn:runObserverEffect,info:info,trigger:{name:property}});if(dynamicFn){this._addPropertyEffect(/** @type {string} */method,TYPES.OBSERVE,{fn:runObserverEffect,info:info,trigger:{name:method}})}}/**
       * Equivalent to static `createMethodObserver` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       *   whether method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */},{key:"_createMethodObserver",value:function _createMethodObserver(expression,dynamicFn){var sig=parseMethod(expression);if(!sig){throw new Error("Malformed observer expression '"+expression+"'")}createMethodEffect(this,sig,TYPES.OBSERVE,runMethodEffect,null,dynamicFn)}/**
       * Equivalent to static `createNotifyingProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} property Property name
       * @return {void}
       * @protected
       */},{key:"_createNotifyingProperty",value:function _createNotifyingProperty(property){this._addPropertyEffect(property,TYPES.NOTIFY,{fn:runNotifyEffect,info:{eventName:camelToDashCase(property)+"-changed",property:property}})}/**
       * Equivalent to static `createReflectedProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} property Property name
       * @return {void}
       * @protected
       * @suppress {missingProperties} go/missingfnprops
       */},{key:"_createReflectedProperty",value:function _createReflectedProperty(property){var attr=this.constructor.attributeNameForProperty(property);if("-"===attr[0]){console.warn("Property "+property+" cannot be reflected to attribute "+attr+" because \"-\" is not a valid starting attribute name. Use a lowercase first letter for the property instead.")}else{this._addPropertyEffect(property,TYPES.REFLECT,{fn:runReflectEffect,info:{attrName:attr}})}}/**
       * Equivalent to static `createComputedProperty` API but can be called on
       * an instance to add effects at runtime.  See that method for
       * full API docs.
       *
       * @override
       * @param {string} property Name of computed property to set
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       *   whether method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       */},{key:"_createComputedProperty",value:function _createComputedProperty(property,expression,dynamicFn){var sig=parseMethod(expression);if(!sig){throw new Error("Malformed computed expression '"+expression+"'")}createMethodEffect(this,sig,TYPES.COMPUTE,runComputedEffect,property,dynamicFn)}/**
       * Gather the argument values for a method specified in the provided array
       * of argument metadata.
       *
       * The `path` and `value` arguments are used to fill in wildcard descriptor
       * when the method is being called as a result of a path notification.
       *
       * @param {!Array<!MethodArg>} args Array of argument metadata
       * @param {string} path Property/path name that triggered the method effect
       * @param {Object} props Bag of current property changes
       * @return {Array<*>} Array of argument values
       * @private
       */},{key:"_marshalArgs",value:function _marshalArgs(args,path,props){for(var data=this.__data,values=[],_i14=0,l=args.length;_i14<l;_i14++){var _args$_i=args[_i14],name=_args$_i.name,structured=_args$_i.structured,wildcard=_args$_i.wildcard,value=_args$_i.value,literal=_args$_i.literal;if(!literal){if(wildcard){var _matches=isDescendant(name,path),pathValue=getArgValue(data,props,_matches?path:name);value={path:_matches?path:name,value:pathValue,base:_matches?_get(data,name):pathValue}}else{value=structured?getArgValue(data,props,name):data[name]}}values[_i14]=value}return values}// -- static class methods ------------
/**
     * Ensures an accessor exists for the specified property, and adds
     * to a list of "property effects" that will run when the accessor for
     * the specified property is set.  Effects are grouped by "type", which
     * roughly corresponds to a phase in effect processing.  The effect
     * metadata should be in the following form:
     *
     *     {
     *       fn: effectFunction, // Reference to function to call to perform effect
     *       info: { ... }       // Effect metadata passed to function
     *       trigger: {          // Optional triggering metadata; if not provided
     *         name: string      // the property is treated as a wildcard
     *         structured: boolean
     *         wildcard: boolean
     *       }
     *     }
     *
     * Effects are called from `_propertiesChanged` in the following order by
     * type:
     *
     * 1. COMPUTE
     * 2. PROPAGATE
     * 3. REFLECT
     * 4. OBSERVE
     * 5. NOTIFY
     *
     * Effect functions are called with the following signature:
     *
     *     effectFunction(inst, path, props, oldProps, info, hasPaths)
     *
     * @param {string} property Property that should trigger the effect
     * @param {string} type Effect type, from this.PROPERTY_EFFECT_TYPES
     * @param {Object=} effect Effect metadata object
     * @return {void}
     * @protected
     * @nocollapse
     */},{key:"_bindTemplate",// -- binding ----------------------------------------------
/**
     * Equivalent to static `bindTemplate` API but can be called on
     * an instance to add effects at runtime.  See that method for
     * full API docs.
     *
     * This method may be called on the prototype (for prototypical template
     * binding, to avoid creating accessors every instance) once per prototype,
     * and will be called with `runtimeBinding: true` by `_stampTemplate` to
     * create and link an instance of the template metadata associated with a
     * particular stamping.
     *
     * @override
     * @param {!HTMLTemplateElement} template Template containing binding
     *   bindings
     * @param {boolean=} instanceBinding When false (default), performs
     *   "prototypical" binding of the template and overwrites any previously
     *   bound template for the class. When true (as passed from
     *   `_stampTemplate`), the template info is instanced and linked into
     *   the list of bound templates.
     * @return {!TemplateInfo} Template metadata object; for `runtimeBinding`,
     *   this is an instance of the prototypical template info
     * @protected
     * @suppress {missingProperties} go/missingfnprops
     */value:function _bindTemplate(template,instanceBinding){var templateInfo=this.constructor._parseTemplate(template),wasPreBound=this.__templateInfo==templateInfo;// Optimization: since this is called twice for proto-bound templates,
// don't attempt to recreate accessors if this template was pre-bound
if(!wasPreBound){for(var prop in templateInfo.propertyEffects){this._createPropertyAccessor(prop)}}if(instanceBinding){// For instance-time binding, create instance of template metadata
// and link into list of templates if necessary
templateInfo=/** @type {!TemplateInfo} */Object.create(templateInfo);templateInfo.wasPreBound=wasPreBound;if(!wasPreBound&&this.__templateInfo){var last=this.__templateInfoLast||this.__templateInfo;this.__templateInfoLast=last.nextTemplateInfo=templateInfo;templateInfo.previousTemplateInfo=last;return templateInfo}}return this.__templateInfo=templateInfo}/**
       * Adds a property effect to the given template metadata, which is run
       * at the "propagate" stage of `_propertiesChanged` when the template
       * has been bound to the element via `_bindTemplate`.
       *
       * The `effect` object should match the format in `_addPropertyEffect`.
       *
       * @param {Object} templateInfo Template metadata to add effect to
       * @param {string} prop Property that should trigger the effect
       * @param {Object=} effect Effect metadata object
       * @return {void}
       * @protected
       * @nocollapse
       */},{key:"_stampTemplate",/**
       * Stamps the provided template and performs instance-time setup for
       * Polymer template features, including data bindings, declarative event
       * listeners, and the `this.$` map of `id`'s to nodes.  A document fragment
       * is returned containing the stamped DOM, ready for insertion into the
       * DOM.
       *
       * This method may be called more than once; however note that due to
       * `shadycss` polyfill limitations, only styles from templates prepared
       * using `ShadyCSS.prepareTemplate` will be correctly polyfilled (scoped
       * to the shadow root and support CSS custom properties), and note that
       * `ShadyCSS.prepareTemplate` may only be called once per element. As such,
       * any styles required by in runtime-stamped templates must be included
       * in the main element template.
       *
       * @param {!HTMLTemplateElement} template Template to stamp
       * @return {!StampedTemplate} Cloned template content
       * @override
       * @protected
       */value:function _stampTemplate(template){// Ensures that created dom is `_enqueueClient`'d to this element so
// that it can be flushed on next call to `_flushProperties`
hostStack.beginHosting(this);var dom=babelHelpers.get(babelHelpers.getPrototypeOf(PropertyEffects.prototype),"_stampTemplate",this).call(this,template);hostStack.endHosting(this);var templateInfo=/** @type {!TemplateInfo} */this._bindTemplate(template,!0);// Add template-instance-specific data to instanced templateInfo
templateInfo.nodeList=dom.nodeList;// Capture child nodes to allow unstamping of non-prototypical templates
if(!templateInfo.wasPreBound){for(var nodes=templateInfo.childNodes=[],n=dom.firstChild;n;n=n.nextSibling){nodes.push(n)}}dom.templateInfo=templateInfo;// Setup compound storage, 2-way listeners, and dataHost for bindings
setupBindings(this,templateInfo);// Flush properties into template nodes if already booted
if(this.__dataReady){runEffects(this,templateInfo.propertyEffects,this.__data,null,!1,templateInfo.nodeList)}return dom}/**
       * Removes and unbinds the nodes previously contained in the provided
       * DocumentFragment returned from `_stampTemplate`.
       *
       * @override
       * @param {!StampedTemplate} dom DocumentFragment previously returned
       *   from `_stampTemplate` associated with the nodes to be removed
       * @return {void}
       * @protected
       */},{key:"_removeBoundDom",value:function _removeBoundDom(dom){// Unlink template info
var templateInfo=dom.templateInfo;if(templateInfo.previousTemplateInfo){templateInfo.previousTemplateInfo.nextTemplateInfo=templateInfo.nextTemplateInfo}if(templateInfo.nextTemplateInfo){templateInfo.nextTemplateInfo.previousTemplateInfo=templateInfo.previousTemplateInfo}if(this.__templateInfoLast==templateInfo){this.__templateInfoLast=templateInfo.previousTemplateInfo}templateInfo.previousTemplateInfo=templateInfo.nextTemplateInfo=null;// Remove stamped nodes
for(var nodes=templateInfo.childNodes,_i15=0,node;_i15<nodes.length;_i15++){node=nodes[_i15];node.parentNode.removeChild(node)}}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * parsing bindings from `TextNode`'s' `textContent`.  A `bindings`
       * array is added to `nodeInfo` and populated with binding metadata
       * with information capturing the binding target, and a `parts` array
       * with one or more metadata objects capturing the source(s) of the
       * binding.
       *
       * @param {Node} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */},{key:"PROPERTY_EFFECT_TYPES",get:function get(){return TYPES}}],[{key:"addPropertyEffect",value:function addPropertyEffect(property,type,effect){this.prototype._addPropertyEffect(property,type,effect)}/**
       * Creates a single-property observer for the given property.
       *
       * @param {string} property Property name
       * @param {string|function(*,*)} method Function or name of observer method to call
       * @param {boolean=} dynamicFn Whether the method name should be included as
       *   a dependency to the effect.
       * @return {void}
       * @protected
       * @nocollapse
       */},{key:"createPropertyObserver",value:function createPropertyObserver(property,method,dynamicFn){this.prototype._createPropertyObserver(property,method,dynamicFn)}/**
       * Creates a multi-property "method observer" based on the provided
       * expression, which should be a string in the form of a normal JavaScript
       * function signature: `'methodName(arg1, [..., argn])'`.  Each argument
       * should correspond to a property or path in the context of this
       * prototype (or instance), or may be a literal string or number.
       *
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating
       * @return {void}
       *   whether method names should be included as a dependency to the effect.
       * @protected
       * @nocollapse
       */},{key:"createMethodObserver",value:function createMethodObserver(expression,dynamicFn){this.prototype._createMethodObserver(expression,dynamicFn)}/**
       * Causes the setter for the given property to dispatch `<property>-changed`
       * events to notify of changes to the property.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       * @nocollapse
       */},{key:"createNotifyingProperty",value:function createNotifyingProperty(property){this.prototype._createNotifyingProperty(property)}/**
       * Creates a read-only accessor for the given property.
       *
       * To set the property, use the protected `_setProperty` API.
       * To create a custom protected setter (e.g. `_setMyProp()` for
       * property `myProp`), pass `true` for `protectedSetter`.
       *
       * Note, if the property will have other property effects, this method
       * should be called first, before adding other effects.
       *
       * @param {string} property Property name
       * @param {boolean=} protectedSetter Creates a custom protected setter
       *   when `true`.
       * @return {void}
       * @protected
       * @nocollapse
       */},{key:"createReadOnlyProperty",value:function createReadOnlyProperty(property,protectedSetter){this.prototype._createReadOnlyProperty(property,protectedSetter)}/**
       * Causes the setter for the given property to reflect the property value
       * to a (dash-cased) attribute of the same name.
       *
       * @param {string} property Property name
       * @return {void}
       * @protected
       * @nocollapse
       */},{key:"createReflectedProperty",value:function createReflectedProperty(property){this.prototype._createReflectedProperty(property)}/**
       * Creates a computed property whose value is set to the result of the
       * method described by the given `expression` each time one or more
       * arguments to the method changes.  The expression should be a string
       * in the form of a normal JavaScript function signature:
       * `'methodName(arg1, [..., argn])'`
       *
       * @param {string} property Name of computed property to set
       * @param {string} expression Method expression
       * @param {boolean|Object=} dynamicFn Boolean or object map indicating whether
       *   method names should be included as a dependency to the effect.
       * @return {void}
       * @protected
       * @nocollapse
       */},{key:"createComputedProperty",value:function createComputedProperty(property,expression,dynamicFn){this.prototype._createComputedProperty(property,expression,dynamicFn)}/**
       * Parses the provided template to ensure binding effects are created
       * for them, and then ensures property accessors are created for any
       * dependent properties in the template.  Binding effects for bound
       * templates are stored in a linked list on the instance so that
       * templates can be efficiently stamped and unstamped.
       *
       * @param {!HTMLTemplateElement} template Template containing binding
       *   bindings
       * @return {!TemplateInfo} Template metadata object
       * @protected
       * @nocollapse
       */},{key:"bindTemplate",value:function bindTemplate(template){return this.prototype._bindTemplate(template)}},{key:"_addTemplatePropertyEffect",value:function _addTemplatePropertyEffect(templateInfo,prop,effect){var hostProps=templateInfo.hostProps=templateInfo.hostProps||{};hostProps[prop]=!0;var effects=templateInfo.propertyEffects=templateInfo.propertyEffects||{},propEffects=effects[prop]=effects[prop]||[];propEffects.push(effect)}},{key:"_parseTemplateNode",value:function _parseTemplateNode(node,templateInfo,nodeInfo){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
var noted=propertyEffectsBase._parseTemplateNode.call(this,node,templateInfo,nodeInfo);if(node.nodeType===Node.TEXT_NODE){var parts=this._parseBindings(node.textContent,templateInfo);if(parts){// Initialize the textContent with any literal parts
// NOTE: default to a space here so the textNode remains; some browsers
// (IE) omit an empty textNode following cloneNode/importNode.
node.textContent=literalFromParts(parts)||" ";addBinding(this,templateInfo,nodeInfo,"text","textContent",parts);noted=!0}}return noted}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * parsing bindings from attributes.  A `bindings`
       * array is added to `nodeInfo` and populated with binding metadata
       * with information capturing the binding target, and a `parts` array
       * with one or more metadata objects capturing the source(s) of the
       * binding.
       *
       * @param {Element} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @param {string} name Attribute name
       * @param {string} value Attribute value
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */},{key:"_parseTemplateNodeAttribute",value:function _parseTemplateNodeAttribute(node,templateInfo,nodeInfo,name,value){var parts=this._parseBindings(value,templateInfo);if(parts){// Attribute or property
var origName=name,kind="property";// The only way we see a capital letter here is if the attr has
// a capital letter in it per spec. In this case, to make sure
// this binding works, we go ahead and make the binding to the attribute.
if(capitalAttributeRegex.test(name)){kind="attribute"}else if("$"==name[name.length-1]){name=name.slice(0,-1);kind="attribute"}// Initialize attribute bindings with any literal parts
var literal=literalFromParts(parts);if(literal&&"attribute"==kind){// Ensure a ShadyCSS template scoped style is not removed
// when a class$ binding's initial literal value is set.
if("class"==name&&node.hasAttribute("class")){literal+=" "+node.getAttribute(name)}node.setAttribute(name,literal)}// Clear attribute before removing, since IE won't allow removing
// `value` attribute if it previously had a value (can't
// unconditionally set '' before removing since attributes with `$`
// can't be set using setAttribute)
if("input"===node.localName&&"value"===origName){node.setAttribute(origName,"")}// Remove annotation
node.removeAttribute(origName);// Case hackery: attributes are lower-case, but bind targets
// (properties) are case sensitive. Gambit is to map dash-case to
// camel-case: `foo-bar` becomes `fooBar`.
// Attribute bindings are excepted.
if("property"===kind){name=dashToCamelCase(name)}addBinding(this,templateInfo,nodeInfo,kind,name,parts,literal);return!0}else{// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
return propertyEffectsBase._parseTemplateNodeAttribute.call(this,node,templateInfo,nodeInfo,name,value)}}/**
       * Overrides default `TemplateStamp` implementation to add support for
       * binding the properties that a nested template depends on to the template
       * as `_host_<property>`.
       *
       * @param {Node} node Node to parse
       * @param {TemplateInfo} templateInfo Template metadata for current template
       * @param {NodeInfo} nodeInfo Node metadata for current template node
       * @return {boolean} `true` if the visited node added node-specific
       *   metadata to `nodeInfo`
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */},{key:"_parseTemplateNestedTemplate",value:function _parseTemplateNestedTemplate(node,templateInfo,nodeInfo){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
var noted=propertyEffectsBase._parseTemplateNestedTemplate.call(this,node,templateInfo,nodeInfo),hostProps=nodeInfo.templateInfo.hostProps,mode="{";// Merge host props into outer template and add bindings
for(var source in hostProps){var parts=[{mode:mode,source:source,dependencies:[source]}];addBinding(this,templateInfo,nodeInfo,"property","_host_"+source,parts)}return noted}/**
       * Called to parse text in a template (either attribute values or
       * textContent) into binding metadata.
       *
       * Any overrides of this method should return an array of binding part
       * metadata  representing one or more bindings found in the provided text
       * and any "literal" text in between.  Any non-literal parts will be passed
       * to `_evaluateBinding` when any dependencies change.  The only required
       * fields of each "part" in the returned array are as follows:
       *
       * - `dependencies` - Array containing trigger metadata for each property
       *   that should trigger the binding to update
       * - `literal` - String containing text if the part represents a literal;
       *   in this case no `dependencies` are needed
       *
       * Additional metadata for use by `_evaluateBinding` may be provided in
       * each part object as needed.
       *
       * The default implementation handles the following types of bindings
       * (one or more may be intermixed with literal strings):
       * - Property binding: `[[prop]]`
       * - Path binding: `[[object.prop]]`
       * - Negated property or path bindings: `[[!prop]]` or `[[!object.prop]]`
       * - Two-way property or path bindings (supports negation):
       *   `{{prop}}`, `{{object.prop}}`, `{{!prop}}` or `{{!object.prop}}`
       * - Inline computed method (supports negation):
       *   `[[compute(a, 'literal', b)]]`, `[[!compute(a, 'literal', b)]]`
       *
       * The default implementation uses a regular expression for best
       * performance. However, the regular expression uses a white-list of
       * allowed characters in a data-binding, which causes problems for
       * data-bindings that do use characters not in this white-list.
       *
       * Instead of updating the white-list with all allowed characters,
       * there is a StrictBindingParser (see lib/mixins/strict-binding-parser)
       * that uses a state machine instead. This state machine is able to handle
       * all characters. However, it is slightly less performant, therefore we
       * extracted it into a separate optional mixin.
       *
       * @param {string} text Text to parse from attribute or textContent
       * @param {Object} templateInfo Current template metadata
       * @return {Array<!BindingPart>} Array of binding part metadata
       * @protected
       * @nocollapse
       */},{key:"_parseBindings",value:function _parseBindings(text,templateInfo){var parts=[],lastIndex=0,m;// Example: "literal1{{prop}}literal2[[!compute(foo,bar)]]final"
// Regex matches:
//        Iteration 1:  Iteration 2:
// m[1]: '{{'          '[['
// m[2]: ''            '!'
// m[3]: 'prop'        'compute(foo,bar)'
while(null!==(m=bindingRegex.exec(text))){// Add literal part
if(m.index>lastIndex){parts.push({literal:text.slice(lastIndex,m.index)})}// Add binding part
var mode=m[1][0],negate=!!m[2],source=m[3].trim(),customEvent=!1,notifyEvent="",colon=-1;if("{"==mode&&0<(colon=source.indexOf("::"))){notifyEvent=source.substring(colon+2);source=source.substring(0,colon);customEvent=!0}var signature=parseMethod(source),dependencies=[];if(signature){// Inline computed function
for(var args=signature.args,methodName=signature.methodName,_i16=0,arg;_i16<args.length;_i16++){arg=args[_i16];if(!arg.literal){dependencies.push(arg)}}var dynamicFns=templateInfo.dynamicFns;if(dynamicFns&&dynamicFns[methodName]||signature.static){dependencies.push(methodName);signature.dynamicFn=!0}}else{// Property or path
dependencies.push(source)}parts.push({source:source,mode:mode,negate:negate,customEvent:customEvent,signature:signature,dependencies:dependencies,event:notifyEvent});lastIndex=bindingRegex.lastIndex}// Add a final literal part
if(lastIndex&&lastIndex<text.length){var literal=text.substring(lastIndex);if(literal){parts.push({literal:literal})}}if(parts.length){return parts}else{return null}}/**
       * Called to evaluate a previously parsed binding part based on a set of
       * one or more changed dependencies.
       *
       * @param {!Polymer_PropertyEffects} inst Element that should be used as
       *     scope for binding dependencies
       * @param {BindingPart} part Binding part metadata
       * @param {string} path Property/path that triggered this effect
       * @param {Object} props Bag of current property changes
       * @param {Object} oldProps Bag of previous values for changed properties
       * @param {boolean} hasPaths True with `props` contains one or more paths
       * @return {*} Value the binding part evaluated to
       * @protected
       * @nocollapse
       */},{key:"_evaluateBinding",value:function _evaluateBinding(inst,part,path,props,oldProps,hasPaths){var value;if(part.signature){value=runMethodEffect(inst,path,props,oldProps,part.signature)}else if(path!=part.source){value=_get(inst,part.source)}else{if(hasPaths&&isPath(path)){value=_get(inst,path)}else{value=inst.__data[path]}}if(part.negate){value=!value}return value}}]);return PropertyEffects}(propertyEffectsBase);/**
                                                                                * @polymer
                                                                                * @mixinClass
                                                                                * @implements {Polymer_PropertyEffects}
                                                                                * @extends {propertyEffectsBase}
                                                                                * @unrestricted
                                                                                */return PropertyEffects});/**
     * Helper api for enqueuing client dom created by a host element.
     *
     * By default elements are flushed via `_flushProperties` when
     * `connectedCallback` is called. Elements attach their client dom to
     * themselves at `ready` time which results from this first flush.
     * This provides an ordering guarantee that the client dom an element
     * creates is flushed before the element itself (i.e. client `ready`
     * fires before host `ready`).
     *
     * However, if `_flushProperties` is called *before* an element is connected,
     * as for example `Templatize` does, this ordering guarantee cannot be
     * satisfied because no elements are connected. (Note: Bound elements that
     * receive data do become enqueued clients and are properly ordered but
     * unbound elements are not.)
     *
     * To maintain the desired "client before host" ordering guarantee for this
     * case we rely on the "host stack. Client nodes registers themselves with
     * the creating host element when created. This ensures that all client dom
     * is readied in the proper order, maintaining the desired guarantee.
     *
     * @private
     */_exports.PropertyEffects=PropertyEffects;var HostStack=/*#__PURE__*/function(){function HostStack(){babelHelpers.classCallCheck(this,HostStack);this.stack=[]}/**
     * @param {*} inst Instance to add to hostStack
     * @return {void}
     */babelHelpers.createClass(HostStack,[{key:"registerHost",value:function registerHost(inst){if(this.stack.length){var host=this.stack[this.stack.length-1];host._enqueueClient(inst)}}/**
     * @param {*} inst Instance to begin hosting
     * @return {void}
     */},{key:"beginHosting",value:function beginHosting(inst){this.stack.push(inst)}/**
     * @param {*} inst Instance to end hosting
     * @return {void}
     */},{key:"endHosting",value:function endHosting(inst){var stackLen=this.stack.length;if(stackLen&&this.stack[stackLen-1]==inst){this.stack.pop()}}}]);return HostStack}(),hostStack=new HostStack,propertyEffects={PropertyEffects:PropertyEffects};_exports.$propertyEffects=propertyEffects;/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */ /**
       * Total number of Polymer element instances created.
       * @type {number}
       */var instanceCount=0;_exports.instanceCount=instanceCount;function incrementInstanceCount(){_exports.instanceCount=instanceCount=instanceCount+1}/**
   * Array of Polymer element classes that have been finalized.
   * @type {!Array<!PolymerElementConstructor>}
   */var registrations=[];/**
                                  * @param {!PolymerElementConstructor} prototype Element prototype to log
                                  * @private
                                  */_exports.registrations=registrations;function _regLog(prototype){console.log("["+/** @type {?} */prototype.is+"]: registered")}/**
   * Registers a class prototype for telemetry purposes.
   * @param {!PolymerElementConstructor} prototype Element prototype to register
   * @protected
   */function register(prototype){registrations.push(prototype)}/**
   * Logs all elements registered with an `is` to the console.
   * @public
   */function dumpRegistrations(){registrations.forEach(_regLog)}var telemetry={get instanceCount(){return instanceCount},incrementInstanceCount:incrementInstanceCount,registrations:registrations,register:register,dumpRegistrations:dumpRegistrations};_exports.$telemetry=telemetry;function normalizeProperties(props){var output={};for(var _p9 in props){var o=props[_p9];output[_p9]="function"===typeof o?{type:o}:o}return output}/**
   * Mixin that provides a minimal starting point to using the PropertiesChanged
   * mixin by providing a mechanism to declare properties in a static
   * getter (e.g. static get properties() { return { foo: String } }). Changes
   * are reported via the `_propertiesChanged` method.
   *
   * This mixin provides no specific support for rendering. Users are expected
   * to create a ShadowRoot and put content into it and update it in whatever
   * way makes sense. This can be done in reaction to properties changing by
   * implementing `_propertiesChanged`.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Mixin that provides a minimal starting point for using
   * the PropertiesChanged mixin by providing a declarative `properties` object.
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */var PropertiesMixin=dedupingMixin(function(superClass){/**
   * @constructor
   * @implements {Polymer_PropertiesChanged}
   * @private
   */var base=PropertiesChanged(superClass);/**
                                                  * Returns the super class constructor for the given class, if it is an
                                                  * instance of the PropertiesMixin.
                                                  *
                                                  * @param {!PropertiesMixinConstructor} constructor PropertiesMixin constructor
                                                  * @return {?PropertiesMixinConstructor} Super class constructor
                                                  */function superPropertiesClass(constructor){var superCtor=Object.getPrototypeOf(constructor);// Note, the `PropertiesMixin` class below only refers to the class
// generated by this call to the mixin; the instanceof test only works
// because the mixin is deduped and guaranteed only to apply once, hence
// all constructors in a proto chain will see the same `PropertiesMixin`
return babelHelpers.instanceof(superCtor.prototype,PropertiesMixin)?/** @type {!PropertiesMixinConstructor} */superCtor:null}/**
     * Returns a memoized version of the `properties` object for the
     * given class. Properties not in object format are converted to at
     * least {type}.
     *
     * @param {PropertiesMixinConstructor} constructor PropertiesMixin constructor
     * @return {Object} Memoized properties object
     */function ownProperties(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",constructor))){var _props=null;if(constructor.hasOwnProperty(JSCompiler_renameProperty("properties",constructor))){var properties=constructor.properties;if(properties){_props=normalizeProperties(properties)}}constructor.__ownProperties=_props}return constructor.__ownProperties}/**
     * @polymer
     * @mixinClass
     * @extends {base}
     * @implements {Polymer_PropertiesMixin}
     * @unrestricted
     */var PropertiesMixin=/*#__PURE__*/function(_base2){babelHelpers.inherits(PropertiesMixin,_base2);function PropertiesMixin(){babelHelpers.classCallCheck(this,PropertiesMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PropertiesMixin).apply(this,arguments))}babelHelpers.createClass(PropertiesMixin,[{key:"_initializeProperties",/**
       * Overrides `PropertiesChanged` method and adds a call to
       * `finalize` which lazily configures the element's property accessors.
       * @override
       * @return {void}
       */value:function _initializeProperties(){incrementInstanceCount();this.constructor.finalize();babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype),"_initializeProperties",this).call(this)}/**
       * Called when the element is added to a document.
       * Calls `_enableProperties` to turn on property system from
       * `PropertiesChanged`.
       * @suppress {missingProperties} Super may or may not implement the callback
       * @return {void}
       * @override
       */},{key:"connectedCallback",value:function connectedCallback(){if(babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype),"connectedCallback",this)){babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype),"connectedCallback",this).call(this)}this._enableProperties()}/**
       * Called when the element is removed from a document
       * @suppress {missingProperties} Super may or may not implement the callback
       * @return {void}
       * @override
       */},{key:"disconnectedCallback",value:function disconnectedCallback(){if(babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype),"disconnectedCallback",this)){babelHelpers.get(babelHelpers.getPrototypeOf(PropertiesMixin.prototype),"disconnectedCallback",this).call(this)}}}],[{key:"finalize",/**
       * Finalizes an element definition, including ensuring any super classes
       * are also finalized. This includes ensuring property
       * accessors exist on the element prototype. This method calls
       * `_finalizeClass` to finalize each constructor in the prototype chain.
       * @return {void}
       * @nocollapse
       */value:function finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){var superCtor=superPropertiesClass(/** @type {!PropertiesMixinConstructor} */this);if(superCtor){superCtor.finalize()}this.__finalized=!0;this._finalizeClass()}}/**
       * Finalize an element class. This includes ensuring property
       * accessors exist on the element prototype. This method is called by
       * `finalize` and finalizes the class constructor.
       *
       * @protected
       * @nocollapse
       */},{key:"_finalizeClass",value:function _finalizeClass(){var props=ownProperties(/** @type {!PropertiesMixinConstructor} */this);if(props){/** @type {?} */this.createProperties(props)}}/**
       * Returns a memoized version of all properties, including those inherited
       * from super classes. Properties not in object format are converted to
       * at least {type}.
       *
       * @return {Object} Object containing properties for this class
       * @protected
       * @nocollapse
       */},{key:"typeForProperty",/**
       * Overrides `PropertiesChanged` method to return type specified in the
       * static `properties` object for the given property.
       * @param {string} name Name of property
       * @return {*} Type to which to deserialize attribute
       *
       * @protected
       * @nocollapse
       */value:function typeForProperty(name){var info=this._properties[name];return info&&info.type}},{key:"observedAttributes",/**
     * Implements standard custom elements getter to observes the attributes
     * listed in `properties`.
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     * @nocollapse
     */get:function get(){var _this10=this;if(!this.hasOwnProperty("__observedAttributes")){register(this.prototype);var _props2=this._properties;this.__observedAttributes=_props2?Object.keys(_props2).map(function(p){return _this10.attributeNameForProperty(p)}):[]}return this.__observedAttributes}},{key:"_properties",get:function get(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){var superCtor=superPropertiesClass(/** @type {!PropertiesMixinConstructor} */this);this.__properties=Object.assign({},superCtor&&superCtor._properties,ownProperties(/** @type {PropertiesMixinConstructor} */this))}return this.__properties}}]);return PropertiesMixin}(base);return PropertiesMixin});_exports.PropertiesMixin=PropertiesMixin;var propertiesMixin={PropertiesMixin:PropertiesMixin};_exports.$propertiesMixin=propertiesMixin;var bundledImportMeta=_objectSpread({},meta,{url:new URL("../node_modules/%40polymer/polymer/lib/mixins/element-mixin.js",meta.url).href}),version="3.3.0";_exports.version$1=_exports.version=version;var builtCSS=window.ShadyCSS&&window.ShadyCSS.cssBuild,ElementMixin=dedupingMixin(function(base){/**
   * @constructor
   * @implements {Polymer_PropertyEffects}
   * @implements {Polymer_PropertiesMixin}
   * @extends {HTMLElement}
   * @private
   */var polymerElementBase=PropertiesMixin(PropertyEffects(base));/**
                                                                         * Returns a list of properties with default values.
                                                                         * This list is created as an optimization since it is a subset of
                                                                         * the list returned from `_properties`.
                                                                         * This list is used in `_initializeProperties` to set property defaults.
                                                                         *
                                                                         * @param {PolymerElementConstructor} constructor Element class
                                                                         * @return {PolymerElementProperties} Flattened properties for this class
                                                                         *   that have default values
                                                                         * @private
                                                                         */function propertyDefaults(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",constructor))){constructor.__propertyDefaults=null;var _props3=constructor._properties;for(var _p10 in _props3){var info=_props3[_p10];if("value"in info){constructor.__propertyDefaults=constructor.__propertyDefaults||{};constructor.__propertyDefaults[_p10]=info}}}return constructor.__propertyDefaults}/**
     * Returns a memoized version of the `observers` array.
     * @param {PolymerElementConstructor} constructor Element class
     * @return {Array} Array containing own observers for the given class
     * @protected
     */function ownObservers(constructor){if(!constructor.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",constructor))){constructor.__ownObservers=constructor.hasOwnProperty(JSCompiler_renameProperty("observers",constructor))?/** @type {PolymerElementConstructor} */constructor.observers:null}return constructor.__ownObservers}/**
     * Creates effects for a property.
     *
     * Note, once a property has been set to
     * `readOnly`, `computed`, `reflectToAttribute`, or `notify`
     * these values may not be changed. For example, a subclass cannot
     * alter these settings. However, additional `observers` may be added
     * by subclasses.
     *
     * The info object should contain property metadata as follows:
     *
     * * `type`: {function} type to which an attribute matching the property
     * is deserialized. Note the property is camel-cased from a dash-cased
     * attribute. For example, 'foo-bar' attribute is deserialized to a
     * property named 'fooBar'.
     *
     * * `readOnly`: {boolean} creates a readOnly property and
     * makes a private setter for the private of the form '_setFoo' for a
     * property 'foo',
     *
     * * `computed`: {string} creates a computed property. A computed property
     * is also automatically set to `readOnly: true`. The value is calculated
     * by running a method and arguments parsed from the given string. For
     * example 'compute(foo)' will compute a given property when the
     * 'foo' property changes by executing the 'compute' method. This method
     * must return the computed value.
     *
     * * `reflectToAttribute`: {boolean} If true, the property value is reflected
     * to an attribute of the same name. Note, the attribute is dash-cased
     * so a property named 'fooBar' is reflected as 'foo-bar'.
     *
     * * `notify`: {boolean} sends a non-bubbling notification event when
     * the property changes. For example, a property named 'foo' sends an
     * event named 'foo-changed' with `event.detail` set to the value of
     * the property.
     *
     * * observer: {string} name of a method that runs when the property
     * changes. The arguments of the method are (value, previousValue).
     *
     * Note: Users may want control over modifying property
     * effects via subclassing. For example, a user might want to make a
     * reflectToAttribute property not do so in a subclass. We've chosen to
     * disable this because it leads to additional complication.
     * For example, a readOnly effect generates a special setter. If a subclass
     * disables the effect, the setter would fail unexpectedly.
     * Based on feedback, we may want to try to make effects more malleable
     * and/or provide an advanced api for manipulating them.
     *
     * @param {!PolymerElement} proto Element class prototype to add accessors
     *   and effects to
     * @param {string} name Name of the property.
     * @param {Object} info Info object from which to create property effects.
     * Supported keys:
     * @param {Object} allProps Flattened map of all properties defined in this
     *   element (including inherited properties)
     * @return {void}
     * @private
     */function createPropertyFromConfig(proto,name,info,allProps){// computed forces readOnly...
if(info.computed){info.readOnly=!0}// Note, since all computed properties are readOnly, this prevents
// adding additional computed property effects (which leads to a confusing
// setup where multiple triggers for setting a property)
// While we do have `hasComputedEffect` this is set on the property's
// dependencies rather than itself.
if(info.computed){if(proto._hasReadOnlyEffect(name)){console.warn("Cannot redefine computed property '".concat(name,"'."))}else{proto._createComputedProperty(name,info.computed,allProps)}}if(info.readOnly&&!proto._hasReadOnlyEffect(name)){proto._createReadOnlyProperty(name,!info.computed)}else if(!1===info.readOnly&&proto._hasReadOnlyEffect(name)){console.warn("Cannot make readOnly property '".concat(name,"' non-readOnly."))}if(info.reflectToAttribute&&!proto._hasReflectEffect(name)){proto._createReflectedProperty(name)}else if(!1===info.reflectToAttribute&&proto._hasReflectEffect(name)){console.warn("Cannot make reflected property '".concat(name,"' non-reflected."))}if(info.notify&&!proto._hasNotifyEffect(name)){proto._createNotifyingProperty(name)}else if(!1===info.notify&&proto._hasNotifyEffect(name)){console.warn("Cannot make notify property '".concat(name,"' non-notify."))}// always add observer
if(info.observer){proto._createPropertyObserver(name,info.observer,allProps[info.observer])}// always create the mapping from attribute back to property for deserialization.
proto._addPropertyToAttributeMap(name)}/**
     * Process all style elements in the element template. Styles with the
     * `include` attribute are processed such that any styles in
     * the associated "style modules" are included in the element template.
     * @param {PolymerElementConstructor} klass Element class
     * @param {!HTMLTemplateElement} template Template to process
     * @param {string} is Name of element
     * @param {string} baseURI Base URI for element
     * @private
     */function processElementStyles(klass,template,is,baseURI){if(!builtCSS){for(var templateStyles=template.content.querySelectorAll("style"),stylesWithImports=stylesFromTemplate(template),linkedStyles=stylesFromModuleImports(is),firstTemplateChild=template.content.firstElementChild,idx=0,s;idx<linkedStyles.length;idx++){s=linkedStyles[idx];s.textContent=klass._processStyleText(s.textContent,baseURI);template.content.insertBefore(s,firstTemplateChild)}// keep track of the last "concrete" style in the template we have encountered
// ensure all gathered styles are actually in this template.
for(var templateStyleIndex=0,_i17=0;_i17<stylesWithImports.length;_i17++){var _s=stylesWithImports[_i17],templateStyle=templateStyles[templateStyleIndex];// if the style is not in this template, it's been "included" and
// we put a clone of it in the template before the style that included it
if(templateStyle!==_s){_s=_s.cloneNode(!0);templateStyle.parentNode.insertBefore(_s,templateStyle)}else{templateStyleIndex++}_s.textContent=klass._processStyleText(_s.textContent,baseURI)}}if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(template,is)}}/**
     * Look up template from dom-module for element
     *
     * @param {string} is Element name to look up
     * @return {?HTMLTemplateElement|undefined} Template found in dom module, or
     *   undefined if not found
     * @protected
     */function getTemplateFromDomModule(is){var template=null;// Under strictTemplatePolicy in 3.x+, dom-module lookup is only allowed
// when opted-in via allowTemplateFromDomModule
if(is&&(!strictTemplatePolicy||allowTemplateFromDomModule)){template=/** @type {?HTMLTemplateElement} */DomModule.import(is,"template");// Under strictTemplatePolicy, require any element with an `is`
// specified to have a dom-module
if(strictTemplatePolicy&&!template){throw new Error("strictTemplatePolicy: expecting dom-module or null template for ".concat(is))}}return template}/**
     * @polymer
     * @mixinClass
     * @unrestricted
     * @implements {Polymer_ElementMixin}
     * @extends {polymerElementBase}
     */var PolymerElement=/*#__PURE__*/function(_polymerElementBase){babelHelpers.inherits(PolymerElement,_polymerElementBase);babelHelpers.createClass(PolymerElement,null,[{key:"_finalizeClass",/**
       * Override of PropertiesMixin _finalizeClass to create observers and
       * find the template.
       * @return {void}
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */value:function _finalizeClass(){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
polymerElementBase._finalizeClass.call(this);var observers=ownObservers(this);if(observers){this.createObservers(observers,this._properties)}this._prepareTemplate()}/** @nocollapse */},{key:"_prepareTemplate",value:function _prepareTemplate(){// note: create "working" template that is finalized at instance time
var template=/** @type {PolymerElementConstructor} */this.template;if(template){if("string"===typeof template){console.error("template getter must return HTMLTemplateElement");template=null}else if(!legacyOptimizations){template=template.cloneNode(!0)}}/** @override */this.prototype._template=template}/**
       * Override of PropertiesChanged createProperties to create accessors
       * and property effects for all of the properties.
       * @param {!Object} props .
       * @return {void}
       * @protected
       * @nocollapse
       */},{key:"createProperties",value:function createProperties(props){for(var _p11 in props){createPropertyFromConfig(/** @type {?} */this.prototype,_p11,props[_p11],props)}}/**
       * Creates observers for the given `observers` array.
       * Leverages `PropertyEffects` to create observers.
       * @param {Object} observers Array of observer descriptors for
       *   this class
       * @param {Object} dynamicFns Object containing keys for any properties
       *   that are functions and should trigger the effect when the function
       *   reference is changed
       * @return {void}
       * @protected
       * @nocollapse
       */},{key:"createObservers",value:function createObservers(observers,dynamicFns){for(var proto=this.prototype,_i18=0;_i18<observers.length;_i18++){proto._createMethodObserver(observers[_i18],dynamicFns)}}/**
       * Returns the template that will be stamped into this element's shadow root.
       *
       * If a `static get is()` getter is defined, the default implementation
       * will return the first `<template>` in a `dom-module` whose `id`
       * matches this element's `is`.
       *
       * Users may override this getter to return an arbitrary template
       * (in which case the `is` getter is unnecessary). The template returned
       * must be an `HTMLTemplateElement`.
       *
       * Note that when subclassing, if the super class overrode the default
       * implementation and the subclass would like to provide an alternate
       * template via a `dom-module`, it should override this getter and
       * return `DomModule.import(this.is, 'template')`.
       *
       * If a subclass would like to modify the super class template, it should
       * clone it rather than modify it in place.  If the getter does expensive
       * work such as cloning/modifying a template, it should memoize the
       * template for maximum performance:
       *
       *   let memoizedTemplate;
       *   class MySubClass extends MySuperClass {
       *     static get template() {
       *       if (!memoizedTemplate) {
       *         memoizedTemplate = super.template.cloneNode(true);
       *         let subContent = document.createElement('div');
       *         subContent.textContent = 'This came from MySubClass';
       *         memoizedTemplate.content.appendChild(subContent);
       *       }
       *       return memoizedTemplate;
       *     }
       *   }
       *
       * @return {!HTMLTemplateElement|string} Template to be stamped
       * @nocollapse
       */},{key:"polymerElementVersion",/**
     * Current Polymer version in Semver notation.
     * @type {string} Semver notation of the current version of Polymer.
     * @nocollapse
     */get:function get(){return version}},{key:"template",get:function get(){// Explanation of template-related properties:
// - constructor.template (this getter): the template for the class.
//     This can come from the prototype (for legacy elements), from a
//     dom-module, or from the super class's template (or can be overridden
//     altogether by the user)
// - constructor._template: memoized version of constructor.template
// - prototype._template: working template for the element, which will be
//     parsed and modified in place. It is a cloned version of
//     constructor.template, saved in _finalizeClass(). Note that before
//     this getter is called, for legacy elements this could be from a
//     _template field on the info object passed to Polymer(), a behavior,
//     or set in registered(); once the static getter runs, a clone of it
//     will overwrite it on the prototype as the working template.
if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){this._template=// If user has put template on prototype (e.g. in legacy via registered
// callback or info object), prefer that first
this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:// Look in dom-module associated with this element's is
getTemplateFromDomModule(/** @type {PolymerElementConstructor}*/this.is)||// Next look for superclass template (call the super impl this
// way so that `this` points to the superclass)
Object.getPrototypeOf(/** @type {PolymerElementConstructor}*/this.prototype).constructor.template}return this._template}/**
       * Set the template.
       *
       * @param {!HTMLTemplateElement|string} value Template to set.
       * @nocollapse
       */,set:function set(value){this._template=value}/**
       * Path matching the url from which the element was imported.
       *
       * This path is used to resolve url's in template style cssText.
       * The `importPath` property is also set on element instances and can be
       * used to create bindings relative to the import path.
       *
       * For elements defined in ES modules, users should implement
       * `static get importMeta() { return import.meta; }`, and the default
       * implementation of `importPath` will  return `import.meta.url`'s path.
       * For elements defined in HTML imports, this getter will return the path
       * to the document containing a `dom-module` element matching this
       * element's static `is` property.
       *
       * Note, this path should contain a trailing `/`.
       *
       * @return {string} The import path for this element class
       * @suppress {missingProperties}
       * @nocollapse
       */},{key:"importPath",get:function get(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){var meta=this.importMeta;if(meta){this._importPath=pathFromUrl(meta.url)}else{var module=DomModule.import(/** @type {PolymerElementConstructor} */this.is);this._importPath=module&&module.assetpath||Object.getPrototypeOf(/** @type {PolymerElementConstructor}*/this.prototype).constructor.importPath}}return this._importPath}}]);function PolymerElement(){var _this11;babelHelpers.classCallCheck(this,PolymerElement);_this11=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PolymerElement).call(this));/** @type {HTMLTemplateElement} */_this11._template;/** @type {string} */_this11._importPath;/** @type {string} */_this11.rootPath;/** @type {string} */_this11.importPath;/** @type {StampedTemplate | HTMLElement | ShadowRoot} */_this11.root;/** @type {!Object<string, !Element>} */_this11.$;return _this11}/**
       * Overrides the default `PropertyAccessors` to ensure class
       * metaprogramming related to property accessors and effects has
       * completed (calls `finalize`).
       *
       * It also initializes any property defaults provided via `value` in
       * `properties` metadata.
       *
       * @return {void}
       * @override
       * @suppress {invalidCasts,missingProperties} go/missingfnprops
       */babelHelpers.createClass(PolymerElement,[{key:"_initializeProperties",value:function _initializeProperties(){this.constructor.finalize();// note: finalize template when we have access to `localName` to
// avoid dependence on `is` for polyfilling styling.
this.constructor._finalizeTemplate(/** @type {!HTMLElement} */this.localName);babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement.prototype),"_initializeProperties",this).call(this);// set path defaults
this.rootPath=rootPath;this.importPath=this.constructor.importPath;// apply property defaults...
var p$=propertyDefaults(this.constructor);if(!p$){return}for(var _p12 in p$){var info=p$[_p12];// Don't set default value if there is already an own property, which
// happens when a `properties` property with default but no effects had
// a property set (e.g. bound) by its host before upgrade
if(!this.hasOwnProperty(_p12)){var value="function"==typeof info.value?info.value.call(this):info.value;// Set via `_setProperty` if there is an accessor, to enable
// initializing readOnly property defaults
if(this._hasAccessor(_p12)){this._setPendingProperty(_p12,value,!0)}else{this[_p12]=value}}}}/**
       * Gather style text for a style element in the template.
       *
       * @param {string} cssText Text containing styling to process
       * @param {string} baseURI Base URI to rebase CSS paths against
       * @return {string} The processed CSS text
       * @protected
       * @nocollapse
       */},{key:"connectedCallback",/**
       * Provides a default implementation of the standard Custom Elements
       * `connectedCallback`.
       *
       * The default implementation enables the property effects system and
       * flushes any pending properties, and updates shimmed CSS properties
       * when using the ShadyCSS scoping/custom properties polyfill.
       *
       * @override
       * @suppress {missingProperties, invalidCasts} Super may or may not
       *     implement the callback
       * @return {void}
       */value:function connectedCallback(){if(window.ShadyCSS&&this._template){window.ShadyCSS.styleElement(/** @type {!HTMLElement} */this)}babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement.prototype),"connectedCallback",this).call(this)}/**
       * Stamps the element template.
       *
       * @return {void}
       * @override
       */},{key:"ready",value:function ready(){if(this._template){this.root=this._stampTemplate(this._template);this.$=this.root.$}babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement.prototype),"ready",this).call(this)}/**
       * Implements `PropertyEffects`'s `_readyClients` call. Attaches
       * element dom by calling `_attachDom` with the dom stamped from the
       * element's template via `_stampTemplate`. Note that this allows
       * client dom to be attached to the element prior to any observers
       * running.
       *
       * @return {void}
       * @override
       */},{key:"_readyClients",value:function _readyClients(){if(this._template){this.root=this._attachDom(/** @type {StampedTemplate} */this.root)}// The super._readyClients here sets the clients initialized flag.
// We must wait to do this until after client dom is created/attached
// so that this flag can be checked to prevent notifications fired
// during this process from being handled before clients are ready.
babelHelpers.get(babelHelpers.getPrototypeOf(PolymerElement.prototype),"_readyClients",this).call(this)}/**
       * Attaches an element's stamped dom to itself. By default,
       * this method creates a `shadowRoot` and adds the dom to it.
       * However, this method may be overridden to allow an element
       * to put its dom in another location.
       *
       * @override
       * @throws {Error}
       * @suppress {missingReturn}
       * @param {StampedTemplate} dom to attach to the element.
       * @return {ShadowRoot} node to which the dom has been attached.
       */},{key:"_attachDom",value:function _attachDom(dom){var n=wrap$1(this);if(n.attachShadow){if(dom){if(!n.shadowRoot){n.attachShadow({mode:"open",shadyUpgradeFragment:dom});n.shadowRoot.appendChild(dom)}if(syncInitialRender&&window.ShadyDOM){ShadyDOM.flushInitial(n.shadowRoot)}return n.shadowRoot}return null}else{throw new Error("ShadowDOM not available. "+// TODO(sorvell): move to compile-time conditional when supported
"PolymerElement can create dom as children instead of in "+"ShadowDOM by setting `this.root = this;` before `ready`.")}}/**
       * When using the ShadyCSS scoping and custom property shim, causes all
       * shimmed styles in this element (and its subtree) to be updated
       * based on current custom property values.
       *
       * The optional parameter overrides inline custom property styles with an
       * object of properties where the keys are CSS properties, and the values
       * are strings.
       *
       * Example: `this.updateStyles({'--color': 'blue'})`
       *
       * These properties are retained unless a value of `null` is set.
       *
       * Note: This function does not support updating CSS mixins.
       * You can not dynamically change the value of an `@apply`.
       *
       * @override
       * @param {Object=} properties Bag of custom property key/values to
       *   apply to this element.
       * @return {void}
       * @suppress {invalidCasts}
       */},{key:"updateStyles",value:function updateStyles(properties){if(window.ShadyCSS){window.ShadyCSS.styleSubtree(/** @type {!HTMLElement} */this,properties)}}/**
       * Rewrites a given URL relative to a base URL. The base URL defaults to
       * the original location of the document containing the `dom-module` for
       * this element. This method will return the same URL before and after
       * bundling.
       *
       * Note that this function performs no resolution for URLs that start
       * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
       * URL resolution, use `window.URL`.
       *
       * @override
       * @param {string} url URL to resolve.
       * @param {string=} base Optional base URL to resolve against, defaults
       * to the element's `importPath`
       * @return {string} Rewritten URL relative to base
       */},{key:"resolveUrl",value:function resolveUrl(url,base){if(!base&&this.importPath){base=_resolveUrl(this.importPath)}return _resolveUrl(url,base)}/**
       * Overrides `PropertyEffects` to add map of dynamic functions on
       * template info, for consumption by `PropertyEffects` template binding
       * code. This map determines which method templates should have accessors
       * created for them.
       *
       * @param {!HTMLTemplateElement} template Template
       * @param {!TemplateInfo} templateInfo Template metadata for current template
       * @param {!NodeInfo} nodeInfo Node metadata for current template.
       * @return {boolean} .
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */}],[{key:"_processStyleText",value:function _processStyleText(cssText,baseURI){return resolveCss(cssText,baseURI)}/**
      * Configures an element `proto` to function with a given `template`.
      * The element name `is` and extends `ext` must be specified for ShadyCSS
      * style scoping.
      *
      * @param {string} is Tag name (or type extension name) for this element
      * @return {void}
      * @protected
      * @nocollapse
      */},{key:"_finalizeTemplate",value:function _finalizeTemplate(is){/** @const {HTMLTemplateElement} */var template=this.prototype._template;if(template&&!template.__polymerFinalized){template.__polymerFinalized=!0;var importPath=this.importPath,baseURI=importPath?_resolveUrl(importPath):"";// e.g. support `include="module-name"`, and ShadyCSS
processElementStyles(this,template,is,baseURI);this.prototype._bindTemplate(template)}}},{key:"_parseTemplateContent",value:function _parseTemplateContent(template,templateInfo,nodeInfo){templateInfo.dynamicFns=templateInfo.dynamicFns||this._properties;// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
return polymerElementBase._parseTemplateContent.call(this,template,templateInfo,nodeInfo)}/**
       * Overrides `PropertyEffects` to warn on use of undeclared properties in
       * template.
       *
       * @param {Object} templateInfo Template metadata to add effect to
       * @param {string} prop Property that should trigger the effect
       * @param {Object=} effect Effect metadata object
       * @return {void}
       * @protected
       * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
       * @nocollapse
       */},{key:"_addTemplatePropertyEffect",value:function _addTemplatePropertyEffect(templateInfo,prop,effect){// Warn if properties are used in template without being declared.
// Properties must be listed in `properties` to be included in
// `observedAttributes` since CE V1 reads that at registration time, and
// since we want to keep template parsing lazy, we can't automatically
// add undeclared properties used in templates to `observedAttributes`.
// The warning is only enabled in `legacyOptimizations` mode, since
// we don't want to spam existing users who might have adopted the
// shorthand when attribute deserialization is not important.
if(legacyOptimizations&&!(prop in this._properties)){console.warn("Property '".concat(prop,"' used in template but not declared in 'properties'; ")+"attribute will not be observed.")}// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
return polymerElementBase._addTemplatePropertyEffect.call(this,templateInfo,prop,effect)}}]);return PolymerElement}(polymerElementBase);return PolymerElement});/**
                                                                  * Element class mixin that provides the core API for Polymer's meta-programming
                                                                  * features including template stamping, data-binding, attribute deserialization,
                                                                  * and property change observation.
                                                                  *
                                                                  * Subclassers may provide the following static getters to return metadata
                                                                  * used to configure Polymer's features for the class:
                                                                  *
                                                                  * - `static get is()`: When the template is provided via a `dom-module`,
                                                                  *   users should return the `dom-module` id from a static `is` getter.  If
                                                                  *   no template is needed or the template is provided directly via the
                                                                  *   `template` getter, there is no need to define `is` for the element.
                                                                  *
                                                                  * - `static get template()`: Users may provide the template directly (as
                                                                  *   opposed to via `dom-module`) by implementing a static `template` getter.
                                                                  *   The getter must return an `HTMLTemplateElement`.
                                                                  *
                                                                  * - `static get properties()`: Should return an object describing
                                                                  *   property-related metadata used by Polymer features (key: property name
                                                                  *   value: object containing property metadata). Valid keys in per-property
                                                                  *   metadata include:
                                                                  *   - `type` (String|Number|Object|Array|...): Used by
                                                                  *     `attributeChangedCallback` to determine how string-based attributes
                                                                  *     are deserialized to JavaScript property values.
                                                                  *   - `notify` (boolean): Causes a change in the property to fire a
                                                                  *     non-bubbling event called `<property>-changed`. Elements that have
                                                                  *     enabled two-way binding to the property use this event to observe changes.
                                                                  *   - `readOnly` (boolean): Creates a getter for the property, but no setter.
                                                                  *     To set a read-only property, use the private setter method
                                                                  *     `_setProperty(property, value)`.
                                                                  *   - `observer` (string): Observer method name that will be called when
                                                                  *     the property changes. The arguments of the method are
                                                                  *     `(value, previousValue)`.
                                                                  *   - `computed` (string): String describing method and dependent properties
                                                                  *     for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
                                                                  *     Computed properties are read-only by default and can only be changed
                                                                  *     via the return value of the computing method.
                                                                  *
                                                                  * - `static get observers()`: Array of strings describing multi-property
                                                                  *   observer methods and their dependent properties (e.g.
                                                                  *   `'observeABC(a, b, c)'`).
                                                                  *
                                                                  * The base class provides default implementations for the following standard
                                                                  * custom element lifecycle callbacks; users may override these, but should
                                                                  * call the super method to ensure
                                                                  * - `constructor`: Run when the element is created or upgraded
                                                                  * - `connectedCallback`: Run each time the element is connected to the
                                                                  *   document
                                                                  * - `disconnectedCallback`: Run each time the element is disconnected from
                                                                  *   the document
                                                                  * - `attributeChangedCallback`: Run each time an attribute in
                                                                  *   `observedAttributes` is set or removed (note: this element's default
                                                                  *   `observedAttributes` implementation will automatically return an array
                                                                  *   of dash-cased attributes based on `properties`)
                                                                  *
                                                                  * @mixinFunction
                                                                  * @polymer
                                                                  * @appliesMixin PropertyEffects
                                                                  * @appliesMixin PropertiesMixin
                                                                  * @property rootPath {string} Set to the value of `rootPath`,
                                                                  *   which defaults to the main document path
                                                                  * @property importPath {string} Set to the value of the class's static
                                                                  *   `importPath` property, which defaults to the path of this element's
                                                                  *   `dom-module` (when `is` is used), but can be overridden for other
                                                                  *   import strategies.
                                                                  * @summary Element class mixin that provides the core API for Polymer's
                                                                  * meta-programming features.
                                                                  * @template T
                                                                  * @param {function(new:T)} superClass Class to apply mixin to.
                                                                  * @return {function(new:T)} superClass with mixin applied.
                                                                  */_exports.ElementMixin=ElementMixin;/**
     * When using the ShadyCSS scoping and custom property shim, causes all
     * shimmed `styles` (via `custom-style`) in the document (and its subtree)
     * to be updated based on current custom property values.
     *
     * The optional parameter overrides inline custom property styles with an
     * object of properties where the keys are CSS properties, and the values
     * are strings.
     *
     * Example: `updateStyles({'--color': 'blue'})`
     *
     * These properties are retained unless a value of `null` is set.
     *
     * @param {Object=} props Bag of custom property key/values to
     *   apply to the document.
     * @return {void}
     */var updateStyles=function updateStyles(props){if(window.ShadyCSS){window.ShadyCSS.styleDocument(props)}};_exports.updateStyles=updateStyles;var elementMixin={version:version,ElementMixin:ElementMixin,updateStyles:updateStyles};_exports.$elementMixin=elementMixin;var Debouncer=/*#__PURE__*/function(){function Debouncer(){babelHelpers.classCallCheck(this,Debouncer);this._asyncModule=null;this._callback=null;this._timer=null}/**
     * Sets the scheduler; that is, a module with the Async interface,
     * a callback and optional arguments to be passed to the run function
     * from the async module.
     *
     * @param {!AsyncInterface} asyncModule Object with Async interface.
     * @param {function()} callback Callback to run.
     * @return {void}
     */babelHelpers.createClass(Debouncer,[{key:"setConfig",value:function setConfig(asyncModule,callback){var _this12=this;this._asyncModule=asyncModule;this._callback=callback;this._timer=this._asyncModule.run(function(){_this12._timer=null;debouncerQueue.delete(_this12);_this12._callback()})}/**
     * Cancels an active debouncer and returns a reference to itself.
     *
     * @return {void}
     */},{key:"cancel",value:function cancel(){if(this.isActive()){this._cancelAsync();// Canceling a debouncer removes its spot from the flush queue,
// so if a debouncer is manually canceled and re-debounced, it
// will reset its flush order (this is a very minor difference from 1.x)
// Re-debouncing via the `debounce` API retains the 1.x FIFO flush order
debouncerQueue.delete(this)}}/**
     * Cancels a debouncer's async callback.
     *
     * @return {void}
     */},{key:"_cancelAsync",value:function _cancelAsync(){if(this.isActive()){this._asyncModule.cancel(/** @type {number} */this._timer);this._timer=null}}/**
     * Flushes an active debouncer and returns a reference to itself.
     *
     * @return {void}
     */},{key:"flush",value:function flush(){if(this.isActive()){this.cancel();this._callback()}}/**
     * Returns true if the debouncer is active.
     *
     * @return {boolean} True if active.
     */},{key:"isActive",value:function isActive(){return null!=this._timer}/**
     * Creates a debouncer if no debouncer is passed as a parameter
     * or it cancels an active debouncer otherwise. The following
     * example shows how a debouncer can be called multiple times within a
     * microtask and "debounced" such that the provided callback function is
     * called once. Add this method to a custom element:
     *
     * ```js
     * import {microTask} from '@polymer/polymer/lib/utils/async.js';
     * import {Debouncer} from '@polymer/polymer/lib/utils/debounce.js';
     * // ...
     *
     * _debounceWork() {
     *   this._debounceJob = Debouncer.debounce(this._debounceJob,
     *       microTask, () => this._doWork());
     * }
     * ```
     *
     * If the `_debounceWork` method is called multiple times within the same
     * microtask, the `_doWork` function will be called only once at the next
     * microtask checkpoint.
     *
     * Note: In testing it is often convenient to avoid asynchrony. To accomplish
     * this with a debouncer, you can use `enqueueDebouncer` and
     * `flush`. For example, extend the above example by adding
     * `enqueueDebouncer(this._debounceJob)` at the end of the
     * `_debounceWork` method. Then in a test, call `flush` to ensure
     * the debouncer has completed.
     *
     * @param {Debouncer?} debouncer Debouncer object.
     * @param {!AsyncInterface} asyncModule Object with Async interface
     * @param {function()} callback Callback to run.
     * @return {!Debouncer} Returns a debouncer object.
     */}],[{key:"debounce",value:function debounce(debouncer,asyncModule,callback){if(babelHelpers.instanceof(debouncer,Debouncer)){// Cancel the async callback, but leave in debouncerQueue if it was
// enqueued, to maintain 1.x flush order
debouncer._cancelAsync()}else{debouncer=new Debouncer}debouncer.setConfig(asyncModule,callback);return debouncer}}]);return Debouncer}();_exports.Debouncer=Debouncer;var debouncerQueue=new Set,enqueueDebouncer=function enqueueDebouncer(debouncer){debouncerQueue.add(debouncer)};/**
                                 * Adds a `Debouncer` to a list of globally flushable tasks.
                                 *
                                 * @param {!Debouncer} debouncer Debouncer to enqueue
                                 * @return {void}
                                 */_exports.enqueueDebouncer$1=_exports.enqueueDebouncer=_exports.addDebouncer=enqueueDebouncer;/**
    * Flushes any enqueued debouncers
    *
    * @return {boolean} Returns whether any debouncers were flushed
    */var flushDebouncers=function flushDebouncers(){var didFlush=!!debouncerQueue.size;// If new debouncers are added while flushing, Set.forEach will ensure
// newly added ones are also flushed
debouncerQueue.forEach(function(debouncer){try{debouncer.flush()}catch(e){setTimeout(function(){throw e})}});return didFlush};_exports.flushDebouncers=flushDebouncers;var debounce={Debouncer:Debouncer,enqueueDebouncer:enqueueDebouncer,flushDebouncers:flushDebouncers};_exports.$debounce=debounce;var HAS_NATIVE_TA="string"===typeof document.head.style.touchAction,GESTURE_KEY="__polymerGestures",HANDLED_OBJ="__polymerGesturesHandled",TOUCH_ACTION="__polymerGesturesTouchAction",TAP_DISTANCE=25,TRACK_DISTANCE=5,TRACK_LENGTH=2,MOUSE_TIMEOUT=2500,MOUSE_EVENTS=["mousedown","mousemove","mouseup","click"],MOUSE_WHICH_TO_BUTTONS=[0,1,4,2],MOUSE_HAS_BUTTONS=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();/**
      * @param {string} name Possible mouse event name
      * @return {boolean} true if mouse event, false if not
      */function isMouseEvent(name){return-1<MOUSE_EVENTS.indexOf(name)}/* eslint no-empty: ["error", { "allowEmptyCatch": true }] */ // check for passive event listeners
var SUPPORTS_PASSIVE=!1;(function(){try{var opts=Object.defineProperty({},"passive",{get:function get(){SUPPORTS_PASSIVE=!0}});window.addEventListener("test",null,opts);window.removeEventListener("test",null,opts)}catch(e){}})();/**
       * Generate settings for event listeners, dependant on `passiveTouchGestures`
       *
       * @param {string} eventName Event name to determine if `{passive}` option is
       *   needed
       * @return {{passive: boolean} | undefined} Options to use for addEventListener
       *   and removeEventListener
       */function PASSIVE_TOUCH(eventName){if(isMouseEvent(eventName)||"touchend"===eventName){return}if(HAS_NATIVE_TA&&SUPPORTS_PASSIVE&&passiveTouchGestures){return{passive:!0}}else{return}}// Check for touch-only devices
var IS_TOUCH_ONLY=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),clickedLabels=[],labellable={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},canBeDisabled={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};// keep track of any labels hit by the mouseCanceller
/** @type {!Array<!HTMLLabelElement>} */ /**
    * @param {HTMLElement} el Element to check labelling status
    * @return {boolean} element can have labels
    */function canBeLabelled(el){return labellable[el.localName]||!1}/**
   * @param {HTMLElement} el Element that may be labelled.
   * @return {!Array<!HTMLLabelElement>} Relevant label for `el`
   */function matchingLabels(el){var labels=Array.prototype.slice.call(/** @type {HTMLInputElement} */el.labels||[]);// IE doesn't have `labels` and Safari doesn't populate `labels`
// if element is in a shadowroot.
// In this instance, finding the non-ancestor labels is enough,
// as the mouseCancellor code will handle ancstor labels
if(!labels.length){labels=[];var _root2=el.getRootNode();// if there is an id on `el`, check for all labels with a matching `for` attribute
if(el.id){for(var matching=_root2.querySelectorAll("label[for = ".concat(el.id,"]")),_i19=0;_i19<matching.length;_i19++){labels.push(/** @type {!HTMLLabelElement} */matching[_i19])}}}return labels}// touch will make synthetic mouse events
// `preventDefault` on touchend will cancel them,
// but this breaks `<input>` focus and link clicks
// disable mouse handlers for MOUSE_TIMEOUT ms after
// a touchend to ignore synthetic mouse events
var mouseCanceller=function mouseCanceller(mouseEvent){// Check for sourceCapabilities, used to distinguish synthetic events
// if mouseEvent did not come from a device that fires touch events,
// it was made by a real mouse and should be counted
// http://wicg.github.io/InputDeviceCapabilities/#dom-inputdevicecapabilities-firestouchevents
var sc=mouseEvent.sourceCapabilities;if(sc&&!sc.firesTouchEvents){return}// skip synthetic mouse events
mouseEvent[HANDLED_OBJ]={skip:!0};// disable "ghost clicks"
if("click"===mouseEvent.type){for(var clickFromLabel=!1,_path4=getComposedPath(mouseEvent),_i20=0;_i20<_path4.length;_i20++){if(_path4[_i20].nodeType===Node.ELEMENT_NODE){if("label"===_path4[_i20].localName){clickedLabels.push(/** @type {!HTMLLabelElement} */_path4[_i20])}else if(canBeLabelled(/** @type {!HTMLElement} */_path4[_i20])){// check if one of the clicked labels is labelling this element
for(var ownerLabels=matchingLabels(/** @type {!HTMLElement} */_path4[_i20]),j=0;j<ownerLabels.length;j++){clickFromLabel=clickFromLabel||-1<clickedLabels.indexOf(ownerLabels[j])}}}if(_path4[_i20]===POINTERSTATE.mouse.target){return}}// if one of the clicked labels was labelling the target element,
// this is not a ghost click
if(clickFromLabel){return}mouseEvent.preventDefault();mouseEvent.stopPropagation()}};/**
    * @param {boolean=} setup True to add, false to remove.
    * @return {void}
    */function setupTeardownMouseCanceller(setup){for(var events=IS_TOUCH_ONLY?["click"]:MOUSE_EVENTS,_i21=0,en;_i21<events.length;_i21++){en=events[_i21];if(setup){// reset clickLabels array
clickedLabels.length=0;document.addEventListener(en,mouseCanceller,!0)}else{document.removeEventListener(en,mouseCanceller,!0)}}}function ignoreMouse(e){if(!cancelSyntheticClickEvents){return}if(!POINTERSTATE.mouse.mouseIgnoreJob){setupTeardownMouseCanceller(!0)}var unset=function unset(){setupTeardownMouseCanceller();POINTERSTATE.mouse.target=null;POINTERSTATE.mouse.mouseIgnoreJob=null};POINTERSTATE.mouse.target=getComposedPath(e)[0];POINTERSTATE.mouse.mouseIgnoreJob=Debouncer.debounce(POINTERSTATE.mouse.mouseIgnoreJob,timeOut.after(MOUSE_TIMEOUT),unset)}/**
   * @param {MouseEvent} ev event to test for left mouse button down
   * @return {boolean} has left mouse button down
   */function hasLeftMouseButton(ev){var type=ev.type;// exit early if the event is not a mouse event
if(!isMouseEvent(type)){return!1}// ev.button is not reliable for mousemove (0 is overloaded as both left button and no buttons)
// instead we use ev.buttons (bitmask of buttons) or fall back to ev.which (deprecated, 0 for no buttons, 1 for left button)
if("mousemove"===type){// allow undefined for testing events
var buttons=ev.buttons===void 0?1:ev.buttons;if(babelHelpers.instanceof(ev,window.MouseEvent)&&!MOUSE_HAS_BUTTONS){buttons=MOUSE_WHICH_TO_BUTTONS[ev.which]||0}// buttons is a bitmask, check that the left button bit is set (1)
return!!(1&buttons)}else{// allow undefined for testing events
var button=ev.button===void 0?0:ev.button;// ev.button is 0 in mousedown/mouseup/click for left button activation
return 0===button}}function isSyntheticClick(ev){if("click"===ev.type){// ev.detail is 0 for HTMLElement.click in most browsers
if(0===ev.detail){return!0}// in the worst case, check that the x/y position of the click is within
// the bounding box of the target of the event
// Thanks IE 10 >:(
var t=_findOriginalTarget(ev);// make sure the target of the event is an element so we can use getBoundingClientRect,
// if not, just assume it is a synthetic click
if(!t.nodeType||/** @type {Element} */t.nodeType!==Node.ELEMENT_NODE){return!0}var bcr=/** @type {Element} */t.getBoundingClientRect(),x=ev.pageX,y=ev.pageY;// use page x/y to account for scrolling
// ev is a synthetic click if the position is outside the bounding box of the target
return!(x>=bcr.left&&x<=bcr.right&&y>=bcr.top&&y<=bcr.bottom)}return!1}var POINTERSTATE={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function firstTouchAction(ev){for(var ta="auto",path=getComposedPath(ev),_i22=0,n;_i22<path.length;_i22++){n=path[_i22];if(n[TOUCH_ACTION]){ta=n[TOUCH_ACTION];break}}return ta}function trackDocument(stateObj,movefn,upfn){stateObj.movefn=movefn;stateObj.upfn=upfn;document.addEventListener("mousemove",movefn);document.addEventListener("mouseup",upfn)}function untrackDocument(stateObj){document.removeEventListener("mousemove",stateObj.movefn);document.removeEventListener("mouseup",stateObj.upfn);stateObj.movefn=null;stateObj.upfn=null}if(cancelSyntheticClickEvents){// use a document-wide touchend listener to start the ghost-click prevention mechanism
// Use passive event listeners, if supported, to not affect scrolling performance
document.addEventListener("touchend",ignoreMouse,SUPPORTS_PASSIVE?{passive:!0}:!1)}/**
   * Returns the composedPath for the given event.
   * @param {Event} event to process
   * @return {!Array<!EventTarget>} Path of the event
   */var getComposedPath=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:function(event){return event.composedPath&&event.composedPath()||[]},gestures={};/** @type {!Object<string, !GestureRecognizer>} */_exports.gestures=gestures;/** @type {!Array<!GestureRecognizer>} */var recognizers=[];/**
                                * Finds the element rendered on the screen at the provided coordinates.
                                *
                                * Similar to `document.elementFromPoint`, but pierces through
                                * shadow roots.
                                *
                                * @param {number} x Horizontal pixel coordinate
                                * @param {number} y Vertical pixel coordinate
                                * @return {Element} Returns the deepest shadowRoot inclusive element
                                * found at the screen position given.
                                */_exports.recognizers=recognizers;function deepTargetFind(x,y){var node=document.elementFromPoint(x,y),next=node;// this code path is only taken when native ShadowDOM is used
// if there is a shadowroot, it may have a node at x/y
// if there is not a shadowroot, exit the loop
while(next&&next.shadowRoot&&!window.ShadyDOM){// if there is a node at x/y in the shadowroot, look deeper
var oldNext=next;next=next.shadowRoot.elementFromPoint(x,y);// on Safari, elementFromPoint may return the shadowRoot host
if(oldNext===next){break}if(next){node=next}}return node}/**
   * a cheaper check than ev.composedPath()[0];
   *
   * @private
   * @param {Event|Touch} ev Event.
   * @return {EventTarget} Returns the event target.
   */function _findOriginalTarget(ev){var path=getComposedPath(/** @type {?Event} */ev);// It shouldn't be, but sometimes path is empty (window on Safari).
return 0<path.length?path[0]:ev.target}/**
   * @private
   * @param {Event} ev Event.
   * @return {void}
   */function _handleNative(ev){var handled,type=ev.type,node=ev.currentTarget,gobj=node[GESTURE_KEY];if(!gobj){return}var gs=gobj[type];if(!gs){return}if(!ev[HANDLED_OBJ]){ev[HANDLED_OBJ]={};if("touch"===type.slice(0,5)){ev=/** @type {TouchEvent} */ev;// eslint-disable-line no-self-assign
var t=ev.changedTouches[0];if("touchstart"===type){// only handle the first finger
if(1===ev.touches.length){POINTERSTATE.touch.id=t.identifier}}if(POINTERSTATE.touch.id!==t.identifier){return}if(!HAS_NATIVE_TA){if("touchstart"===type||"touchmove"===type){_handleTouchAction(ev)}}}}handled=ev[HANDLED_OBJ];// used to ignore synthetic mouse events
if(handled.skip){return}// reset recognizer state
for(var _i23=0,r;_i23<recognizers.length;_i23++){r=recognizers[_i23];if(gs[r.name]&&!handled[r.name]){if(r.flow&&-1<r.flow.start.indexOf(ev.type)&&r.reset){r.reset()}}}// enforce gesture recognizer order
for(var _i24=0,_r;_i24<recognizers.length;_i24++){_r=recognizers[_i24];if(gs[_r.name]&&!handled[_r.name]){handled[_r.name]=!0;_r[type](ev)}}}/**
   * @private
   * @param {TouchEvent} ev Event.
   * @return {void}
   */function _handleTouchAction(ev){var t=ev.changedTouches[0],type=ev.type;if("touchstart"===type){POINTERSTATE.touch.x=t.clientX;POINTERSTATE.touch.y=t.clientY;POINTERSTATE.touch.scrollDecided=!1}else if("touchmove"===type){if(POINTERSTATE.touch.scrollDecided){return}POINTERSTATE.touch.scrollDecided=!0;var ta=firstTouchAction(ev),shouldPrevent=!1,dx=Math.abs(POINTERSTATE.touch.x-t.clientX),dy=Math.abs(POINTERSTATE.touch.y-t.clientY);if(!ev.cancelable){// scrolling is happening
}else if("none"===ta){shouldPrevent=!0}else if("pan-x"===ta){shouldPrevent=dy>dx}else if("pan-y"===ta){shouldPrevent=dx>dy}if(shouldPrevent){ev.preventDefault()}else{_prevent("track")}}}/**
   * Adds an event listener to a node for the given gesture type.
   *
   * @param {!EventTarget} node Node to add listener on
   * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
   * @param {!function(!Event):void} handler Event listener function to call
   * @return {boolean} Returns true if a gesture event listener was added.
   */function addListener(node,evType,handler){if(gestures[evType]){_add(node,evType,handler);return!0}return!1}/**
   * Removes an event listener from a node for the given gesture type.
   *
   * @param {!EventTarget} node Node to remove listener from
   * @param {string} evType Gesture type: `down`, `up`, `track`, or `tap`
   * @param {!function(!Event):void} handler Event listener function previously passed to
   *  `addListener`.
   * @return {boolean} Returns true if a gesture event listener was removed.
   */function removeListener(node,evType,handler){if(gestures[evType]){_remove(node,evType,handler);return!0}return!1}/**
   * automate the event listeners for the native events
   *
   * @private
   * @param {!EventTarget} node Node on which to add the event.
   * @param {string} evType Event type to add.
   * @param {function(!Event)} handler Event handler function.
   * @return {void}
   */function _add(node,evType,handler){var recognizer=gestures[evType],deps=recognizer.deps,name=recognizer.name,gobj=node[GESTURE_KEY];if(!gobj){node[GESTURE_KEY]=gobj={}}for(var _i25=0,dep,gd;_i25<deps.length;_i25++){dep=deps[_i25];// don't add mouse handlers on iOS because they cause gray selection overlays
if(IS_TOUCH_ONLY&&isMouseEvent(dep)&&"click"!==dep){continue}gd=gobj[dep];if(!gd){gobj[dep]=gd={_count:0}}if(0===gd._count){node.addEventListener(dep,_handleNative,PASSIVE_TOUCH(dep))}gd[name]=(gd[name]||0)+1;gd._count=(gd._count||0)+1}node.addEventListener(evType,handler);if(recognizer.touchAction){setTouchAction(node,recognizer.touchAction)}}/**
   * automate event listener removal for native events
   *
   * @private
   * @param {!EventTarget} node Node on which to remove the event.
   * @param {string} evType Event type to remove.
   * @param {function(!Event): void} handler Event handler function.
   * @return {void}
   */function _remove(node,evType,handler){var recognizer=gestures[evType],deps=recognizer.deps,name=recognizer.name,gobj=node[GESTURE_KEY];if(gobj){for(var _i26=0,dep,gd;_i26<deps.length;_i26++){dep=deps[_i26];gd=gobj[dep];if(gd&&gd[name]){gd[name]=(gd[name]||1)-1;gd._count=(gd._count||1)-1;if(0===gd._count){node.removeEventListener(dep,_handleNative,PASSIVE_TOUCH(dep))}}}}node.removeEventListener(evType,handler)}/**
   * Registers a new gesture event recognizer for adding new custom
   * gesture event types.
   *
   * @param {!GestureRecognizer} recog Gesture recognizer descriptor
   * @return {void}
   */function register$1(recog){recognizers.push(recog);for(var _i27=0;_i27<recog.emits.length;_i27++){gestures[recog.emits[_i27]]=recog}}/**
   * @private
   * @param {string} evName Event name.
   * @return {Object} Returns the gesture for the given event name.
   */function _findRecognizerByEvent(evName){for(var _i28=0,r;_i28<recognizers.length;_i28++){r=recognizers[_i28];for(var j=0,n;j<r.emits.length;j++){n=r.emits[j];if(n===evName){return r}}}return null}/**
   * Sets scrolling direction on node.
   *
   * This value is checked on first move, thus it should be called prior to
   * adding event listeners.
   *
   * @param {!EventTarget} node Node to set touch action setting on
   * @param {string} value Touch action value
   * @return {void}
   */function setTouchAction(node,value){if(HAS_NATIVE_TA&&babelHelpers.instanceof(node,HTMLElement)){// NOTE: add touchAction async so that events can be added in
// custom element constructors. Otherwise we run afoul of custom
// elements restriction against settings attributes (style) in the
// constructor.
microTask.run(function(){node.style.touchAction=value})}node[TOUCH_ACTION]=value}/**
   * Dispatches an event on the `target` element of `type` with the given
   * `detail`.
   * @private
   * @param {!EventTarget} target The element on which to fire an event.
   * @param {string} type The type of event to fire.
   * @param {!Object=} detail The detail object to populate on the event.
   * @return {void}
   */function _fire(target,type,detail){var ev=new Event(type,{bubbles:!0,cancelable:!0,composed:!0});ev.detail=detail;wrap$1(/** @type {!Node} */target).dispatchEvent(ev);// forward `preventDefault` in a clean way
if(ev.defaultPrevented){var preventer=detail.preventer||detail.sourceEvent;if(preventer&&preventer.preventDefault){preventer.preventDefault()}}}/**
   * Prevents the dispatch and default action of the given event name.
   *
   * @param {string} evName Event name.
   * @return {void}
   */function _prevent(evName){var recognizer=_findRecognizerByEvent(evName);if(recognizer.info){recognizer.info.prevent=!0}}/**
   * Reset the 2500ms timeout on processing mouse input after detecting touch input.
   *
   * Touch inputs create synthesized mouse inputs anywhere from 0 to 2000ms after the touch.
   * This method should only be called during testing with simulated touch inputs.
   * Calling this method in production may cause duplicate taps or other Gestures.
   *
   * @return {void}
   */function resetMouseCanceller(){if(POINTERSTATE.mouse.mouseIgnoreJob){POINTERSTATE.mouse.mouseIgnoreJob.flush()}}/* eslint-disable valid-jsdoc */register$1({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},/**
   * @this {GestureRecognizer}
   * @return {void}
   */reset:function reset(){untrackDocument(this.info)},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */mousedown:function mousedown(e){if(!hasLeftMouseButton(e)){return}var t=_findOriginalTarget(e),self=this,movefn=function movefn(e){if(!hasLeftMouseButton(e)){downupFire("up",t,e);untrackDocument(self.info)}},upfn=function upfn(e){if(hasLeftMouseButton(e)){downupFire("up",t,e)}untrackDocument(self.info)};trackDocument(this.info,movefn,upfn);downupFire("down",t,e)},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchstart:function touchstart(e){downupFire("down",_findOriginalTarget(e),e.changedTouches[0],e)},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchend:function touchend(e){downupFire("up",_findOriginalTarget(e),e.changedTouches[0],e)}});/**
     * @param {string} type
     * @param {EventTarget} target
     * @param {Event|Touch} event
     * @param {Event=} preventer
     * @return {void}
     */function downupFire(type,target,event,preventer){if(!target){return}_fire(target,type,{x:event.clientX,y:event.clientY,sourceEvent:event,preventer:preventer,prevent:function prevent(e){return _prevent(e)}})}register$1({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],/** @this {GestureInfo} */addMove:function addMove(move){if(this.moves.length>TRACK_LENGTH){this.moves.shift()}this.moves.push(move)},movefn:null,upfn:null,prevent:!1},/**
   * @this {GestureRecognizer}
   * @return {void}
   */reset:function reset(){this.info.state="start";this.info.started=!1;this.info.moves=[];this.info.x=0;this.info.y=0;this.info.prevent=!1;untrackDocument(this.info)},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */mousedown:function mousedown(e){if(!hasLeftMouseButton(e)){return}var t=_findOriginalTarget(e),self=this,movefn=function movefn(e){var x=e.clientX,y=e.clientY;if(trackHasMovedEnough(self.info,x,y)){// first move is 'start', subsequent moves are 'move', mouseup is 'end'
self.info.state=self.info.started?"mouseup"===e.type?"end":"track":"start";if("start"===self.info.state){// if and only if tracking, always prevent tap
_prevent("tap")}self.info.addMove({x:x,y:y});if(!hasLeftMouseButton(e)){// always fire "end"
self.info.state="end";untrackDocument(self.info)}if(t){trackFire(self.info,t,e)}self.info.started=!0}},upfn=function upfn(e){if(self.info.started){movefn(e)}// remove the temporary listeners
untrackDocument(self.info)};// add temporary document listeners as mouse retargets
trackDocument(this.info,movefn,upfn);this.info.x=e.clientX;this.info.y=e.clientY},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchstart:function touchstart(e){var ct=e.changedTouches[0];this.info.x=ct.clientX;this.info.y=ct.clientY},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchmove:function touchmove(e){var t=_findOriginalTarget(e),ct=e.changedTouches[0],x=ct.clientX,y=ct.clientY;if(trackHasMovedEnough(this.info,x,y)){if("start"===this.info.state){// if and only if tracking, always prevent tap
_prevent("tap")}this.info.addMove({x:x,y:y});trackFire(this.info,t,ct);this.info.state="track";this.info.started=!0}},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchend:function touchend(e){var t=_findOriginalTarget(e),ct=e.changedTouches[0];// only trackend if track was started and not aborted
if(this.info.started){// reset started state on up
this.info.state="end";this.info.addMove({x:ct.clientX,y:ct.clientY});trackFire(this.info,t,ct)}}});/**
     * @param {!GestureInfo} info
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */function trackHasMovedEnough(info,x,y){if(info.prevent){return!1}if(info.started){return!0}var dx=Math.abs(info.x-x),dy=Math.abs(info.y-y);return dx>=TRACK_DISTANCE||dy>=TRACK_DISTANCE}/**
   * @param {!GestureInfo} info
   * @param {?EventTarget} target
   * @param {Touch} touch
   * @return {void}
   */function trackFire(info,target,touch){if(!target){return}var secondlast=info.moves[info.moves.length-2],lastmove=info.moves[info.moves.length-1],dx=lastmove.x-info.x,dy=lastmove.y-info.y,ddx,ddy=0;if(secondlast){ddx=lastmove.x-secondlast.x;ddy=lastmove.y-secondlast.y}_fire(target,"track",{state:info.state,x:touch.clientX,y:touch.clientY,dx:dx,dy:dy,ddx:ddx,ddy:ddy,sourceEvent:touch,hover:function hover(){return deepTargetFind(touch.clientX,touch.clientY)}})}register$1({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},/**
   * @this {GestureRecognizer}
   * @return {void}
   */reset:function reset(){this.info.x=NaN;this.info.y=NaN;this.info.prevent=!1},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */mousedown:function mousedown(e){if(hasLeftMouseButton(e)){this.info.x=e.clientX;this.info.y=e.clientY}},/**
   * @this {GestureRecognizer}
   * @param {MouseEvent} e
   * @return {void}
   */click:function click(e){if(hasLeftMouseButton(e)){trackForward(this.info,e)}},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchstart:function touchstart(e){var touch=e.changedTouches[0];this.info.x=touch.clientX;this.info.y=touch.clientY},/**
   * @this {GestureRecognizer}
   * @param {TouchEvent} e
   * @return {void}
   */touchend:function touchend(e){trackForward(this.info,e.changedTouches[0],e)}});/**
     * @param {!GestureInfo} info
     * @param {Event | Touch} e
     * @param {Event=} preventer
     * @return {void}
     */function trackForward(info,e,preventer){var dx=Math.abs(e.clientX-info.x),dy=Math.abs(e.clientY-info.y),t=_findOriginalTarget(preventer||e);if(!t||canBeDisabled[/** @type {!HTMLElement} */t.localName]&&t.hasAttribute("disabled")){return}// dx,dy can be NaN if `click` has been simulated and there was no `down` for `start`
if(isNaN(dx)||isNaN(dy)||dx<=TAP_DISTANCE&&dy<=TAP_DISTANCE||isSyntheticClick(e)){// prevent taps from being generated if an event has canceled them
if(!info.prevent){_fire(t,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:preventer})}}}/* eslint-enable valid-jsdoc */ /** @deprecated */var findOriginalTarget=_findOriginalTarget;/** @deprecated */_exports.findOriginalTarget=findOriginalTarget;var add=addListener;/** @deprecated */_exports.add=add;var remove=removeListener;_exports.remove=remove;var gestures$1={gestures:gestures,recognizers:recognizers,deepTargetFind:deepTargetFind,addListener:addListener,removeListener:removeListener,register:register$1,setTouchAction:setTouchAction,prevent:_prevent,resetMouseCanceller:resetMouseCanceller,findOriginalTarget:findOriginalTarget,add:add,remove:remove};_exports.$gestures=gestures$1;var GestureEventListeners=dedupingMixin(function(superClass){/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_GestureEventListeners}
   */var GestureEventListeners=/*#__PURE__*/function(_superClass3){babelHelpers.inherits(GestureEventListeners,_superClass3);function GestureEventListeners(){babelHelpers.classCallCheck(this,GestureEventListeners);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(GestureEventListeners).apply(this,arguments))}babelHelpers.createClass(GestureEventListeners,[{key:"_addEventListenerToNode",/**
     * Add the event listener to the node if it is a gestures event.
     *
     * @param {!EventTarget} node Node to add event listener to
     * @param {string} eventName Name of event
     * @param {function(!Event):void} handler Listener function to add
     * @return {void}
     * @override
     */value:function _addEventListenerToNode(node,eventName,handler){if(!addListener(node,eventName,handler)){babelHelpers.get(babelHelpers.getPrototypeOf(GestureEventListeners.prototype),"_addEventListenerToNode",this).call(this,node,eventName,handler)}}/**
       * Remove the event listener to the node if it is a gestures event.
       *
       * @param {!EventTarget} node Node to remove event listener from
       * @param {string} eventName Name of event
       * @param {function(!Event):void} handler Listener function to remove
       * @return {void}
       * @override
       */},{key:"_removeEventListenerFromNode",value:function _removeEventListenerFromNode(node,eventName,handler){if(!removeListener(node,eventName,handler)){babelHelpers.get(babelHelpers.getPrototypeOf(GestureEventListeners.prototype),"_removeEventListenerFromNode",this).call(this,node,eventName,handler)}}}]);return GestureEventListeners}(superClass);return GestureEventListeners});_exports.GestureEventListeners=GestureEventListeners;var gestureEventListeners={GestureEventListeners:GestureEventListeners};_exports.$gestureEventListeners=gestureEventListeners;var HOST_DIR=/:host\(:dir\((ltr|rtl)\)\)/g,HOST_DIR_REPLACMENT=":host([dir=\"$1\"])",EL_DIR=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,EL_DIR_REPLACMENT=":host([dir=\"$2\"]) $1",DIR_CHECK=/:dir\((?:ltr|rtl)\)/,SHIM_SHADOW=!!(window.ShadyDOM&&window.ShadyDOM.inUse),DIR_INSTANCES=[],observer=null,DOCUMENT_DIR="";function getRTL(){DOCUMENT_DIR=document.documentElement.getAttribute("dir")}/**
   * @param {!Polymer_DirMixin} instance Instance to set RTL status on
   */function setRTL(instance){if(!instance.__autoDirOptOut){var el=/** @type {!HTMLElement} */instance;el.setAttribute("dir",DOCUMENT_DIR)}}function updateDirection(){getRTL();DOCUMENT_DIR=document.documentElement.getAttribute("dir");for(var _i29=0;_i29<DIR_INSTANCES.length;_i29++){setRTL(DIR_INSTANCES[_i29])}}function takeRecords(){if(observer&&observer.takeRecords().length){updateDirection()}}/**
   * Element class mixin that allows elements to use the `:dir` CSS Selector to
   * have text direction specific styling.
   *
   * With this mixin, any stylesheet provided in the template will transform
   * `:dir` into `:host([dir])` and sync direction with the page via the
   * element's `dir` attribute.
   *
   * Elements can opt out of the global page text direction by setting the `dir`
   * attribute directly in `ready()` or in HTML.
   *
   * Caveats:
   * - Applications must set `<html dir="ltr">` or `<html dir="rtl">` to sync
   *   direction
   * - Automatic left-to-right or right-to-left styling is sync'd with the
   *   `<html>` element only.
   * - Changing `dir` at runtime is supported.
   * - Opting out of the global direction styling is permanent
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertyAccessors
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */var DirMixin=dedupingMixin(function(base){if(!SHIM_SHADOW){if(!observer){getRTL();observer=new MutationObserver(updateDirection);observer.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]})}}/**
     * @constructor
     * @implements {Polymer_PropertyAccessors}
     * @private
     */var elementBase=PropertyAccessors(base),Dir=/*#__PURE__*/function(_elementBase){babelHelpers.inherits(Dir,_elementBase);babelHelpers.createClass(Dir,null,[{key:"_processStyleText",/**
     * @param {string} cssText .
     * @param {string} baseURI .
     * @return {string} .
     * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
     * @nocollapse
     */value:function _processStyleText(cssText,baseURI){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
cssText=elementBase._processStyleText.call(this,cssText,baseURI);if(!SHIM_SHADOW&&DIR_CHECK.test(cssText)){cssText=this._replaceDirInCssText(cssText);this.__activateDir=!0}return cssText}/**
       * Replace `:dir` in the given CSS text
       *
       * @param {string} text CSS text to replace DIR
       * @return {string} Modified CSS
       * @nocollapse
       */},{key:"_replaceDirInCssText",value:function _replaceDirInCssText(text){var replacedText=text;replacedText=replacedText.replace(HOST_DIR,HOST_DIR_REPLACMENT);replacedText=replacedText.replace(EL_DIR,EL_DIR_REPLACMENT);return replacedText}}]);function Dir(){var _this13;babelHelpers.classCallCheck(this,Dir);_this13=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Dir).call(this));/** @type {boolean} */_this13.__autoDirOptOut=!1;return _this13}/**
       * @override
       * @suppress {invalidCasts} Closure doesn't understand that `this` is an
       *     HTMLElement
       * @return {void}
       */babelHelpers.createClass(Dir,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(Dir.prototype),"ready",this).call(this);this.__autoDirOptOut=/** @type {!HTMLElement} */this.hasAttribute("dir")}/**
       * @override
       * @suppress {missingProperties} If it exists on elementBase, it can be
       *   super'd
       * @return {void}
       */},{key:"connectedCallback",value:function connectedCallback(){if(elementBase.prototype.connectedCallback){babelHelpers.get(babelHelpers.getPrototypeOf(Dir.prototype),"connectedCallback",this).call(this)}if(this.constructor.__activateDir){takeRecords();DIR_INSTANCES.push(this);setRTL(this)}}/**
       * @override
       * @suppress {missingProperties} If it exists on elementBase, it can be
       *   super'd
       * @return {void}
       */},{key:"disconnectedCallback",value:function disconnectedCallback(){if(elementBase.prototype.disconnectedCallback){babelHelpers.get(babelHelpers.getPrototypeOf(Dir.prototype),"disconnectedCallback",this).call(this)}if(this.constructor.__activateDir){var idx=DIR_INSTANCES.indexOf(this);if(-1<idx){DIR_INSTANCES.splice(idx,1)}}}}]);return Dir}(elementBase);/**
                                                * @polymer
                                                * @mixinClass
                                                * @implements {Polymer_DirMixin}
                                                */Dir.__activateDir=!1;return Dir});_exports.DirMixin=DirMixin;var dirMixin={DirMixin:DirMixin};_exports.$dirMixin=dirMixin;var scheduled=!1,beforeRenderQueue=[],afterRenderQueue=[];function schedule(){scheduled=!0;// before next render
requestAnimationFrame(function(){scheduled=!1;flushQueue(beforeRenderQueue);// after the render
setTimeout(function(){runQueue(afterRenderQueue)})})}function flushQueue(queue){while(queue.length){callMethod(queue.shift())}}function runQueue(queue){for(var _i30=0,l=queue.length;_i30<l;_i30++){callMethod(queue.shift())}}function callMethod(info){var context=info[0],callback=info[1],args=info[2];try{callback.apply(context,args)}catch(e){setTimeout(function(){throw e})}}/**
   * Flushes all `beforeNextRender` tasks, followed by all `afterNextRender`
   * tasks.
   *
   * @return {void}
   */function flush(){while(beforeRenderQueue.length||afterRenderQueue.length){flushQueue(beforeRenderQueue);flushQueue(afterRenderQueue)}scheduled=!1}/**
   * Enqueues a callback which will be run before the next render, at
   * `requestAnimationFrame` timing.
   *
   * This method is useful for enqueuing work that requires DOM measurement,
   * since measurement may not be reliable in custom element callbacks before
   * the first render, as well as for batching measurement tasks in general.
   *
   * Tasks in this queue may be flushed by calling `flush()`.
   *
   * @param {*} context Context object the callback function will be bound to
   * @param {function(...*):void} callback Callback function
   * @param {!Array=} args An array of arguments to call the callback function with
   * @return {void}
   */function beforeNextRender(context,callback,args){if(!scheduled){schedule()}beforeRenderQueue.push([context,callback,args])}/**
   * Enqueues a callback which will be run after the next render, equivalent
   * to one task (`setTimeout`) after the next `requestAnimationFrame`.
   *
   * This method is useful for tuning the first-render performance of an
   * element or application by deferring non-critical work until after the
   * first paint.  Typical non-render-critical work may include adding UI
   * event listeners and aria attributes.
   *
   * @param {*} context Context object the callback function will be bound to
   * @param {function(...*):void} callback Callback function
   * @param {!Array=} args An array of arguments to call the callback function with
   * @return {void}
   */function afterNextRender(context,callback,args){if(!scheduled){schedule()}afterRenderQueue.push([context,callback,args])}var renderStatus={flush:flush,beforeNextRender:beforeNextRender,afterNextRender:afterNextRender};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$renderStatus=renderStatus;function resolve(){document.body.removeAttribute("unresolved")}if("interactive"===document.readyState||"complete"===document.readyState){resolve()}else{window.addEventListener("DOMContentLoaded",resolve)}function newSplice(index,removed,addedCount){return{index:index,removed:removed,addedCount:addedCount}}var EDIT_LEAVE=0,EDIT_UPDATE=1,EDIT_ADD=2,EDIT_DELETE=3;// Note: This function is *based* on the computation of the Levenshtein
// "edit" distance. The one change is that "updates" are treated as two
// edits - not one. With Array splices, an update is really a delete
// followed by an add. By retaining this, we optimize for "keeping" the
// maximum array items in the original array. For example:
//
//   'xxxx123' -> '123yyyy'
//
// With 1-edit updates, the shortest path would be just to update all seven
// characters. With 2-edit updates, we delete 4, leave 3, and add 4. This
// leaves the substring '123' intact.
function calcEditDistances(current,currentStart,currentEnd,old,oldStart,oldEnd){// "Deletion" columns
// "Addition" rows. Initialize null column.
for(var rowCount=oldEnd-oldStart+1,columnCount=currentEnd-currentStart+1,distances=Array(rowCount),_i31=0;_i31<rowCount;_i31++){distances[_i31]=Array(columnCount);distances[_i31][0]=_i31}// Initialize null row
for(var j=0;j<columnCount;j++){distances[0][j]=j}for(var _i32=1;_i32<rowCount;_i32++){for(var _j=1;_j<columnCount;_j++){if(equals(current[currentStart+_j-1],old[oldStart+_i32-1]))distances[_i32][_j]=distances[_i32-1][_j-1];else{var north=distances[_i32-1][_j]+1,west=distances[_i32][_j-1]+1;distances[_i32][_j]=north<west?north:west}}}return distances}// This starts at the final weight, and walks "backward" by finding
// the minimum previous weight recursively until the origin of the weight
// matrix.
function spliceOperationsFromEditDistances(distances){var i=distances.length-1,j=distances[0].length-1,current=distances[i][j],edits=[];while(0<i||0<j){if(0==i){edits.push(EDIT_ADD);j--;continue}if(0==j){edits.push(EDIT_DELETE);i--;continue}var northWest=distances[i-1][j-1],west=distances[i-1][j],north=distances[i][j-1],min=void 0;if(west<north)min=west<northWest?west:northWest;else min=north<northWest?north:northWest;if(min==northWest){if(northWest==current){edits.push(EDIT_LEAVE)}else{edits.push(EDIT_UPDATE);current=northWest}i--;j--}else if(min==west){edits.push(EDIT_DELETE);i--;current=west}else{edits.push(EDIT_ADD);j--;current=north}}edits.reverse();return edits}/**
   * Splice Projection functions:
   *
   * A splice map is a representation of how a previous array of items
   * was transformed into a new array of items. Conceptually it is a list of
   * tuples of
   *
   *   <index, removed, addedCount>
   *
   * which are kept in ascending index order of. The tuple represents that at
   * the |index|, |removed| sequence of items were removed, and counting forward
   * from |index|, |addedCount| items were added.
   */ /**
       * Lacking individual splice mutation information, the minimal set of
       * splices can be synthesized given the previous state and final state of an
       * array. The basic approach is to calculate the edit distance matrix and
       * choose the shortest path through it.
       *
       * Complexity: O(l * p)
       *   l: The length of the current array
       *   p: The length of the old array
       *
       * @param {!Array} current The current "changed" array for which to
       * calculate splices.
       * @param {number} currentStart Starting index in the `current` array for
       * which splices are calculated.
       * @param {number} currentEnd Ending index in the `current` array for
       * which splices are calculated.
       * @param {!Array} old The original "unchanged" array to compare `current`
       * against to determine splices.
       * @param {number} oldStart Starting index in the `old` array for
       * which splices are calculated.
       * @param {number} oldEnd Ending index in the `old` array for
       * which splices are calculated.
       * @return {!Array} Returns an array of splice record objects. Each of these
       * contains: `index` the location where the splice occurred; `removed`
       * the array of removed items from this location; `addedCount` the number
       * of items added at this location.
       */function calcSplices(current,currentStart,currentEnd,old,oldStart,oldEnd){var prefixCount=0,suffixCount=0,splice,minLength=Math.min(currentEnd-currentStart,oldEnd-oldStart);if(0==currentStart&&0==oldStart)prefixCount=sharedPrefix(current,old,minLength);if(currentEnd==current.length&&oldEnd==old.length)suffixCount=sharedSuffix(current,old,minLength-prefixCount);currentStart+=prefixCount;oldStart+=prefixCount;currentEnd-=suffixCount;oldEnd-=suffixCount;if(0==currentEnd-currentStart&&0==oldEnd-oldStart)return[];if(currentStart==currentEnd){splice=newSplice(currentStart,[],0);while(oldStart<oldEnd){splice.removed.push(old[oldStart++])}return[splice]}else if(oldStart==oldEnd)return[newSplice(currentStart,[],currentEnd-currentStart)];var ops=spliceOperationsFromEditDistances(calcEditDistances(current,currentStart,currentEnd,old,oldStart,oldEnd));splice=void 0;for(var splices=[],index=currentStart,oldIndex=oldStart,_i33=0;_i33<ops.length;_i33++){switch(ops[_i33]){case EDIT_LEAVE:if(splice){splices.push(splice);splice=void 0}index++;oldIndex++;break;case EDIT_UPDATE:if(!splice)splice=newSplice(index,[],0);splice.addedCount++;index++;splice.removed.push(old[oldIndex]);oldIndex++;break;case EDIT_ADD:if(!splice)splice=newSplice(index,[],0);splice.addedCount++;index++;break;case EDIT_DELETE:if(!splice)splice=newSplice(index,[],0);splice.removed.push(old[oldIndex]);oldIndex++;break;}}if(splice){splices.push(splice)}return splices}function sharedPrefix(current,old,searchLength){for(var _i34=0;_i34<searchLength;_i34++){if(!equals(current[_i34],old[_i34]))return _i34}return searchLength}function sharedSuffix(current,old,searchLength){var index1=current.length,index2=old.length,count=0;while(count<searchLength&&equals(current[--index1],old[--index2])){count++}return count}/**
   * Returns an array of splice records indicating the minimum edits required
   * to transform the `previous` array into the `current` array.
   *
   * Splice records are ordered by index and contain the following fields:
   * - `index`: index where edit started
   * - `removed`: array of removed items from this index
   * - `addedCount`: number of items added at this index
   *
   * This function is based on the Levenshtein "minimum edit distance"
   * algorithm. Note that updates are treated as removal followed by addition.
   *
   * The worst-case time complexity of this algorithm is `O(l * p)`
   *   l: The length of the current array
   *   p: The length of the previous array
   *
   * However, the worst-case complexity is reduced by an `O(n)` optimization
   * to detect any shared prefix & suffix between the two arrays and only
   * perform the more expensive minimum edit distance calculation over the
   * non-shared portions of the arrays.
   *
   * @function
   * @param {!Array} current The "changed" array for which splices will be
   * calculated.
   * @param {!Array} previous The "unchanged" original array to compare
   * `current` against to determine the splices.
   * @return {!Array} Returns an array of splice record objects. Each of these
   * contains: `index` the location where the splice occurred; `removed`
   * the array of removed items from this location; `addedCount` the number
   * of items added at this location.
   */function calculateSplices(current,previous){return calcSplices(current,0,current.length,previous,0,previous.length)}function equals(currentValue,previousValue){return currentValue===previousValue}var arraySplice={calculateSplices:calculateSplices};_exports.$arraySplice=arraySplice;function isSlot(node){return"slot"===node.localName}/**
   * Class that listens for changes (additions or removals) to
   * "flattened nodes" on a given `node`. The list of flattened nodes consists
   * of a node's children and, for any children that are `<slot>` elements,
   * the expanded flattened list of `assignedNodes`.
   * For example, if the observed node has children `<a></a><slot></slot><b></b>`
   * and the `<slot>` has one `<div>` assigned to it, then the flattened
   * nodes list is `<a></a><div></div><b></b>`. If the `<slot>` has other
   * `<slot>` elements assigned to it, these are flattened as well.
   *
   * The provided `callback` is called whenever any change to this list
   * of flattened nodes occurs, where an addition or removal of a node is
   * considered a change. The `callback` is called with one argument, an object
   * containing an array of any `addedNodes` and `removedNodes`.
   *
   * Note: the callback is called asynchronous to any changes
   * at a microtask checkpoint. This is because observation is performed using
   * `MutationObserver` and the `<slot>` element's `slotchange` event which
   * are asynchronous.
   *
   * An example:
   * ```js
   * class TestSelfObserve extends PolymerElement {
   *   static get is() { return 'test-self-observe';}
   *   connectedCallback() {
   *     super.connectedCallback();
   *     this._observer = new FlattenedNodesObserver(this, (info) => {
   *       this.info = info;
   *     });
   *   }
   *   disconnectedCallback() {
   *     super.disconnectedCallback();
   *     this._observer.disconnect();
   *   }
   * }
   * customElements.define(TestSelfObserve.is, TestSelfObserve);
   * ```
   *
   * @summary Class that listens for changes (additions or removals) to
   * "flattened nodes" on a given `node`.
   * @implements {PolymerDomApi.ObserveHandle}
   */var FlattenedNodesObserver=/*#__PURE__*/function(){babelHelpers.createClass(FlattenedNodesObserver,null,[{key:"getFlattenedNodes",/**
   * Returns the list of flattened nodes for the given `node`.
   * This list consists of a node's children and, for any children
   * that are `<slot>` elements, the expanded flattened list of `assignedNodes`.
   * For example, if the observed node has children `<a></a><slot></slot><b></b>`
   * and the `<slot>` has one `<div>` assigned to it, then the flattened
   * nodes list is `<a></a><div></div><b></b>`. If the `<slot>` has other
   * `<slot>` elements assigned to it, these are flattened as well.
   *
   * @param {!HTMLElement|!HTMLSlotElement} node The node for which to
   *      return the list of flattened nodes.
   * @return {!Array<!Node>} The list of flattened nodes for the given `node`.
   * @nocollapse See https://github.com/google/closure-compiler/issues/2763
   */ // eslint-disable-next-line
value:function getFlattenedNodes(node){var wrapped=wrap$1(node);if(isSlot(node)){node=/** @type {!HTMLSlotElement} */node;// eslint-disable-line no-self-assign
return wrapped.assignedNodes({flatten:!0})}else{return Array.from(wrapped.childNodes).map(function(node){if(isSlot(node)){node=/** @type {!HTMLSlotElement} */node;// eslint-disable-line no-self-assign
return wrap$1(node).assignedNodes({flatten:!0})}else{return[node]}}).reduce(function(a,b){return a.concat(b)},[])}}/**
     * @param {!HTMLElement} target Node on which to listen for changes.
     * @param {?function(this: Element, { target: !HTMLElement, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Function called when there are additions
     * or removals from the target's list of flattened nodes.
     */ // eslint-disable-next-line
}]);function FlattenedNodesObserver(target,callback){var _this14=this;babelHelpers.classCallCheck(this,FlattenedNodesObserver);/**
     * @type {MutationObserver}
     * @private
     */this._shadyChildrenObserver=null;/**
                                            * @type {MutationObserver}
                                            * @private
                                            */this._nativeChildrenObserver=null;this._connected=!1;/**
                              * @type {!HTMLElement}
                              * @private
                              */this._target=target;this.callback=callback;this._effectiveNodes=[];this._observer=null;this._scheduled=!1;/**
                              * @type {function()}
                              * @private
                              */this._boundSchedule=function(){_this14._schedule()};this.connect();this._schedule()}/**
     * Activates an observer. This method is automatically called when
     * a `FlattenedNodesObserver` is created. It should only be called to
     * re-activate an observer that has been deactivated via the `disconnect` method.
     *
     * @return {void}
     */babelHelpers.createClass(FlattenedNodesObserver,[{key:"connect",value:function connect(){var _this15=this;if(isSlot(this._target)){this._listenSlots([this._target])}else if(wrap$1(this._target).children){this._listenSlots(/** @type {!NodeList<!Node>} */wrap$1(this._target).children);if(window.ShadyDOM){this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,function(mutations){_this15._processMutations(mutations)})}else{this._nativeChildrenObserver=new MutationObserver(function(mutations){_this15._processMutations(mutations)});this._nativeChildrenObserver.observe(this._target,{childList:!0})}}this._connected=!0}/**
     * Deactivates the flattened nodes observer. After calling this method
     * the observer callback will not be called when changes to flattened nodes
     * occur. The `connect` method may be subsequently called to reactivate
     * the observer.
     *
     * @return {void}
     * @override
     */},{key:"disconnect",value:function disconnect(){if(isSlot(this._target)){this._unlistenSlots([this._target])}else if(wrap$1(this._target).children){this._unlistenSlots(/** @type {!NodeList<!Node>} */wrap$1(this._target).children);if(window.ShadyDOM&&this._shadyChildrenObserver){ShadyDOM.unobserveChildren(this._shadyChildrenObserver);this._shadyChildrenObserver=null}else if(this._nativeChildrenObserver){this._nativeChildrenObserver.disconnect();this._nativeChildrenObserver=null}}this._connected=!1}/**
     * @return {void}
     * @private
     */},{key:"_schedule",value:function _schedule(){var _this16=this;if(!this._scheduled){this._scheduled=!0;microTask.run(function(){return _this16.flush()})}}/**
     * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
     * @return {void}
     * @private
     */},{key:"_processMutations",value:function _processMutations(mutations){this._processSlotMutations(mutations);this.flush()}/**
     * @param {Array<MutationRecord>} mutations Mutations signaled by the mutation observer
     * @return {void}
     * @private
     */},{key:"_processSlotMutations",value:function _processSlotMutations(mutations){if(mutations){for(var _i35=0,mutation;_i35<mutations.length;_i35++){mutation=mutations[_i35];if(mutation.addedNodes){this._listenSlots(mutation.addedNodes)}if(mutation.removedNodes){this._unlistenSlots(mutation.removedNodes)}}}}/**
     * Flushes the observer causing any pending changes to be immediately
     * delivered the observer callback. By default these changes are delivered
     * asynchronously at the next microtask checkpoint.
     *
     * @return {boolean} Returns true if any pending changes caused the observer
     * callback to run.
     */},{key:"flush",value:function flush(){if(!this._connected){return!1}if(window.ShadyDOM){ShadyDOM.flush()}if(this._nativeChildrenObserver){this._processSlotMutations(this._nativeChildrenObserver.takeRecords())}else if(this._shadyChildrenObserver){this._processSlotMutations(this._shadyChildrenObserver.takeRecords())}this._scheduled=!1;// process removals
for(var info={target:this._target,addedNodes:[],removedNodes:[]},newNodes=this.constructor.getFlattenedNodes(this._target),splices=calculateSplices(newNodes,this._effectiveNodes),_i36=0,s;_i36<splices.length&&(s=splices[_i36]);_i36++){for(var j=0,n;j<s.removed.length&&(n=s.removed[j]);j++){info.removedNodes.push(n)}}// process adds
for(var _i37=0,_s2;_i37<splices.length&&(_s2=splices[_i37]);_i37++){for(var _j2=_s2.index;_j2<_s2.index+_s2.addedCount;_j2++){info.addedNodes.push(newNodes[_j2])}}// update cache
this._effectiveNodes=newNodes;var didFlush=!1;if(info.addedNodes.length||info.removedNodes.length){didFlush=!0;this.callback.call(this._target,info)}return didFlush}/**
     * @param {!Array<!Node>|!NodeList<!Node>} nodeList Nodes that could change
     * @return {void}
     * @private
     */},{key:"_listenSlots",value:function _listenSlots(nodeList){for(var _i38=0,n;_i38<nodeList.length;_i38++){n=nodeList[_i38];if(isSlot(n)){n.addEventListener("slotchange",this._boundSchedule)}}}/**
     * @param {!Array<!Node>|!NodeList<!Node>} nodeList Nodes that could change
     * @return {void}
     * @private
     */},{key:"_unlistenSlots",value:function _unlistenSlots(nodeList){for(var _i39=0,n;_i39<nodeList.length;_i39++){n=nodeList[_i39];if(isSlot(n)){n.removeEventListener("slotchange",this._boundSchedule)}}}}]);return FlattenedNodesObserver}();_exports.FlattenedNodesObserver=FlattenedNodesObserver;var flattenedNodesObserver={FlattenedNodesObserver:FlattenedNodesObserver};_exports.$flattenedNodesObserver=flattenedNodesObserver;var flush$1=function flush$1(){var shadyDOM,debouncers;do{shadyDOM=window.ShadyDOM&&ShadyDOM.flush();if(window.ShadyCSS&&window.ShadyCSS.ScopingShim){window.ShadyCSS.ScopingShim.flush()}debouncers=flushDebouncers()}while(shadyDOM||debouncers)};_exports.flush$1=_exports.flush=flush$1;var flush$2={enqueueDebouncer:enqueueDebouncer,flush:flush$1};/* eslint-enable no-unused-vars */_exports.$flush=flush$2;var p=Element.prototype,normalizedMatchesSelector=p.matches||p.matchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector||p.webkitMatchesSelector,matchesSelector=function matchesSelector(node,selector){return normalizedMatchesSelector.call(node,selector)};/**
                              * @const {function(this:Node, string): boolean}
                              */_exports.matchesSelector=matchesSelector;/**
    * Node API wrapper class returned from `Polymer.dom.(target)` when
    * `target` is a `Node`.
    * @implements {PolymerDomApi}
    * @unrestricted
    */var DomApiNative=/*#__PURE__*/function(){/**
   * @param {Node} node Node for which to create a Polymer.dom helper object.
   */function DomApiNative(node){babelHelpers.classCallCheck(this,DomApiNative);if(window.ShadyDOM&&window.ShadyDOM.inUse){window.ShadyDOM.patch(node)}this.node=node}/**
     * Returns an instance of `FlattenedNodesObserver` that
     * listens for node changes on this element.
     *
     * @param {function(this:HTMLElement, { target: !HTMLElement, addedNodes: !Array<!Element>, removedNodes: !Array<!Element> }):void} callback Called when direct or distributed children
     *   of this element changes
     * @return {!PolymerDomApi.ObserveHandle} Observer instance
     * @override
     */babelHelpers.createClass(DomApiNative,[{key:"observeNodes",value:function observeNodes(callback){return new FlattenedNodesObserver(/** @type {!HTMLElement} */this.node,callback)}/**
     * Disconnects an observer previously created via `observeNodes`
     *
     * @param {!PolymerDomApi.ObserveHandle} observerHandle Observer instance
     *   to disconnect.
     * @return {void}
     * @override
     */},{key:"unobserveNodes",value:function unobserveNodes(observerHandle){observerHandle.disconnect()}/**
     * Provided as a backwards-compatible API only.  This method does nothing.
     * @return {void}
     */},{key:"notifyObserver",value:function notifyObserver(){}/**
                       * Returns true if the provided node is contained with this element's
                       * light-DOM children or shadow root, including any nested shadow roots
                       * of children therein.
                       *
                       * @param {Node} node Node to test
                       * @return {boolean} Returns true if the given `node` is contained within
                       *   this element's light or shadow DOM.
                       * @override
                       */},{key:"deepContains",value:function deepContains(node){if(wrap$1(this.node).contains(node)){return!0}var n=node,doc=node.ownerDocument;// walk from node to `this` or `document`
while(n&&n!==doc&&n!==this.node){// use logical parentnode, or native ShadowRoot host
n=wrap$1(n).parentNode||wrap$1(n).host}return n===this.node}/**
     * Returns the root node of this node.  Equivalent to `getRootNode()`.
     *
     * @return {Node} Top most element in the dom tree in which the node
     * exists. If the node is connected to a document this is either a
     * shadowRoot or the document; otherwise, it may be the node
     * itself or a node or document fragment containing it.
     * @override
     */},{key:"getOwnerRoot",value:function getOwnerRoot(){return wrap$1(this.node).getRootNode()}/**
     * For slot elements, returns the nodes assigned to the slot; otherwise
     * an empty array. It is equivalent to `<slot>.addignedNodes({flatten:true})`.
     *
     * @return {!Array<!Node>} Array of assigned nodes
     * @override
     */},{key:"getDistributedNodes",value:function getDistributedNodes(){return"slot"===this.node.localName?wrap$1(this.node).assignedNodes({flatten:!0}):[]}/**
     * Returns an array of all slots this element was distributed to.
     *
     * @return {!Array<!HTMLSlotElement>} Description
     * @override
     */},{key:"getDestinationInsertionPoints",value:function getDestinationInsertionPoints(){var ip$=[],n=wrap$1(this.node).assignedSlot;while(n){ip$.push(n);n=wrap$1(n).assignedSlot}return ip$}/**
     * Calls `importNode` on the `ownerDocument` for this node.
     *
     * @param {!Node} node Node to import
     * @param {boolean} deep True if the node should be cloned deeply during
     *   import
     * @return {Node} Clone of given node imported to this owner document
     */},{key:"importNode",value:function importNode(node,deep){var doc=babelHelpers.instanceof(this.node,Document)?this.node:this.node.ownerDocument;return wrap$1(doc).importNode(node,deep)}/**
     * @return {!Array<!Node>} Returns a flattened list of all child nodes and
     * nodes assigned to child slots.
     * @override
     */},{key:"getEffectiveChildNodes",value:function getEffectiveChildNodes(){return FlattenedNodesObserver.getFlattenedNodes(/** @type {!HTMLElement} */this.node)}/**
     * Returns a filtered list of flattened child elements for this element based
     * on the given selector.
     *
     * @param {string} selector Selector to filter nodes against
     * @return {!Array<!HTMLElement>} List of flattened child elements
     * @override
     */},{key:"queryDistributedElements",value:function queryDistributedElements(selector){for(var c$=this.getEffectiveChildNodes(),list=[],_i40=0,l=c$.length,c;_i40<l&&(c=c$[_i40]);_i40++){if(c.nodeType===Node.ELEMENT_NODE&&matchesSelector(c,selector)){list.push(c)}}return list}/**
     * For shadow roots, returns the currently focused element within this
     * shadow root.
     *
     * return {Node|undefined} Currently focused element
     * @override
     */},{key:"activeElement",get:function get(){var node=this.node;return node._activeElement!==void 0?node._activeElement:node.activeElement}}]);return DomApiNative}();function forwardMethods(proto,methods){for(var _loop=function _loop(_i41){var method=methods[_i41];/* eslint-disable valid-jsdoc */proto[method]=/** @this {DomApiNative} */function(){return this.node[method].apply(this.node,arguments)};/* eslint-enable */},_i41=0;_i41<methods.length;_i41++){_loop(_i41)}}function forwardReadOnlyProperties(proto,properties){for(var _loop2=function _loop2(_i42){var name=properties[_i42];Object.defineProperty(proto,name,{get:function get(){var domApi=/** @type {DomApiNative} */this;return domApi.node[name]},configurable:!0})},_i42=0;_i42<properties.length;_i42++){_loop2(_i42)}}function forwardProperties(proto,properties){for(var _loop3=function _loop3(_i43){var name=properties[_i43];Object.defineProperty(proto,name,{/**
       * @this {DomApiNative}
       * @return {*} .
       */get:function get(){return this.node[name]},/**
       * @this {DomApiNative}
       * @param {*} value .
       */set:function set(value){this.node[name]=value},configurable:!0})},_i43=0;_i43<properties.length;_i43++){_loop3(_i43)}}/**
   * Event API wrapper class returned from `dom.(target)` when
   * `target` is an `Event`.
   */var EventApi=/*#__PURE__*/function(){function EventApi(event){babelHelpers.classCallCheck(this,EventApi);this.event=event}/**
     * Returns the first node on the `composedPath` of this event.
     *
     * @return {!EventTarget} The node this event was dispatched to
     */babelHelpers.createClass(EventApi,[{key:"rootTarget",get:function get(){return this.path[0]}/**
     * Returns the local (re-targeted) target for this event.
     *
     * @return {!EventTarget} The local (re-targeted) target for this event.
     */},{key:"localTarget",get:function get(){return this.event.target}/**
     * Returns the `composedPath` for this event.
     * @return {!Array<!EventTarget>} The nodes this event propagated through
     */},{key:"path",get:function get(){return this.event.composedPath()}}]);return EventApi}();/**
   * @function
   * @param {boolean=} deep
   * @return {!Node}
   */_exports.EventApi=EventApi;DomApiNative.prototype.cloneNode;/**
                                   * @function
                                   * @param {!Node} node
                                   * @return {!Node}
                                   */DomApiNative.prototype.appendChild;/**
                                     * @function
                                     * @param {!Node} newChild
                                     * @param {Node} refChild
                                     * @return {!Node}
                                     */DomApiNative.prototype.insertBefore;/**
                                      * @function
                                      * @param {!Node} node
                                      * @return {!Node}
                                      */DomApiNative.prototype.removeChild;/**
                                     * @function
                                     * @param {!Node} oldChild
                                     * @param {!Node} newChild
                                     * @return {!Node}
                                     */DomApiNative.prototype.replaceChild;/**
                                      * @function
                                      * @param {string} name
                                      * @param {string} value
                                      * @return {void}
                                      */DomApiNative.prototype.setAttribute;/**
                                      * @function
                                      * @param {string} name
                                      * @return {void}
                                      */DomApiNative.prototype.removeAttribute;/**
                                         * @function
                                         * @param {string} selector
                                         * @return {?Element}
                                         */DomApiNative.prototype.querySelector;/**
                                       * @function
                                       * @param {string} selector
                                       * @return {!NodeList<!Element>}
                                       */DomApiNative.prototype.querySelectorAll;/** @type {?Node} */DomApiNative.prototype.parentNode;/** @type {?Node} */DomApiNative.prototype.firstChild;/** @type {?Node} */DomApiNative.prototype.lastChild;/** @type {?Node} */DomApiNative.prototype.nextSibling;/** @type {?Node} */DomApiNative.prototype.previousSibling;/** @type {?HTMLElement} */DomApiNative.prototype.firstElementChild;/** @type {?HTMLElement} */DomApiNative.prototype.lastElementChild;/** @type {?HTMLElement} */DomApiNative.prototype.nextElementSibling;/** @type {?HTMLElement} */DomApiNative.prototype.previousElementSibling;/** @type {!Array<!Node>} */DomApiNative.prototype.childNodes;/** @type {!Array<!HTMLElement>} */DomApiNative.prototype.children;/** @type {?DOMTokenList} */DomApiNative.prototype.classList;/** @type {string} */DomApiNative.prototype.textContent;/** @type {string} */DomApiNative.prototype.innerHTML;var DomApiImpl=DomApiNative;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){/**
   * @private
   * @extends {HTMLElement}
   */var Wrapper=/*#__PURE__*/function(_window$ShadyDOM$Wrap){babelHelpers.inherits(Wrapper,_window$ShadyDOM$Wrap);function Wrapper(){babelHelpers.classCallCheck(this,Wrapper);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Wrapper).apply(this,arguments))}return Wrapper}(window.ShadyDOM.Wrapper);// copy bespoke API onto wrapper
Object.getOwnPropertyNames(DomApiNative.prototype).forEach(function(prop){if("activeElement"!=prop){Wrapper.prototype[prop]=DomApiNative.prototype[prop]}});// Note, `classList` is here only for legacy compatibility since it does not
// trigger distribution in v1 Shadow DOM.
forwardReadOnlyProperties(Wrapper.prototype,["classList"]);DomApiImpl=Wrapper;Object.defineProperties(EventApi.prototype,{// Returns the "lowest" node in the same root as the event's currentTarget.
// When in `noPatch` mode, this must be calculated by walking the event's
// path.
localTarget:{get:function get(){for(var current=this.event.currentTarget,currentRoot=current&&dom(current).getOwnerRoot(),p$=this.path,_i44=0,e;_i44<p$.length;_i44++){e=p$[_i44];if(dom(e).getOwnerRoot()===currentRoot){return e}}},configurable:!0},path:{get:function get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else{// Methods that can provoke distribution or must return the logical, not
// composed tree.
forwardMethods(DomApiNative.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]);// Properties that should return the logical, not composed tree. Note, `classList`
// is here only for legacy compatibility since it does not trigger distribution
// in v1 Shadow DOM.
forwardReadOnlyProperties(DomApiNative.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]);forwardProperties(DomApiNative.prototype,["textContent","innerHTML","className"])}var DomApi=DomApiImpl;/**
                                   * Legacy DOM and Event manipulation API wrapper factory used to abstract
                                   * differences between native Shadow DOM and "Shady DOM" when polyfilling on
                                   * older browsers.
                                   *
                                   * Note that in Polymer 2.x use of `Polymer.dom` is no longer required and
                                   * in the majority of cases simply facades directly to the standard native
                                   * API.
                                   *
                                   * @summary Legacy DOM and Event manipulation API wrapper factory used to
                                   * abstract differences between native Shadow DOM and "Shady DOM."
                                   * @param {(Node|Event|DomApiNative|EventApi)=} obj Node or event to operate on
                                   * @return {!DomApiNative|!EventApi} Wrapper providing either node API or event API
                                   */_exports.DomApi=DomApi;var dom=function dom(obj){obj=obj||document;if(babelHelpers.instanceof(obj,DomApiImpl)){return(/** @type {!DomApi} */obj)}if(babelHelpers.instanceof(obj,EventApi)){return(/** @type {!EventApi} */obj)}var helper=obj.__domApi;if(!helper){if(babelHelpers.instanceof(obj,Event)){helper=new EventApi(obj)}else{helper=new DomApiImpl(/** @type {Node} */obj)}obj.__domApi=helper}return helper};_exports.dom=dom;var polymer_dom={matchesSelector:matchesSelector,EventApi:EventApi,DomApi:DomApi,dom:dom,flush:flush$1,addDebouncer:enqueueDebouncer};_exports.$polymerDom=polymer_dom;var ShadyDOM$1=window.ShadyDOM,ShadyCSS=window.ShadyCSS;/**
                                   * Return true if node scope is correct.
                                   *
                                   * @param {!Element} node Node to check scope
                                   * @param {!Node} scope Scope reference
                                   * @return {boolean} True if node is in scope
                                   */function sameScope(node,scope){return wrap$1(node).getRootNode()===scope}/**
   * Ensure that elements in a ShadowDOM container are scoped correctly.
   * This function is only needed when ShadyDOM is used and unpatched DOM APIs are used in third party code.
   * This can happen in noPatch mode or when specialized APIs like ranges or tables are used to mutate DOM.
   *
   * @param  {!Element} container Container element to scope
   * @param  {boolean=} shouldObserve if true, start a mutation observer for added nodes to the container
   * @return {?MutationObserver} Returns a new MutationObserver on `container` if `shouldObserve` is true.
   */function _scopeSubtree(container){var shouldObserve=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1;// If using native ShadowDOM, abort
if(!ShadyDOM$1||!ShadyCSS){return null}// ShadyCSS handles DOM mutations when ShadyDOM does not handle scoping itself
if(!ShadyDOM$1.handlesDynamicScoping){return null}var ScopingShim=ShadyCSS.ScopingShim;// if ScopingShim is not available, abort
if(!ScopingShim){return null}// capture correct scope for container
var containerScope=ScopingShim.scopeForNode(container),root=wrap$1(container).getRootNode(),scopify=function scopify(node){if(!sameScope(node,root)){return}// NOTE: native qSA does not honor scoped DOM, but it is faster, and the same behavior as Polymer v1
var elements=Array.from(ShadyDOM$1.nativeMethods.querySelectorAll.call(node,"*"));elements.push(node);for(var _i45=0,el;_i45<elements.length;_i45++){el=elements[_i45];if(!sameScope(el,root)){continue}var currentScope=ScopingShim.currentScopeForNode(el);if(currentScope!==containerScope){if(""!==currentScope){ScopingShim.unscopeNode(el,currentScope)}ScopingShim.scopeNode(el,containerScope)}}};// scope everything in container
scopify(container);if(shouldObserve){var mo=new MutationObserver(function(mxns){for(var _i46=0,mxn;_i46<mxns.length;_i46++){mxn=mxns[_i46];for(var j=0,addedNode;j<mxn.addedNodes.length;j++){addedNode=mxn.addedNodes[j];if(addedNode.nodeType===Node.ELEMENT_NODE){scopify(addedNode)}}}});mo.observe(container,{childList:!0,subtree:!0});return mo}else{return null}}var scopeSubtree$1={scopeSubtree:_scopeSubtree};_exports.$scopeSubtree=scopeSubtree$1;var bundledImportMeta$1=_objectSpread({},meta,{url:new URL("../node_modules/%40polymer/polymer/lib/legacy/legacy-element-mixin.js",meta.url).href}),styleInterface=window.ShadyCSS,LegacyElementMixin=dedupingMixin(function(base){/**
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @implements {Polymer_GestureEventListeners}
   * @implements {Polymer_DirMixin}
   * @extends {HTMLElement}
   * @private
   */var legacyElementBase=DirMixin(GestureEventListeners(ElementMixin(base))),DIRECTION_MAP={x:"pan-x",y:"pan-y",none:"none",all:"auto"},LegacyElement=/*#__PURE__*/function(_legacyElementBase){babelHelpers.inherits(LegacyElement,_legacyElementBase);function LegacyElement(){var _this17;babelHelpers.classCallCheck(this,LegacyElement);_this17=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LegacyElement).call(this));/** @type {boolean} */_this17.isAttached;/** @type {?WeakMap<!Element, !Object<string, !Function>>} */_this17.__boundListeners;/** @type {?Object<string, ?Function>} */_this17._debouncers;return _this17}/**
       * Forwards `importMeta` from the prototype (i.e. from the info object
       * passed to `Polymer({...})`) to the static API.
       *
       * @return {!Object} The `import.meta` object set on the prototype
       * @suppress {missingProperties} `this` is always in the instance in
       *  closure for some reason even in a static method, rather than the class
       * @nocollapse
       */babelHelpers.createClass(LegacyElement,[{key:"created",/**
       * Legacy callback called during the `constructor`, for overriding
       * by the user.
       * @override
       * @return {void}
       */value:function created(){}/**
                  * Provides an implementation of `connectedCallback`
                  * which adds Polymer legacy API's `attached` method.
                  * @return {void}
                  * @override
                  */},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"connectedCallback",this).call(this);this.isAttached=!0;this.attached()}/**
       * Legacy callback called during `connectedCallback`, for overriding
       * by the user.
       * @override
       * @return {void}
       */},{key:"attached",value:function attached(){}/**
                   * Provides an implementation of `disconnectedCallback`
                   * which adds Polymer legacy API's `detached` method.
                   * @return {void}
                   * @override
                   */},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"disconnectedCallback",this).call(this);this.isAttached=!1;this.detached()}/**
       * Legacy callback called during `disconnectedCallback`, for overriding
       * by the user.
       * @override
       * @return {void}
       */},{key:"detached",value:function detached(){}/**
                   * Provides an override implementation of `attributeChangedCallback`
                   * which adds the Polymer legacy API's `attributeChanged` method.
                   * @param {string} name Name of attribute.
                   * @param {?string} old Old value of attribute.
                   * @param {?string} value Current value of attribute.
                   * @param {?string} namespace Attribute namespace.
                   * @return {void}
                   * @override
                   */},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,old,value,namespace){if(old!==value){babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"attributeChangedCallback",this).call(this,name,old,value,namespace);this.attributeChanged(name,old,value)}}/**
       * Legacy callback called during `attributeChangedChallback`, for overriding
       * by the user.
       * @param {string} name Name of attribute.
       * @param {?string} old Old value of attribute.
       * @param {?string} value Current value of attribute.
       * @return {void}
       * @override
       */},{key:"attributeChanged",value:function attributeChanged(name,old,value){}// eslint-disable-line no-unused-vars
/**
     * Overrides the default `Polymer.PropertyEffects` implementation to
     * add support for class initialization via the `_registered` callback.
     * This is called only when the first instance of the element is created.
     *
     * @return {void}
     * @override
     * @suppress {invalidCasts}
     */},{key:"_initializeProperties",value:function _initializeProperties(){var proto=Object.getPrototypeOf(this);if(!proto.hasOwnProperty("__hasRegisterFinished")){this._registered();// backstop in case the `_registered` implementation does not set this
proto.__hasRegisterFinished=!0}babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"_initializeProperties",this).call(this);this.root=/** @type {HTMLElement} */this;this.created();// Ensure listeners are applied immediately so that they are
// added before declarative event listeners. This allows an element to
// decorate itself via an event prior to any declarative listeners
// seeing the event. Note, this ensures compatibility with 1.x ordering.
this._applyListeners()}/**
       * Called automatically when an element is initializing.
       * Users may override this method to perform class registration time
       * work. The implementation should ensure the work is performed
       * only once for the class.
       * @protected
       * @return {void}
       * @override
       */},{key:"_registered",value:function _registered(){}/**
                      * Overrides the default `Polymer.PropertyEffects` implementation to
                      * add support for installing `hostAttributes` and `listeners`.
                      *
                      * @return {void}
                      * @override
                      */},{key:"ready",value:function ready(){this._ensureAttributes();babelHelpers.get(babelHelpers.getPrototypeOf(LegacyElement.prototype),"ready",this).call(this)}/**
       * Ensures an element has required attributes. Called when the element
       * is being readied via `ready`. Users should override to set the
       * element's required attributes. The implementation should be sure
       * to check and not override existing attributes added by
       * the user of the element. Typically, setting attributes should be left
       * to the element user and not done here; reasonable exceptions include
       * setting aria roles and focusability.
       * @protected
       * @return {void}
       * @override
       */},{key:"_ensureAttributes",value:function _ensureAttributes(){}/**
                            * Adds element event listeners. Called when the element
                            * is being readied via `ready`. Users should override to
                            * add any required element event listeners.
                            * In performance critical elements, the work done here should be kept
                            * to a minimum since it is done before the element is rendered. In
                            * these elements, consider adding listeners asynchronously so as not to
                            * block render.
                            * @protected
                            * @return {void}
                            * @override
                            */},{key:"_applyListeners",value:function _applyListeners(){}/**
                          * Converts a typed JavaScript value to a string.
                          *
                          * Note this method is provided as backward-compatible legacy API
                          * only.  It is not directly called by any Polymer features. To customize
                          * how properties are serialized to attributes for attribute bindings and
                          * `reflectToAttribute: true` properties as well as this method, override
                          * the `_serializeValue` method provided by `Polymer.PropertyAccessors`.
                          *
                          * @param {*} value Value to deserialize
                          * @return {string | undefined} Serialized value
                          * @override
                          */},{key:"serialize",value:function serialize(value){return this._serializeValue(value)}/**
       * Converts a string to a typed JavaScript value.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.  To customize
       * how attributes are deserialized to properties for in
       * `attributeChangedCallback`, override `_deserializeValue` method
       * provided by `Polymer.PropertyAccessors`.
       *
       * @param {string} value String to deserialize
       * @param {*} type Type to deserialize the string to
       * @return {*} Returns the deserialized value in the `type` given.
       * @override
       */},{key:"deserialize",value:function deserialize(value,type){return this._deserializeValue(value,type)}/**
       * Serializes a property to its associated attribute.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.
       *
       * @param {string} property Property name to reflect.
       * @param {string=} attribute Attribute name to reflect.
       * @param {*=} value Property value to reflect.
       * @return {void}
       * @override
       */},{key:"reflectPropertyToAttribute",value:function reflectPropertyToAttribute(property,attribute,value){this._propertyToAttribute(property,attribute,value)}/**
       * Sets a typed value to an HTML attribute on a node.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.
       *
       * @param {*} value Value to serialize.
       * @param {string} attribute Attribute name to serialize to.
       * @param {Element} node Element to set attribute to.
       * @return {void}
       * @override
       */},{key:"serializeValueToAttribute",value:function serializeValueToAttribute(value,attribute,node){this._valueToNodeAttribute(/** @type {Element} */node||this,value,attribute)}/**
       * Copies own properties (including accessor descriptors) from a source
       * object to a target object.
       *
       * @param {Object} prototype Target object to copy properties to.
       * @param {Object} api Source object to copy properties from.
       * @return {Object} prototype object that was passed as first argument.
       * @override
       */},{key:"extend",value:function extend(prototype,api){if(!(prototype&&api)){return prototype||api}for(var n$=Object.getOwnPropertyNames(api),_i47=0,n,pd;_i47<n$.length&&(n=n$[_i47]);_i47++){pd=Object.getOwnPropertyDescriptor(api,n);if(pd){Object.defineProperty(prototype,n,pd)}}return prototype}/**
       * Copies props from a source object to a target object.
       *
       * Note, this method uses a simple `for...in` strategy for enumerating
       * properties.  To ensure only `ownProperties` are copied from source
       * to target and that accessor implementations are copied, use `extend`.
       *
       * @param {!Object} target Target object to copy properties to.
       * @param {!Object} source Source object to copy properties from.
       * @return {!Object} Target object that was passed as first argument.
       * @override
       */},{key:"mixin",value:function mixin(target,source){for(var _i48 in source){target[_i48]=source[_i48]}return target}/**
       * Sets the prototype of an object.
       *
       * Note this method is provided as backward-compatible legacy API
       * only.  It is not directly called by any Polymer features.
       * @param {Object} object The object on which to set the prototype.
       * @param {Object} prototype The prototype that will be set on the given
       * `object`.
       * @return {Object} Returns the given `object` with its prototype set
       * to the given `prototype` object.
       * @override
       */},{key:"chainObject",value:function chainObject(object,prototype){if(object&&prototype&&object!==prototype){object.__proto__=prototype}return object}/* **** Begin Template **** */ /**
                                      * Calls `importNode` on the `content` of the `template` specified and
                                      * returns a document fragment containing the imported content.
                                      *
                                      * @param {HTMLTemplateElement} template HTML template element to instance.
                                      * @return {!DocumentFragment} Document fragment containing the imported
                                      *   template content.
                                      * @override
                                      * @suppress {missingProperties} go/missingfnprops
                                      */},{key:"instanceTemplate",value:function instanceTemplate(template){var content=this.constructor._contentForTemplate(template),dom=/** @type {!DocumentFragment} */document.importNode(content,!0);return dom}/* **** Begin Events **** */ /**
                                    * Dispatches a custom event with an optional detail value.
                                    *
                                    * @param {string} type Name of event type.
                                    * @param {*=} detail Detail value containing event-specific
                                    *   payload.
                                    * @param {{ bubbles: (boolean|undefined), cancelable: (boolean|undefined),
                                    *     composed: (boolean|undefined) }=}
                                    *  options Object specifying options.  These may include:
                                    *  `bubbles` (boolean, defaults to `true`),
                                    *  `cancelable` (boolean, defaults to false), and
                                    *  `node` on which to fire the event (HTMLElement, defaults to `this`).
                                    * @return {!Event} The new event that was fired.
                                    * @override
                                    */},{key:"fire",value:function fire(type,detail,options){options=options||{};detail=null===detail||detail===void 0?{}:detail;var event=new Event(type,{bubbles:options.bubbles===void 0?!0:options.bubbles,cancelable:!!options.cancelable,composed:options.composed===void 0?!0:options.composed});event.detail=detail;var node=options.node||this;wrap$1(node).dispatchEvent(event);return event}/**
       * Convenience method to add an event listener on a given element,
       * late bound to a named method on this element.
       *
       * @param {?EventTarget} node Element to add event listener to.
       * @param {string} eventName Name of event to listen for.
       * @param {string} methodName Name of handler method on `this` to call.
       * @return {void}
       * @override
       */},{key:"listen",value:function listen(node,eventName,methodName){node=/** @type {!EventTarget} */node||this;var hbl=this.__boundListeners||(this.__boundListeners=new WeakMap),bl=hbl.get(node);if(!bl){bl={};hbl.set(node,bl)}var key=eventName+methodName;if(!bl[key]){bl[key]=this._addMethodEventListenerToNode(/** @type {!Node} */node,eventName,methodName,this)}}/**
       * Convenience method to remove an event listener from a given element,
       * late bound to a named method on this element.
       *
       * @param {?EventTarget} node Element to remove event listener from.
       * @param {string} eventName Name of event to stop listening to.
       * @param {string} methodName Name of handler method on `this` to not call
       anymore.
       * @return {void}
       * @override
       */},{key:"unlisten",value:function unlisten(node,eventName,methodName){node=/** @type {!EventTarget} */node||this;var bl=this.__boundListeners&&this.__boundListeners.get(/** @type {!Element} */node),key=eventName+methodName,handler=bl&&bl[key];if(handler){this._removeEventListenerFromNode(/** @type {!Node} */node,eventName,handler);bl[key]=/** @type {?} */null}}/**
       * Override scrolling behavior to all direction, one direction, or none.
       *
       * Valid scroll directions:
       *   - 'all': scroll in any direction
       *   - 'x': scroll only in the 'x' direction
       *   - 'y': scroll only in the 'y' direction
       *   - 'none': disable scrolling for this node
       *
       * @param {string=} direction Direction to allow scrolling
       * Defaults to `all`.
       * @param {Element=} node Element to apply scroll direction setting.
       * Defaults to `this`.
       * @return {void}
       * @override
       */},{key:"setScrollDirection",value:function setScrollDirection(direction,node){setTouchAction(/** @type {!Element} */node||this,DIRECTION_MAP[direction]||"auto")}/* **** End Events **** */ /**
                                  * Convenience method to run `querySelector` on this local DOM scope.
                                  *
                                  * This function calls `Polymer.dom(this.root).querySelector(slctr)`.
                                  *
                                  * @param {string} slctr Selector to run on this local DOM scope
                                  * @return {Element} Element found by the selector, or null if not found.
                                  * @override
                                  */},{key:"$$",value:function $$(slctr){// Note, no need to `wrap` this because root is always patched
return this.root.querySelector(slctr)}/**
       * Return the element whose local dom within which this element
       * is contained. This is a shorthand for
       * `this.getRootNode().host`.
       * @this {Element}
       * @return {?Node} The element whose local dom within which this element is
       * contained.
       * @override
       */},{key:"distributeContent",/**
       * Force this element to distribute its children to its local dom.
       * This should not be necessary as of Polymer 2.0.2 and is provided only
       * for backwards compatibility.
       * @return {void}
       * @override
       */value:function distributeContent(){var thisEl=/** @type {Element} */this,domApi=/** @type {PolymerDomApi} */dom(thisEl);if(window.ShadyDOM&&domApi.shadowRoot){ShadyDOM.flush()}}/**
       * Returns a list of nodes that are the effective childNodes. The effective
       * childNodes list is the same as the element's childNodes except that
       * any `<content>` elements are replaced with the list of nodes distributed
       * to the `<content>`, the result of its `getDistributedNodes` method.
       * @return {!Array<!Node>} List of effective child nodes.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an
       *     HTMLElement
       * @override
       */},{key:"getEffectiveChildNodes",value:function getEffectiveChildNodes(){var thisEl=/** @type {Element} */this,domApi=/** @type {PolymerDomApi} */dom(thisEl);return domApi.getEffectiveChildNodes()}/**
       * Returns a list of nodes distributed within this element that match
       * `selector`. These can be dom children or elements distributed to
       * children that are insertion points.
       * @param {string} selector Selector to run.
       * @return {!Array<!Node>} List of distributed elements that match selector.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an
       * HTMLElement
       * @override
       */},{key:"queryDistributedElements",value:function queryDistributedElements(selector){var thisEl=/** @type {Element} */this,domApi=/** @type {PolymerDomApi} */dom(thisEl);return domApi.queryDistributedElements(selector)}/**
       * Returns a list of elements that are the effective children. The effective
       * children list is the same as the element's children except that
       * any `<content>` elements are replaced with the list of elements
       * distributed to the `<content>`.
       *
       * @return {!Array<!Node>} List of effective children.
       * @override
       */},{key:"getEffectiveChildren",value:function getEffectiveChildren(){var list=this.getEffectiveChildNodes();return list.filter(function(/** @type {!Node} */n){return n.nodeType===Node.ELEMENT_NODE})}/**
       * Returns a string of text content that is the concatenation of the
       * text content's of the element's effective childNodes (the elements
       * returned by <a href="#getEffectiveChildNodes>getEffectiveChildNodes</a>.
       *
       * @return {string} List of effective children.
       * @override
       */},{key:"getEffectiveTextContent",value:function getEffectiveTextContent(){for(var cn=this.getEffectiveChildNodes(),tc=[],_i49=0,c;c=cn[_i49];_i49++){if(c.nodeType!==Node.COMMENT_NODE){tc.push(c.textContent)}}return tc.join("")}/**
       * Returns the first effective childNode within this element that
       * match `selector`. These can be dom child nodes or elements distributed
       * to children that are insertion points.
       * @param {string} selector Selector to run.
       * @return {Node} First effective child node that matches selector.
       * @override
       */},{key:"queryEffectiveChildren",value:function queryEffectiveChildren(selector){var e$=this.queryDistributedElements(selector);return e$&&e$[0]}/**
       * Returns a list of effective childNodes within this element that
       * match `selector`. These can be dom child nodes or elements distributed
       * to children that are insertion points.
       * @param {string} selector Selector to run.
       * @return {!Array<!Node>} List of effective child nodes that match
       *     selector.
       * @override
       */},{key:"queryAllEffectiveChildren",value:function queryAllEffectiveChildren(selector){return this.queryDistributedElements(selector)}/**
       * Returns a list of nodes distributed to this element's `<slot>`.
       *
       * If this element contains more than one `<slot>` in its local DOM,
       * an optional selector may be passed to choose the desired content.
       *
       * @param {string=} slctr CSS selector to choose the desired
       *   `<slot>`.  Defaults to `content`.
       * @return {!Array<!Node>} List of distributed nodes for the `<slot>`.
       * @override
       */},{key:"getContentChildNodes",value:function getContentChildNodes(slctr){// Note, no need to `wrap` this because root is always
var content=this.root.querySelector(slctr||"slot");return content?/** @type {PolymerDomApi} */dom(content).getDistributedNodes():[]}/**
       * Returns a list of element children distributed to this element's
       * `<slot>`.
       *
       * If this element contains more than one `<slot>` in its
       * local DOM, an optional selector may be passed to choose the desired
       * content.  This method differs from `getContentChildNodes` in that only
       * elements are returned.
       *
       * @param {string=} slctr CSS selector to choose the desired
       *   `<content>`.  Defaults to `content`.
       * @return {!Array<!HTMLElement>} List of distributed nodes for the
       *   `<slot>`.
       * @suppress {invalidCasts}
       * @override
       */},{key:"getContentChildren",value:function getContentChildren(slctr){var children=/** @type {!Array<!HTMLElement>} */this.getContentChildNodes(slctr).filter(function(n){return n.nodeType===Node.ELEMENT_NODE});return children}/**
       * Checks whether an element is in this element's light DOM tree.
       *
       * @param {?Node} node The element to be checked.
       * @return {boolean} true if node is in this element's light DOM tree.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an
       * HTMLElement
       * @override
       */},{key:"isLightDescendant",value:function isLightDescendant(node){var thisNode=/** @type {Node} */this;return thisNode!==node&&wrap$1(thisNode).contains(node)&&wrap$1(thisNode).getRootNode()===wrap$1(node).getRootNode()}/**
       * Checks whether an element is in this element's local DOM tree.
       *
       * @param {!Element} node The element to be checked.
       * @return {boolean} true if node is in this element's local DOM tree.
       * @override
       */},{key:"isLocalDescendant",value:function isLocalDescendant(node){return this.root===wrap$1(node).getRootNode()}/**
       * No-op for backwards compatibility. This should now be handled by
       * ShadyCss library.
       * @param  {!Element} container Container element to scope
       * @param  {boolean=} shouldObserve if true, start a mutation observer for added nodes to the container
       * @return {?MutationObserver} Returns a new MutationObserver on `container` if `shouldObserve` is true.
       * @override
       */},{key:"scopeSubtree",value:function scopeSubtree(container){var shouldObserve=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1;return _scopeSubtree(container,shouldObserve)}/**
       * Returns the computed style value for the given property.
       * @param {string} property The css property name.
       * @return {string} Returns the computed css property value for the given
       * `property`.
       * @suppress {invalidCasts} LegacyElementMixin must be applied to an
       *     HTMLElement
       * @override
       */},{key:"getComputedStyleValue",value:function getComputedStyleValue(property){return styleInterface.getComputedStyleValue(/** @type {!Element} */this,property)}// debounce
/**
     * Call `debounce` to collapse multiple requests for a named task into
     * one invocation which is made after the wait time has elapsed with
     * no new request.  If no wait time is given, the callback will be called
     * at microtask timing (guaranteed before paint).
     *
     *     debouncedClickAction(e) {
     *       // will not call `processClick` more than once per 100ms
     *       this.debounce('click', function() {
     *        this.processClick();
     *       } 100);
     *     }
     *
     * @param {string} jobName String to identify the debounce job.
     * @param {function():void} callback Function that is called (with `this`
     *   context) when the wait time elapses.
     * @param {number=} wait Optional wait time in milliseconds (ms) after the
     *   last signal that must elapse before invoking `callback`
     * @return {!Object} Returns a debouncer object on which exists the
     * following methods: `isActive()` returns true if the debouncer is
     * active; `cancel()` cancels the debouncer if it is active;
     * `flush()` immediately invokes the debounced callback if the debouncer
     * is active.
     * @override
     */},{key:"debounce",value:function debounce(jobName,callback,wait){this._debouncers=this._debouncers||{};return this._debouncers[jobName]=Debouncer.debounce(this._debouncers[jobName],0<wait?timeOut.after(wait):microTask,callback.bind(this))}/**
       * Returns whether a named debouncer is active.
       *
       * @param {string} jobName The name of the debouncer started with `debounce`
       * @return {boolean} Whether the debouncer is active (has not yet fired).
       * @override
       */},{key:"isDebouncerActive",value:function isDebouncerActive(jobName){this._debouncers=this._debouncers||{};var debouncer=this._debouncers[jobName];return!!(debouncer&&debouncer.isActive())}/**
       * Immediately calls the debouncer `callback` and inactivates it.
       *
       * @param {string} jobName The name of the debouncer started with `debounce`
       * @return {void}
       * @override
       */},{key:"flushDebouncer",value:function flushDebouncer(jobName){this._debouncers=this._debouncers||{};var debouncer=this._debouncers[jobName];if(debouncer){debouncer.flush()}}/**
       * Cancels an active debouncer.  The `callback` will not be called.
       *
       * @param {string} jobName The name of the debouncer started with `debounce`
       * @return {void}
       * @override
       */},{key:"cancelDebouncer",value:function cancelDebouncer(jobName){this._debouncers=this._debouncers||{};var debouncer=this._debouncers[jobName];if(debouncer){debouncer.cancel()}}/**
       * Runs a callback function asynchronously.
       *
       * By default (if no waitTime is specified), async callbacks are run at
       * microtask timing, which will occur before paint.
       *
       * @param {!Function} callback The callback function to run, bound to
       *     `this`.
       * @param {number=} waitTime Time to wait before calling the
       *   `callback`.  If unspecified or 0, the callback will be run at microtask
       *   timing (before paint).
       * @return {number} Handle that may be used to cancel the async job.
       * @override
       */},{key:"async",value:function async(callback,waitTime){return 0<waitTime?timeOut.run(callback.bind(this),waitTime):~microTask.run(callback.bind(this))}/**
       * Cancels an async operation started with `async`.
       *
       * @param {number} handle Handle returned from original `async` call to
       *   cancel.
       * @return {void}
       * @override
       */},{key:"cancelAsync",value:function cancelAsync(handle){0>handle?microTask.cancel(~handle):timeOut.cancel(handle)}// other
/**
     * Convenience method for creating an element and configuring it.
     *
     * @param {string} tag HTML element tag to create.
     * @param {Object=} props Object of properties to configure on the
     *    instance.
     * @return {!Element} Newly created and configured element.
     * @override
     */},{key:"create",value:function create(tag,props){var elt=document.createElement(tag);if(props){if(elt.setProperties){elt.setProperties(props)}else{for(var n in props){elt[n]=props[n]}}}return elt}/**
       * Polyfill for Element.prototype.matches, which is sometimes still
       * prefixed.
       *
       * @param {string} selector Selector to test.
       * @param {!Element=} node Element to test the selector against.
       * @return {boolean} Whether the element matches the selector.
       * @override
       */},{key:"elementMatches",value:function elementMatches(selector,node){return matchesSelector(node||this,selector)}/**
       * Toggles an HTML attribute on or off.
       *
       * @param {string} name HTML attribute name
       * @param {boolean=} bool Boolean to force the attribute on or off.
       *    When unspecified, the state of the attribute will be reversed.
       * @return {boolean} true if the attribute now exists
       * @override
       */},{key:"toggleAttribute",value:function toggleAttribute(name,bool){var node=/** @type {Element} */this;if(3===arguments.length){node=/** @type {Element} */arguments[2]}if(1==arguments.length){bool=!node.hasAttribute(name)}if(bool){wrap$1(node).setAttribute(name,"");return!0}else{wrap$1(node).removeAttribute(name);return!1}}/**
       * Toggles a CSS class on or off.
       *
       * @param {string} name CSS class name
       * @param {boolean=} bool Boolean to force the class on or off.
       *    When unspecified, the state of the class will be reversed.
       * @param {Element=} node Node to target.  Defaults to `this`.
       * @return {void}
       * @override
       */},{key:"toggleClass",value:function toggleClass(name,bool,node){node=/** @type {Element} */node||this;if(1==arguments.length){bool=!node.classList.contains(name)}if(bool){node.classList.add(name)}else{node.classList.remove(name)}}/**
       * Cross-platform helper for setting an element's CSS `transform` property.
       *
       * @param {string} transformText Transform setting.
       * @param {Element=} node Element to apply the transform to.
       * Defaults to `this`
       * @return {void}
       * @override
       */},{key:"transform",value:function transform(transformText,node){node=/** @type {Element} */node||this;node.style.webkitTransform=transformText;node.style.transform=transformText}/**
       * Cross-platform helper for setting an element's CSS `translate3d`
       * property.
       *
       * @param {number|string} x X offset.
       * @param {number|string} y Y offset.
       * @param {number|string} z Z offset.
       * @param {Element=} node Element to apply the transform to.
       * Defaults to `this`.
       * @return {void}
       * @override
       */},{key:"translate3d",value:function translate3d(x,y,z,node){node=/** @type {Element} */node||this;this.transform("translate3d("+x+","+y+","+z+")",node)}/**
       * Removes an item from an array, if it exists.
       *
       * If the array is specified by path, a change notification is
       * generated, so that observers, data bindings and computed
       * properties watching that path can update.
       *
       * If the array is passed directly, **no change
       * notification is generated**.
       *
       * @param {string | !Array<number|string>} arrayOrPath Path to array from
       *     which to remove the item
       *   (or the array itself).
       * @param {*} item Item to remove.
       * @return {Array} Array containing item removed.
       * @override
       */},{key:"arrayDelete",value:function arrayDelete(arrayOrPath,item){var index;if(Array.isArray(arrayOrPath)){index=arrayOrPath.indexOf(item);if(0<=index){return arrayOrPath.splice(index,1)}}else{var arr=_get(this,arrayOrPath);index=arr.indexOf(item);if(0<=index){return this.splice(arrayOrPath,index,1)}}return null}// logging
/**
     * Facades `console.log`/`warn`/`error` as override point.
     *
     * @param {string} level One of 'log', 'warn', 'error'
     * @param {Array} args Array of strings or objects to log
     * @return {void}
     * @override
     */},{key:"_logger",value:function _logger(level,args){var _console;// accept ['foo', 'bar'] and [['foo', 'bar']]
if(Array.isArray(args)&&1===args.length&&Array.isArray(args[0])){args=args[0]}switch(level){case"log":case"warn":case"error":(_console=console)[level].apply(_console,babelHelpers.toConsumableArray(args));}}/**
       * Facades `console.log` as an override point.
       *
       * @param {...*} args Array of strings or objects to log
       * @return {void}
       * @override
       */},{key:"_log",value:function _log(){for(var _len4=arguments.length,args=Array(_len4),_key4=0;_key4<_len4;_key4++){args[_key4]=arguments[_key4]}this._logger("log",args)}/**
       * Facades `console.warn` as an override point.
       *
       * @param {...*} args Array of strings or objects to log
       * @return {void}
       * @override
       */},{key:"_warn",value:function _warn(){for(var _len5=arguments.length,args=Array(_len5),_key5=0;_key5<_len5;_key5++){args[_key5]=arguments[_key5]}this._logger("warn",args)}/**
       * Facades `console.error` as an override point.
       *
       * @param {...*} args Array of strings or objects to log
       * @return {void}
       * @override
       */},{key:"_error",value:function _error(){for(var _len6=arguments.length,args=Array(_len6),_key6=0;_key6<_len6;_key6++){args[_key6]=arguments[_key6]}this._logger("error",args)}/**
       * Formats a message using the element type an a method name.
       *
       * @param {string} methodName Method name to associate with message
       * @param {...*} args Array of strings or objects to log
       * @return {Array} Array with formatting information for `console`
       *   logging.
       * @override
       */},{key:"_logf",value:function _logf(methodName){for(var _len7=arguments.length,args=Array(1<_len7?_len7-1:0),_key7=1;_key7<_len7;_key7++){args[_key7-1]=arguments[_key7]}return["[%s::%s]",this.is,methodName].concat(args)}},{key:"domHost",get:function get(){var root=wrap$1(this).getRootNode();return babelHelpers.instanceof(root,DocumentFragment)?/** @type {ShadowRoot} */root.host:root}}],[{key:"importMeta",get:function get(){return this.prototype.importMeta}}]);return LegacyElement}(legacyElementBase);/**
                                                                                     * Map of simple names to touch action names
                                                                                     * @dict
                                                                                     */LegacyElement.prototype.is="";return LegacyElement});_exports.LegacyElementMixin=LegacyElementMixin;var legacyElementMixin={LegacyElementMixin:LegacyElementMixin};_exports.$legacyElementMixin=legacyElementMixin;var lifecycleProps={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},excludeOnInfo={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},excludeOnBehaviors=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},excludeOnInfo);function copyProperties(source,target,excludeProps){for(var noAccessors=source._noAccessors,propertyNames=Object.getOwnPropertyNames(source),_i50=0,_p13;_i50<propertyNames.length;_i50++){_p13=propertyNames[_i50];if(_p13 in excludeProps){continue}if(noAccessors){target[_p13]=source[_p13]}else{var pd=Object.getOwnPropertyDescriptor(source,_p13);if(pd){// ensure property is configurable so that a later behavior can
// re-configure it.
pd.configurable=!0;Object.defineProperty(target,_p13,pd)}}}}/**
   * Applies a "legacy" behavior or array of behaviors to the provided class.
   *
   * Note: this method will automatically also apply the `LegacyElementMixin`
   * to ensure that any legacy behaviors can rely on legacy Polymer API on
   * the underlying element.
   *
   * @function
   * @template T
   * @param {!Object|!Array<!Object>} behaviors Behavior object or array of behaviors.
   * @param {function(new:T)} klass Element class.
   * @return {?} Returns a new Element class extended by the
   * passed in `behaviors` and also by `LegacyElementMixin`.
   * @suppress {invalidCasts, checkTypes}
   */function mixinBehaviors(behaviors,klass){return GenerateClassFromInfo({},LegacyElementMixin(klass),behaviors)}// NOTE:
// 1.x
// Behaviors were mixed in *in reverse order* and de-duped on the fly.
// The rule was that behavior properties were copied onto the element
// prototype if and only if the property did not already exist.
// Given: Polymer{ behaviors: [A, B, C, A, B]}, property copy order was:
// (1), B, (2), A, (3) C. This means prototype properties win over
// B properties win over A win over C. This mirrors what would happen
// with inheritance if element extended B extended A extended C.
//
// Again given, Polymer{ behaviors: [A, B, C, A, B]}, the resulting
// `behaviors` array was [C, A, B].
// Behavior lifecycle methods were called in behavior array order
// followed by the element, e.g. (1) C.created, (2) A.created,
// (3) B.created, (4) element.created. There was no support for
// super, and "super-behavior" methods were callable only by name).
//
// 2.x
// Behaviors are made into proper mixins which live in the
// element's prototype chain. Behaviors are placed in the element prototype
// eldest to youngest and de-duped youngest to oldest:
// So, first [A, B, C, A, B] becomes [C, A, B] then,
// the element prototype becomes (oldest) (1) PolymerElement, (2) class(C),
// (3) class(A), (4) class(B), (5) class(Polymer({...})).
// Result:
// This means element properties win over B properties win over A win
// over C. (same as 1.x)
// If lifecycle is called (super then me), order is
// (1) C.created, (2) A.created, (3) B.created, (4) element.created
// (again same as 1.x)
function applyBehaviors(proto,behaviors,lifecycle){for(var _i51=0;_i51<behaviors.length;_i51++){applyInfo(proto,behaviors[_i51],lifecycle,excludeOnBehaviors)}}function applyInfo(proto,info,lifecycle,excludeProps){copyProperties(info,proto,excludeProps);for(var _p14 in lifecycleProps){if(info[_p14]){lifecycle[_p14]=lifecycle[_p14]||[];lifecycle[_p14].push(info[_p14])}}}/**
   * @param {Array} behaviors List of behaviors to flatten.
   * @param {Array=} list Target list to flatten behaviors into.
   * @param {Array=} exclude List of behaviors to exclude from the list.
   * @return {!Array} Returns the list of flattened behaviors.
   */function flattenBehaviors(behaviors,list,exclude){list=list||[];for(var _i52=behaviors.length-1,b;0<=_i52;_i52--){b=behaviors[_i52];if(b){if(Array.isArray(b)){flattenBehaviors(b,list)}else{// dedup
if(0>list.indexOf(b)&&(!exclude||0>exclude.indexOf(b))){list.unshift(b)}}}else{console.warn("behavior is null, check for missing or 404 import")}}return list}/**
   * Copies property descriptors from source to target, overwriting all fields
   * of any previous descriptor for a property *except* for `value`, which is
   * merged in from the target if it does not exist on the source.
   *
   * @param {*} target Target properties object
   * @param {*} source Source properties object
   */function mergeProperties(target,source){for(var _p15 in source){var targetInfo=target[_p15],sourceInfo=source[_p15];if(!("value"in sourceInfo)&&targetInfo&&"value"in targetInfo){target[_p15]=Object.assign({value:targetInfo.value},sourceInfo)}else{target[_p15]=sourceInfo}}}/* Note about construction and extension of legacy classes.
    [Changed in Q4 2018 to optimize performance.]
  
    When calling `Polymer` or `mixinBehaviors`, the generated class below is
    made. The list of behaviors was previously made into one generated class per
    behavior, but this is no longer the case as behaviors are now called
    manually. Note, there may *still* be multiple generated classes in the
    element's prototype chain if extension is used with `mixinBehaviors`.
  
    The generated class is directly tied to the info object and behaviors
    used to create it. That list of behaviors is filtered so it's only the
    behaviors not active on the superclass. In order to call through to the
    entire list of lifecycle methods, it's important to call `super`.
  
    The element's `properties` and `observers` are controlled via the finalization
    mechanism provided by `PropertiesMixin`. `Properties` and `observers` are
    collected by manually traversing the prototype chain and merging.
  
    To limit changes, the `_registered` method is called via `_initializeProperties`
    and not `_finalizeClass`.
  
  */ /**
      * @param {!PolymerInit} info Polymer info object
      * @param {function(new:HTMLElement)} Base base class to extend with info object
      * @param {Object=} behaviors behaviors to copy into the element
      * @return {function(new:HTMLElement)} Generated class
      * @suppress {checkTypes}
      * @private
      */function GenerateClassFromInfo(info,Base,behaviors){// manages behavior and lifecycle processing (filled in after class definition)
var behaviorList,lifecycle={},PolymerGenerated=/*#__PURE__*/function(_Base){babelHelpers.inherits(PolymerGenerated,_Base);function PolymerGenerated(){babelHelpers.classCallCheck(this,PolymerGenerated);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PolymerGenerated).apply(this,arguments))}babelHelpers.createClass(PolymerGenerated,[{key:"created",/**
       * @return {void}
       */value:function created(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"created",this).call(this);var list=lifecycle.created;if(list){for(var _i53=0;_i53<list.length;_i53++){list[_i53].call(this)}}}/**
       * @return {void}
       */},{key:"_registered",value:function _registered(){/* NOTE: `beforeRegister` is called here for bc, but the behavior
        is different than in 1.x. In 1.0, the method was called *after*
        mixing prototypes together but *before* processing of meta-objects.
        However, dynamic effects can still be set here and can be done either
        in `beforeRegister` or `registered`. It is no longer possible to set
        `is` in `beforeRegister` as you could in 1.x.
      */ // only proceed if the generated class' prototype has not been registered.
var generatedProto=PolymerGenerated.prototype;if(!generatedProto.hasOwnProperty("__hasRegisterFinished")){generatedProto.__hasRegisterFinished=!0;// ensure superclass is registered first.
babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"_registered",this).call(this);// copy properties onto the generated class lazily if we're optimizing,
if(legacyOptimizations){copyPropertiesToProto(generatedProto)}// make sure legacy lifecycle is called on the *element*'s prototype
// and not the generated class prototype; if the element has been
// extended, these are *not* the same.
var _proto=Object.getPrototypeOf(this),list=lifecycle.beforeRegister;if(list){for(var _i54=0;_i54<list.length;_i54++){list[_i54].call(_proto)}}list=lifecycle.registered;if(list){for(var _i55=0;_i55<list.length;_i55++){list[_i55].call(_proto)}}}}/**
       * @return {void}
       */},{key:"_applyListeners",value:function _applyListeners(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"_applyListeners",this).call(this);var list=lifecycle.listeners;if(list){for(var _i56=0,listeners;_i56<list.length;_i56++){listeners=list[_i56];if(listeners){for(var l in listeners){this._addMethodEventListenerToNode(this,l,listeners[l])}}}}}// note: exception to "super then me" rule;
// do work before calling super so that super attributes
// only apply if not already set.
/**
     * @return {void}
     */},{key:"_ensureAttributes",value:function _ensureAttributes(){var list=lifecycle.hostAttributes;if(list){for(var _i57=list.length-1,hostAttributes;0<=_i57;_i57--){hostAttributes=list[_i57];for(var a in hostAttributes){this._ensureAttribute(a,hostAttributes[a])}}}babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"_ensureAttributes",this).call(this)}/**
       * @return {void}
       */},{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"ready",this).call(this);var list=lifecycle.ready;if(list){for(var _i58=0;_i58<list.length;_i58++){list[_i58].call(this)}}}/**
       * @return {void}
       */},{key:"attached",value:function attached(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"attached",this).call(this);var list=lifecycle.attached;if(list){for(var _i59=0;_i59<list.length;_i59++){list[_i59].call(this)}}}/**
       * @return {void}
       */},{key:"detached",value:function detached(){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"detached",this).call(this);var list=lifecycle.detached;if(list){for(var _i60=0;_i60<list.length;_i60++){list[_i60].call(this)}}}/**
       * Implements native Custom Elements `attributeChangedCallback` to
       * set an attribute value to a property via `_attributeToProperty`.
       *
       * @param {string} name Name of attribute that changed
       * @param {?string} old Old attribute value
       * @param {?string} value New attribute value
       * @return {void}
       */},{key:"attributeChanged",value:function attributeChanged(name,old,value){babelHelpers.get(babelHelpers.getPrototypeOf(PolymerGenerated.prototype),"attributeChanged",this).call(this);var list=lifecycle.attributeChanged;if(list){for(var _i61=0;_i61<list.length;_i61++){list[_i61].call(this,name,old,value)}}}}],[{key:"_finalizeClass",// explicitly not calling super._finalizeClass
/** @nocollapse */value:function _finalizeClass(){// if calling via a subclass that hasn't been generated, pass through to super
if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){// TODO(https://github.com/google/closure-compiler/issues/3240):
//     Change back to just super.methodCall()
Base._finalizeClass.call(this)}else{// interleave properties and observers per behavior and `info`
if(behaviorList){for(var _i62=0,b;_i62<behaviorList.length;_i62++){b=behaviorList[_i62];if(b.properties){this.createProperties(b.properties)}if(b.observers){this.createObservers(b.observers,b.properties)}}}if(info.properties){this.createProperties(info.properties)}if(info.observers){this.createObservers(info.observers,info.properties)}// make sure to prepare the element template
this._prepareTemplate()}}/** @nocollapse */},{key:"properties",get:function get(){var properties={};if(behaviorList){for(var _i63=0;_i63<behaviorList.length;_i63++){mergeProperties(properties,behaviorList[_i63].properties)}}mergeProperties(properties,info.properties);return properties}/** @nocollapse */},{key:"observers",get:function get(){var observers=[];if(behaviorList){for(var _i64=0,b;_i64<behaviorList.length;_i64++){b=behaviorList[_i64];if(b.observers){observers=observers.concat(b.observers)}}}if(info.observers){observers=observers.concat(info.observers)}return observers}}]);return PolymerGenerated}(Base);// apply behaviors, note actual copying is done lazily at first instance creation
if(behaviors){// NOTE: ensure the behavior is extending a class with
// legacy element api. This is necessary since behaviors expect to be able
// to access 1.x legacy api.
if(!Array.isArray(behaviors)){behaviors=[behaviors]}var superBehaviors=Base.prototype.behaviors;// get flattened, deduped list of behaviors *not* already on super class
behaviorList=flattenBehaviors(behaviors,null,superBehaviors);PolymerGenerated.prototype.behaviors=superBehaviors?superBehaviors.concat(behaviors):behaviorList}var copyPropertiesToProto=function copyPropertiesToProto(proto){if(behaviorList){applyBehaviors(proto,behaviorList,lifecycle)}applyInfo(proto,info,lifecycle,excludeOnInfo)};// copy properties if we're not optimizing
if(!legacyOptimizations){copyPropertiesToProto(PolymerGenerated.prototype)}PolymerGenerated.generatedFrom=info;return PolymerGenerated}/**
   * Generates a class that extends `LegacyElement` based on the
   * provided info object.  Metadata objects on the `info` object
   * (`properties`, `observers`, `listeners`, `behaviors`, `is`) are used
   * for Polymer's meta-programming systems, and any functions are copied
   * to the generated class.
   *
   * Valid "metadata" values are as follows:
   *
   * `is`: String providing the tag name to register the element under. In
   * addition, if a `dom-module` with the same id exists, the first template
   * in that `dom-module` will be stamped into the shadow root of this element,
   * with support for declarative event listeners (`on-...`), Polymer data
   * bindings (`[[...]]` and `{{...}}`), and id-based node finding into
   * `this.$`.
   *
   * `properties`: Object describing property-related metadata used by Polymer
   * features (key: property names, value: object containing property metadata).
   * Valid keys in per-property metadata include:
   * - `type` (String|Number|Object|Array|...): Used by
   *   `attributeChangedCallback` to determine how string-based attributes
   *   are deserialized to JavaScript property values.
   * - `notify` (boolean): Causes a change in the property to fire a
   *   non-bubbling event called `<property>-changed`. Elements that have
   *   enabled two-way binding to the property use this event to observe changes.
   * - `readOnly` (boolean): Creates a getter for the property, but no setter.
   *   To set a read-only property, use the private setter method
   *   `_setProperty(property, value)`.
   * - `observer` (string): Observer method name that will be called when
   *   the property changes. The arguments of the method are
   *   `(value, previousValue)`.
   * - `computed` (string): String describing method and dependent properties
   *   for computing the value of this property (e.g. `'computeFoo(bar, zot)'`).
   *   Computed properties are read-only by default and can only be changed
   *   via the return value of the computing method.
   *
   * `observers`: Array of strings describing multi-property observer methods
   *  and their dependent properties (e.g. `'observeABC(a, b, c)'`).
   *
   * `listeners`: Object describing event listeners to be added to each
   *  instance of this element (key: event name, value: method name).
   *
   * `behaviors`: Array of additional `info` objects containing metadata
   * and callbacks in the same format as the `info` object here which are
   * merged into this element.
   *
   * `hostAttributes`: Object listing attributes to be applied to the host
   *  once created (key: attribute name, value: attribute value).  Values
   *  are serialized based on the type of the value.  Host attributes should
   *  generally be limited to attributes such as `tabIndex` and `aria-...`.
   *  Attributes in `hostAttributes` are only applied if a user-supplied
   *  attribute is not already present (attributes in markup override
   *  `hostAttributes`).
   *
   * In addition, the following Polymer-specific callbacks may be provided:
   * - `registered`: called after first instance of this element,
   * - `created`: called during `constructor`
   * - `attached`: called during `connectedCallback`
   * - `detached`: called during `disconnectedCallback`
   * - `ready`: called before first `attached`, after all properties of
   *   this element have been propagated to its template and all observers
   *   have run
   *
   * @param {!PolymerInit} info Object containing Polymer metadata and functions
   *   to become class methods.
   * @template T
   * @param {function(T):T} mixin Optional mixin to apply to legacy base class
   *   before extending with Polymer metaprogramming.
   * @return {function(new:HTMLElement)} Generated class
   */var Class=function Class(info,mixin){if(!info){console.warn("Polymer.Class requires `info` argument")}var klass=mixin?mixin(LegacyElementMixin(HTMLElement)):LegacyElementMixin(HTMLElement);klass=GenerateClassFromInfo(info,klass,info.behaviors);// decorate klass with registration info
klass.is=klass.prototype.is=info.is;return klass};_exports.Class=Class;var _class={mixinBehaviors:mixinBehaviors,Class:Class};_exports.$class=_class;var Polymer=function Polymer(info){// if input is a `class` (aka a function with a prototype), use the prototype
// remember that the `constructor` will never be called
var klass;if("function"===typeof info){klass=info}else{klass=Polymer.Class(info)}customElements.define(klass.is,/** @type {!HTMLElement} */klass);return klass};_exports.Polymer$1=_exports.Polymer=Polymer;Polymer.Class=Class;var polymerFn={Polymer:Polymer};_exports.$polymerFn=polymerFn;function mutablePropertyChange(inst,property,value,old,mutableData){var isObject;if(mutableData){isObject="object"===babelHelpers.typeof(value)&&null!==value;// Pull `old` for Objects from temp cache, but treat `null` as a primitive
if(isObject){old=inst.__dataTemp[property]}}// Strict equality check, but return false for NaN===NaN
var shouldChange=old!==value&&(old===old||value===value);// Objects are stored in temporary cache (cleared at end of
// turn), which is used for dirty-checking
if(isObject&&shouldChange){inst.__dataTemp[property]=value}return shouldChange}/**
   * Element class mixin to skip strict dirty-checking for objects and arrays
   * (always consider them to be "dirty"), for use on elements utilizing
   * `PropertyEffects`
   *
   * By default, `PropertyEffects` performs strict dirty checking on
   * objects, which means that any deep modifications to an object or array will
   * not be propagated unless "immutable" data patterns are used (i.e. all object
   * references from the root to the mutation were changed).
   *
   * Polymer also provides a proprietary data mutation and path notification API
   * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
   * mutation and notification of deep changes in an object graph to all elements
   * bound to the same object graph.
   *
   * In cases where neither immutable patterns nor the data mutation API can be
   * used, applying this mixin will cause Polymer to skip dirty checking for
   * objects and arrays (always consider them to be "dirty").  This allows a
   * user to make a deep modification to a bound object graph, and then either
   * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
   * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
   * elements that wish to be updated based on deep mutations must apply this
   * mixin or otherwise skip strict dirty checking for objects/arrays.
   * Specifically, any elements in the binding tree between the source of a
   * mutation and the consumption of it must apply this mixin or enable the
   * `OptionalMutableData` mixin.
   *
   * In order to make the dirty check strategy configurable, see
   * `OptionalMutableData`.
   *
   * Note, the performance characteristics of propagating large object graphs
   * will be worse as opposed to using strict dirty checking with immutable
   * patterns or Polymer's path notification API.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin to skip strict dirty-checking for objects
   *   and arrays
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */var MutableData=dedupingMixin(function(superClass){/**
   * @polymer
   * @mixinClass
   * @implements {Polymer_MutableData}
   */var MutableData=/*#__PURE__*/function(_superClass4){babelHelpers.inherits(MutableData,_superClass4);function MutableData(){babelHelpers.classCallCheck(this,MutableData);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(MutableData).apply(this,arguments))}babelHelpers.createClass(MutableData,[{key:"_shouldPropertyChange",/**
     * Overrides `PropertyEffects` to provide option for skipping
     * strict equality checking for Objects and Arrays.
     *
     * This method pulls the value to dirty check against from the `__dataTemp`
     * cache (rather than the normal `__data` cache) for Objects.  Since the temp
     * cache is cleared at the end of a turn, this implementation allows
     * side-effects of deep object changes to be processed by re-setting the
     * same object (using the temp cache as an in-turn backstop to prevent
     * cycles due to 2-way notification).
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     * @protected
     */value:function _shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,!0)}}]);return MutableData}(superClass);return MutableData});/**
     * Element class mixin to add the optional ability to skip strict
     * dirty-checking for objects and arrays (always consider them to be
     * "dirty") by setting a `mutable-data` attribute on an element instance.
     *
     * By default, `PropertyEffects` performs strict dirty checking on
     * objects, which means that any deep modifications to an object or array will
     * not be propagated unless "immutable" data patterns are used (i.e. all object
     * references from the root to the mutation were changed).
     *
     * Polymer also provides a proprietary data mutation and path notification API
     * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
     * mutation and notification of deep changes in an object graph to all elements
     * bound to the same object graph.
     *
     * In cases where neither immutable patterns nor the data mutation API can be
     * used, applying this mixin will allow Polymer to skip dirty checking for
     * objects and arrays (always consider them to be "dirty").  This allows a
     * user to make a deep modification to a bound object graph, and then either
     * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
     * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
     * elements that wish to be updated based on deep mutations must apply this
     * mixin or otherwise skip strict dirty checking for objects/arrays.
     * Specifically, any elements in the binding tree between the source of a
     * mutation and the consumption of it must enable this mixin or apply the
     * `MutableData` mixin.
     *
     * While this mixin adds the ability to forgo Object/Array dirty checking,
     * the `mutableData` flag defaults to false and must be set on the instance.
     *
     * Note, the performance characteristics of propagating large object graphs
     * will be worse by relying on `mutableData: true` as opposed to using
     * strict dirty checking with immutable patterns or Polymer's path notification
     * API.
     *
     * @mixinFunction
     * @polymer
     * @summary Element class mixin to optionally skip strict dirty-checking
     *   for objects and arrays
     */_exports.MutableData=MutableData;var OptionalMutableData=dedupingMixin(function(superClass){/**
   * @mixinClass
   * @polymer
   * @implements {Polymer_OptionalMutableData}
   */var OptionalMutableData=/*#__PURE__*/function(_superClass5){babelHelpers.inherits(OptionalMutableData,_superClass5);function OptionalMutableData(){babelHelpers.classCallCheck(this,OptionalMutableData);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(OptionalMutableData).apply(this,arguments))}babelHelpers.createClass(OptionalMutableData,[{key:"_shouldPropertyChange",/**
       * Overrides `PropertyEffects` to provide option for skipping
       * strict equality checking for Objects and Arrays.
       *
       * When `this.mutableData` is true on this instance, this method
       * pulls the value to dirty check against from the `__dataTemp` cache
       * (rather than the normal `__data` cache) for Objects.  Since the temp
       * cache is cleared at the end of a turn, this implementation allows
       * side-effects of deep object changes to be processed by re-setting the
       * same object (using the temp cache as an in-turn backstop to prevent
       * cycles due to 2-way notification).
       *
       * @param {string} property Property name
       * @param {*} value New property value
       * @param {*} old Previous property value
       * @return {boolean} Whether the property should be considered a change
       * @protected
       */value:function _shouldPropertyChange(property,value,old){return mutablePropertyChange(this,property,value,old,this.mutableData)}}],[{key:"properties",/** @nocollapse */get:function get(){return{/**
         * Instance-level flag for configuring the dirty-checking strategy
         * for this element.  When true, Objects and Arrays will skip dirty
         * checking, otherwise strict equality checking will be used.
         */mutableData:Boolean}}}]);return OptionalMutableData}(superClass);return OptionalMutableData});// Export for use by legacy behavior
_exports.OptionalMutableData=OptionalMutableData;MutableData._mutablePropertyChange=mutablePropertyChange;var mutableData={MutableData:MutableData,OptionalMutableData:OptionalMutableData};// machinery for propagating host properties to children. This is an ES5
// class only because Babel (incorrectly) requires super() in the class
// constructor even though no `this` is used and it returns an instance.
_exports.$mutableData=mutableData;var newInstance=null;/**
                         * @constructor
                         * @extends {HTMLTemplateElement}
                         * @private
                         */function HTMLTemplateElementExtension(){return newInstance}HTMLTemplateElementExtension.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:HTMLTemplateElementExtension,writable:!0}});/**
     * @constructor
     * @implements {Polymer_PropertyEffects}
     * @extends {HTMLTemplateElementExtension}
     * @private
     */var DataTemplate=PropertyEffects(HTMLTemplateElementExtension),MutableDataTemplate=MutableData(DataTemplate);/**
                                                                     * @constructor
                                                                     * @implements {Polymer_MutableData}
                                                                     * @extends {DataTemplate}
                                                                     * @private
                                                                     */ // Applies a DataTemplate subclass to a <template> instance
function upgradeTemplate(template,constructor){newInstance=template;Object.setPrototypeOf(template,constructor.prototype);new constructor;newInstance=null}/**
   * Base class for TemplateInstance.
   * @constructor
   * @extends {HTMLElement}
   * @implements {Polymer_PropertyEffects}
   * @private
   */var templateInstanceBase=PropertyEffects(/*#__PURE__*/ // This cast shouldn't be neccessary, but Closure doesn't understand that
// "class {}" is a constructor function.
/** @type {function(new:Object)} */function(){function _class2(){babelHelpers.classCallCheck(this,_class2)}return _class2}()),TemplateInstanceBase=/*#__PURE__*/function(_templateInstanceBase){babelHelpers.inherits(TemplateInstanceBase,_templateInstanceBase);function TemplateInstanceBase(props){var _this18;babelHelpers.classCallCheck(this,TemplateInstanceBase);_this18=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TemplateInstanceBase).call(this));_this18._configureProperties(props);/** @type {!StampedTemplate} */_this18.root=_this18._stampTemplate(_this18.__dataHost);// Save list of stamped children
var children=[];/** @suppress {invalidCasts} */_this18.children=/** @type {!NodeList} */children;// Polymer 1.x did not use `Polymer.dom` here so not bothering.
for(var n=_this18.root.firstChild;n;n=n.nextSibling){children.push(n);n.__templatizeInstance=babelHelpers.assertThisInitialized(_this18)}if(_this18.__templatizeOwner&&_this18.__templatizeOwner.__hideTemplateChildren__){_this18._showHideChildren(!0)}// Flush props only when props are passed if instance props exist
// or when there isn't instance props.
var options=_this18.__templatizeOptions;if(props&&options.instanceProps||!options.instanceProps){_this18._enableProperties()}return _this18}/**
     * Configure the given `props` by calling `_setPendingProperty`. Also
     * sets any properties stored in `__hostProps`.
     * @private
     * @param {Object} props Object of property name-value pairs to set.
     * @return {void}
     */babelHelpers.createClass(TemplateInstanceBase,[{key:"_configureProperties",value:function _configureProperties(props){var options=this.__templatizeOptions;if(options.forwardHostProp){for(var hprop in this.__hostProps){this._setPendingProperty(hprop,this.__dataHost["_host_"+hprop])}}// Any instance props passed in the constructor will overwrite host props;
// normally this would be a user error but we don't specifically filter them
for(var iprop in props){this._setPendingProperty(iprop,props[iprop])}}/**
     * Forwards a host property to this instance.  This method should be
     * called on instances from the `options.forwardHostProp` callback
     * to propagate changes of host properties to each instance.
     *
     * Note this method enqueues the change, which are flushed as a batch.
     *
     * @param {string} prop Property or path name
     * @param {*} value Value of the property to forward
     * @return {void}
     */},{key:"forwardHostProp",value:function forwardHostProp(prop,value){if(this._setPendingPropertyOrPath(prop,value,!1,!0)){this.__dataHost._enqueueClient(this)}}/**
     * Override point for adding custom or simulated event handling.
     *
     * @override
     * @param {!Node} node Node to add event listener to
     * @param {string} eventName Name of event
     * @param {function(!Event):void} handler Listener function to add
     * @return {void}
     */},{key:"_addEventListenerToNode",value:function _addEventListenerToNode(node,eventName,handler){var _this19=this;if(this._methodHost&&this.__templatizeOptions.parentModel){// If this instance should be considered a parent model, decorate
// events this template instance as `model`
this._methodHost._addEventListenerToNode(node,eventName,function(e){e.model=_this19;handler(e)})}else{// Otherwise delegate to the template's host (which could be)
// another template instance
var templateHost=this.__dataHost.__dataHost;if(templateHost){templateHost._addEventListenerToNode(node,eventName,handler)}}}/**
     * Shows or hides the template instance top level child elements. For
     * text nodes, `textContent` is removed while "hidden" and replaced when
     * "shown."
     * @param {boolean} hide Set to true to hide the children;
     * set to false to show them.
     * @return {void}
     * @protected
     */},{key:"_showHideChildren",value:function _showHideChildren(hide){for(var c=this.children,_i65=0,n;_i65<c.length;_i65++){n=c[_i65];// Ignore non-changes
if(!!hide!=!!n.__hideTemplateChildren__){if(n.nodeType===Node.TEXT_NODE){if(hide){n.__polymerTextContent__=n.textContent;n.textContent=""}else{n.textContent=n.__polymerTextContent__}// remove and replace slot
}else if("slot"===n.localName){if(hide){n.__polymerReplaced__=document.createComment("hidden-slot");wrap$1(wrap$1(n).parentNode).replaceChild(n.__polymerReplaced__,n)}else{var replace=n.__polymerReplaced__;if(replace){wrap$1(wrap$1(replace).parentNode).replaceChild(n,replace)}}}else if(n.style){if(hide){n.__polymerDisplay__=n.style.display;n.style.display="none"}else{n.style.display=n.__polymerDisplay__}}}n.__hideTemplateChildren__=hide;if(n._showHideChildren){n._showHideChildren(hide)}}}/**
     * Overrides default property-effects implementation to intercept
     * textContent bindings while children are "hidden" and cache in
     * private storage for later retrieval.
     *
     * @override
     * @param {!Node} node The node to set a property on
     * @param {string} prop The property to set
     * @param {*} value The value to set
     * @return {void}
     * @protected
     */},{key:"_setUnmanagedPropertyToNode",value:function _setUnmanagedPropertyToNode(node,prop,value){if(node.__hideTemplateChildren__&&node.nodeType==Node.TEXT_NODE&&"textContent"==prop){node.__polymerTextContent__=value}else{babelHelpers.get(babelHelpers.getPrototypeOf(TemplateInstanceBase.prototype),"_setUnmanagedPropertyToNode",this).call(this,node,prop,value)}}/**
     * Find the parent model of this template instance.  The parent model
     * is either another templatize instance that had option `parentModel: true`,
     * or else the host element.
     *
     * @return {!Polymer_PropertyEffects} The parent model of this instance
     */},{key:"dispatchEvent",/**
     * Stub of HTMLElement's `dispatchEvent`, so that effects that may
     * dispatch events safely no-op.
     *
     * @param {Event} event Event to dispatch
     * @return {boolean} Always true.
     * @override
     */value:function dispatchEvent(event){// eslint-disable-line no-unused-vars
return!0}},{key:"parentModel",get:function get(){var model=this.__parentModel;if(!model){var options;model=this;do{// A template instance's `__dataHost` is a <template>
// `model.__dataHost.__dataHost` is the template's host
model=model.__dataHost.__dataHost}while((options=model.__templatizeOptions)&&!options.parentModel);this.__parentModel=model}return model}}]);return TemplateInstanceBase}(templateInstanceBase);/**
                                               * @polymer
                                               * @customElement
                                               * @appliesMixin PropertyEffects
                                               * @unrestricted
                                               */_exports.TemplateInstanceBase=TemplateInstanceBase;/** @type {!DataTemplate} */TemplateInstanceBase.prototype.__dataHost;/** @type {!TemplatizeOptions} */TemplateInstanceBase.prototype.__templatizeOptions;/** @type {!Polymer_PropertyEffects} */TemplateInstanceBase.prototype._methodHost;/** @type {!Object} */TemplateInstanceBase.prototype.__templatizeOwner;/** @type {!Object} */TemplateInstanceBase.prototype.__hostProps;/**
                                             * @constructor
                                             * @extends {TemplateInstanceBase}
                                             * @implements {Polymer_MutableData}
                                             * @private
                                             */var MutableTemplateInstanceBase=MutableData(// This cast shouldn't be necessary, but Closure doesn't seem to understand
// this constructor.
/** @type {function(new:TemplateInstanceBase)} */TemplateInstanceBase);function findMethodHost(template){// Technically this should be the owner of the outermost template.
// In shadow dom, this is always getRootNode().host, but we can
// approximate this via cooperation with our dataHost always setting
// `_methodHost` as long as there were bindings (or id's) on this
// instance causing it to get a dataHost.
var templateHost=template.__dataHost;return templateHost&&templateHost._methodHost||templateHost}/* eslint-disable valid-jsdoc */ /**
                                    * @suppress {missingProperties} class.prototype is not defined for some reason
                                    */function createTemplatizerClass(template,templateInfo,options){/**
   * @constructor
   * @extends {TemplateInstanceBase}
   */var templatizerBase=options.mutableData?MutableTemplateInstanceBase:TemplateInstanceBase;// Affordance for global mixins onto TemplatizeInstance
if(_templatize.mixin){templatizerBase=_templatize.mixin(templatizerBase)}/**
     * Anonymous class created by the templatize
     * @constructor
     * @private
     */var klass=/*#__PURE__*/function(_templatizerBase){babelHelpers.inherits(klass,_templatizerBase);function klass(){babelHelpers.classCallCheck(this,klass);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(klass).apply(this,arguments))}return klass}(templatizerBase);/** @override */klass.prototype.__templatizeOptions=options;klass.prototype._bindTemplate(template);addNotifyEffects(klass,template,templateInfo,options);return klass}/**
   * Adds propagate effects from the template to the template instance for
   * properties that the host binds to the template using the `_host_` prefix.
   * 
   * @suppress {missingProperties} class.prototype is not defined for some reason
   */function addPropagateEffects(template,templateInfo,options){var userForwardHostProp=options.forwardHostProp;if(userForwardHostProp&&templateInfo.hasHostProps){// Provide data API and property effects on memoized template class
var klass=templateInfo.templatizeTemplateClass;if(!klass){/**
       * @constructor
       * @extends {DataTemplate}
       */var templatizedBase=options.mutableData?MutableDataTemplate:DataTemplate;/** @private */klass=templateInfo.templatizeTemplateClass=/*#__PURE__*/function(_templatizedBase){babelHelpers.inherits(TemplatizedTemplate,_templatizedBase);function TemplatizedTemplate(){babelHelpers.classCallCheck(this,TemplatizedTemplate);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TemplatizedTemplate).apply(this,arguments))}return TemplatizedTemplate}(templatizedBase);// Add template - >instances effects
// and host <- template effects
var hostProps=templateInfo.hostProps;for(var prop in hostProps){klass.prototype._addPropertyEffect("_host_"+prop,klass.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:createForwardHostPropEffect(prop,userForwardHostProp)});klass.prototype._createNotifyingProperty("_host_"+prop)}}upgradeTemplate(template,klass);// Mix any pre-bound data into __data; no need to flush this to
// instances since they pull from the template at instance-time
if(template.__dataProto){// Note, generally `__dataProto` could be chained, but it's guaranteed
// to not be since this is a vanilla template we just added effects to
Object.assign(template.__data,template.__dataProto)}// Clear any pending data for performance
template.__dataTemp={};template.__dataPending=null;template.__dataOld=null;template._enableProperties()}}/* eslint-enable valid-jsdoc */function createForwardHostPropEffect(hostProp,userForwardHostProp){return function forwardHostProp(template,prop,props){userForwardHostProp.call(template.__templatizeOwner,prop.substring("_host_".length),props[prop])}}function addNotifyEffects(klass,template,templateInfo,options){var hostProps=templateInfo.hostProps||{};for(var iprop in options.instanceProps){delete hostProps[iprop];var userNotifyInstanceProp=options.notifyInstanceProp;if(userNotifyInstanceProp){klass.prototype._addPropertyEffect(iprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyInstancePropEffect(iprop,userNotifyInstanceProp)})}}if(options.forwardHostProp&&template.__dataHost){for(var hprop in hostProps){// As we're iterating hostProps in this function, note whether
// there were any, for an optimization in addPropagateEffects
if(!templateInfo.hasHostProps){templateInfo.hasHostProps=!0}klass.prototype._addPropertyEffect(hprop,klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:createNotifyHostPropEffect()})}}}function createNotifyInstancePropEffect(instProp,userNotifyInstanceProp){return function notifyInstanceProp(inst,prop,props){userNotifyInstanceProp.call(inst.__templatizeOwner,inst,prop,props[prop])}}function createNotifyHostPropEffect(){return function notifyHostProp(inst,prop,props){inst.__dataHost._setPendingPropertyOrPath("_host_"+prop,props[prop],!0,!0)}}/**
   * Returns an anonymous `PropertyEffects` class bound to the
   * `<template>` provided.  Instancing the class will result in the
   * template being stamped into a document fragment stored as the instance's
   * `root` property, after which it can be appended to the DOM.
   *
   * Templates may utilize all Polymer data-binding features as well as
   * declarative event listeners.  Event listeners and inline computing
   * functions in the template will be called on the host of the template.
   *
   * The constructor returned takes a single argument dictionary of initial
   * property values to propagate into template bindings.  Additionally
   * host properties can be forwarded in, and instance properties can be
   * notified out by providing optional callbacks in the `options` dictionary.
   *
   * Valid configuration in `options` are as follows:
   *
   * - `forwardHostProp(property, value)`: Called when a property referenced
   *   in the template changed on the template's host. As this library does
   *   not retain references to templates instanced by the user, it is the
   *   templatize owner's responsibility to forward host property changes into
   *   user-stamped instances.  The `instance.forwardHostProp(property, value)`
   *    method on the generated class should be called to forward host
   *   properties into the template to prevent unnecessary property-changed
   *   notifications. Any properties referenced in the template that are not
   *   defined in `instanceProps` will be notified up to the template's host
   *   automatically.
   * - `instanceProps`: Dictionary of property names that will be added
   *   to the instance by the templatize owner.  These properties shadow any
   *   host properties, and changes within the template to these properties
   *   will result in `notifyInstanceProp` being called.
   * - `mutableData`: When `true`, the generated class will skip strict
   *   dirty-checking for objects and arrays (always consider them to be
   *   "dirty").
   * - `notifyInstanceProp(instance, property, value)`: Called when
   *   an instance property changes.  Users may choose to call `notifyPath`
   *   on e.g. the owner to notify the change.
   * - `parentModel`: When `true`, events handled by declarative event listeners
   *   (`on-event="handler"`) will be decorated with a `model` property pointing
   *   to the template instance that stamped it.  It will also be returned
   *   from `instance.parentModel` in cases where template instance nesting
   *   causes an inner model to shadow an outer model.
   *
   * All callbacks are called bound to the `owner`. Any context
   * needed for the callbacks (such as references to `instances` stamped)
   * should be stored on the `owner` such that they can be retrieved via
   * `this`.
   *
   * When `options.forwardHostProp` is declared as an option, any properties
   * referenced in the template will be automatically forwarded from the host of
   * the `<template>` to instances, with the exception of any properties listed in
   * the `options.instanceProps` object.  `instanceProps` are assumed to be
   * managed by the owner of the instances, either passed into the constructor
   * or set after the fact.  Note, any properties passed into the constructor will
   * always be set to the instance (regardless of whether they would normally
   * be forwarded from the host).
   *
   * Note that `templatize()` can be run only once for a given `<template>`.
   * Further calls will result in an error. Also, there is a special
   * behavior if the template was duplicated through a mechanism such as
   * `<dom-repeat>` or `<test-fixture>`. In this case, all calls to
   * `templatize()` return the same class for all duplicates of a template.
   * The class returned from `templatize()` is generated only once using
   * the `options` from the first call. This means that any `options`
   * provided to subsequent calls will be ignored. Therefore, it is very
   * important not to close over any variables inside the callbacks. Also,
   * arrow functions must be avoided because they bind the outer `this`.
   * Inside the callbacks, any contextual information can be accessed
   * through `this`, which points to the `owner`.
   *
   * @param {!HTMLTemplateElement} template Template to templatize
   * @param {Polymer_PropertyEffects=} owner Owner of the template instances;
   *   any optional callbacks will be bound to this owner.
   * @param {Object=} options Options dictionary (see summary for details)
   * @return {function(new:TemplateInstanceBase, Object=)} Generated class bound
   *   to the template provided
   * @suppress {invalidCasts}
   */function _templatize(template,owner,options){// Under strictTemplatePolicy, the templatized element must be owned
// by a (trusted) Polymer element, indicated by existence of _methodHost;
// e.g. for dom-if & dom-repeat in main document, _methodHost is null
if(strictTemplatePolicy&&!findMethodHost(template)){throw new Error("strictTemplatePolicy: template owner not trusted")}options=/** @type {!TemplatizeOptions} */options||{};if(template.__templatizeOwner){throw new Error("A <template> can only be templatized once")}template.__templatizeOwner=owner;var ctor=owner?owner.constructor:TemplateInstanceBase,templateInfo=ctor._parseTemplate(template),baseClass=templateInfo.templatizeInstanceClass;if(!baseClass){baseClass=createTemplatizerClass(template,templateInfo,options);templateInfo.templatizeInstanceClass=baseClass}// Host property forwarding must be installed onto template instance
addPropagateEffects(template,templateInfo,options);// Subclass base class and add reference for this specific template
/** @private */var klass=/*#__PURE__*/function(_baseClass){babelHelpers.inherits(TemplateInstance,_baseClass);function TemplateInstance(){babelHelpers.classCallCheck(this,TemplateInstance);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TemplateInstance).apply(this,arguments))}return TemplateInstance}(baseClass);/** @override */klass.prototype._methodHost=findMethodHost(template);/** @override */klass.prototype.__dataHost=/** @type {!DataTemplate} */template;/** @override */klass.prototype.__templatizeOwner=/** @type {!Object} */owner;/** @override */klass.prototype.__hostProps=templateInfo.hostProps;klass=/** @type {function(new:TemplateInstanceBase)} */klass;//eslint-disable-line no-self-assign
return klass}/**
   * Returns the template "model" associated with a given element, which
   * serves as the binding scope for the template instance the element is
   * contained in. A template model is an instance of
   * `TemplateInstanceBase`, and should be used to manipulate data
   * associated with this template instance.
   *
   * Example:
   *
   *   let model = modelForElement(el);
   *   if (model.index < 10) {
   *     model.set('item.checked', true);
   *   }
   *
   * @param {HTMLTemplateElement} template The model will be returned for
   *   elements stamped from this template
   * @param {Node=} node Node for which to return a template model.
   * @return {TemplateInstanceBase} Template instance representing the
   *   binding scope for the element
   */function _modelForElement(template,node){var model;while(node){// An element with a __templatizeInstance marks the top boundary
// of a scope; walk up until we find one, and then ensure that
// its __dataHost matches `this`, meaning this dom-repeat stamped it
if(model=node.__templatizeInstance){// Found an element stamped by another template; keep walking up
// from its __dataHost
if(model.__dataHost!=template){node=model.__dataHost}else{return model}}else{// Still in a template scope, keep going up until
// a __templatizeInstance is found
node=wrap$1(node).parentNode}}return null}var templatize$1={templatize:_templatize,modelForElement:_modelForElement,TemplateInstanceBase:TemplateInstanceBase};/**
    * @typedef {{
    *   _templatizerTemplate: HTMLTemplateElement,
    *   _parentModel: boolean,
    *   _instanceProps: Object,
    *   _forwardHostPropV2: Function,
    *   _notifyInstancePropV2: Function,
    *   ctor: function(new:TemplateInstanceBase, Object=)
    * }}
    */_exports.$templatize=templatize$1;var TemplatizerUser,Templatizer={/**
   * Generates an anonymous `TemplateInstance` class (stored as `this.ctor`)
   * for the provided template.  This method should be called once per
   * template to prepare an element for stamping the template, followed
   * by `stamp` to create new instances of the template.
   *
   * @param {!HTMLTemplateElement} template Template to prepare
   * @param {boolean=} mutableData When `true`, the generated class will skip
   *   strict dirty-checking for objects and arrays (always consider them to
   *   be "dirty"). Defaults to false.
   * @return {void}
   * @this {TemplatizerUser}
   */templatize:function templatize(template,mutableData){this._templatizerTemplate=template;this.ctor=_templatize(template,/** @type {!Polymer_PropertyEffects} */this,{mutableData:!!mutableData,parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},/**
   * Creates an instance of the template prepared by `templatize`.  The object
   * returned is an instance of the anonymous class generated by `templatize`
   * whose `root` property is a document fragment containing newly cloned
   * template content, and which has property accessors corresponding to
   * properties referenced in template bindings.
   *
   * @param {Object=} model Object containing initial property values to
   *   populate into the template bindings.
   * @return {TemplateInstanceBase} Returns the created instance of
   * the template prepared by `templatize`.
   * @this {TemplatizerUser}
   */stamp:function stamp(model){return new this.ctor(model)},/**
   * Returns the template "model" (`TemplateInstance`) associated with
   * a given element, which serves as the binding scope for the template
   * instance the element is contained in.  A template model should be used
   * to manipulate data associated with this template instance.
   *
   * @param {HTMLElement} el Element for which to return a template model.
   * @return {TemplateInstanceBase} Model representing the binding scope for
   *   the element.
   * @this {TemplatizerUser}
   */modelForElement:function modelForElement(el){return _modelForElement(this._templatizerTemplate,el)}};// eslint-disable-line
/**
 * The `Templatizer` behavior adds methods to generate instances of
 * templates that are each managed by an anonymous `PropertyEffects`
 * instance where data-bindings in the stamped template content are bound to
 * accessors on itself.
 *
 * This behavior is provided in Polymer 2.x-3.x as a hybrid-element convenience
 * only.  For non-hybrid usage, the `Templatize` library
 * should be used instead.
 *
 * Example:
 *
 *     import {dom} from '@polymer/polymer/lib/legacy/polymer.dom.js';
 *     // Get a template from somewhere, e.g. light DOM
 *     let template = this.querySelector('template');
 *     // Prepare the template
 *     this.templatize(template);
 *     // Instance the template with an initial data model
 *     let instance = this.stamp({myProp: 'initial'});
 *     // Insert the instance's DOM somewhere, e.g. light DOM
 *     dom(this).appendChild(instance.root);
 *     // Changing a property on the instance will propagate to bindings
 *     // in the template
 *     instance.myProp = 'new value';
 *
 * Users of `Templatizer` may need to implement the following abstract
 * API's to determine how properties and paths from the host should be
 * forwarded into to instances:
 *
 *     _forwardHostPropV2: function(prop, value)
 *
 * Likewise, users may implement these additional abstract API's to determine
 * how instance-specific properties that change on the instance should be
 * forwarded out to the host, if necessary.
 *
 *     _notifyInstancePropV2: function(inst, prop, value)
 *
 * In order to determine which properties are instance-specific and require
 * custom notification via `_notifyInstanceProp`, define an `_instanceProps`
 * object containing keys for each instance prop, for example:
 *
 *     _instanceProps: {
 *       item: true,
 *       index: true
 *     }
 *
 * Any properties used in the template that are not defined in _instanceProp
 * will be forwarded out to the Templatize `owner` automatically.
 *
 * Users may also implement the following abstract function to show or
 * hide any DOM generated using `stamp`:
 *
 *     _showHideChildren: function(shouldHide)
 *
 * Note that some callbacks are suffixed with `V2` in the Polymer 2.x behavior
 * as the implementations will need to differ from the callbacks required
 * by the 1.x Templatizer API due to changes in the `TemplateInstance` API
 * between versions 1.x and 2.x.
 *
 * @polymerBehavior
 */_exports.Templatizer=Templatizer;var templatizerBehavior={Templatizer:Templatizer};_exports.$templatizerBehavior=templatizerBehavior;var elementsHidden=!1;/**
                             * @return {boolean} True if elements will be hidden globally
                             */function hideElementsGlobally(){if(legacyOptimizations&&!useShadow){if(!elementsHidden){elementsHidden=!0;var style=document.createElement("style");style.textContent="dom-bind,dom-if,dom-repeat{display:none;}";document.head.appendChild(style)}return!0}return!1}var hideTemplateControls={hideElementsGlobally:hideElementsGlobally};_exports.$hideTemplateControls=hideTemplateControls;var domBindBase=GestureEventListeners(OptionalMutableData(PropertyEffects(HTMLElement))),DomBind=/*#__PURE__*/function(_domBindBase){babelHelpers.inherits(DomBind,_domBindBase);babelHelpers.createClass(DomBind,null,[{key:"observedAttributes",get:function get(){return["mutable-data"]}}]);function DomBind(){var _this20;babelHelpers.classCallCheck(this,DomBind);_this20=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DomBind).call(this));if(strictTemplatePolicy){throw new Error("strictTemplatePolicy: dom-bind not allowed")}_this20.root=null;_this20.$=null;_this20.__children=null;return _this20}/* eslint-disable no-unused-vars */ /**
                                         * @override
                                         * @param {string} name Name of attribute that changed
                                         * @param {?string} old Old attribute value
                                         * @param {?string} value New attribute value
                                         * @param {?string} namespace Attribute namespace.
                                         * @return {void}
                                         */babelHelpers.createClass(DomBind,[{key:"attributeChangedCallback",value:function attributeChangedCallback(name,old,value,namespace){// assumes only one observed attribute
this.mutableData=!0}/**
     * @override
     * @return {void}
     */},{key:"connectedCallback",value:function connectedCallback(){if(!hideElementsGlobally()){this.style.display="none"}this.render()}/**
     * @override
     * @return {void}
     */},{key:"disconnectedCallback",value:function disconnectedCallback(){this.__removeChildren()}},{key:"__insertChildren",value:function __insertChildren(){wrap$1(wrap$1(this).parentNode).insertBefore(this.root,this)}},{key:"__removeChildren",value:function __removeChildren(){if(this.__children){for(var _i66=0;_i66<this.__children.length;_i66++){this.root.appendChild(this.__children[_i66])}}}/**
     * Forces the element to render its content. This is typically only
     * necessary to call if HTMLImports with the async attribute are used.
     * @return {void}
     */},{key:"render",value:function render(){var _this21=this,template;if(!this.__children){template=/** @type {HTMLTemplateElement} */template||this.querySelector("template");if(!template){// Wait until childList changes and template should be there by then
var _observer=new MutationObserver(function(){template=/** @type {HTMLTemplateElement} */_this21.querySelector("template");if(template){_observer.disconnect();_this21.render()}else{throw new Error("dom-bind requires a <template> child")}});_observer.observe(this,{childList:!0});return}this.root=this._stampTemplate(/** @type {!HTMLTemplateElement} */template);this.$=this.root.$;this.__children=[];for(var n=this.root.firstChild;n;n=n.nextSibling){this.__children[this.__children.length]=n}this._enableProperties()}this.__insertChildren();this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}]);return DomBind}(domBindBase);/**
                                                                                               * Custom element to allow using Polymer's template features (data binding,
                                                                                               * declarative event listeners, etc.) in the main document without defining
                                                                                               * a new custom element.
                                                                                               *
                                                                                               * `<template>` tags utilizing bindings may be wrapped with the `<dom-bind>`
                                                                                               * element, which will immediately stamp the wrapped template into the main
                                                                                               * document and bind elements to the `dom-bind` element itself as the
                                                                                               * binding scope.
                                                                                               *
                                                                                               * @polymer
                                                                                               * @customElement
                                                                                               * @appliesMixin PropertyEffects
                                                                                               * @appliesMixin OptionalMutableData
                                                                                               * @appliesMixin GestureEventListeners
                                                                                               * @extends {domBindBase}
                                                                                               * @summary Custom element to allow using Polymer's template features (data
                                                                                               *   binding, declarative event listeners, etc.) in the main document.
                                                                                               */_exports.DomBind=DomBind;customElements.define("dom-bind",DomBind);var domBind={DomBind:DomBind};_exports.$domBind=domBind;var LiteralString=/*#__PURE__*/function(){function LiteralString(string){babelHelpers.classCallCheck(this,LiteralString);/** @type {string} */this.value=string.toString()}/**
     * @return {string} LiteralString string value
     * @override
     */babelHelpers.createClass(LiteralString,[{key:"toString",value:function toString(){return this.value}}]);return LiteralString}();/**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */function literalValue(value){if(babelHelpers.instanceof(value,LiteralString)){return(/** @type {!LiteralString} */value.value)}else{throw new Error("non-literal value passed to Polymer's htmlLiteral function: ".concat(value))}}/**
   * @param {*} value Object to stringify into HTML
   * @return {string} HTML stringified form of `obj`
   */function htmlValue(value){if(babelHelpers.instanceof(value,HTMLTemplateElement)){return(/** @type {!HTMLTemplateElement } */value.innerHTML)}else if(babelHelpers.instanceof(value,LiteralString)){return literalValue(value)}else{throw new Error("non-template value passed to Polymer's html function: ".concat(value))}}/**
   * A template literal tag that creates an HTML <template> element from the
   * contents of the string.
   *
   * This allows you to write a Polymer Template in JavaScript.
   *
   * Templates can be composed by interpolating `HTMLTemplateElement`s in
   * expressions in the JavaScript template literal. The nested template's
   * `innerHTML` is included in the containing template.  The only other
   * values allowed in expressions are those returned from `htmlLiteral`
   * which ensures only literal values from JS source ever reach the HTML, to
   * guard against XSS risks.
   *
   * All other values are disallowed in expressions to help prevent XSS
   * attacks; however, `htmlLiteral` can be used to compose static
   * string values into templates. This is useful to compose strings into
   * places that do not accept html, like the css text of a `style`
   * element.
   *
   * Example:
   *
   *     static get template() {
   *       return html`
   *         <style>:host{ content:"..." }</style>
   *         <div class="shadowed">${this.partialTemplate}</div>
   *         ${super.template}
   *       `;
   *     }
   *     static get partialTemplate() { return html`<span>Partial!</span>`; }
   *
   * @param {!ITemplateArray} strings Constant parts of tagged template literal
   * @param {...*} values Variable parts of tagged template literal
   * @return {!HTMLTemplateElement} Constructed HTMLTemplateElement
   */var html=function html(strings){for(var template=/** @type {!HTMLTemplateElement} */document.createElement("template"),_len8=arguments.length,values=Array(1<_len8?_len8-1:0),_key8=1;_key8<_len8;_key8++){values[_key8-1]=arguments[_key8]}template.innerHTML=values.reduce(function(acc,v,idx){return acc+htmlValue(v)+strings[idx+1]},strings[0]);return template};/**
    * An html literal tag that can be used with `html` to compose.
    * a literal string.
    *
    * Example:
    *
    *     static get template() {
    *       return html`
    *         <style>
    *           :host { display: block; }
    *           ${this.styleTemplate()}
    *         </style>
    *         <div class="shadowed">${staticValue}</div>
    *         ${super.template}
    *       `;
    *     }
    *     static get styleTemplate() {
    *        return htmlLiteral`.shadowed { background: gray; }`;
    *     }
    *
    * @param {!ITemplateArray} strings Constant parts of tagged template literal
    * @param {...*} values Variable parts of tagged template literal
    * @return {!LiteralString} Constructed literal string
    */_exports.html$2=_exports.html$1=_exports.html=html;var htmlLiteral=function htmlLiteral(strings){for(var _len9=arguments.length,values=Array(1<_len9?_len9-1:0),_key9=1;_key9<_len9;_key9++){values[_key9-1]=arguments[_key9]}return new LiteralString(values.reduce(function(acc,v,idx){return acc+literalValue(v)+strings[idx+1]},strings[0]))};_exports.htmlLiteral=htmlLiteral;var htmlTag={html:html,htmlLiteral:htmlLiteral};_exports.$htmlTag=htmlTag;var PolymerElement=ElementMixin(HTMLElement);_exports.PolymerElement=PolymerElement;var polymerElement={version:version,PolymerElement:PolymerElement,html:html};_exports.$polymerElement=polymerElement;var domRepeatBase=OptionalMutableData(PolymerElement),DomRepeat=/*#__PURE__*/function(_domRepeatBase){babelHelpers.inherits(DomRepeat,_domRepeatBase);babelHelpers.createClass(DomRepeat,null,[{key:"is",// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
get:function get(){return"dom-repeat"}},{key:"template",get:function get(){return null}},{key:"properties",get:function get(){/**
     * Fired whenever DOM is added or removed by this template (by
     * default, rendering occurs lazily).  To force immediate rendering, call
     * `render`.
     *
     * @event dom-change
     */return{/**
       * An array containing items determining how many instances of the template
       * to stamp and that that each template instance should bind to.
       */items:{type:Array},/**
       * The name of the variable to add to the binding scope for the array
       * element associated with a given template instance.
       */as:{type:String,value:"item"},/**
       * The name of the variable to add to the binding scope with the index
       * of the instance in the sorted and filtered list of rendered items.
       * Note, for the index in the `this.items` array, use the value of the
       * `itemsIndexAs` property.
       */indexAs:{type:String,value:"index"},/**
       * The name of the variable to add to the binding scope with the index
       * of the instance in the `this.items` array. Note, for the index of
       * this instance in the sorted and filtered list of rendered items,
       * use the value of the `indexAs` property.
       */itemsIndexAs:{type:String,value:"itemsIndex"},/**
       * A function that should determine the sort order of the items.  This
       * property should either be provided as a string, indicating a method
       * name on the element's host, or else be an actual function.  The
       * function should match the sort function passed to `Array.sort`.
       * Using a sort function has no effect on the underlying `items` array.
       */sort:{type:Function,observer:"__sortChanged"},/**
       * A function that can be used to filter items out of the view.  This
       * property should either be provided as a string, indicating a method
       * name on the element's host, or else be an actual function.  The
       * function should match the sort function passed to `Array.filter`.
       * Using a filter function has no effect on the underlying `items` array.
       */filter:{type:Function,observer:"__filterChanged"},/**
       * When using a `filter` or `sort` function, the `observe` property
       * should be set to a space-separated list of the names of item
       * sub-fields that should trigger a re-sort or re-filter when changed.
       * These should generally be fields of `item` that the sort or filter
       * function depends on.
       */observe:{type:String,observer:"__observeChanged"},/**
       * When using a `filter` or `sort` function, the `delay` property
       * determines a debounce time in ms after a change to observed item
       * properties that must pass before the filter or sort is re-run.
       * This is useful in rate-limiting shuffling of the view when
       * item changes may be frequent.
       */delay:Number,/**
       * Count of currently rendered items after `filter` (if any) has been applied.
       * If "chunking mode" is enabled, `renderedItemCount` is updated each time a
       * set of template instances is rendered.
       *
       */renderedItemCount:{type:Number,notify:!0,readOnly:!0},/**
       * Defines an initial count of template instances to render after setting
       * the `items` array, before the next paint, and puts the `dom-repeat`
       * into "chunking mode".  The remaining items will be created and rendered
       * incrementally at each animation frame therof until all instances have
       * been rendered.
       */initialCount:{type:Number,observer:"__initializeChunking"},/**
       * When `initialCount` is used, this property defines a frame rate (in
       * fps) to target by throttling the number of instances rendered each
       * frame to not exceed the budget for the target frame rate.  The
       * framerate is effectively the number of `requestAnimationFrame`s that
       * it tries to allow to actually fire in a given second. It does this
       * by measuring the time between `rAF`s and continuously adjusting the
       * number of items created each `rAF` to maintain the target framerate.
       * Setting this to a higher number allows lower latency and higher
       * throughput for event handlers and other tasks, but results in a
       * longer time for the remaining items to complete rendering.
       */targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}},{key:"observers",get:function get(){return["__itemsChanged(items.*)"]}}]);function DomRepeat(){var _this22;babelHelpers.classCallCheck(this,DomRepeat);_this22=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DomRepeat).call(this));_this22.__instances=[];_this22.__limit=1/0;_this22.__pool=[];_this22.__renderDebouncer=null;_this22.__itemsIdxToInstIdx={};_this22.__chunkCount=null;_this22.__lastChunkTime=null;_this22.__sortFn=null;_this22.__filterFn=null;_this22.__observePaths=null;/** @type {?function(new:TemplateInstanceBase, Object=)} */_this22.__ctor=null;_this22.__isDetached=!0;_this22.template=null;return _this22}/**
     * @override
     * @return {void}
     */babelHelpers.createClass(DomRepeat,[{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DomRepeat.prototype),"disconnectedCallback",this).call(this);this.__isDetached=!0;for(var _i67=0;_i67<this.__instances.length;_i67++){this.__detachInstance(_i67)}}/**
     * @override
     * @return {void}
     */},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DomRepeat.prototype),"connectedCallback",this).call(this);if(!hideElementsGlobally()){this.style.display="none"}// only perform attachment if the element was previously detached.
if(this.__isDetached){this.__isDetached=!1;for(var wrappedParent=wrap$1(wrap$1(this).parentNode),_i68=0;_i68<this.__instances.length;_i68++){this.__attachInstance(_i68,wrappedParent)}}}},{key:"__ensureTemplatized",value:function __ensureTemplatized(){var _this23=this;// Templatizing (generating the instance constructor) needs to wait
// until ready, since won't have its template content handed back to
// it until then
if(!this.__ctor){var template=this.template=/** @type {HTMLTemplateElement} */this.querySelector("template");if(!template){// // Wait until childList changes and template should be there by then
var _observer2=new MutationObserver(function(){if(_this23.querySelector("template")){_observer2.disconnect();_this23.__render()}else{throw new Error("dom-repeat requires a <template> child")}});_observer2.observe(this,{childList:!0});return!1}// Template instance props that should be excluded from forwarding
var instanceProps={};instanceProps[this.as]=!0;instanceProps[this.indexAs]=!0;instanceProps[this.itemsIndexAs]=!0;this.__ctor=_templatize(template,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:instanceProps,/**
         * @this {DomRepeat}
         * @param {string} prop Property to set
         * @param {*} value Value to set property to
         */forwardHostProp:function forwardHostProp(prop,value){for(var i$=this.__instances,_i69=0,inst;_i69<i$.length&&(inst=i$[_i69]);_i69++){inst.forwardHostProp(prop,value)}},/**
         * @this {DomRepeat}
         * @param {Object} inst Instance to notify
         * @param {string} prop Property to notify
         * @param {*} value Value to notify
         */notifyInstanceProp:function notifyInstanceProp(inst,prop,value){if(matches(this.as,prop)){var idx=inst[this.itemsIndexAs];if(prop==this.as){this.items[idx]=value}var _path5=translate(this.as,"".concat(JSCompiler_renameProperty("items",this),".").concat(idx),prop);this.notifyPath(_path5,value)}}})}return!0}},{key:"__getMethodHost",value:function __getMethodHost(){// Technically this should be the owner of the outermost template.
// In shadow dom, this is always getRootNode().host, but we can
// approximate this via cooperation with our dataHost always setting
// `_methodHost` as long as there were bindings (or id's) on this
// instance causing it to get a dataHost.
return this.__dataHost._methodHost||this.__dataHost}},{key:"__functionFromPropertyValue",value:function __functionFromPropertyValue(functionOrMethodName){if("string"===typeof functionOrMethodName){var methodName=functionOrMethodName,obj=this.__getMethodHost();return function(){return obj[methodName].apply(obj,arguments)}}return functionOrMethodName}},{key:"__sortChanged",value:function __sortChanged(sort){this.__sortFn=this.__functionFromPropertyValue(sort);if(this.items){this.__debounceRender(this.__render)}}},{key:"__filterChanged",value:function __filterChanged(filter){this.__filterFn=this.__functionFromPropertyValue(filter);if(this.items){this.__debounceRender(this.__render)}}},{key:"__computeFrameTime",value:function __computeFrameTime(rate){return Math.ceil(1e3/rate)}},{key:"__initializeChunking",value:function __initializeChunking(){if(this.initialCount){this.__limit=this.initialCount;this.__chunkCount=this.initialCount;this.__lastChunkTime=performance.now()}}},{key:"__tryRenderChunk",value:function __tryRenderChunk(){// Debounced so that multiple calls through `_render` between animation
// frames only queue one new rAF (e.g. array mutation & chunked render)
if(this.items&&this.__limit<this.items.length){this.__debounceRender(this.__requestRenderChunk)}}},{key:"__requestRenderChunk",value:function __requestRenderChunk(){var _this24=this;requestAnimationFrame(function(){return _this24.__renderChunk()})}},{key:"__renderChunk",value:function __renderChunk(){// Simple auto chunkSize throttling algorithm based on feedback loop:
// measure actual time between frames and scale chunk count by ratio
// of target/actual frame time
var currChunkTime=performance.now(),ratio=this._targetFrameTime/(currChunkTime-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*ratio)||1;this.__limit+=this.__chunkCount;this.__lastChunkTime=currChunkTime;this.__debounceRender(this.__render)}},{key:"__observeChanged",value:function __observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}},{key:"__itemsChanged",value:function __itemsChanged(change){if(this.items&&!Array.isArray(this.items)){console.warn("dom-repeat expected array for `items`, found",this.items)}// If path was to an item (e.g. 'items.3' or 'items.3.foo'), forward the
// path to that instance synchronously (returns false for non-item paths)
if(!this.__handleItemPath(change.path,change.value)){// Otherwise, the array was reset ('items') or spliced ('items.splices'),
// so queue a full refresh
this.__initializeChunking();this.__debounceRender(this.__render)}}},{key:"__handleObservedPaths",value:function __handleObservedPaths(path){// Handle cases where path changes should cause a re-sort/filter
if(this.__sortFn||this.__filterFn){if(!path){// Always re-render if the item itself changed
this.__debounceRender(this.__render,this.delay)}else if(this.__observePaths){// Otherwise, re-render if the path changed matches an observed path
for(var paths=this.__observePaths,_i70=0;_i70<paths.length;_i70++){if(0===path.indexOf(paths[_i70])){this.__debounceRender(this.__render,this.delay)}}}}}/**
     * @param {function(this:DomRepeat)} fn Function to debounce.
     * @param {number=} delay Delay in ms to debounce by.
     */},{key:"__debounceRender",value:function __debounceRender(fn){var delay=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,0<delay?timeOut.after(delay):microTask,fn.bind(this));enqueueDebouncer(this.__renderDebouncer)}/**
     * Forces the element to render its content. Normally rendering is
     * asynchronous to a provoking change. This is done for efficiency so
     * that multiple changes trigger only a single render. The render method
     * should be called if, for example, template rendering is required to
     * validate application state.
     * @return {void}
     */},{key:"render",value:function render(){// Queue this repeater, then flush all in order
this.__debounceRender(this.__render);flush$1()}},{key:"__render",value:function __render(){if(!this.__ensureTemplatized()){// No template found yet
return}this.__applyFullRefresh();// Reset the pool
// TODO(kschaaf): Reuse pool across turns and nested templates
// Now that objects/arrays are re-evaluated when set, we can safely
// reuse pooled instances across turns, however we still need to decide
// semantics regarding how long to hold, how many to hold, etc.
this.__pool.length=0;// Set rendered item count
this._setRenderedItemCount(this.__instances.length);// Notify users
this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}));// Check to see if we need to render more items
this.__tryRenderChunk()}},{key:"__applyFullRefresh",value:function __applyFullRefresh(){for(var _this25=this,items=this.items||[],isntIdxToItemsIdx=Array(items.length),_i71=0;_i71<items.length;_i71++){isntIdxToItemsIdx[_i71]=_i71}// Apply user filter
if(this.__filterFn){isntIdxToItemsIdx=isntIdxToItemsIdx.filter(function(i,idx,array){return _this25.__filterFn(items[i],idx,array)})}// Apply user sort
if(this.__sortFn){isntIdxToItemsIdx.sort(function(a,b){return _this25.__sortFn(items[a],items[b])})}// items->inst map kept for item path forwarding
var itemsIdxToInstIdx=this.__itemsIdxToInstIdx={},instIdx=0,limit=Math.min(isntIdxToItemsIdx.length,this.__limit);for(;instIdx<limit;instIdx++){var inst=this.__instances[instIdx],itemIdx=isntIdxToItemsIdx[instIdx],item=items[itemIdx];itemsIdxToInstIdx[itemIdx]=instIdx;if(inst){inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties()}else{this.__insertInstance(item,instIdx,itemIdx)}}// Remove any extra instances from previous state
for(var _i72=this.__instances.length-1;_i72>=instIdx;_i72--){this.__detachAndRemoveInstance(_i72)}}},{key:"__detachInstance",value:function __detachInstance(idx){for(var inst=this.__instances[idx],wrappedRoot=wrap$1(inst.root),_i73=0,el;_i73<inst.children.length;_i73++){el=inst.children[_i73];wrappedRoot.appendChild(el)}return inst}},{key:"__attachInstance",value:function __attachInstance(idx,parent){var inst=this.__instances[idx];// Note, this is pre-wrapped as an optimization
parent.insertBefore(inst.root,this)}},{key:"__detachAndRemoveInstance",value:function __detachAndRemoveInstance(idx){var inst=this.__detachInstance(idx);if(inst){this.__pool.push(inst)}this.__instances.splice(idx,1)}},{key:"__stampInstance",value:function __stampInstance(item,instIdx,itemIdx){var model={};model[this.as]=item;model[this.indexAs]=instIdx;model[this.itemsIndexAs]=itemIdx;return new this.__ctor(model)}},{key:"__insertInstance",value:function __insertInstance(item,instIdx,itemIdx){var inst=this.__pool.pop();if(inst){// TODO(kschaaf): If the pool is shared across turns, hostProps
// need to be re-set to reused instances in addition to item
inst._setPendingProperty(this.as,item);inst._setPendingProperty(this.indexAs,instIdx);inst._setPendingProperty(this.itemsIndexAs,itemIdx);inst._flushProperties()}else{inst=this.__stampInstance(item,instIdx,itemIdx)}var beforeRow=this.__instances[instIdx+1],beforeNode=beforeRow?beforeRow.children[0]:this;wrap$1(wrap$1(this).parentNode).insertBefore(inst.root,beforeNode);this.__instances[instIdx]=inst;return inst}// Implements extension point from Templatize mixin
/**
   * Shows or hides the template instance top level child elements. For
   * text nodes, `textContent` is removed while "hidden" and replaced when
   * "shown."
   * @param {boolean} hidden Set to true to hide the children;
   * set to false to show them.
   * @return {void}
   * @protected
   */},{key:"_showHideChildren",value:function _showHideChildren(hidden){for(var _i74=0;_i74<this.__instances.length;_i74++){this.__instances[_i74]._showHideChildren(hidden)}}// Called as a side effect of a host items.<key>.<path> path change,
// responsible for notifying item.<path> changes to inst for key
},{key:"__handleItemPath",value:function __handleItemPath(path,value){var itemsPath=path.slice(6),dot=itemsPath.indexOf("."),itemsIdx=0>dot?itemsPath:itemsPath.substring(0,dot);// 'items.'.length == 6
// If path was index into array...
if(itemsIdx==parseInt(itemsIdx,10)){var itemSubPath=0>dot?"":itemsPath.substring(dot+1);// If the path is observed, it will trigger a full refresh
this.__handleObservedPaths(itemSubPath);// Note, even if a rull refresh is triggered, always do the path
// notification because unless mutableData is used for dom-repeat
// and all elements in the instance subtree, a full refresh may
// not trigger the proper update.
var instIdx=this.__itemsIdxToInstIdx[itemsIdx],inst=this.__instances[instIdx];if(inst){var itemPath=this.as+(itemSubPath?"."+itemSubPath:"");// This is effectively `notifyPath`, but avoids some of the overhead
// of the public API
inst._setPendingPropertyOrPath(itemPath,value,!1,!0);inst._flushProperties()}return!0}}/**
     * Returns the item associated with a given element stamped by
     * this `dom-repeat`.
     *
     * Note, to modify sub-properties of the item,
     * `modelForElement(el).set('item.<sub-prop>', value)`
     * should be used.
     *
     * @param {!HTMLElement} el Element for which to return the item.
     * @return {*} Item associated with the element.
     */},{key:"itemForElement",value:function itemForElement(el){var instance=this.modelForElement(el);return instance&&instance[this.as]}/**
     * Returns the inst index for a given element stamped by this `dom-repeat`.
     * If `sort` is provided, the index will reflect the sorted order (rather
     * than the original array order).
     *
     * @param {!HTMLElement} el Element for which to return the index.
     * @return {?number} Row index associated with the element (note this may
     *   not correspond to the array index if a user `sort` is applied).
     */},{key:"indexForElement",value:function indexForElement(el){var instance=this.modelForElement(el);return instance&&instance[this.indexAs]}/**
     * Returns the template "model" associated with a given element, which
     * serves as the binding scope for the template instance the element is
     * contained in. A template model
     * should be used to manipulate data associated with this template instance.
     *
     * Example:
     *
     *   let model = modelForElement(el);
     *   if (model.index < 10) {
     *     model.set('item.checked', true);
     *   }
     *
     * @param {!HTMLElement} el Element for which to return a template model.
     * @return {TemplateInstanceBase} Model representing the binding scope for
     *   the element.
     */},{key:"modelForElement",value:function modelForElement(el){return _modelForElement(this.template,el)}}]);return DomRepeat}(domRepeatBase);/**
                                                            * The `<dom-repeat>` element will automatically stamp and binds one instance
                                                            * of template content to each object in a user-provided array.
                                                            * `dom-repeat` accepts an `items` property, and one instance of the template
                                                            * is stamped for each item into the DOM at the location of the `dom-repeat`
                                                            * element.  The `item` property will be set on each instance's binding
                                                            * scope, thus templates should bind to sub-properties of `item`.
                                                            *
                                                            * Example:
                                                            *
                                                            * ```html
                                                            * <dom-module id="employee-list">
                                                            *
                                                            *   <template>
                                                            *
                                                            *     <div> Employee list: </div>
                                                            *     <dom-repeat items="{{employees}}">
                                                            *       <template>
                                                            *         <div>First name: <span>{{item.first}}</span></div>
                                                            *         <div>Last name: <span>{{item.last}}</span></div>
                                                            *       </template>
                                                            *     </dom-repeat>
                                                            *
                                                            *   </template>
                                                            *
                                                            * </dom-module>
                                                            * ```
                                                            *
                                                            * With the following custom element definition:
                                                            *
                                                            * ```js
                                                            * class EmployeeList extends PolymerElement {
                                                            *   static get is() { return 'employee-list'; }
                                                            *   static get properties() {
                                                            *     return {
                                                            *       employees: {
                                                            *         value() {
                                                            *           return [
                                                            *             {first: 'Bob', last: 'Smith'},
                                                            *             {first: 'Sally', last: 'Johnson'},
                                                            *             ...
                                                            *           ];
                                                            *         }
                                                            *       }
                                                            *     };
                                                            *   }
                                                            * }
                                                            * ```
                                                            *
                                                            * Notifications for changes to items sub-properties will be forwarded to template
                                                            * instances, which will update via the normal structured data notification system.
                                                            *
                                                            * Mutations to the `items` array itself should be made using the Array
                                                            * mutation API's on the PropertyEffects mixin (`push`, `pop`, `splice`,
                                                            * `shift`, `unshift`), and template instances will be kept in sync with the
                                                            * data in the array.
                                                            *
                                                            * Events caught by event handlers within the `dom-repeat` template will be
                                                            * decorated with a `model` property, which represents the binding scope for
                                                            * each template instance.  The model should be used to manipulate data on the
                                                            * instance, for example `event.model.set('item.checked', true);`.
                                                            *
                                                            * Alternatively, the model for a template instance for an element stamped by
                                                            * a `dom-repeat` can be obtained using the `modelForElement` API on the
                                                            * `dom-repeat` that stamped it, for example
                                                            * `this.$.domRepeat.modelForElement(event.target).set('item.checked', true);`.
                                                            * This may be useful for manipulating instance data of event targets obtained
                                                            * by event handlers on parents of the `dom-repeat` (event delegation).
                                                            *
                                                            * A view-specific filter/sort may be applied to each `dom-repeat` by supplying a
                                                            * `filter` and/or `sort` property.  This may be a string that names a function on
                                                            * the host, or a function may be assigned to the property directly.  The functions
                                                            * should implemented following the standard `Array` filter/sort API.
                                                            *
                                                            * In order to re-run the filter or sort functions based on changes to sub-fields
                                                            * of `items`, the `observe` property may be set as a space-separated list of
                                                            * `item` sub-fields that should cause a re-filter/sort when modified.  If
                                                            * the filter or sort function depends on properties not contained in `items`,
                                                            * the user should observe changes to those properties and call `render` to update
                                                            * the view based on the dependency change.
                                                            *
                                                            * For example, for an `dom-repeat` with a filter of the following:
                                                            *
                                                            * ```js
                                                            * isEngineer(item) {
                                                            *   return item.type == 'engineer' || item.manager.type == 'engineer';
                                                            * }
                                                            * ```
                                                            *
                                                            * Then the `observe` property should be configured as follows:
                                                            *
                                                            * ```html
                                                            * <dom-repeat items="{{employees}}" filter="isEngineer" observe="type manager.type">
                                                            * ```
                                                            *
                                                            * @customElement
                                                            * @polymer
                                                            * @extends {domRepeatBase}
                                                            * @appliesMixin OptionalMutableData
                                                            * @summary Custom element for stamping instance of a template bound to
                                                            *   items in an array.
                                                            */_exports.DomRepeat=DomRepeat;customElements.define(DomRepeat.is,DomRepeat);var domRepeat={DomRepeat:DomRepeat};_exports.$domRepeat=domRepeat;var DomIf=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(DomIf,_PolymerElement);babelHelpers.createClass(DomIf,null,[{key:"is",// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
get:function get(){return"dom-if"}},{key:"template",get:function get(){return null}},{key:"properties",get:function get(){return{/**
       * Fired whenever DOM is added or removed/hidden by this template (by
       * default, rendering occurs lazily).  To force immediate rendering, call
       * `render`.
       *
       * @event dom-change
       */ /**
           * A boolean indicating whether this template should stamp.
           */if:{type:Boolean,observer:"__debounceRender"},/**
       * When true, elements will be removed from DOM and discarded when `if`
       * becomes false and re-created and added back to the DOM when `if`
       * becomes true.  By default, stamped elements will be hidden but left
       * in the DOM when `if` becomes false, which is generally results
       * in better performance.
       */restamp:{type:Boolean,observer:"__debounceRender"}}}}]);function DomIf(){var _this26;babelHelpers.classCallCheck(this,DomIf);_this26=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DomIf).call(this));_this26.__renderDebouncer=null;_this26.__invalidProps=null;_this26.__instance=null;_this26._lastIf=!1;_this26.__ctor=null;_this26.__hideTemplateChildren__=!1;return _this26}babelHelpers.createClass(DomIf,[{key:"__debounceRender",value:function __debounceRender(){var _this27=this;// Render is async for 2 reasons:
// 1. To eliminate dom creation trashing if user code thrashes `if` in the
//    same turn. This was more common in 1.x where a compound computed
//    property could result in the result changing multiple times, but is
//    mitigated to a large extent by batched property processing in 2.x.
// 2. To avoid double object propagation when a bag including values bound
//    to the `if` property as well as one or more hostProps could enqueue
//    the <dom-if> to flush before the <template>'s host property
//    forwarding. In that scenario creating an instance would result in
//    the host props being set once, and then the enqueued changes on the
//    template would set properties a second time, potentially causing an
//    object to be set to an instance more than once.  Creating the
//    instance async from flushing data ensures this doesn't happen. If
//    we wanted a sync option in the future, simply having <dom-if> flush
//    (or clear) its template's pending host properties before creating
//    the instance would also avoid the problem.
this.__renderDebouncer=Debouncer.debounce(this.__renderDebouncer,microTask,function(){return _this27.__render()});enqueueDebouncer(this.__renderDebouncer)}/**
     * @override
     * @return {void}
     */},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DomIf.prototype),"disconnectedCallback",this).call(this);var parent=wrap$1(this).parentNode;if(!parent||parent.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!wrap$1(parent).host){this.__teardownInstance()}}/**
     * @override
     * @return {void}
     */},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DomIf.prototype),"connectedCallback",this).call(this);if(!hideElementsGlobally()){this.style.display="none"}if(this.if){this.__debounceRender()}}/**
     * Forces the element to render its content. Normally rendering is
     * asynchronous to a provoking change. This is done for efficiency so
     * that multiple changes trigger only a single render. The render method
     * should be called if, for example, template rendering is required to
     * validate application state.
     * @return {void}
     */},{key:"render",value:function render(){flush$1()}},{key:"__render",value:function __render(){if(this.if){if(!this.__ensureInstance()){// No template found yet
return}this._showHideChildren()}else if(this.restamp){this.__teardownInstance()}if(!this.restamp&&this.__instance){this._showHideChildren()}if(this.if!=this._lastIf){this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}));this._lastIf=this.if}}},{key:"__ensureInstance",value:function __ensureInstance(){var _this28=this,parentNode=wrap$1(this).parentNode;// Guard against element being detached while render was queued
if(parentNode){if(!this.__ctor){var template=/** @type {HTMLTemplateElement} */wrap$1(this).querySelector("template");if(!template){// Wait until childList changes and template should be there by then
var _observer3=new MutationObserver(function(){if(wrap$1(_this28).querySelector("template")){_observer3.disconnect();_this28.__render()}else{throw new Error("dom-if requires a <template> child")}});_observer3.observe(this,{childList:!0});return!1}this.__ctor=_templatize(template,this,{// dom-if templatizer instances require `mutable: true`, as
// `__syncHostProperties` relies on that behavior to sync objects
mutableData:!0,/**
           * @param {string} prop Property to forward
           * @param {*} value Value of property
           * @this {DomIf}
           */forwardHostProp:function forwardHostProp(prop,value){if(this.__instance){if(this.if){this.__instance.forwardHostProp(prop,value)}else{// If we have an instance but are squelching host property
// forwarding due to if being false, note the invalidated
// properties so `__syncHostProperties` can sync them the next
// time `if` becomes true
this.__invalidProps=this.__invalidProps||Object.create(null);this.__invalidProps[root(prop)]=!0}}}})}if(!this.__instance){this.__instance=new this.__ctor;wrap$1(parentNode).insertBefore(this.__instance.root,this)}else{this.__syncHostProperties();var c$=this.__instance.children;if(c$&&c$.length){// Detect case where dom-if was re-attached in new position
var lastChild=wrap$1(this).previousSibling;if(lastChild!==c$[c$.length-1]){for(var _i75=0,n;_i75<c$.length&&(n=c$[_i75]);_i75++){wrap$1(parentNode).insertBefore(n,this)}}}}}return!0}},{key:"__syncHostProperties",value:function __syncHostProperties(){var props=this.__invalidProps;if(props){for(var prop in props){this.__instance._setPendingProperty(prop,this.__dataHost[prop])}this.__invalidProps=null;this.__instance._flushProperties()}}},{key:"__teardownInstance",value:function __teardownInstance(){if(this.__instance){var c$=this.__instance.children;if(c$&&c$.length){// use first child parent, for case when dom-if may have been detached
var parent=wrap$1(c$[0]).parentNode;// Instance children may be disconnected from parents when dom-if
// detaches if a tree was innerHTML'ed
if(parent){parent=wrap$1(parent);for(var _i76=0,n;_i76<c$.length&&(n=c$[_i76]);_i76++){parent.removeChild(n)}}}this.__instance=null;this.__invalidProps=null}}/**
     * Shows or hides the template instance top level child elements. For
     * text nodes, `textContent` is removed while "hidden" and replaced when
     * "shown."
     * @return {void}
     * @protected
     * @suppress {visibility}
     */},{key:"_showHideChildren",value:function _showHideChildren(){var hidden=this.__hideTemplateChildren__||!this.if;if(this.__instance){this.__instance._showHideChildren(hidden)}}}]);return DomIf}(PolymerElement);_exports.DomIf=DomIf;customElements.define(DomIf.is,DomIf);var domIf={DomIf:DomIf};_exports.$domIf=domIf;var ArraySelectorMixin=dedupingMixin(function(superClass){/**
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @private
   */var elementBase=ElementMixin(superClass),ArraySelectorMixin=/*#__PURE__*/function(_elementBase2){babelHelpers.inherits(ArraySelectorMixin,_elementBase2);babelHelpers.createClass(ArraySelectorMixin,null,[{key:"properties",get:function get(){return{/**
         * An array containing items from which selection will be made.
         */items:{type:Array},/**
         * When `true`, multiple items may be selected at once (in this case,
         * `selected` is an array of currently selected items).  When `false`,
         * only one item may be selected at a time.
         */multi:{type:Boolean,value:!1},/**
         * When `multi` is true, this is an array that contains any selected.
         * When `multi` is false, this is the currently selected item, or `null`
         * if no item is selected.
         * @type {?Object|?Array<!Object>}
         */selected:{type:Object,notify:!0},/**
         * When `multi` is false, this is the currently selected item, or `null`
         * if no item is selected.
         * @type {?Object}
         */selectedItem:{type:Object,notify:!0},/**
         * When `true`, calling `select` on an item that is already selected
         * will deselect the item.
         */toggle:{type:Boolean,value:!1}}}},{key:"observers",get:function get(){return["__updateSelection(multi, items.*)"]}}]);function ArraySelectorMixin(){var _this29;babelHelpers.classCallCheck(this,ArraySelectorMixin);_this29=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ArraySelectorMixin).call(this));_this29.__lastItems=null;_this29.__lastMulti=null;_this29.__selectedMap=null;return _this29}babelHelpers.createClass(ArraySelectorMixin,[{key:"__updateSelection",value:function __updateSelection(multi,itemsInfo){var path=itemsInfo.path;if(path==JSCompiler_renameProperty("items",this)){// Case 1 - items array changed, so diff against previous array and
// deselect any removed items and adjust selected indices
var newItems=itemsInfo.base||[],lastItems=this.__lastItems,lastMulti=this.__lastMulti;if(multi!==lastMulti){this.clearSelection()}if(lastItems){var splices=calculateSplices(newItems,lastItems);this.__applySplices(splices)}this.__lastItems=newItems;this.__lastMulti=multi}else if(itemsInfo.path=="".concat(JSCompiler_renameProperty("items",this),".splices")){// Case 2 - got specific splice information describing the array mutation:
// deselect any removed items and adjust selected indices
this.__applySplices(itemsInfo.value.indexSplices)}else{// Case 3 - an array element was changed, so deselect the previous
// item for that index if it was previously selected
var part=path.slice("".concat(JSCompiler_renameProperty("items",this),".").length),idx=parseInt(part,10);if(0>part.indexOf(".")&&part==idx){this.__deselectChangedIdx(idx)}}}},{key:"__applySplices",value:function __applySplices(splices){// Adjust selected indices and mark removals
for(var _this30=this,selected=this.__selectedMap,_loop4=function _loop4(_i77){var s=splices[_i77];selected.forEach(function(idx,item){if(idx<s.index){// no change
}else if(idx>=s.index+s.removed.length){// adjust index
selected.set(item,idx+s.addedCount-s.removed.length)}else{// remove index
selected.set(item,-1)}});for(var j=0,idx;j<s.addedCount;j++){idx=s.index+j;if(selected.has(_this30.items[idx])){selected.set(_this30.items[idx],idx)}}},_i77=0;_i77<splices.length;_i77++){_loop4(_i77)}// Update linked paths
this.__updateLinks();// Remove selected items that were removed from the items array
var sidx=0;selected.forEach(function(idx,item){if(0>idx){if(_this30.multi){_this30.splice(JSCompiler_renameProperty("selected",_this30),sidx,1)}else{_this30.selected=_this30.selectedItem=null}selected.delete(item)}else{sidx++}})}},{key:"__updateLinks",value:function __updateLinks(){var _this31=this;this.__dataLinkedPaths={};if(this.multi){var sidx=0;this.__selectedMap.forEach(function(idx){if(0<=idx){_this31.linkPaths("".concat(JSCompiler_renameProperty("items",_this31),".").concat(idx),"".concat(JSCompiler_renameProperty("selected",_this31),".").concat(sidx++))}})}else{this.__selectedMap.forEach(function(idx){_this31.linkPaths(JSCompiler_renameProperty("selected",_this31),"".concat(JSCompiler_renameProperty("items",_this31),".").concat(idx));_this31.linkPaths(JSCompiler_renameProperty("selectedItem",_this31),"".concat(JSCompiler_renameProperty("items",_this31),".").concat(idx))})}}/**
       * Clears the selection state.
       * @override
       * @return {void}
       */},{key:"clearSelection",value:function clearSelection(){// Unbind previous selection
this.__dataLinkedPaths={};// The selected map stores 3 pieces of information:
// key: items array object
// value: items array index
// order: selected array index
this.__selectedMap=new Map;// Initialize selection
this.selected=this.multi?[]:null;this.selectedItem=null}/**
       * Returns whether the item is currently selected.
       *
       * @override
       * @param {*} item Item from `items` array to test
       * @return {boolean} Whether the item is selected
       */},{key:"isSelected",value:function isSelected(item){return this.__selectedMap.has(item)}/**
       * Returns whether the item is currently selected.
       *
       * @override
       * @param {number} idx Index from `items` array to test
       * @return {boolean} Whether the item is selected
       */},{key:"isIndexSelected",value:function isIndexSelected(idx){return this.isSelected(this.items[idx])}},{key:"__deselectChangedIdx",value:function __deselectChangedIdx(idx){var _this32=this,sidx=this.__selectedIndexForItemIndex(idx);if(0<=sidx){var _i78=0;this.__selectedMap.forEach(function(idx,item){if(sidx==_i78++){_this32.deselect(item)}})}}},{key:"__selectedIndexForItemIndex",value:function __selectedIndexForItemIndex(idx){var selected=this.__dataLinkedPaths["".concat(JSCompiler_renameProperty("items",this),".").concat(idx)];if(selected){return parseInt(selected.slice("".concat(JSCompiler_renameProperty("selected",this),".").length),10)}}/**
       * Deselects the given item if it is already selected.
       *
       * @override
       * @param {*} item Item from `items` array to deselect
       * @return {void}
       */},{key:"deselect",value:function deselect(item){var idx=this.__selectedMap.get(item);if(0<=idx){this.__selectedMap.delete(item);var sidx;if(this.multi){sidx=this.__selectedIndexForItemIndex(idx)}this.__updateLinks();if(this.multi){this.splice(JSCompiler_renameProperty("selected",this),sidx,1)}else{this.selected=this.selectedItem=null}}}/**
       * Deselects the given index if it is already selected.
       *
       * @override
       * @param {number} idx Index from `items` array to deselect
       * @return {void}
       */},{key:"deselectIndex",value:function deselectIndex(idx){this.deselect(this.items[idx])}/**
       * Selects the given item.  When `toggle` is true, this will automatically
       * deselect the item if already selected.
       *
       * @override
       * @param {*} item Item from `items` array to select
       * @return {void}
       */},{key:"select",value:function select(item){this.selectIndex(this.items.indexOf(item))}/**
       * Selects the given index.  When `toggle` is true, this will automatically
       * deselect the item if already selected.
       *
       * @override
       * @param {number} idx Index from `items` array to select
       * @return {void}
       */},{key:"selectIndex",value:function selectIndex(idx){var item=this.items[idx];if(!this.isSelected(item)){if(!this.multi){this.__selectedMap.clear()}this.__selectedMap.set(item,idx);this.__updateLinks();if(this.multi){this.push(JSCompiler_renameProperty("selected",this),item)}else{this.selected=this.selectedItem=item}}else if(this.toggle){this.deselectIndex(idx)}}}]);return ArraySelectorMixin}(elementBase);/**
                                                  * @polymer
                                                  * @mixinClass
                                                  * @implements {Polymer_ArraySelectorMixin}
                                                  * @unrestricted
                                                  */return ArraySelectorMixin});// export mixin
_exports.ArraySelectorMixin=ArraySelectorMixin;var baseArraySelector=ArraySelectorMixin(PolymerElement),ArraySelector=/*#__PURE__*/function(_baseArraySelector){babelHelpers.inherits(ArraySelector,_baseArraySelector);function ArraySelector(){babelHelpers.classCallCheck(this,ArraySelector);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ArraySelector).apply(this,arguments))}babelHelpers.createClass(ArraySelector,null,[{key:"is",// Not needed to find template; can be removed once the analyzer
// can find the tag name from customElements.define call
get:function get(){return"array-selector"}},{key:"template",get:function get(){return null}}]);return ArraySelector}(baseArraySelector);/**
                                                             * Element implementing the `ArraySelector` mixin, which records
                                                             * dynamic associations between item paths in a master `items` array and a
                                                             * `selected` array such that path changes to the master array (at the host)
                                                             * element or elsewhere via data-binding) are correctly propagated to items
                                                             * in the selected array and vice-versa.
                                                             *
                                                             * The `items` property accepts an array of user data, and via the
                                                             * `select(item)` and `deselect(item)` API, updates the `selected` property
                                                             * which may be bound to other parts of the application, and any changes to
                                                             * sub-fields of `selected` item(s) will be kept in sync with items in the
                                                             * `items` array.  When `multi` is false, `selected` is a property
                                                             * representing the last selected item.  When `multi` is true, `selected`
                                                             * is an array of multiply selected items.
                                                             *
                                                             * Example:
                                                             *
                                                             * ```js
                                                             * import {PolymerElement} from '@polymer/polymer';
                                                             * import '@polymer/polymer/lib/elements/array-selector.js';
                                                             *
                                                             * class EmployeeList extends PolymerElement {
                                                             *   static get _template() {
                                                             *     return html`
                                                             *         <div> Employee list: </div>
                                                             *         <dom-repeat id="employeeList" items="{{employees}}">
                                                             *           <template>
                                                             *             <div>First name: <span>{{item.first}}</span></div>
                                                             *               <div>Last name: <span>{{item.last}}</span></div>
                                                             *               <button on-click="toggleSelection">Select</button>
                                                             *           </template>
                                                             *         </dom-repeat>
                                                             *
                                                             *         <array-selector id="selector"
                                                             *                         items="{{employees}}"
                                                             *                         selected="{{selected}}"
                                                             *                         multi toggle></array-selector>
                                                             *
                                                             *         <div> Selected employees: </div>
                                                             *         <dom-repeat items="{{selected}}">
                                                             *           <template>
                                                             *             <div>First name: <span>{{item.first}}</span></div>
                                                             *             <div>Last name: <span>{{item.last}}</span></div>
                                                             *           </template>
                                                             *         </dom-repeat>`;
                                                             *   }
                                                             *   static get is() { return 'employee-list'; }
                                                             *   static get properties() {
                                                             *     return {
                                                             *       employees: {
                                                             *         value() {
                                                             *           return [
                                                             *             {first: 'Bob', last: 'Smith'},
                                                             *             {first: 'Sally', last: 'Johnson'},
                                                             *             ...
                                                             *           ];
                                                             *         }
                                                             *       }
                                                             *     };
                                                             *   }
                                                             *   toggleSelection(e) {
                                                             *     const item = this.$.employeeList.itemForElement(e.target);
                                                             *     this.$.selector.select(item);
                                                             *   }
                                                             * }
                                                             * ```
                                                             *
                                                             * @polymer
                                                             * @customElement
                                                             * @extends {baseArraySelector}
                                                             * @appliesMixin ArraySelectorMixin
                                                             * @summary Custom element that links paths between an input `items` array and
                                                             *   an output `selected` item or array based on calls to its selection API.
                                                             */_exports.ArraySelector=ArraySelector;customElements.define(ArraySelector.is,ArraySelector);var arraySelector={ArraySelectorMixin:ArraySelectorMixin,ArraySelector:ArraySelector};/**
   @license
   Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */_exports.$arraySelector=arraySelector;"use strict";var customStyleInterface$1=new CustomStyleInterface;if(!window.ShadyCSS){window.ShadyCSS={/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplate:function prepareTemplate(template,elementName,elementExtends){},// eslint-disable-line no-unused-vars
/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     */prepareTemplateDom:function prepareTemplateDom(template,elementName){},// eslint-disable-line no-unused-vars
/**
     * @param {!HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} elementExtends
     */prepareTemplateStyles:function prepareTemplateStyles(template,elementName,elementExtends){},// eslint-disable-line no-unused-vars
/**
     * @param {Element} element
     * @param {Object=} properties
     */styleSubtree:function styleSubtree(element,properties){customStyleInterface$1.processStyles();updateNativeProperties(element,properties)},/**
     * @param {Element} element
     */styleElement:function styleElement(element){// eslint-disable-line no-unused-vars
customStyleInterface$1.processStyles()},/**
     * @param {Object=} properties
     */styleDocument:function styleDocument(properties){customStyleInterface$1.processStyles();updateNativeProperties(document.body,properties)},/**
     * @param {Element} element
     * @param {string} property
     * @return {string}
     */getComputedStyleValue:function getComputedStyleValue(element,property){return _getComputedStyleValue(element,property)},flushCustomStyles:function flushCustomStyles(){},nativeCss:nativeCssVariables,nativeShadow:nativeShadow,cssBuild:cssBuild,disableRuntime:disableRuntime}}window.ShadyCSS.CustomStyleInterface=customStyleInterface$1;var attr="include",CustomStyleInterface$1=window.ShadyCSS.CustomStyleInterface,CustomStyle=/*#__PURE__*/function(_HTMLElement2){babelHelpers.inherits(CustomStyle,_HTMLElement2);function CustomStyle(){var _this33;babelHelpers.classCallCheck(this,CustomStyle);_this33=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(CustomStyle).call(this));_this33._style=null;CustomStyleInterface$1.addCustomStyle(babelHelpers.assertThisInitialized(_this33));return _this33}/**
     * Returns the light-DOM `<style>` child this element wraps.  Upon first
     * call any style modules referenced via the `include` attribute will be
     * concatenated to this element's `<style>`.
     *
     * @export
     * @return {HTMLStyleElement} This element's light-DOM `<style>`
     */babelHelpers.createClass(CustomStyle,[{key:"getStyle",value:function getStyle(){if(this._style){return this._style}var style=/** @type {HTMLStyleElement} */this.querySelector("style");if(!style){return null}this._style=style;var include=style.getAttribute(attr);if(include){style.removeAttribute(attr);/** @suppress {deprecated} */style.textContent=cssFromModules(include)+style.textContent}/*
      HTML Imports styling the main document are deprecated in Chrome
      https://crbug.com/523952
       If this element is not in the main document, then it must be in an HTML Import document.
      In that case, move the custom style to the main document.
       The ordering of `<custom-style>` should stay the same as when loaded by HTML Imports, but there may be odd
      cases of ordering w.r.t the main document styles.
      */if(this.ownerDocument!==window.document){window.document.head.appendChild(this)}return this._style}}]);return CustomStyle}(babelHelpers.wrapNativeSuper(HTMLElement));_exports.CustomStyle=CustomStyle;window.customElements.define("custom-style",CustomStyle);var customStyle={CustomStyle:CustomStyle};_exports.$customStyle=customStyle;var mutablePropertyChange$1;/** @suppress {missingProperties} */(function(){mutablePropertyChange$1=MutableData._mutablePropertyChange})();/**
       * Legacy element behavior to skip strict dirty-checking for objects and arrays,
       * (always consider them to be "dirty") for use on legacy API Polymer elements.
       *
       * By default, `Polymer.PropertyEffects` performs strict dirty checking on
       * objects, which means that any deep modifications to an object or array will
       * not be propagated unless "immutable" data patterns are used (i.e. all object
       * references from the root to the mutation were changed).
       *
       * Polymer also provides a proprietary data mutation and path notification API
       * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
       * mutation and notification of deep changes in an object graph to all elements
       * bound to the same object graph.
       *
       * In cases where neither immutable patterns nor the data mutation API can be
       * used, applying this mixin will cause Polymer to skip dirty checking for
       * objects and arrays (always consider them to be "dirty").  This allows a
       * user to make a deep modification to a bound object graph, and then either
       * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
       * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
       * elements that wish to be updated based on deep mutations must apply this
       * mixin or otherwise skip strict dirty checking for objects/arrays.
       * Specifically, any elements in the binding tree between the source of a
       * mutation and the consumption of it must apply this behavior or enable the
       * `Polymer.OptionalMutableDataBehavior`.
       *
       * In order to make the dirty check strategy configurable, see
       * `Polymer.OptionalMutableDataBehavior`.
       *
       * Note, the performance characteristics of propagating large object graphs
       * will be worse as opposed to using strict dirty checking with immutable
       * patterns or Polymer's path notification API.
       *
       * @polymerBehavior
       * @summary Behavior to skip strict dirty-checking for objects and
       *   arrays
       */var MutableDataBehavior={/**
   * Overrides `Polymer.PropertyEffects` to provide option for skipping
   * strict equality checking for Objects and Arrays.
   *
   * This method pulls the value to dirty check against from the `__dataTemp`
   * cache (rather than the normal `__data` cache) for Objects.  Since the temp
   * cache is cleared at the end of a turn, this implementation allows
   * side-effects of deep object changes to be processed by re-setting the
   * same object (using the temp cache as an in-turn backstop to prevent
   * cycles due to 2-way notification).
   *
   * @param {string} property Property name
   * @param {*} value New property value
   * @param {*} old Previous property value
   * @return {boolean} Whether the property should be considered a change
   * @protected
   * @override
   */_shouldPropertyChange:function _shouldPropertyChange(property,value,old){return mutablePropertyChange$1(this,property,value,old,!0)}};/**
    * Legacy element behavior to add the optional ability to skip strict
    * dirty-checking for objects and arrays (always consider them to be
    * "dirty") by setting a `mutable-data` attribute on an element instance.
    *
    * By default, `Polymer.PropertyEffects` performs strict dirty checking on
    * objects, which means that any deep modifications to an object or array will
    * not be propagated unless "immutable" data patterns are used (i.e. all object
    * references from the root to the mutation were changed).
    *
    * Polymer also provides a proprietary data mutation and path notification API
    * (e.g. `notifyPath`, `set`, and array mutation API's) that allow efficient
    * mutation and notification of deep changes in an object graph to all elements
    * bound to the same object graph.
    *
    * In cases where neither immutable patterns nor the data mutation API can be
    * used, applying this mixin will allow Polymer to skip dirty checking for
    * objects and arrays (always consider them to be "dirty").  This allows a
    * user to make a deep modification to a bound object graph, and then either
    * simply re-set the object (e.g. `this.items = this.items`) or call `notifyPath`
    * (e.g. `this.notifyPath('items')`) to update the tree.  Note that all
    * elements that wish to be updated based on deep mutations must apply this
    * mixin or otherwise skip strict dirty checking for objects/arrays.
    * Specifically, any elements in the binding tree between the source of a
    * mutation and the consumption of it must enable this behavior or apply the
    * `Polymer.OptionalMutableDataBehavior`.
    *
    * While this behavior adds the ability to forgo Object/Array dirty checking,
    * the `mutableData` flag defaults to false and must be set on the instance.
    *
    * Note, the performance characteristics of propagating large object graphs
    * will be worse by relying on `mutableData: true` as opposed to using
    * strict dirty checking with immutable patterns or Polymer's path notification
    * API.
    *
    * @polymerBehavior
    * @summary Behavior to optionally skip strict dirty-checking for objects and
    *   arrays
    */_exports.MutableDataBehavior=MutableDataBehavior;var OptionalMutableDataBehavior={properties:{/**
     * Instance-level flag for configuring the dirty-checking strategy
     * for this element.  When true, Objects and Arrays will skip dirty
     * checking, otherwise strict equality checking will be used.
     */mutableData:Boolean},/**
   * Overrides `Polymer.PropertyEffects` to skip strict equality checking
   * for Objects and Arrays.
   *
   * Pulls the value to dirty check against from the `__dataTemp` cache
   * (rather than the normal `__data` cache) for Objects.  Since the temp
   * cache is cleared at the end of a turn, this implementation allows
   * side-effects of deep object changes to be processed by re-setting the
   * same object (using the temp cache as an in-turn backstop to prevent
   * cycles due to 2-way notification).
   *
   * @param {string} property Property name
   * @param {*} value New property value
   * @param {*} old Previous property value
   * @return {boolean} Whether the property should be considered a change
   * @protected
   * @override
   */_shouldPropertyChange:function _shouldPropertyChange(property,value,old){return mutablePropertyChange$1(this,property,value,old,this.mutableData)}};_exports.OptionalMutableDataBehavior=OptionalMutableDataBehavior;var mutableDataBehavior={MutableDataBehavior:MutableDataBehavior,OptionalMutableDataBehavior:OptionalMutableDataBehavior};_exports.$mutableDataBehavior=mutableDataBehavior;var Base=LegacyElementMixin(HTMLElement).prototype;_exports.Base=Base;var polymerLegacy={Base:Base,Polymer:Polymer,html:html};_exports.$polymerLegacy=polymerLegacy;var ORPHANS=new Set,IronResizableBehavior={properties:{/**
     * The closest ancestor element that implements `IronResizableBehavior`.
     */_parentResizable:{type:Object,observer:"_parentResizableChanged"},/**
     * True if this element is currently notifying its descendant elements of
     * resize.
     */_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function created(){// We don't really need property effects on these, and also we want them
// to be created before the `_parentResizable` observer fires:
this._interestedResizables=[];this._boundNotifyResize=this.notifyResize.bind(this);this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function attached(){this._requestResizeNotifications()},detached:function detached(){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}else{ORPHANS.delete(this);window.removeEventListener("resize",this._boundNotifyResize)}this._parentResizable=null},/**
   * Can be called to manually notify a resizable and its descendant
   * resizables of a resize change.
   */notifyResize:function notifyResize(){if(!this.isAttached){return}this._interestedResizables.forEach(function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable)}},this);this._fireResize()},/**
   * Used to assign the closest resizable ancestor to this resizable
   * if the ancestor detects a request for notifications.
   */assignParentResizable:function assignParentResizable(parentResizable){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}this._parentResizable=parentResizable;if(parentResizable&&-1===parentResizable._interestedResizables.indexOf(this)){parentResizable._interestedResizables.push(this);parentResizable._subscribeIronResize(this)}},/**
   * Used to remove a resizable descendant from the list of descendants
   * that should be notified of a resize change.
   */stopResizeNotificationsFor:function stopResizeNotificationsFor(target){var index=this._interestedResizables.indexOf(target);if(-1<index){this._interestedResizables.splice(index,1);this._unsubscribeIronResize(target)}},/**
   * Subscribe this element to listen to iron-resize events on the given target.
   *
   * Preferred over target.listen because the property renamer does not
   * understand to rename when the target is not specifically "this"
   *
   * @param {!HTMLElement} target Element to listen to for iron-resize events.
   */_subscribeIronResize:function _subscribeIronResize(target){target.addEventListener("iron-resize",this._boundOnDescendantIronResize)},/**
   * Unsubscribe this element from listening to to iron-resize events on the
   * given target.
   *
   * Preferred over target.unlisten because the property renamer does not
   * understand to rename when the target is not specifically "this"
   *
   * @param {!HTMLElement} target Element to listen to for iron-resize events.
   */_unsubscribeIronResize:function _unsubscribeIronResize(target){target.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},/**
   * This method can be overridden to filter nested elements that should or
   * should not be notified by the current element. Return true if an element
   * should be notified, or false if it should not be notified.
   *
   * @param {HTMLElement} element A candidate descendant element that
   * implements `IronResizableBehavior`.
   * @return {boolean} True if the `element` should be notified of resize.
   */resizerShouldNotify:function resizerShouldNotify(element){return!0},_onDescendantIronResize:function _onDescendantIronResize(event){if(this._notifyingDescendant){event.stopPropagation();return}// no need to use this during shadow dom because of event retargeting
if(!useShadow){this._fireResize()}},_fireResize:function _fireResize(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function _onIronRequestResizeNotifications(event){var target=/** @type {!EventTarget} */dom(event).rootTarget;if(target===this){return}target.assignParentResizable(this);this._notifyDescendant(target);event.stopPropagation()},_parentResizableChanged:function _parentResizableChanged(parentResizable){if(parentResizable){window.removeEventListener("resize",this._boundNotifyResize)}},_notifyDescendant:function _notifyDescendant(descendant){// NOTE(cdata): In IE10, attached is fired on children first, so it's
// important not to notify them if the parent is not attached yet (or
// else they will get redundantly notified when the parent attaches).
if(!this.isAttached){return}this._notifyingDescendant=!0;descendant.notifyResize();this._notifyingDescendant=!1},_requestResizeNotifications:function _requestResizeNotifications(){if(!this.isAttached){return}if("loading"===document.readyState){var _requestResizeNotifications=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function readystatechanged(){document.removeEventListener("readystatechange",readystatechanged);_requestResizeNotifications()})}else{this._findParent();if(!this._parentResizable){// If this resizable is an orphan, tell other orphans to try to find
// their parent again, in case it's this resizable.
ORPHANS.forEach(function(orphan){if(orphan!==this){orphan._findParent()}},this);window.addEventListener("resize",this._boundNotifyResize);this.notifyResize()}else{// If this resizable has a parent, tell other child resizables of
// that parent to try finding their parent again, in case it's this
// resizable.
this._parentResizable._interestedResizables.forEach(function(resizable){if(resizable!==this){resizable._findParent()}},this)}}},_findParent:function _findParent(){this.assignParentResizable(null);this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0});if(!this._parentResizable){ORPHANS.add(this)}else{ORPHANS.delete(this)}}};/**
                          * `IronResizableBehavior` is a behavior that can be used in Polymer elements to
                          * coordinate the flow of resize events between "resizers" (elements that
                          *control the size or hidden state of their children) and "resizables" (elements
                          *that need to be notified when they are resized or un-hidden by their parents
                          *in order to take action on their new measurements).
                          *
                          * Elements that perform measurement should add the `IronResizableBehavior`
                          *behavior to their element definition and listen for the `iron-resize` event on
                          *themselves. This event will be fired when they become showing after having
                          *been hidden, when they are resized explicitly by another resizable, or when
                          *the window has been resized.
                          *
                          * Note, the `iron-resize` event is non-bubbling.
                          *
                          * @polymerBehavior
                          * @demo demo/index.html
                          **/_exports.IronResizableBehavior=IronResizableBehavior;var ironResizableBehavior={IronResizableBehavior:IronResizableBehavior};_exports.$ironResizableBehavior=ironResizableBehavior;var IronScrollTargetBehavior={properties:{/**
     * Specifies the element that will handle the scroll event
     * on the behalf of the current element. This is typically a reference to an
     *element, but there are a few more posibilities:
     *
     * ### Elements id
     *
     *```html
     * <div id="scrollable-element" style="overflow: auto;">
     *  <x-element scroll-target="scrollable-element">
     *    <!-- Content-->
     *  </x-element>
     * </div>
     *```
     * In this case, the `scrollTarget` will point to the outer div element.
     *
     * ### Document scrolling
     *
     * For document scrolling, you can use the reserved word `document`:
     *
     *```html
     * <x-element scroll-target="document">
     *   <!-- Content -->
     * </x-element>
     *```
     *
     * ### Elements reference
     *
     *```js
     * appHeader.scrollTarget = document.querySelector('#scrollable-element');
     *```
     *
     * @type {HTMLElement}
     * @default document
     */scrollTarget:{type:HTMLElement,value:function value(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],/**
   * True if the event listener should be installed.
   */_shouldHaveListener:!0,_scrollTargetChanged:function _scrollTargetChanged(scrollTarget,isAttached){var eventTarget;if(this._oldScrollTarget){this._toggleScrollListener(!1,this._oldScrollTarget);this._oldScrollTarget=null}if(!isAttached){return}// Support element id references
if("document"===scrollTarget){this.scrollTarget=this._doc}else if("string"===typeof scrollTarget){var domHost=this.domHost;this.scrollTarget=domHost&&domHost.$?domHost.$[scrollTarget]:dom(this.ownerDocument).querySelector("#"+scrollTarget)}else if(this._isValidScrollTarget()){this._oldScrollTarget=scrollTarget;this._toggleScrollListener(this._shouldHaveListener,scrollTarget)}},/**
   * Runs on every scroll event. Consumer of this behavior may override this
   * method.
   *
   * @protected
   */_scrollHandler:function scrollHandler(){},/**
   * The default scroll target. Consumers of this behavior may want to customize
   * the default scroll target.
   *
   * @type {Element}
   */get _defaultScrollTarget(){return this._doc},/**
   * Shortcut for the document element
   *
   * @type {Element}
   */get _doc(){return this.ownerDocument.documentElement},/**
   * Gets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */get _scrollTop(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop}return 0},/**
   * Gets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */get _scrollLeft(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft}return 0},/**
   * Sets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */set _scrollTop(top){if(this.scrollTarget===this._doc){window.scrollTo(window.pageXOffset,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollTop=top}},/**
   * Sets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */set _scrollLeft(left){if(this.scrollTarget===this._doc){window.scrollTo(left,window.pageYOffset)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left}},/**
   * Scrolls the content to a particular place.
   *
   * @method scroll
   * @param {number|!{left: number, top: number}} leftOrOptions The left position or scroll options
   * @param {number=} top The top position
   * @return {void}
   */scroll:function scroll(leftOrOptions,top){var left;if("object"===babelHelpers.typeof(leftOrOptions)){left=leftOrOptions.left;top=leftOrOptions.top}else{left=leftOrOptions}left=left||0;top=top||0;if(this.scrollTarget===this._doc){window.scrollTo(left,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left;this.scrollTarget.scrollTop=top}},/**
   * Gets the width of the scroll target.
   *
   * @type {number}
   */get _scrollTargetWidth(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth}return 0},/**
   * Gets the height of the scroll target.
   *
   * @type {number}
   */get _scrollTargetHeight(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight}return 0},/**
   * Returns true if the scroll target is a valid HTMLElement.
   *
   * @return {boolean}
   */_isValidScrollTarget:function _isValidScrollTarget(){return babelHelpers.instanceof(this.scrollTarget,HTMLElement)},_toggleScrollListener:function _toggleScrollListener(yes,scrollTarget){var eventTarget=scrollTarget===this._doc?window:scrollTarget;if(yes){if(!this._boundScrollHandler){this._boundScrollHandler=this._scrollHandler.bind(this);eventTarget.addEventListener("scroll",this._boundScrollHandler)}}else{if(this._boundScrollHandler){eventTarget.removeEventListener("scroll",this._boundScrollHandler);this._boundScrollHandler=null}}},/**
   * Enables or disables the scroll event listener.
   *
   * @param {boolean} yes True to add the event, False to remove it.
   */toggleScrollListener:function toggleScrollListener(yes){this._shouldHaveListener=yes;this._toggleScrollListener(yes,this.scrollTarget)}};_exports.IronScrollTargetBehavior=IronScrollTargetBehavior;var ironScrollTargetBehavior={IronScrollTargetBehavior:IronScrollTargetBehavior};/**
    * @polymerMixin
    */_exports.$ironScrollTargetBehavior=ironScrollTargetBehavior;var ThemePropertyMixin=function ThemePropertyMixin(superClass){return(/*#__PURE__*/function(_superClass6){babelHelpers.inherits(VaadinThemePropertyMixin,_superClass6);function VaadinThemePropertyMixin(){babelHelpers.classCallCheck(this,VaadinThemePropertyMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(VaadinThemePropertyMixin).apply(this,arguments))}babelHelpers.createClass(VaadinThemePropertyMixin,[{key:"attributeChangedCallback",/** @protected */value:function attributeChangedCallback(name,oldValue,newValue){babelHelpers.get(babelHelpers.getPrototypeOf(VaadinThemePropertyMixin.prototype),"attributeChangedCallback",this).call(this,name,oldValue,newValue);if("theme"===name){this._setTheme(newValue)}}}],[{key:"properties",get:function get(){return{/**
       * Helper property with theme attribute value facilitating propagation
       * in shadow DOM. Allows using `theme$="[[theme]]"` in the template.
       *
       * @protected
       */theme:{type:String,readOnly:!0}}}}]);return VaadinThemePropertyMixin}(superClass))};_exports.ThemePropertyMixin=ThemePropertyMixin;var vaadinThemePropertyMixin={ThemePropertyMixin:ThemePropertyMixin};_exports.$vaadinThemePropertyMixin=vaadinThemePropertyMixin;var ThemableMixin=function ThemableMixin(superClass){return(/*#__PURE__*/function(_ThemePropertyMixin){babelHelpers.inherits(VaadinThemableMixin,_ThemePropertyMixin);function VaadinThemableMixin(){babelHelpers.classCallCheck(this,VaadinThemableMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(VaadinThemableMixin).apply(this,arguments))}babelHelpers.createClass(VaadinThemableMixin,null,[{key:"finalize",/** @protected */value:function finalize(){var _this34=this;babelHelpers.get(babelHelpers.getPrototypeOf(VaadinThemableMixin),"finalize",this).call(this);var template=this.prototype._template,hasOwnTemplate=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,inheritedTemplate=Object.getPrototypeOf(this.prototype)._template;if(inheritedTemplate&&!hasOwnTemplate){// The element doesn't define its own template -> include the theme modules from the inherited template
Array.from(inheritedTemplate.content.querySelectorAll("style[include]")).forEach(function(s){_this34._includeStyle(s.getAttribute("include"),template)})}this._includeMatchingThemes(template)}/** @protected */},{key:"_includeMatchingThemes",value:function _includeMatchingThemes(template){var _this35=this,domModule=DomModule,modules=domModule.prototype.modules,hasThemes=!1,defaultModuleName=this.is+"-default-theme";Object.keys(modules).sort(function(moduleNameA,moduleNameB){var vaadinA=0===moduleNameA.indexOf("vaadin-"),vaadinB=0===moduleNameB.indexOf("vaadin-"),vaadinThemePrefixes=["lumo-","material-"],vaadinThemeA=0<vaadinThemePrefixes.filter(function(prefix){return 0===moduleNameA.indexOf(prefix)}).length,vaadinThemeB=0<vaadinThemePrefixes.filter(function(prefix){return 0===moduleNameB.indexOf(prefix)}).length;if(vaadinA!==vaadinB){// Include vaadin core styles first
return vaadinA?-1:1}else if(vaadinThemeA!==vaadinThemeB){// Include vaadin theme styles after that
return vaadinThemeA?-1:1}else{// Lastly include custom styles so they override all vaadin styles
return 0}}).forEach(function(moduleName){if(moduleName!==defaultModuleName){var themeFor=modules[moduleName].getAttribute("theme-for");if(themeFor){themeFor.split(" ").forEach(function(themeForToken){if(new RegExp("^"+themeForToken.split("*").join(".*")+"$").test(_this35.is)){hasThemes=!0;_this35._includeStyle(moduleName,template)}})}}});if(!hasThemes&&modules[defaultModuleName]){// No theme modules found, include the default module if it exists
this._includeStyle(defaultModuleName,template)}}/** @private */},{key:"_includeStyle",value:function _includeStyle(moduleName,template){if(template&&!template.content.querySelector("style[include=\"".concat(moduleName,"\"]"))){var styleEl=document.createElement("style");styleEl.setAttribute("include",moduleName);template.content.appendChild(styleEl)}}}]);return VaadinThemableMixin}(ThemePropertyMixin(superClass)))};_exports.ThemableMixin=ThemableMixin;var vaadinThemableMixin={ThemableMixin:ThemableMixin};/**
   @license
   Copyright (c) 2017 Vaadin Ltd.
   This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */ /**
       * A private mixin to avoid problems with dynamic properties and Polymer Analyzer.
       * No need to expose these properties in the API docs.
       * @polymerMixin
       */_exports.$vaadinThemableMixin=vaadinThemableMixin;var TabIndexMixin=function TabIndexMixin(superClass){return(/*#__PURE__*/function(_superClass7){babelHelpers.inherits(VaadinTabIndexMixin,_superClass7);function VaadinTabIndexMixin(){babelHelpers.classCallCheck(this,VaadinTabIndexMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(VaadinTabIndexMixin).apply(this,arguments))}babelHelpers.createClass(VaadinTabIndexMixin,null,[{key:"properties",get:function get(){var properties={/**
       * Internal property needed to listen to `tabindex` attribute changes.
       *
       * For changing the tabindex of this component use the native `tabIndex` property.
       * @private
       */tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};if(window.ShadyDOM){// ShadyDOM browsers need the `tabIndex` in order to notify when the user changes it programmatically.
properties.tabIndex=properties.tabindex}return properties}}]);return VaadinTabIndexMixin}(superClass))},ControlStateMixin=function ControlStateMixin(superClass){return(/*#__PURE__*/function(_TabIndexMixin){babelHelpers.inherits(VaadinControlStateMixin,_TabIndexMixin);function VaadinControlStateMixin(){babelHelpers.classCallCheck(this,VaadinControlStateMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(VaadinControlStateMixin).apply(this,arguments))}babelHelpers.createClass(VaadinControlStateMixin,[{key:"ready",value:function ready(){var _this36=this;this.addEventListener("focusin",function(e){if(e.composedPath()[0]===_this36){_this36._focus(e)}else if(-1!==e.composedPath().indexOf(_this36.focusElement)&&!_this36.disabled){_this36._setFocused(!0)}});this.addEventListener("focusout",function(e){return _this36._setFocused(!1)});// In super.ready() other 'focusin' and 'focusout' listeners might be
// added, so we call it after our own ones to ensure they execute first.
// Issue to watch out: when incorrect, <vaadin-combo-box> refocuses the
// input field on iOS after “Done” is pressed.
babelHelpers.get(babelHelpers.getPrototypeOf(VaadinControlStateMixin.prototype),"ready",this).call(this);// This fixes the bug in Firefox 61 (https://bugzilla.mozilla.org/show_bug.cgi?id=1472887)
// where focusout event does not go out of shady DOM because composed property in the event is not true
var ensureEventComposed=function ensureEventComposed(e){if(!e.composed){e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}))}};this.shadowRoot.addEventListener("focusin",ensureEventComposed);this.shadowRoot.addEventListener("focusout",ensureEventComposed);this.addEventListener("keydown",function(e){if(!e.defaultPrevented&&9===e.keyCode){if(e.shiftKey){// Flag is checked in _focus event handler.
_this36._isShiftTabbing=!0;HTMLElement.prototype.focus.apply(_this36);_this36._setFocused(!1);// Event handling in IE is asynchronous and the flag is removed asynchronously as well
setTimeout(function(){return _this36._isShiftTabbing=!1},0)}else{// Workaround for FF63-65 bug that causes the focus to get lost when
// blurring a slotted component with focusable shadow root content
// https://bugzilla.mozilla.org/show_bug.cgi?id=1528686
// TODO: Remove when safe
var _firefox=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(_firefox&&63<=parseFloat(_firefox[1])&&66>parseFloat(_firefox[1])&&_this36.parentNode&&_this36.nextSibling){var fakeTarget=document.createElement("input");fakeTarget.style.position="absolute";fakeTarget.style.opacity=0;fakeTarget.tabIndex=_this36.tabIndex;_this36.parentNode.insertBefore(fakeTarget,_this36.nextSibling);fakeTarget.focus();fakeTarget.addEventListener("focusout",function(){return _this36.parentNode.removeChild(fakeTarget)})}}}});if(this.autofocus&&!this.focused&&!this.disabled){window.requestAnimationFrame(function(){_this36._focus();_this36._setFocused(!0);_this36.setAttribute("focus-ring","")})}this._boundKeydownListener=this._bodyKeydownListener.bind(this);this._boundKeyupListener=this._bodyKeyupListener.bind(this)}/**
     * @protected
     */},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(VaadinControlStateMixin.prototype),"connectedCallback",this).call(this);document.body.addEventListener("keydown",this._boundKeydownListener,!0);document.body.addEventListener("keyup",this._boundKeyupListener,!0)}/**
     * @protected
     */},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(VaadinControlStateMixin.prototype),"disconnectedCallback",this).call(this);document.body.removeEventListener("keydown",this._boundKeydownListener,!0);document.body.removeEventListener("keyup",this._boundKeyupListener,!0);// in non-Chrome browsers, blur does not fire on the element when it is disconnected.
// reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.
if(this.hasAttribute("focused")){this._setFocused(!1)}}},{key:"_setFocused",value:function _setFocused(focused){if(focused){this.setAttribute("focused","")}else{this.removeAttribute("focused")}// focus-ring is true when the element was focused from the keyboard.
// Focus Ring [A11ycasts]: https://youtu.be/ilj2P5-5CjI
if(focused&&this._tabPressed){this.setAttribute("focus-ring","")}else{this.removeAttribute("focus-ring")}}},{key:"_bodyKeydownListener",value:function _bodyKeydownListener(e){this._tabPressed=9===e.keyCode}},{key:"_bodyKeyupListener",value:function _bodyKeyupListener(){this._tabPressed=!1}/**
     * Any element extending this mixin is required to implement this getter.
     * It returns the actual focusable element in the component.
     */},{key:"_focus",value:function _focus(e){if(this._isShiftTabbing){return}this.focusElement.focus();this._setFocused(!0)}/**
     * Moving the focus from the host element causes firing of the blur event what leads to problems in IE.
     * @private
     */},{key:"focus",value:function focus(){if(!this.focusElement||this.disabled){return}this.focusElement.focus();this._setFocused(!0)}/**
     * Native bluring in the host element does nothing because it does not have the focus.
     * In chrome it works, but not in FF.
     * @private
     */},{key:"blur",value:function blur(){this.focusElement.blur();this._setFocused(!1)}},{key:"_disabledChanged",value:function _disabledChanged(disabled){this.focusElement.disabled=disabled;if(disabled){this.blur();this._previousTabIndex=this.tabindex;this.tabindex=-1;this.setAttribute("aria-disabled","true")}else{if("undefined"!==typeof this._previousTabIndex){this.tabindex=this._previousTabIndex}this.removeAttribute("aria-disabled")}}},{key:"_tabindexChanged",value:function _tabindexChanged(tabindex){if(tabindex!==void 0){this.focusElement.tabIndex=tabindex}if(this.disabled&&this.tabindex){// If tabindex attribute was changed while checkbox was disabled
if(-1!==this.tabindex){this._previousTabIndex=this.tabindex}this.tabindex=tabindex=void 0}if(window.ShadyDOM){this.setProperties({tabIndex:tabindex,tabindex:tabindex})}}/**
     * @protected
     */},{key:"click",value:function click(){if(!this.disabled){babelHelpers.get(babelHelpers.getPrototypeOf(VaadinControlStateMixin.prototype),"click",this).call(this)}}},{key:"focusElement",get:function get(){window.console.warn("Please implement the 'focusElement' property in <".concat(this.localName,">"));return this}}],[{key:"properties",get:function get(){return{/**
       * Specify that this control should have input focus when the page loads.
       */autofocus:{type:Boolean},/**
       * Stores the previous value of tabindex attribute of the disabled element
       */_previousTabIndex:{type:Number},/**
       * If true, the user cannot interact with this element.
       */disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}}]);return VaadinControlStateMixin}(TabIndexMixin(superClass)))};/**
    * Polymer.IronControlState is not a proper 2.0 class, also, its tabindex
    * implementation fails in the shadow dom, so we have this for vaadin elements.
    * @polymerMixin
    */_exports.ControlStateMixin=ControlStateMixin;var vaadinControlStateMixin={ControlStateMixin:ControlStateMixin};_exports.$vaadinControlStateMixin=vaadinControlStateMixin;var DEV_MODE_CODE_REGEXP=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,FlowClients=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function isMinified(){function test(){/** vaadin-dev-mode:start
    return false;
    vaadin-dev-mode:end **/return!0}return uncommentAndRun(test)}function isDevelopmentMode(){try{if(isForcedDevelopmentMode()){return!0}if(!isLocalhost()){return!1}if(FlowClients){return!isFlowProductionMode()}return!isMinified()}catch(e){// Some error in this code, assume production so no further actions will be taken
return!1}}function isForcedDevelopmentMode(){return localStorage.getItem("vaadin.developmentmode.force")}function isLocalhost(){return 0<=["localhost","127.0.0.1"].indexOf(window.location.hostname)}function isFlowProductionMode(){if(FlowClients){var productionModeApps=Object.keys(FlowClients).map(function(key){return FlowClients[key]}).filter(function(client){return client.productionMode});if(0<productionModeApps.length){return!0}}return!1}function uncommentAndRun(callback,args){if("function"!==typeof callback){return}var match=DEV_MODE_CODE_REGEXP.exec(callback.toString());if(match){try{// requires CSP: script-src 'unsafe-eval'
callback=new Function(match[1])}catch(e){// eat the exception
console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}}return callback(args)}// A guard against polymer-modulizer removing the window.Vaadin
// initialization above.
window.Vaadin=window.Vaadin||{};/**
                                            * Inspects the source code of the given `callback` function for
                                            * specially-marked _commented_ code. If such commented code is found in the
                                            * callback source, uncomments and runs that code instead of the callback
                                            * itself. Otherwise runs the callback as is.
                                            *
                                            * The optional arguments are passed into the callback / uncommented code,
                                            * the result is returned.
                                            *
                                            * See the `isMinified()` function source code in this file for an example.
                                            *
                                            */var runIfDevelopmentMode=function runIfDevelopmentMode(callback,args){if(window.Vaadin.developmentMode){return uncommentAndRun(callback,args)}};_exports.runIfDevelopmentMode=runIfDevelopmentMode;if(window.Vaadin.developmentMode===void 0){window.Vaadin.developmentMode=isDevelopmentMode()}var vaadinDevelopmentModeDetector={runIfDevelopmentMode:runIfDevelopmentMode};_exports.$vaadinDevelopmentModeDetector=vaadinDevelopmentModeDetector;function maybeGatherAndSendStats(){/** vaadin-dev-mode:start
                                    (function () {
                                    'use strict';
                                    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                                    return typeof obj;
                                    } : function (obj) {
                                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                    };
                                    var classCallCheck = function (instance, Constructor) {
                                    if (!(instance instanceof Constructor)) {
                                      throw new TypeError("Cannot call a class as a function");
                                    }
                                    };
                                    var createClass = function () {
                                    function defineProperties(target, props) {
                                      for (var i = 0; i < props.length; i++) {
                                        var descriptor = props[i];
                                        descriptor.enumerable = descriptor.enumerable || false;
                                        descriptor.configurable = true;
                                        if ("value" in descriptor) descriptor.writable = true;
                                        Object.defineProperty(target, descriptor.key, descriptor);
                                      }
                                    }
                                     return function (Constructor, protoProps, staticProps) {
                                      if (protoProps) defineProperties(Constructor.prototype, protoProps);
                                      if (staticProps) defineProperties(Constructor, staticProps);
                                      return Constructor;
                                    };
                                    }();
                                    var getPolymerVersion = function getPolymerVersion() {
                                    return window.Polymer && window.Polymer.version;
                                    };
                                    var StatisticsGatherer = function () {
                                    function StatisticsGatherer(logger) {
                                      classCallCheck(this, StatisticsGatherer);
                                       this.now = new Date().getTime();
                                      this.logger = logger;
                                    }
                                     createClass(StatisticsGatherer, [{
                                      key: 'frameworkVersionDetectors',
                                      value: function frameworkVersionDetectors() {
                                        return {
                                          'Flow': function Flow() {
                                            if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
                                              var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
                                                return window.Vaadin.Flow.clients[key];
                                              }).filter(function (client) {
                                                return client.getVersionInfo;
                                              }).map(function (client) {
                                                return client.getVersionInfo().flow;
                                              });
                                              if (flowVersions.length > 0) {
                                                return flowVersions[0];
                                              }
                                            }
                                          },
                                          'Vaadin Framework': function VaadinFramework() {
                                            if (window.vaadin && window.vaadin.clients) {
                                              var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
                                                return client.getVersionInfo;
                                              }).map(function (client) {
                                                return client.getVersionInfo().vaadinVersion;
                                              });
                                              if (frameworkVersions.length > 0) {
                                                return frameworkVersions[0];
                                              }
                                            }
                                          },
                                          'AngularJs': function AngularJs() {
                                            if (window.angular && window.angular.version && window.angular.version) {
                                              return window.angular.version.full;
                                            }
                                          },
                                          'Angular': function Angular() {
                                            if (window.ng) {
                                              var tags = document.querySelectorAll("[ng-version]");
                                              if (tags.length > 0) {
                                                return tags[0].getAttribute("ng-version");
                                              }
                                              return "Unknown";
                                            }
                                          },
                                          'Backbone.js': function BackboneJs() {
                                            if (window.Backbone) {
                                              return window.Backbone.VERSION;
                                            }
                                          },
                                          'React': function React() {
                                            var reactSelector = '[data-reactroot], [data-reactid]';
                                            if (!!document.querySelector(reactSelector)) {
                                              // React does not publish the version by default
                                              return "unknown";
                                            }
                                          },
                                          'Ember': function Ember() {
                                            if (window.Em && window.Em.VERSION) {
                                              return window.Em.VERSION;
                                            } else if (window.Ember && window.Ember.VERSION) {
                                              return window.Ember.VERSION;
                                            }
                                          },
                                          'jQuery': function (_jQuery) {
                                            function jQuery() {
                                              return _jQuery.apply(this, arguments);
                                            }
                                             jQuery.toString = function () {
                                              return _jQuery.toString();
                                            };
                                             return jQuery;
                                          }(function () {
                                            if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
                                              return jQuery.prototype.jquery;
                                            }
                                          }),
                                          'Polymer': function Polymer() {
                                            var version = getPolymerVersion();
                                            if (version) {
                                              return version;
                                            }
                                          },
                                          'LitElement': function LitElement() {
                                            var version = window.litElementVersions && window.litElementVersions[0];
                                            if (version) {
                                              return version;
                                            }
                                          },
                                          'LitHtml': function LitHtml() {
                                            var version = window.litHtmlVersions && window.litHtmlVersions[0];
                                            if (version) {
                                              return version;
                                            }
                                          },
                                          'Vue.js': function VueJs() {
                                            if (window.Vue) {
                                              return window.Vue.version;
                                            }
                                          }
                                        };
                                      }
                                    }, {
                                      key: 'getUsedVaadinElements',
                                      value: function getUsedVaadinElements(elements) {
                                        var version = getPolymerVersion();
                                        var elementClasses = void 0;
                                        if (version && version.indexOf('2') === 0) {
                                          // Polymer 2: components classes are stored in window.Vaadin
                                          elementClasses = Object.keys(window.Vaadin).map(function (c) {
                                            return window.Vaadin[c];
                                          }).filter(function (c) {
                                            return c.is;
                                          });
                                        } else {
                                          // Polymer 3: components classes are stored in window.Vaadin.registrations
                                          elementClasses = window.Vaadin.registrations || [];
                                        }
                                        elementClasses.forEach(function (klass) {
                                          var version = klass.version ? klass.version : "0.0.0";
                                          elements[klass.is] = { version: version };
                                        });
                                      }
                                    }, {
                                      key: 'getUsedVaadinThemes',
                                      value: function getUsedVaadinThemes(themes) {
                                        ['Lumo', 'Material'].forEach(function (themeName) {
                                          var theme;
                                          var version = getPolymerVersion();
                                          if (version && version.indexOf('2') === 0) {
                                            // Polymer 2: themes are stored in window.Vaadin
                                            theme = window.Vaadin[themeName];
                                          } else {
                                            // Polymer 3: themes are stored in custom element registry
                                            theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
                                          }
                                          if (theme && theme.version) {
                                            themes[themeName] = { version: theme.version };
                                          }
                                        });
                                      }
                                    }, {
                                      key: 'getFrameworks',
                                      value: function getFrameworks(frameworks) {
                                        var detectors = this.frameworkVersionDetectors();
                                        Object.keys(detectors).forEach(function (framework) {
                                          var detector = detectors[framework];
                                          try {
                                            var version = detector();
                                            if (version) {
                                              frameworks[framework] = { version: version };
                                            }
                                          } catch (e) {}
                                        });
                                      }
                                    }, {
                                      key: 'gather',
                                      value: function gather(storage) {
                                        var storedStats = storage.read();
                                        var gatheredStats = {};
                                        var types = ["elements", "frameworks", "themes"];
                                         types.forEach(function (type) {
                                          gatheredStats[type] = {};
                                          if (!storedStats[type]) {
                                            storedStats[type] = {};
                                          }
                                        });
                                         var previousStats = JSON.stringify(storedStats);
                                         this.getUsedVaadinElements(gatheredStats.elements);
                                        this.getFrameworks(gatheredStats.frameworks);
                                        this.getUsedVaadinThemes(gatheredStats.themes);
                                         var now = this.now;
                                        types.forEach(function (type) {
                                          var keys = Object.keys(gatheredStats[type]);
                                          keys.forEach(function (key) {
                                            if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
                                              storedStats[type][key] = { firstUsed: now };
                                            }
                                            // Discards any previously logged version number
                                            storedStats[type][key].version = gatheredStats[type][key].version;
                                            storedStats[type][key].lastUsed = now;
                                          });
                                        });
                                         var newStats = JSON.stringify(storedStats);
                                        storage.write(newStats);
                                        if (newStats != previousStats && Object.keys(storedStats).length > 0) {
                                          this.logger.debug("New stats: " + newStats);
                                        }
                                      }
                                    }]);
                                    return StatisticsGatherer;
                                    }();
                                    var StatisticsStorage = function () {
                                    function StatisticsStorage(key) {
                                      classCallCheck(this, StatisticsStorage);
                                       this.key = key;
                                    }
                                     createClass(StatisticsStorage, [{
                                      key: 'read',
                                      value: function read() {
                                        var localStorageStatsString = localStorage.getItem(this.key);
                                        try {
                                          return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
                                        } catch (e) {
                                          return {};
                                        }
                                      }
                                    }, {
                                      key: 'write',
                                      value: function write(data) {
                                        localStorage.setItem(this.key, data);
                                      }
                                    }, {
                                      key: 'clear',
                                      value: function clear() {
                                        localStorage.removeItem(this.key);
                                      }
                                    }, {
                                      key: 'isEmpty',
                                      value: function isEmpty() {
                                        var storedStats = this.read();
                                        var empty = true;
                                        Object.keys(storedStats).forEach(function (key) {
                                          if (Object.keys(storedStats[key]).length > 0) {
                                            empty = false;
                                          }
                                        });
                                         return empty;
                                      }
                                    }]);
                                    return StatisticsStorage;
                                    }();
                                    var StatisticsSender = function () {
                                    function StatisticsSender(url, logger) {
                                      classCallCheck(this, StatisticsSender);
                                       this.url = url;
                                      this.logger = logger;
                                    }
                                     createClass(StatisticsSender, [{
                                      key: 'send',
                                      value: function send(data, errorHandler) {
                                        var logger = this.logger;
                                         if (navigator.onLine === false) {
                                          logger.debug("Offline, can't send");
                                          errorHandler();
                                          return;
                                        }
                                        logger.debug("Sending data to " + this.url);
                                         var req = new XMLHttpRequest();
                                        req.withCredentials = true;
                                        req.addEventListener("load", function () {
                                          // Stats sent, nothing more to do
                                          logger.debug("Response: " + req.responseText);
                                        });
                                        req.addEventListener("error", function () {
                                          logger.debug("Send failed");
                                          errorHandler();
                                        });
                                        req.addEventListener("abort", function () {
                                          logger.debug("Send aborted");
                                          errorHandler();
                                        });
                                        req.open("POST", this.url);
                                        req.setRequestHeader("Content-Type", "application/json");
                                        req.send(data);
                                      }
                                    }]);
                                    return StatisticsSender;
                                    }();
                                    var StatisticsLogger = function () {
                                    function StatisticsLogger(id) {
                                      classCallCheck(this, StatisticsLogger);
                                       this.id = id;
                                    }
                                     createClass(StatisticsLogger, [{
                                      key: '_isDebug',
                                      value: function _isDebug() {
                                        return localStorage.getItem("vaadin." + this.id + ".debug");
                                      }
                                    }, {
                                      key: 'debug',
                                      value: function debug(msg) {
                                        if (this._isDebug()) {
                                          console.info(this.id + ": " + msg);
                                        }
                                      }
                                    }]);
                                    return StatisticsLogger;
                                    }();
                                    var UsageStatistics = function () {
                                    function UsageStatistics() {
                                      classCallCheck(this, UsageStatistics);
                                       this.now = new Date();
                                      this.timeNow = this.now.getTime();
                                      this.gatherDelay = 10; // Delay between loading this file and gathering stats
                                      this.initialDelay = 24 * 60 * 60;
                                       this.logger = new StatisticsLogger("statistics");
                                      this.storage = new StatisticsStorage("vaadin.statistics.basket");
                                      this.gatherer = new StatisticsGatherer(this.logger);
                                      this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
                                    }
                                     createClass(UsageStatistics, [{
                                      key: 'maybeGatherAndSend',
                                      value: function maybeGatherAndSend() {
                                        var _this = this;
                                         if (localStorage.getItem(UsageStatistics.optOutKey)) {
                                          return;
                                        }
                                        this.gatherer.gather(this.storage);
                                        setTimeout(function () {
                                          _this.maybeSend();
                                        }, this.gatherDelay * 1000);
                                      }
                                    }, {
                                      key: 'lottery',
                                      value: function lottery() {
                                        return Math.random() <= 0.05;
                                      }
                                    }, {
                                      key: 'currentMonth',
                                      value: function currentMonth() {
                                        return this.now.getYear() * 12 + this.now.getMonth();
                                      }
                                    }, {
                                      key: 'maybeSend',
                                      value: function maybeSend() {
                                        var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
                                        var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));
                                         if (!firstUse) {
                                          // Use a grace period to avoid interfering with tests, incognito mode etc
                                          firstUse = this.timeNow;
                                          localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
                                        }
                                         if (this.timeNow < firstUse + this.initialDelay * 1000) {
                                          this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
                                          return;
                                        }
                                        if (this.currentMonth() <= monthProcessed) {
                                          this.logger.debug("This month has already been processed");
                                          return;
                                        }
                                        localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
                                        // Use random sampling
                                        if (this.lottery()) {
                                          this.logger.debug("Congratulations, we have a winner!");
                                        } else {
                                          this.logger.debug("Sorry, no stats from you this time");
                                          return;
                                        }
                                         this.send();
                                      }
                                    }, {
                                      key: 'send',
                                      value: function send() {
                                        // Ensure we have the latest data
                                        this.gatherer.gather(this.storage);
                                         // Read, send and clean up
                                        var data = this.storage.read();
                                        data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
                                        data["usageStatisticsVersion"] = UsageStatistics.version;
                                        var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
                                        var self = this;
                                        this.sender.send(info + JSON.stringify(data), function () {
                                          // Revert the 'month processed' flag
                                          localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
                                        });
                                      }
                                    }], [{
                                      key: 'version',
                                      get: function get$1() {
                                        return '2.0.8';
                                      }
                                    }, {
                                      key: 'firstUseKey',
                                      get: function get$1() {
                                        return 'vaadin.statistics.firstuse';
                                      }
                                    }, {
                                      key: 'monthProcessedKey',
                                      get: function get$1() {
                                        return 'vaadin.statistics.monthProcessed';
                                      }
                                    }, {
                                      key: 'optOutKey',
                                      get: function get$1() {
                                        return 'vaadin.statistics.optout';
                                      }
                                    }]);
                                    return UsageStatistics;
                                    }();
                                    try {
                                    window.Vaadin = window.Vaadin || {};
                                    window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
                                    window.Vaadin.usageStatsChecker.maybeGatherAndSend();
                                    } catch (e) {
                                    // Intentionally ignored as this is not a problem in the app being developed
                                    }
                                    }());
                                     vaadin-dev-mode:end **/}var usageStatistics=function usageStatistics(){if("function"===typeof runIfDevelopmentMode){return runIfDevelopmentMode(maybeGatherAndSendStats)}};_exports.usageStatistics=usageStatistics;var vaadinUsageStatistics={usageStatistics:usageStatistics};_exports.$vaadinUsageStatistics=vaadinUsageStatistics;if(!window.Vaadin){window.Vaadin={}}/**
   * Array of Vaadin custom element classes that have been finalized.
   */window.Vaadin.registrations=window.Vaadin.registrations||[];// Use the hack to prevent polymer-modulizer from converting to exports
window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{};window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){if(usageStatistics){usageStatistics()}};var statsJob,ElementMixin$1=function ElementMixin$1(superClass){return(/*#__PURE__*/function(_superClass8){babelHelpers.inherits(VaadinElementMixin,_superClass8);function VaadinElementMixin(){babelHelpers.classCallCheck(this,VaadinElementMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(VaadinElementMixin).apply(this,arguments))}babelHelpers.createClass(VaadinElementMixin,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(VaadinElementMixin.prototype),"ready",this).call(this);if(null===document.doctype){console.warn("Vaadin components require the \"standards mode\" declaration. Please add <!DOCTYPE html> to the HTML document.")}}}],[{key:"_finalizeClass",/** @protected */value:function _finalizeClass(){babelHelpers.get(babelHelpers.getPrototypeOf(VaadinElementMixin),"_finalizeClass",this).call(this);// Registers a class prototype for telemetry purposes.
if(this.is){window.Vaadin.registrations.push(this);if(window.Vaadin.developmentModeCallback){statsJob=Debouncer.debounce(statsJob,idlePeriod,function(){window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()});enqueueDebouncer(statsJob)}}}}]);return VaadinElementMixin}(superClass))};/**
               * @polymerMixin
               */_exports.ElementMixin$1=ElementMixin$1;var vaadinElementMixin={ElementMixin:ElementMixin$1};_exports.$vaadinElementMixin=vaadinElementMixin;var ButtonElement=/*#__PURE__*/function(_ElementMixin$){babelHelpers.inherits(ButtonElement,_ElementMixin$);function ButtonElement(){babelHelpers.classCallCheck(this,ButtonElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ButtonElement).apply(this,arguments))}babelHelpers.createClass(ButtonElement,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(ButtonElement.prototype),"ready",this).call(this);// Leaving default role in the native button, makes navigation announcement
// being different when using focus navigation (tab) versus using normal
// navigation (arrows). The first way announces the label on a button
// since the focus is moved programmatically, and the second on a group.
this.setAttribute("role","button");this.$.button.setAttribute("role","presentation");this._addActiveListeners()}/**
     * @protected
     */},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(ButtonElement.prototype),"disconnectedCallback",this).call(this);// `active` state is preserved when the element is disconnected between keydown and keyup events.
// reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.
if(this.hasAttribute("active")){this.removeAttribute("active")}}},{key:"_addActiveListeners",value:function _addActiveListeners(){var _this37=this;addListener(this,"down",function(){return!_this37.disabled&&_this37.setAttribute("active","")});addListener(this,"up",function(){return _this37.removeAttribute("active")});this.addEventListener("keydown",function(e){return!_this37.disabled&&0<=[13,32].indexOf(e.keyCode)&&_this37.setAttribute("active","")});this.addEventListener("keyup",function(){return _this37.removeAttribute("active")});this.addEventListener("blur",function(){return _this37.removeAttribute("active")})}/**
     * @protected
     */},{key:"focusElement",get:function get(){return this.$.button}}],[{key:"template",get:function get(){return html(_templateObject_7280bdd0bea211e98f44c3131ec74eb1())}},{key:"is",get:function get(){return"vaadin-button"}},{key:"version",get:function get(){return"2.2.1"}}]);return ButtonElement}(ElementMixin$1(ControlStateMixin(ThemableMixin(GestureEventListeners(PolymerElement)))));_exports.ButtonElement=ButtonElement;customElements.define(ButtonElement.is,ButtonElement);var vaadinButton={ButtonElement:ButtonElement};_exports.$vaadinButton=vaadinButton;var Lumo=/*#__PURE__*/function(_HTMLElement3){babelHelpers.inherits(Lumo,_HTMLElement3);function Lumo(){babelHelpers.classCallCheck(this,Lumo);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Lumo).apply(this,arguments))}babelHelpers.createClass(Lumo,null,[{key:"version",get:function get(){return"1.5.0"}}]);return Lumo}(babelHelpers.wrapNativeSuper(HTMLElement));_exports.Lumo=Lumo;customElements.define("vaadin-lumo-styles",Lumo);var version$1={Lumo:Lumo};_exports.$version=version$1;var $_documentContainer=document.createElement("template");$_documentContainer.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id=\"lumo-color\">\n  <template>\n    <style>\n      [theme~=\"dark\"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~=\"dark\"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id=\"lumo-color-legacy\">\n  <template>\n    <style include=\"lumo-color\">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer.content);/* Only needed for IE11 when you want to use the dark palette inside the light palette */ /*
                                                                                                                                                    FIXME(polymer-modulizer): the above comments were extracted
                                                                                                                                                    from HTML and may be out of place here. Review them and
                                                                                                                                                    then delete this comment!
                                                                                                                                                  */;var $_documentContainer$1=document.createElement("template");$_documentContainer$1.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>";document.head.appendChild($_documentContainer$1.content);var $_documentContainer$2=document.createElement("template");$_documentContainer$2.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>";document.head.appendChild($_documentContainer$2.content);var $_documentContainer$3=document.createElement("template");$_documentContainer$3.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>";document.head.appendChild($_documentContainer$3.content);var $_documentContainer$4=document.createElement("template");$_documentContainer$4.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, \"Roboto\", \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id=\"lumo-typography\">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can\u2019t combine with the above selector because that doesn\u2019t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~=\"font-size-s\"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~=\"font-size-xs\"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer$4.content);var $_documentContainer$5=html(_templateObject2_7280bdd0bea211e98f44c3131ec74eb1());document.head.appendChild($_documentContainer$5.content);var CheckboxElement=/*#__PURE__*/function(_ElementMixin$2){babelHelpers.inherits(CheckboxElement,_ElementMixin$2);babelHelpers.createClass(CheckboxElement,null,[{key:"template",get:function get(){return html(_templateObject3_7280bdd0bea211e98f44c3131ec74eb1())}},{key:"is",get:function get(){return"vaadin-checkbox"}},{key:"version",get:function get(){return"2.2.10"}},{key:"properties",get:function get(){return{/**
       * True if the checkbox is checked.
       */checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},/**
       * Indeterminate state of the checkbox when it's neither checked nor unchecked, but undetermined.
       * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes
       */indeterminate:{type:Boolean,notify:!0,observer:"_indeterminateChanged",reflectToAttribute:!0,value:!1},/**
       * The value given to the data submitted with the checkbox's name to the server when the control is inside a form.
       */value:{type:String,value:"on"},_nativeCheckbox:{type:Object}}}}]);function CheckboxElement(){var _this38;babelHelpers.classCallCheck(this,CheckboxElement);_this38=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(CheckboxElement).call(this));/**
              * @type {string}
              * Name of the element.
              */_this38.name;return _this38}babelHelpers.createClass(CheckboxElement,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(CheckboxElement.prototype),"ready",this).call(this);this.setAttribute("role","checkbox");this._nativeCheckbox=this.shadowRoot.querySelector("input[type=\"checkbox\"]");this.addEventListener("click",this._handleClick.bind(this));this._addActiveListeners();var attrName=this.getAttribute("name");if(attrName){this.name=attrName}this.shadowRoot.querySelector("[part~=\"label\"]").querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this));this._updateLabelAttribute()}},{key:"_updateLabelAttribute",value:function _updateLabelAttribute(){var label=this.shadowRoot.querySelector("[part~=\"label\"]"),assignedNodes=label.firstElementChild.assignedNodes();if(this._isAssignedNodesEmpty(assignedNodes)){label.setAttribute("empty","")}else{label.removeAttribute("empty")}}},{key:"_isAssignedNodesEmpty",value:function _isAssignedNodesEmpty(nodes){// The assigned nodes considered to be empty if there is no slotted content or only one empty text node
return 0===nodes.length||1==nodes.length&&nodes[0].nodeType==Node.TEXT_NODE&&""===nodes[0].textContent.trim()}},{key:"_checkedChanged",value:function _checkedChanged(checked){if(this.indeterminate){this.setAttribute("aria-checked","mixed")}else{this.setAttribute("aria-checked",checked)}}},{key:"_indeterminateChanged",value:function _indeterminateChanged(indeterminate){if(indeterminate){this.setAttribute("aria-checked","mixed")}else{this.setAttribute("aria-checked",this.checked)}}},{key:"_addActiveListeners",value:function _addActiveListeners(){var _this39=this;// DOWN
this._addEventListenerToNode(this,"down",function(e){if(_this39.__interactionsAllowed(e)){_this39.setAttribute("active","")}});// UP
this._addEventListenerToNode(this,"up",function(){return _this39.removeAttribute("active")});// KEYDOWN
this.addEventListener("keydown",function(e){if(_this39.__interactionsAllowed(e)&&32===e.keyCode){e.preventDefault();_this39.setAttribute("active","")}});// KEYUP
this.addEventListener("keyup",function(e){if(_this39.__interactionsAllowed(e)&&32===e.keyCode){e.preventDefault();_this39._toggleChecked();_this39.removeAttribute("active");if(_this39.indeterminate){_this39.indeterminate=!1}}})}/** @protected */},{key:"__interactionsAllowed",/**
     * True if users' interactions (mouse or keyboard)
     * should toggle the checkbox
     */value:function __interactionsAllowed(e){if(this.disabled){return!1}// https://github.com/vaadin/vaadin-checkbox/issues/63
if("a"===e.target.localName){return!1}return!0}},{key:"_handleClick",value:function _handleClick(e){if(this.__interactionsAllowed(e)){if(!this.indeterminate){if(e.composedPath()[0]!==this._nativeCheckbox){e.preventDefault();this._toggleChecked()}}else{/*
         * Required for IE 11 and Edge.
         * See issue here: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7344418/
         */this.indeterminate=!1;e.preventDefault();this._toggleChecked()}}}},{key:"_toggleChecked",value:function _toggleChecked(){this.checked=!this.checked;this.dispatchEvent(new CustomEvent("change",{composed:!1,bubbles:!0}))}/**
     * Fired when the user commits a value change.
     *
     * @event change
     */},{key:"name",get:function get(){return this.checked?this._storedName:""},set:function set(name){this._storedName=name}},{key:"focusElement",get:function get(){return this.shadowRoot.querySelector("input")}}]);return CheckboxElement}(ElementMixin$1(ControlStateMixin(ThemableMixin(GestureEventListeners(PolymerElement)))));_exports.CheckboxElement=CheckboxElement;customElements.define(CheckboxElement.is,CheckboxElement);var vaadinCheckbox={CheckboxElement:CheckboxElement};_exports.$vaadinCheckbox=vaadinCheckbox;var $_documentContainer$6=html(_templateObject4_7280bdd0bea211e98f44c3131ec74eb1());document.head.appendChild($_documentContainer$6.content);var FormLayoutElement=/*#__PURE__*/function(_ElementMixin$3){babelHelpers.inherits(FormLayoutElement,_ElementMixin$3);function FormLayoutElement(){babelHelpers.classCallCheck(this,FormLayoutElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(FormLayoutElement).apply(this,arguments))}babelHelpers.createClass(FormLayoutElement,[{key:"ready",value:function ready(){// Here we create and attach a style element that we use for validating
// CSS values in `responsiveSteps`. We can’t add this to the `<template>`,
// because Polymer will throw it away. We need to create this before
// `super.ready()`, because `super.ready()` invokes property observers,
// and the observer for `responsiveSteps` does CSS value validation.
this._styleElement=document.createElement("style");this.root.appendChild(this._styleElement);// Ensure there is a child text node in the style element
this._styleElement.textContent=" ";if(window.ShadyDOM){// With ShadyDOM, setting textContent attaches text content nodes
// asynchronously, but we need it right away.
window.ShadyDOM.flush()}babelHelpers.get(babelHelpers.getPrototypeOf(FormLayoutElement.prototype),"ready",this).call(this);this.addEventListener("iron-resize",this._selectResponsiveStep);this.addEventListener("animationend",this.__onAnimationEnd)}},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(FormLayoutElement.prototype),"connectedCallback",this).call(this);beforeNextRender(this,this._selectResponsiveStep);beforeNextRender(this,this.updateStyles);this._observeChildrenColspanChange()}},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(FormLayoutElement.prototype),"disconnectedCallback",this).call(this);this.__mutationObserver.disconnect();this.__childObserver.disconnect()}},{key:"_observeChildrenColspanChange",value:function _observeChildrenColspanChange(){var _this40=this,mutationObserverConfig={attributes:!0};this.__mutationObserver=new MutationObserver(function(mutationRecord){mutationRecord.forEach(function(mutation){if("attributes"===mutation.type&&"colspan"===mutation.attributeName){_this40._invokeUpdateStyles()}})});this.__childObserver=new FlattenedNodesObserver(this,function(info){var addedNodes=_this40._getObservableNodes(info.addedNodes),removedNodes=_this40._getObservableNodes(info.removedNodes);addedNodes.forEach(function(child){_this40.__mutationObserver.observe(child,mutationObserverConfig)});if(0<addedNodes.length||0<removedNodes.length){_this40._invokeUpdateStyles()}})}},{key:"_getObservableNodes",value:function _getObservableNodes(nodeList){var ignore=["template","style","dom-repeat","dom-if"];return Array.from(nodeList).filter(function(node){return node.nodeType===Node.ELEMENT_NODE&&-1===ignore.indexOf(node.localName.toLowerCase())})}},{key:"_naturalNumberOrOne",value:function _naturalNumberOrOne(n){if("number"===typeof n&&1<=n&&n<1/0){return Math.floor(n)}return 1}},{key:"_isValidCSSLength",value:function _isValidCSSLength(value){// Let us choose a CSS property for validating CSS <length> values:
// - `border-spacing` accepts `<length> | inherit`, it’s the best! But
//   it does not disallow invalid values at all in MSIE :-(
// - `letter-spacing` and `word-spacing` accept
//   `<length> | normal | inherit`, and disallows everything else, like
//   `<percentage>`, `auto` and such, good enough.
// - `word-spacing` is used since its shorter.
// Disallow known keywords allowed as the `word-spacing` value
if("inherit"===value||"normal"===value){return!1}// Use the value in a stylesheet and check the parsed value. Invalid
// input value results in empty parsed value.
this._styleElement.firstChild.nodeValue="#styleElement { word-spacing: ".concat(value,"; }");if(!this._styleElement.sheet){// Stylesheet is not ready, probably not attached to the document yet.
return!0}// Safari 9 sets invalid CSS rules' value to `null`
return 0>["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))}},{key:"_responsiveStepsChanged",value:function _responsiveStepsChanged(responsiveSteps,oldResponsiveSteps){var _this41=this;try{if(!Array.isArray(responsiveSteps)){throw new Error("Invalid \"responsiveSteps\" type, an Array is required.")}if(1>responsiveSteps.length){throw new Error("Invalid empty \"responsiveSteps\" array, at least one item is required.")}responsiveSteps.forEach(function(step){if(_this41._naturalNumberOrOne(step.columns)!==step.columns){throw new Error("Invalid 'columns' value of ".concat(step.columns,", a natural number is required."))}if(step.minWidth!==void 0&&!_this41._isValidCSSLength(step.minWidth)){throw new Error("Invalid 'minWidth' value of ".concat(step.minWidth,", a valid CSS length required."))}if(step.labelsPosition!==void 0&&-1===["aside","top"].indexOf(step.labelsPosition)){throw new Error("Invalid 'labelsPosition' value of ".concat(step.labelsPosition,", 'aside' or 'top' string is required."))}})}catch(e){if(oldResponsiveSteps&&oldResponsiveSteps!==responsiveSteps){console.warn("".concat(e.message," Using previously set 'responsiveSteps' instead."));this.responsiveSteps=oldResponsiveSteps}else{console.warn("".concat(e.message," Using default 'responsiveSteps' instead."));this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]}}this._selectResponsiveStep()}},{key:"__onAnimationEnd",value:function __onAnimationEnd(e){if(0===e.animationName.indexOf("vaadin-form-layout-appear")){this._selectResponsiveStep()}}},{key:"_selectResponsiveStep",value:function _selectResponsiveStep(){var _this42=this,selectedStep,tmpStyleProp="background-position";this.responsiveSteps.forEach(function(step){// Convert minWidth to px units for comparison
_this42.$.layout.style.setProperty(tmpStyleProp,step.minWidth);var stepMinWidthPx=parseFloat(getComputedStyle(_this42.$.layout).getPropertyValue(tmpStyleProp));// Compare step min-width with the host width, select the passed step
if(stepMinWidthPx<=_this42.offsetWidth){selectedStep=step}});this.$.layout.style.removeProperty(tmpStyleProp);// Sometimes converting units is not possible, e.g, when element is
// not connected. Then the `selectedStep` stays `undefined`.
if(selectedStep){// Apply the chosen responsive step’s properties
this._columnCount=selectedStep.columns;this._labelsOnTop="top"===selectedStep.labelsPosition}if(/\b(Edge|Trident)\//.test(navigator.userAgent)){if(this.offsetWidth!==this._lastOffsetWidth){this.updateStyles();// force breaks sizes update in IE and Edge
this._lastOffsetWidth=this.offsetWidth}}}},{key:"_invokeUpdateStyles",value:function _invokeUpdateStyles(){this.updateStyles()}/**
     * Set custom CSS property values and update the layout.
     */},{key:"updateStyles",value:function updateStyles(){for(var _babelHelpers$get,_this43=this,_len10=arguments.length,args=Array(_len10),_key10=0;_key10<_len10;_key10++){args[_key10]=arguments[_key10]}(_babelHelpers$get=babelHelpers.get(babelHelpers.getPrototypeOf(FormLayoutElement.prototype),"updateStyles",this)).call.apply(_babelHelpers$get,[this].concat(args));/*
                                   The item width formula:
                                        itemWidth = colspan / columnCount * 100% - columnSpacing
                                    We have to subtract columnSpacing, because the column spacing space is taken
                                   by item margins of 1/2 * spacing on both sides
                                 */var columnSpacing=window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-form-layout-column-spacing"):getComputedStyle(this).getPropertyValue("--vaadin-form-layout-column-spacing"),direction=getComputedStyle(this).direction,marginStartProp="margin-"+("ltr"===direction?"left":"right"),marginEndProp="margin-"+("ltr"===direction?"right":"left"),containerWidth=this.offsetWidth;if(window.ShadyDOM){window.ShadyDOM.flush();// `getComputedStyle` below needs that
}var col=0;Array.from(this.children).filter(function(child){return"br"===child.localName||"none"!==getComputedStyle(child).display}).forEach(function(child,index,children){if("br"===child.localName){// Reset column count on line break
col=0;return}var colspan;colspan=_this43._naturalNumberOrOne(parseFloat(child.getAttribute("colspan")));// Never span further than the number of columns
colspan=Math.min(colspan,_this43._columnCount);var childRatio=colspan/_this43._columnCount;// Note: using 99.9% for 100% fixes rounding errors in MS Edge
// (< v16), otherwise the items might wrap, resizing is wobbly.
child.style.width="calc(".concat(99.9*childRatio,"% - ").concat(1-childRatio," * ").concat(columnSpacing,")");if(col+colspan>_this43._columnCount){// Too big to fit on this row, let’s wrap it
col=0}// At the start edge
if(0===col){child.style.setProperty(marginStartProp,"0px")}else{child.style.removeProperty(marginStartProp)}var nextIndex=index+1,nextLineBreak=nextIndex<children.length&&"br"===children[nextIndex].localName;// At the end edge
if(col+colspan===_this43._columnCount){child.style.setProperty(marginEndProp,"0px")}else if(nextLineBreak){var colspanRatio=(_this43._columnCount-col-colspan)/_this43._columnCount;child.style.setProperty(marginEndProp,"calc(".concat(colspanRatio*containerWidth,"px + ").concat(colspanRatio," * ").concat(columnSpacing,")"))}else{child.style.removeProperty(marginEndProp)}// Move the column counter
col=(col+colspan)%_this43._columnCount;if("vaadin-form-item"===child.localName){if(_this43._labelsOnTop){child.setAttribute("label-position","top")}else{child.removeAttribute("label-position")}}})}}],[{key:"template",get:function get(){return html(_templateObject5_7280bdd0bea211e98f44c3131ec74eb1())}},{key:"is",get:function get(){return"vaadin-form-layout"}},{key:"version",get:function get(){return"2.1.5"}},{key:"properties",get:function get(){return{/**
       * @typedef ResponsiveStep
       * @type {object}
       * @property {string} minWidth - The threshold value for this step in CSS length units.
       * @property {number} columns - Number of columns. Only natural numbers are valid.
       * @property {string} labelsPosition - Labels position option, valid values: `"aside"` (default), `"top"`.
       */ /**
           * Allows specifying a responsive behavior with the number of columns
           * and the label position depending on the layout width.
           *
           * Format: array of objects, each object defines one responsive step
           * with `minWidth` CSS length, `columns` number, and optional
           * `labelsPosition` string of `"aside"` or `"top"`. At least one item is required.
           *
           * #### Examples
           *
           * ```javascript
           * formLayout.responsiveSteps = [{columns: 1}];
           * // The layout is always a single column, labels aside.
           * ```
           *
           * ```javascript
           * formLayout.responsiveSteps = [
           *   {minWidth: 0, columns: 1},
           *   {minWidth: '40em', columns: 2}
           * ];
           * // Sets two responsive steps:
           * // 1. When the layout width is < 40em, one column, labels aside.
           * // 2. Width >= 40em, two columns, labels aside.
           * ```
           *
           * ```javascript
           * formLayout.responsiveSteps = [
           *   {minWidth: 0, columns: 1, labelsPosition: 'top'},
           *   {minWidth: '20em', columns: 1},
           *   {minWidth: '40em', columns: 2}
           * ];
           * // Default value. Three responsive steps:
           * // 1. Width < 20em, one column, labels on top.
           * // 2. 20em <= width < 40em, one column, labels aside.
           * // 3. Width >= 40em, two columns, labels aside.
           * ```
           *
           * @type {ResponsiveStep[]}
           */responsiveSteps:{type:Array,value:function value(){return[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]},observer:"_responsiveStepsChanged"},/**
       * Current number of columns in the layout
       */_columnCount:{type:Number},/**
       * Indicates that labels are on top
       */_labelsOnTop:{type:Boolean}}}},{key:"observers",get:function get(){return["_invokeUpdateStyles(_columnCount, _labelsOnTop)"]}}]);return FormLayoutElement}(ElementMixin$1(ThemableMixin(mixinBehaviors([IronResizableBehavior],PolymerElement))));_exports.FormLayoutElement=FormLayoutElement;customElements.define(FormLayoutElement.is,FormLayoutElement);var vaadinFormLayout={FormLayoutElement:FormLayoutElement};_exports.$vaadinFormLayout=vaadinFormLayout;var $_documentContainer$7=html(_templateObject6_7280bdd0bea211e98f44c3131ec74eb1());document.head.appendChild($_documentContainer$7.content);var IOS=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),IOS_TOUCH_SCROLLING=IOS&&8<=IOS[1],DEFAULT_PHYSICAL_COUNT=3,ANIMATION_FRAME=animationFrame,IDLE_TIME=idlePeriod,MICRO_TASK=microTask,PolymerIronList=Class({behaviors:[IronResizableBehavior,IronScrollTargetBehavior],/**
   * The ratio of hidden tiles that should remain in the scroll direction.
   * Recommended value ~0.5, so it will distribute tiles evenly in both directions.
   */_ratio:.5,/**
   * The padding-top value for the list.
   */_scrollerPaddingTop:0,/**
   * This value is the same as `scrollTop`.
   */_scrollPosition:0,/**
   * The sum of the heights of all the tiles in the DOM.
   */_physicalSize:0,/**
   * The average `offsetHeight` of the tiles observed till now.
   */_physicalAverage:0,/**
   * The number of tiles which `offsetHeight` > 0 observed until now.
   */_physicalAverageCount:0,/**
   * The Y position of the item rendered in the `_physicalStart`
   * tile relative to the scrolling list.
   */_physicalTop:0,/**
   * The number of items in the list.
   */_virtualCount:0,/**
   * The estimated scroll height based on `_physicalAverage`
   */_estScrollHeight:0,/**
   * The scroll height of the dom node
   */_scrollHeight:0,/**
   * The height of the list. This is referred as the viewport in the context of list.
   */_viewportHeight:0,/**
   * The width of the list. This is referred as the viewport in the context of list.
   */_viewportWidth:0,/**
   * An array of DOM nodes that are currently in the tree
   * @type {?Array<!TemplatizerNode>}
   */_physicalItems:null,/**
   * An array of heights for each item in `_physicalItems`
   * @type {?Array<number>}
   */_physicalSizes:null,/**
   * A cached value for the first visible index.
   * See `firstVisibleIndex`
   * @type {?number}
   */_firstVisibleIndexVal:null,/**
   * A Polymer collection for the items.
   * @type {?Polymer.Collection}
   */_collection:null,/**
   * A cached value for the last visible index.
   * See `lastVisibleIndex`
   * @type {?number}
   */_lastVisibleIndexVal:null,/**
   * The max number of pages to render. One page is equivalent to the height of the list.
   */_maxPages:2,/**
   * The virtual index of the focused item.
   */_focusedVirtualIndex:-1,/**
   * The maximum items per row
   */_itemsPerRow:1,/**
   * The height of the row in grid layout.
   */_rowHeight:0,/**
   * The cost of stamping a template in ms.
   */_templateCost:0,/**
   * The bottom of the physical content.
   */get _physicalBottom(){return this._physicalTop+this._physicalSize},/**
   * The bottom of the scroll.
   */get _scrollBottom(){return this._scrollPosition+this._viewportHeight},/**
   * The n-th item rendered in the last physical item.
   */get _virtualEnd(){return this._virtualStart+this._physicalCount-1},/**
   * The height of the physical content that isn't on the screen.
   */get _hiddenContentSize(){var size=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return size-this._viewportHeight},/**
   * The maximum scroll top value.
   */get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},/**
   * The largest n-th value for an item such that it can be rendered in `_physicalStart`.
   */get _maxVirtualStart(){var virtualCount=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,virtualCount-this._physicalCount)},set _virtualStart(val){val=this._clamp(val,0,this._maxVirtualStart);if(this.grid){val=val-val%this._itemsPerRow}this._virtualStartVal=val},get _virtualStart(){return this._virtualStartVal||0},/**
   * The k-th tile that is at the top of the scrolling list.
   */set _physicalStart(val){val=val%this._physicalCount;if(0>val){val=this._physicalCount+val}if(this.grid){val=val-val%this._itemsPerRow}this._physicalStartVal=val},get _physicalStart(){return this._physicalStartVal||0},/**
   * The k-th tile that is at the bottom of the scrolling list.
   */get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(val){this._physicalCountVal=val},get _physicalCount(){return this._physicalCountVal||0},/**
   * An optimal physical size such that we will have enough physical items
   * to fill up the viewport and recycle when the user scrolls.
   *
   * This default value assumes that we will at least have the equivalent
   * to a viewport of physical items above and below the user's viewport.
   */get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},/**
   * True if the current list is visible.
   */get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},/**
   * Gets the index of the first visible item in the viewport.
   *
   * @type {number}
   */get firstVisibleIndex(){var idx=this._firstVisibleIndexVal;if(null==idx){var physicalOffset=this._physicalTop+this._scrollOffset;idx=this._iterateItems(function(pidx,vidx){physicalOffset+=this._getPhysicalSizeIncrement(pidx);if(physicalOffset>this._scrollPosition){return this.grid?vidx-vidx%this._itemsPerRow:vidx}// Handle a partially rendered final row in grid mode
if(this.grid&&this._virtualCount-1===vidx){return vidx-vidx%this._itemsPerRow}})||0;this._firstVisibleIndexVal=idx}return idx},/**
   * Gets the index of the last visible item in the viewport.
   *
   * @type {number}
   */get lastVisibleIndex(){var idx=this._lastVisibleIndexVal;if(null==idx){if(this.grid){idx=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1)}else{var physicalOffset=this._physicalTop+this._scrollOffset;this._iterateItems(function(pidx,vidx){if(physicalOffset<this._scrollBottom){idx=vidx}physicalOffset+=this._getPhysicalSizeIncrement(pidx)})}this._lastVisibleIndexVal=idx}return idx},get _scrollOffset(){return this._scrollerPaddingTop},attached:function attached(){this._debounce("_render",this._render,ANIMATION_FRAME);// `iron-resize` is fired when the list is attached if the event is added
// before attached causing unnecessary work.
this.listen(this,"iron-resize","_resizeHandler")},detached:function detached(){this.unlisten(this,"iron-resize","_resizeHandler")},/**
   * Invoke this method if you dynamically update the viewport's
   * size or CSS padding.
   *
   * @method updateViewportBoundaries
   */updateViewportBoundaries:function updateViewportBoundaries(){var styles=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(styles["padding-top"],10);this._isRTL=!!("rtl"===styles.direction);this._viewportWidth=this.$.items.offsetWidth;this._viewportHeight=this._scrollTargetHeight;this.grid&&this._updateGridMetrics()},/**
   * Recycles the physical items when needed.
   */_scrollHandler:function _scrollHandler(){var scrollTop=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),delta=scrollTop-this._scrollPosition,isScrollingDown=0<=delta;// Track the current scroll position.
this._scrollPosition=scrollTop;// Clear indexes for first and last visible indexes.
this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;// Random access.
if(Math.abs(delta)>this._physicalSize&&0<this._physicalSize){delta=delta-this._scrollOffset;var idxAdjustment=Math.round(delta/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+idxAdjustment;this._physicalStart=this._physicalStart+idxAdjustment;// Estimate new physical offset.
this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;this._update()}else if(0<this._physicalCount){var reusables=this._getReusables(isScrollingDown);if(isScrollingDown){this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length}else{this._virtualStart=this._virtualStart-reusables.indexes.length;this._physicalStart=this._physicalStart-reusables.indexes.length}this._update(reusables.indexes,isScrollingDown?null:reusables.indexes);this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),MICRO_TASK)}},/**
   * Returns an object that contains the indexes of the physical items
   * that might be reused and the physicalTop.
   *
   * @param {boolean} fromTop If the potential reusable items are above the scrolling region.
   */_getReusables:function _getReusables(fromTop){var ith,offsetContent,physicalItemHeight,idxs=[],protectedOffsetContent=this._hiddenContentSize*this._ratio,virtualStart=this._virtualStart,virtualEnd=this._virtualEnd,physicalCount=this._physicalCount,top=this._physicalTop+this._scrollOffset,bottom=this._physicalBottom+this._scrollOffset,scrollTop=this._scrollTop,scrollBottom=this._scrollBottom;if(fromTop){ith=this._physicalStart;offsetContent=scrollTop-top}else{ith=this._physicalEnd;offsetContent=bottom-scrollBottom}// eslint-disable-next-line no-constant-condition
while(!0){physicalItemHeight=this._getPhysicalSizeIncrement(ith);offsetContent=offsetContent-physicalItemHeight;if(idxs.length>=physicalCount||offsetContent<=protectedOffsetContent){break}if(fromTop){// Check that index is within the valid range.
if(virtualEnd+idxs.length+1>=this._virtualCount){break}// Check that the index is not visible.
if(top+physicalItemHeight>=scrollTop-this._scrollOffset){break}idxs.push(ith);top=top+physicalItemHeight;ith=(ith+1)%physicalCount}else{// Check that index is within the valid range.
if(0>=virtualStart-idxs.length){break}// Check that the index is not visible.
if(top+this._physicalSize-physicalItemHeight<=scrollBottom){break}idxs.push(ith);top=top-physicalItemHeight;ith=0===ith?physicalCount-1:ith-1}}return{indexes:idxs,physicalTop:top-this._scrollOffset}},/**
   * Update the list of items, starting from the `_virtualStart` item.
   * @param {!Array<number>=} itemSet
   * @param {!Array<number>=} movingUp
   */_update:function _update(itemSet,movingUp){if(itemSet&&0===itemSet.length||0===this._physicalCount){return}this._manageFocus();this._assignModels(itemSet);this._updateMetrics(itemSet);// Adjust offset after measuring.
if(movingUp){while(movingUp.length){var idx=movingUp.pop();this._physicalTop-=this._getPhysicalSizeIncrement(idx)}}this._positionItems();this._updateScrollerSize()},_isClientFull:function _isClientFull(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},/**
   * Increases the pool size.
   */_increasePoolIfNeeded:function _increasePoolIfNeeded(count){var nextPhysicalCount=this._clamp(this._physicalCount+count,DEFAULT_PHYSICAL_COUNT,this._virtualCount-this._virtualStart);nextPhysicalCount=this._convertIndexToCompleteRow(nextPhysicalCount);var delta=nextPhysicalCount-this._physicalCount,nextIncrease=Math.round(.5*this._physicalCount);if(0>delta){return}if(0<delta){var ts=window.performance.now();// Concat arrays in place.
[].push.apply(this._physicalItems,this._createPool(delta));// Push 0s into physicalSizes. Can't use Array.fill because IE11 doesn't support it.
for(var i=0;i<delta;i++){this._physicalSizes.push(0)}this._physicalCount=this._physicalCount+delta;// Update the physical start if it needs to preserve the model of the focused item.
// In this situation, the focused item is currently rendered and its model would
// have changed after increasing the pool if the physical start remained unchanged.
if(this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd){this._physicalStart=this._physicalStart+delta}this._update();this._templateCost=(window.performance.now()-ts)/delta;nextIncrease=Math.round(.5*this._physicalCount)}// The upper bounds is not fixed when dealing with a grid that doesn't
// fill it's last row with the exact number of items per row.
if(this._virtualEnd>=this._virtualCount-1||0===nextIncrease){// Do nothing.
}else if(!this._isClientFull()){this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,nextIncrease),MICRO_TASK)}else if(this._physicalSize<this._optPhysicalSize){// Yield and increase the pool during idle time until the physical size is optimal.
this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,nextIncrease)),IDLE_TIME)}},/**
   * Renders the a new list.
   */_render:function _render(){if(!this.isAttached||!this._isVisible){return}if(0!==this._physicalCount){var reusables=this._getReusables(!0);this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length;this._update(reusables.indexes);this._update();this._increasePoolIfNeeded(0)}else if(0<this._virtualCount){// Initial render
this.updateViewportBoundaries();this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT)}},/**
   * Called when the items have changed. That is, reassignments
   * to `items`, splices or updates to a single item.
   */_itemsChanged:function _itemsChanged(change){if("items"===change.path){this._virtualStart=0;this._physicalTop=0;this._virtualCount=this.items?this.items.length:0;this._collection=this.items&&void 0?(void 0).get(this.items):null;this._physicalIndexForKey={};this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;this._physicalCount=this._physicalCount||0;this._physicalItems=this._physicalItems||[];this._physicalSizes=this._physicalSizes||[];this._physicalStart=0;if(this._scrollTop>this._scrollOffset){this._resetScrollPosition(0)}this._removeFocusedItem();this._debounce("_render",this._render,ANIMATION_FRAME)}},/**
   * Executes a provided function per every physical index in `itemSet`
   * `itemSet` default value is equivalent to the entire set of physical indexes.
   *
   * @param {!function(number, number)} fn
   * @param {!Array<number>=} itemSet
   */_iterateItems:function _iterateItems(fn,itemSet){var pidx,vidx,rtn,i;if(2===arguments.length&&itemSet){for(i=0;i<itemSet.length;i++){pidx=itemSet[i];vidx=this._computeVidx(pidx);if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}}else{pidx=this._physicalStart;vidx=this._virtualStart;for(;pidx<this._physicalCount;pidx++,vidx++){if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}for(pidx=0;pidx<this._physicalStart;pidx++,vidx++){if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}}},/**
   * Returns the virtual index for a given physical index
   *
   * @param {number} pidx Physical index
   * @return {number}
   */_computeVidx:function _computeVidx(pidx){if(pidx>=this._physicalStart){return this._virtualStart+(pidx-this._physicalStart)}return this._virtualStart+(this._physicalCount-this._physicalStart)+pidx},/**
   * Updates the height for a given set of items.
   *
   * @param {!Array<number>=} itemSet
   */_updateMetrics:function _updateMetrics(itemSet){// Make sure we distributed all the physical items
// so we can measure them.
flush$1?flush$1():flush$1();var newPhysicalSize=0,oldPhysicalSize=0,prevAvgCount=this._physicalAverageCount,prevPhysicalAvg=this._physicalAverage;this._iterateItems(function(pidx,vidx){oldPhysicalSize+=this._physicalSizes[pidx];this._physicalSizes[pidx]=this._physicalItems[pidx].offsetHeight;newPhysicalSize+=this._physicalSizes[pidx];this._physicalAverageCount+=this._physicalSizes[pidx]?1:0},itemSet);if(this.grid){this._updateGridMetrics();this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight}else{oldPhysicalSize=1===this._itemsPerRow?oldPhysicalSize:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight;this._physicalSize=this._physicalSize+newPhysicalSize-oldPhysicalSize;this._itemsPerRow=1}// Update the average if it measured something.
if(this._physicalAverageCount!==prevAvgCount){this._physicalAverage=Math.round((prevPhysicalAvg*prevAvgCount+newPhysicalSize)/this._physicalAverageCount)}},/**
   * Updates the position of the physical items.
   */_positionItems:function _positionItems(){this._adjustScrollPosition();var y=this._physicalTop;this._iterateItems(function(pidx,vidx){this.translate3d(0,y+"px",0,this._physicalItems[pidx]);y+=this._physicalSizes[pidx]})},_getPhysicalSizeIncrement:function _getPhysicalSizeIncrement(pidx){if(!this.grid){return this._physicalSizes[pidx]}if(this._computeVidx(pidx)%this._itemsPerRow!==this._itemsPerRow-1){return 0}return this._rowHeight},/**
   * Adjusts the scroll position when it was overestimated.
   */_adjustScrollPosition:function _adjustScrollPosition(){var deltaHeight=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);// Note: the delta can be positive or negative.
if(0!==deltaHeight){this._physicalTop=this._physicalTop-deltaHeight;var scrollTop=this._scrollTop;// juking scroll position during interial scrolling on iOS is no bueno
if(!IOS_TOUCH_SCROLLING&&0<scrollTop){this._resetScrollPosition(scrollTop-deltaHeight)}}},/**
   * Sets the position of the scroll.
   */_resetScrollPosition:function _resetScrollPosition(pos){if(this.scrollTarget&&0<=pos){this._scrollTop=pos;this._scrollPosition=this._scrollTop}},/**
   * Sets the scroll height, that's the height of the content,
   *
   * @param {boolean=} forceUpdate If true, updates the height no matter what.
   */_updateScrollerSize:function _updateScrollerSize(forceUpdate){if(this.grid){this._estScrollHeight=this._virtualRowCount*this._rowHeight}else{this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage}forceUpdate=forceUpdate||0===this._scrollHeight;forceUpdate=forceUpdate||this._scrollPosition>=this._estScrollHeight-this._physicalSize;forceUpdate=forceUpdate||this.grid&&this.$.items.style.height<this._estScrollHeight;// Amortize height adjustment, so it won't trigger large repaints too often.
if(forceUpdate||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight){this.$.items.style.height=this._estScrollHeight+"px";this._scrollHeight=this._estScrollHeight}},/**
   * Scroll to a specific index in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToIndex
   * @param {number} idx The index of the item
   */scrollToIndex:function scrollToIndex(idx){if("number"!==typeof idx||0>idx||idx>this.items.length-1){return}flush$1?flush$1():flush$1();// Items should have been rendered prior scrolling to an index.
if(0===this._physicalCount){return}idx=this._clamp(idx,0,this._virtualCount-1);// Update the virtual start only when needed.
if(!this._isIndexRendered(idx)||idx>=this._maxVirtualStart){this._virtualStart=this.grid?idx-2*this._itemsPerRow:idx-1}this._manageFocus();this._assignModels();this._updateMetrics();// Estimate new physical offset.
this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;var currentTopItem=this._physicalStart,currentVirtualItem=this._virtualStart,targetOffsetTop=0,hiddenContentSize=this._hiddenContentSize;// scroll to the item as much as we can.
while(currentVirtualItem<idx&&targetOffsetTop<=hiddenContentSize){targetOffsetTop=targetOffsetTop+this._getPhysicalSizeIncrement(currentTopItem);currentTopItem=(currentTopItem+1)%this._physicalCount;currentVirtualItem++}this._updateScrollerSize(!0);this._positionItems();this._resetScrollPosition(this._physicalTop+this._scrollOffset+targetOffsetTop);this._increasePoolIfNeeded(0);// clear cached visible index.
this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null},/**
   * Reset the physical average and the average count.
   */_resetAverage:function _resetAverage(){this._physicalAverage=0;this._physicalAverageCount=0},/**
   * A handler for the `iron-resize` event triggered by `IronResizableBehavior`
   * when the element is resized.
   */_resizeHandler:function _resizeHandler(){this._debounce("_render",function(){// clear cached visible index.
this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;// Skip the resize event on touch devices when the address bar slides up.
this.updateViewportBoundaries();if(this._isVisible){// Reinstall the scroll event listener.
this.toggleScrollListener(!0);this._resetAverage();this._render()}else{// Uninstall the scroll event listener.
this.toggleScrollListener(!1)}},ANIMATION_FRAME)},/**
   * Converts a random index to the index of the item that completes it's row.
   * Allows for better order and fill computation when grid == true.
   */_convertIndexToCompleteRow:function _convertIndexToCompleteRow(idx){// when grid == false _itemPerRow can be unset.
this._itemsPerRow=this._itemsPerRow||1;return this.grid?Math.ceil(idx/this._itemsPerRow)*this._itemsPerRow:idx},_isIndexRendered:function _isIndexRendered(idx){return idx>=this._virtualStart&&idx<=this._virtualEnd},_getPhysicalIndex:function _getPhysicalIndex(vidx){return(this._physicalStart+(vidx-this._virtualStart))%this._physicalCount},_clamp:function _clamp(v,min,max){return Math.min(max,Math.max(min,v))},_debounce:function _debounce(name,cb,asyncModule){this._debouncers=this._debouncers||{};this._debouncers[name]=Debouncer.debounce(this._debouncers[name],asyncModule,cb.bind(this));enqueueDebouncer(this._debouncers[name])}});_exports.PolymerIronList=PolymerIronList;var ironList={PolymerIronList:PolymerIronList};/**
   @license
   Copyright (c) 2017 Vaadin Ltd.
   This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */ /**
       * @polymerMixin
       */_exports.$ironList=ironList;var A11yMixin=function A11yMixin(superClass){return(/*#__PURE__*/function(_superClass9){babelHelpers.inherits(A11yMixin,_superClass9);function A11yMixin(){babelHelpers.classCallCheck(this,A11yMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(A11yMixin).apply(this,arguments))}babelHelpers.createClass(A11yMixin,[{key:"_a11yGetHeaderRowCount",value:function _a11yGetHeaderRowCount(_columnTree){return _columnTree.filter(function(level){return level.some(function(col){return col._headerTemplate||col.headerRenderer||col.path||col.header})}).length}},{key:"_a11yGetFooterRowCount",value:function _a11yGetFooterRowCount(_columnTree){return _columnTree.filter(function(level){return level.some(function(col){return col._headerTemplate||col.headerRenderer})}).length}},{key:"_a11yUpdateGridSize",value:function _a11yUpdateGridSize(size,_columnTree){if(size===void 0||_columnTree===void 0){return}var bodyColumns=_columnTree[_columnTree.length-1];this.$.table.setAttribute("aria-rowcount",size+this._a11yGetHeaderRowCount(_columnTree)+this._a11yGetFooterRowCount(_columnTree));this.$.table.setAttribute("aria-colcount",bodyColumns&&bodyColumns.length||0);this._a11yUpdateHeaderRows();this._a11yUpdateFooterRows()}},{key:"_a11yUpdateHeaderRows",value:function _a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach(function(headerRow,index){return headerRow.setAttribute("aria-rowindex",index+1)})}},{key:"_a11yUpdateFooterRows",value:function _a11yUpdateFooterRows(){var _this44=this;Array.from(this.$.footer.children).forEach(function(footerRow,index){return footerRow.setAttribute("aria-rowindex",_this44._a11yGetHeaderRowCount(_this44._columnTree)+_this44.size+index+1)})}},{key:"_a11yUpdateRowRowindex",value:function _a11yUpdateRowRowindex(row,index){row.setAttribute("aria-rowindex",index+this._a11yGetHeaderRowCount(this._columnTree)+1)}},{key:"_a11yUpdateRowSelected",value:function _a11yUpdateRowSelected(row,selected){// Jaws reads selection only for rows, NVDA only for cells
row.setAttribute("aria-selected",!!selected);Array.from(row.children).forEach(function(cell){return cell.setAttribute("aria-selected",!!selected)})}},{key:"_a11yUpdateRowLevel",value:function _a11yUpdateRowLevel(row,level){row.setAttribute("aria-level",level+1)}},{key:"_a11yUpdateRowDetailsOpened",value:function _a11yUpdateRowDetailsOpened(row,detailsOpened){Array.from(row.children).forEach(function(cell){if("boolean"===typeof detailsOpened){cell.setAttribute("aria-expanded",detailsOpened)}else{if(cell.hasAttribute("aria-expanded")){cell.removeAttribute("aria-expanded")}}})}},{key:"_a11ySetRowDetailsCell",value:function _a11ySetRowDetailsCell(row,detailsCell){Array.from(row.children).forEach(function(cell){if(cell!==detailsCell){cell.setAttribute("aria-controls",detailsCell.id)}})}},{key:"_a11yUpdateCellColspan",value:function _a11yUpdateCellColspan(cell,colspan){cell.setAttribute("aria-colspan",+colspan)}},{key:"_a11yUpdateSorters",value:function _a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(function(sorter){var cellContent=sorter.parentNode;while(cellContent&&"vaadin-grid-cell-content"!==cellContent.localName){cellContent=cellContent.parentNode}if(cellContent&&cellContent.assignedSlot){var cell=cellContent.assignedSlot.parentNode;cell.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[sorter.direction+""]||"none")}})}}],[{key:"observers",get:function get(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}}]);return A11yMixin}(superClass))};_exports.A11yMixin=A11yMixin;var vaadinGridA11yMixin={A11yMixin:A11yMixin};/**
   @license
   Copyright (c) 2017 Vaadin Ltd.
   This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */ /**
       * @polymerMixin
       */_exports.$vaadinGridA11yMixin=vaadinGridA11yMixin;var ActiveItemMixin=function ActiveItemMixin(superClass){return(/*#__PURE__*/function(_superClass10){babelHelpers.inherits(ActiveItemMixin,_superClass10);function ActiveItemMixin(){babelHelpers.classCallCheck(this,ActiveItemMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ActiveItemMixin).apply(this,arguments))}babelHelpers.createClass(ActiveItemMixin,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(ActiveItemMixin.prototype),"ready",this).call(this);this.$.scroller.addEventListener("click",this._onClick.bind(this));this.addEventListener("cell-activate",this._activateItem.bind(this))}},{key:"_activateItem",value:function _activateItem(e){var model=e.detail.model,clickedItem=model?model.item:null;if(clickedItem){this.activeItem=!this._itemsEqual(this.activeItem,clickedItem)?clickedItem:null}}// we need to listen to click instead of tap because on mobile safari, the
// document.activeElement has not been updated (focus has not been shifted)
// yet at the point when tap event is being executed.
},{key:"_onClick",value:function _onClick(e){if(e.defaultPrevented){// Something has handled this click already, e. g., <vaadin-grid-sorter>
return}var path=e.composedPath(),cell=path[path.indexOf(this.$.table)-3];if(!cell||-1<cell.getAttribute("part").indexOf("details-cell")){return}var cellContent=cell._content,activeElement=this.getRootNode().activeElement,cellContentHasFocus=cellContent.contains(activeElement)&&(// MSIE bug: flex children receive focus. Make type & attributes check.
!this._ie||this._isFocusable(activeElement));if(!cellContentHasFocus&&!this._isFocusable(e.target)){this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(cell.parentElement)}}))}}},{key:"_isFocusable",value:function _isFocusable(target){if(!target.parentNode){return!1}var focusables=Array.from(target.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter(function(element){return"cell body-cell"!==element.getAttribute("part")}),isFocusableElement=-1!==focusables.indexOf(target);return!target.disabled&&isFocusableElement}}],[{key:"properties",get:function get(){return{/**
       * The item user has last interacted with. Turns to `null` after user deactivates
       * the item by re-interacting with the currently active item.
       */activeItem:{type:Object,notify:!0,value:null}}}}]);return ActiveItemMixin}(superClass))};_exports.ActiveItemMixin=ActiveItemMixin;var vaadinGridActiveItemMixin={ActiveItemMixin:ActiveItemMixin};_exports.$vaadinGridActiveItemMixin=vaadinGridActiveItemMixin;var ArrayDataProviderMixin=function ArrayDataProviderMixin(superClass){return(/*#__PURE__*/function(_superClass11){babelHelpers.inherits(ArrayDataProviderMixin,_superClass11);function ArrayDataProviderMixin(){babelHelpers.classCallCheck(this,ArrayDataProviderMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ArrayDataProviderMixin).apply(this,arguments))}babelHelpers.createClass(ArrayDataProviderMixin,[{key:"_itemsChanged",value:function _itemsChanged(items,splices,isAttached){if(!isAttached){return}if(!Array.isArray(items)){if(items===void 0||null===items){this.size=0}if(this.dataProvider===this._arrayDataProvider){this.dataProvider=void 0}return}this.size=items.length;this.dataProvider=this.dataProvider||this._arrayDataProvider;this.clearCache();this._ensureFirstPageLoaded()}},{key:"_arrayDataProvider",value:function _arrayDataProvider(opts,cb){var items=(Array.isArray(this.items)?this.items:[]).slice(0);if(this._filters&&this._checkPaths(this._filters,"filtering",items)){items=this._filter(items)}this.size=items.length;if(opts.sortOrders.length&&this._checkPaths(this._sorters,"sorting",items)){items=items.sort(this._multiSort.bind(this))}var start=opts.page*opts.pageSize,end=start+opts.pageSize,slice=items.slice(start,end);cb(slice,items.length)}/**
     * Check array of filters/sorters for paths validity, console.warn invalid items
     * @param {Array}  arrayToCheck The array of filters/sorters to check
     * @param {string} action       The name of action to include in warning (filtering, sorting)
     * @param {Array}  items
     */},{key:"_checkPaths",value:function _checkPaths(arrayToCheck,action,items){if(!items.length){return!1}var result=!0;for(var i in arrayToCheck){var _path6=arrayToCheck[i].path;// skip simple paths
if(!_path6||-1===_path6.indexOf(".")){continue}var parentProperty=_path6.replace(/\.[^\.]*$/,"");// a.b.c -> a.b
if(Base.get(parentProperty,items[0])===void 0){console.warn("Path \"".concat(_path6,"\" used for ").concat(action," does not exist in all of the items, ").concat(action," is disabled."));result=!1}}return result}},{key:"_multiSort",value:function _multiSort(a,b){var _this45=this;return this._sorters.map(function(sort){if("asc"===sort.direction){return _this45._compare(Base.get(sort.path,a),Base.get(sort.path,b))}else if("desc"===sort.direction){return _this45._compare(Base.get(sort.path,b),Base.get(sort.path,a))}return 0}).reduce(function(p,n){return p?p:n},0)}},{key:"_normalizeEmptyValue",value:function _normalizeEmptyValue(value){if(0<=[void 0,null].indexOf(value)){return""}else if(isNaN(value)){return value.toString()}else{return value}}},{key:"_compare",value:function _compare(a,b){a=this._normalizeEmptyValue(a);b=this._normalizeEmptyValue(b);if(a<b){return-1}if(a>b){return 1}return 0}},{key:"_filter",value:function _filter(items){var _this46=this;return items.filter(function(item,index){return 0===_this46._filters.filter(function(filter){var value=_this46._normalizeEmptyValue(Base.get(filter.path,item)),filterValueLowercase=_this46._normalizeEmptyValue(filter.value).toString().toLowerCase();return-1===value.toString().toLowerCase().indexOf(filterValueLowercase)}).length})}}],[{key:"properties",get:function get(){return{/**
       * An array containing the items which will be stamped to the column template
       * instances.
       */items:Array}}},{key:"observers",get:function get(){return["_itemsChanged(items, items.*, isAttached)"]}}]);return ArrayDataProviderMixin}(superClass))};_exports.ArrayDataProviderMixin=ArrayDataProviderMixin;var vaadinGridArrayDataProviderMixin={ArrayDataProviderMixin:ArrayDataProviderMixin};_exports.$vaadinGridArrayDataProviderMixin=vaadinGridArrayDataProviderMixin;var ColumnReorderingMixin=function ColumnReorderingMixin(superClass){return(/*#__PURE__*/function(_GestureEventListener){babelHelpers.inherits(ColumnReorderingMixin,_GestureEventListener);function ColumnReorderingMixin(){babelHelpers.classCallCheck(this,ColumnReorderingMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ColumnReorderingMixin).apply(this,arguments))}babelHelpers.createClass(ColumnReorderingMixin,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(ColumnReorderingMixin.prototype),"ready",this).call(this);addListener(this,"track",this._onTrackEvent);this._reorderGhost=this.shadowRoot.querySelector("[part=\"reorder-ghost\"]");this.addEventListener("touchstart",this._onTouchStart.bind(this));this.addEventListener("touchmove",this._onTouchMove.bind(this));this.addEventListener("touchend",this._onTouchEnd.bind(this));this.addEventListener("contextmenu",this._onContextMenu.bind(this))}},{key:"_onContextMenu",value:function _onContextMenu(e){if(this.hasAttribute("reordering")){e.preventDefault()}}},{key:"_onTouchStart",value:function _onTouchStart(e){var _this47=this;// Touch event, delay activation by 100ms
this._startTouchReorderTimeout=setTimeout(function(){_this47._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}},{key:"_onTouchMove",value:function _onTouchMove(e){if(this._draggedColumn){e.preventDefault()}clearTimeout(this._startTouchReorderTimeout)}},{key:"_onTouchEnd",value:function _onTouchEnd(){clearTimeout(this._startTouchReorderTimeout);this._onTrackEnd()}},{key:"_onTrackEvent",value:function _onTrackEvent(e){if("start"===e.detail.state){var _path7=e.composedPath(),headerCell=_path7[_path7.indexOf(this.$.header)-2];if(!headerCell||!headerCell._content){// Not a header column
return}var activeElement=this.getRootNode().activeElement;if(headerCell._content.contains(this.getRootNode().activeElement)&&(!this._ie||!this._isFocusable(activeElement))){// Something was focused inside the cell
return}if(this.$.scroller.hasAttribute("column-resizing")){// Resizing is in progress
return}if(!this._touchDevice){// Not a touch device
this._onTrackStart(e)}}else if("track"===e.detail.state){this._onTrack(e)}else if("end"===e.detail.state){this._onTrackEnd(e)}}},{key:"_onTrackStart",value:function _onTrackStart(e){if(!this.columnReorderingAllowed){return}// Cancel reordering if there are draggable nodes on the event path
var path=e.path||dom(e).path;if(path&&path.filter(function(node){return node.hasAttribute&&node.hasAttribute("draggable")})[0]){return}var headerCell=this._cellFromPoint(e.detail.x,e.detail.y);if(!headerCell||-1===headerCell.getAttribute("part").indexOf("header-cell")){return}this._toggleAttribute("reordering",!0,this);this._draggedColumn=headerCell._column;while(1===this._draggedColumn.parentElement.childElementCount){// This is the only column in the group, drag the whole group instead
this._draggedColumn=this._draggedColumn.parentElement}this._setSiblingsReorderStatus(this._draggedColumn,"allowed");this._draggedColumn._reorderStatus="dragging";this._updateGhost(headerCell);this._reorderGhost.style.visibility="visible";this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y);this._autoScroller()}},{key:"_onTrack",value:function _onTrack(e){if(!this._draggedColumn){// Reordering didn’t start. Skip this event.
return}var targetCell=this._cellFromPoint(e.detail.x,e.detail.y);if(!targetCell){return}var targetColumn=this._getTargetColumn(targetCell,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,targetColumn)&&this._isSwappableByPosition(targetColumn,e.detail.x)){this._swapColumnOrders(this._draggedColumn,targetColumn)}this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y);this._lastDragClientX=e.detail.x}},{key:"_onTrackEnd",value:function _onTrackEnd(){if(!this._draggedColumn){// Reordering didn’t start. Skip this event.
return}this._toggleAttribute("reordering",!1,this);this._draggedColumn._reorderStatus="";this._setSiblingsReorderStatus(this._draggedColumn,"");this._draggedColumn=null;this._lastDragClientX=null;this._reorderGhost.style.visibility="hidden";this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}}))}},{key:"_getColumnsInOrder",value:function _getColumnsInOrder(){return this._columnTree.slice(0).pop().filter(function(c){return!c.hidden}).sort(function(b,a){return b._order-a._order})}},{key:"_cellFromPoint",value:function _cellFromPoint(x,y){x=x||0;y=y||0;if(!this._draggedColumn){this._toggleAttribute("no-content-pointer-events",!0,this.$.scroller)}var cell;if(useShadow){cell=this.shadowRoot.elementFromPoint(x,y)}else{cell=document.elementFromPoint(x,y);// Workaround a FF58 bug
if("vaadin-grid-cell-content"===cell.localName){cell=cell.assignedSlot.parentNode}}this._toggleAttribute("no-content-pointer-events",!1,this.$.scroller);// Make sure the element is actually a cell
if(cell&&cell._column){return cell}}},{key:"_updateGhostPosition",value:function _updateGhostPosition(eventClientX,eventClientY){var ghostRect=this._reorderGhost.getBoundingClientRect(),targetLeft=eventClientX-ghostRect.width/2,targetTop=eventClientY-ghostRect.height/2,_left=parseInt(this._reorderGhost._left||0),_top=parseInt(this._reorderGhost._top||0);// // This is where we want to position the ghost
// Reposition the ghost
this._reorderGhost._left=_left-(ghostRect.left-targetLeft);this._reorderGhost._top=_top-(ghostRect.top-targetTop);this._reorderGhost.style.transform="translate(".concat(this._reorderGhost._left,"px, ").concat(this._reorderGhost._top,"px)")}},{key:"_getInnerText",value:function _getInnerText(e){var _this48=this;if(e.localName){// Custom implementation needed since IE11 doesn't respect the spec in case of hidden elements
if("none"===getComputedStyle(e).display){return""}else{return Array.from(e.childNodes).map(function(n){return _this48._getInnerText(n)}).join("")}}else{return e.textContent}}},{key:"_updateGhost",value:function _updateGhost(cell){var ghost=this._reorderGhost;ghost.textContent=this._getInnerText(cell._content);var style=window.getComputedStyle(cell);["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(function(propertyName){return ghost.style[propertyName]=style[propertyName]});return ghost}},{key:"_updateOrders",value:function _updateOrders(columnTree,splices){var _this49=this;if(columnTree===void 0||splices===void 0){return}// Set order numbers to top-level columns
columnTree[0].forEach(function(column,index){return column._order=(index+1)*_this49._orderBaseScope})}},{key:"_setSiblingsReorderStatus",value:function _setSiblingsReorderStatus(column,status){var _this50=this;Array.from(column.parentNode.children).filter(function(child){return /column/.test(child.localName)&&_this50._isSwapAllowed(child,column)}).forEach(function(sibling){return sibling._reorderStatus=status})}},{key:"_autoScroller",value:function _autoScroller(){if(this._lastDragClientX){var rightDiff=this._lastDragClientX-this.getBoundingClientRect().right+50,leftDiff=this.getBoundingClientRect().left-this._lastDragClientX+50;if(0<rightDiff){this.$.table.scrollLeft+=rightDiff/10}else if(0<leftDiff){this.$.table.scrollLeft-=leftDiff/10}this._scrollHandler()}if(this._draggedColumn){this.async(this._autoScroller,10)}}},{key:"_isSwapAllowed",value:function _isSwapAllowed(column1,column2){if(column1&&column2){var differentColumns=column1!==column2,sameParent=column1.parentElement===column2.parentElement,sameFrozen=column1.frozen===column2.frozen;return differentColumns&&sameParent&&sameFrozen}}},{key:"_isSwappableByPosition",value:function _isSwappableByPosition(targetColumn,clientX){var targetCell=Array.from(this.$.header.querySelectorAll("tr:not([hidden]) [part~=\"cell\"]")).filter(function(cell){return targetColumn.contains(cell._column)})[0],sourceCellRect=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),targetRect=targetCell.getBoundingClientRect();if(targetRect.left>sourceCellRect.left){return clientX>targetRect.right-sourceCellRect.width}else{return clientX<targetRect.left+sourceCellRect.width}}},{key:"_swapColumnOrders",value:function _swapColumnOrders(column1,column2){var _order=column1._order;column1._order=column2._order;column2._order=_order;this._updateLastFrozen();this._updateFirstAndLastColumn()}},{key:"_getTargetColumn",value:function _getTargetColumn(targetCell,draggedColumn){if(targetCell&&draggedColumn){var candidate=targetCell._column;while(candidate.parentElement!==draggedColumn.parentElement&&candidate!==this){candidate=candidate.parentElement}if(candidate.parentElement===draggedColumn.parentElement){return candidate}else{return targetCell._column}}}}],[{key:"properties",get:function get(){return{/**
       * Set to true to allow column reordering.
       */columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}},{key:"observers",get:function get(){return["_updateOrders(_columnTree, _columnTree.*)"]}}]);return ColumnReorderingMixin}(GestureEventListeners(superClass)))};_exports.ColumnReorderingMixin=ColumnReorderingMixin;var vaadinGridColumnReorderingMixin={ColumnReorderingMixin:ColumnReorderingMixin};_exports.$vaadinGridColumnReorderingMixin=vaadinGridColumnReorderingMixin;var ColumnResizingMixin=function ColumnResizingMixin(superClass){return(/*#__PURE__*/function(_GestureEventListener2){babelHelpers.inherits(ColumnResizingMixin,_GestureEventListener2);function ColumnResizingMixin(){babelHelpers.classCallCheck(this,ColumnResizingMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ColumnResizingMixin).apply(this,arguments))}babelHelpers.createClass(ColumnResizingMixin,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(ColumnResizingMixin.prototype),"ready",this).call(this);var scroller=this.$.scroller;addListener(scroller,"track",this._onHeaderTrack.bind(this));// Disallow scrolling while resizing
scroller.addEventListener("touchmove",function(e){return scroller.hasAttribute("column-resizing")&&e.preventDefault()});// Disable contextmenu on any resize separator.
scroller.addEventListener("contextmenu",function(e){return"resize-handle"==e.target.getAttribute("part")&&e.preventDefault()});// Disable native cell focus when resizing
scroller.addEventListener("mousedown",function(e){return"resize-handle"===e.target.getAttribute("part")&&e.preventDefault()})}},{key:"_onHeaderTrack",value:function _onHeaderTrack(e){var handle=e.target;if("resize-handle"===handle.getAttribute("part")){var cell=handle.parentElement,column=cell._column;this._toggleAttribute("column-resizing",!0,this.$.scroller);// Get the target column to resize
while("vaadin-grid-column-group"===column.localName){column=Array.prototype.slice.call(column._childColumns,0).sort(function(a,b){return a._order-b._order}).filter(function(column){return!column.hidden}).pop()}var columnRowCells=Array.from(this.$.header.querySelectorAll("[part~=\"row\"]:last-child [part~=\"cell\"]")),targetCell=columnRowCells.filter(function(cell){return cell._column===column})[0];// Resize the target column
if(targetCell.offsetWidth){var style=window.getComputedStyle(targetCell),minWidth=10+parseInt(style.paddingLeft)+parseInt(style.paddingRight)+parseInt(style.borderLeftWidth)+parseInt(style.borderRightWidth)+parseInt(style.marginLeft)+parseInt(style.marginRight);column.width=Math.max(minWidth,targetCell.offsetWidth+e.detail.x-targetCell.getBoundingClientRect().right)+"px";column.flexGrow=0}// Fix width and flex-grow for all preceding columns
columnRowCells.sort(function(a,b){return a._column._order-b._column._order}).forEach(function(cell,index,array){if(index<array.indexOf(targetCell)){cell._column.width=cell.offsetWidth+"px";cell._column.flexGrow=0}});if("end"===e.detail.state){this._toggleAttribute("column-resizing",!1,this.$.scroller)}// Notify resize
this._resizeHandler()}}}]);return ColumnResizingMixin}(GestureEventListeners(superClass)))};_exports.ColumnResizingMixin=ColumnResizingMixin;var vaadinGridColumnResizingMixin={ColumnResizingMixin:ColumnResizingMixin};_exports.$vaadinGridColumnResizingMixin=vaadinGridColumnResizingMixin;var GridTemplatizer=/*#__PURE__*/function(_ref){babelHelpers.inherits(GridTemplatizer,_ref);babelHelpers.createClass(GridTemplatizer,null,[{key:"is",get:function get(){return"vaadin-grid-templatizer"}},{key:"properties",get:function get(){return{dataHost:Object,template:Object,_templateInstances:{type:Array,value:function value(){return[]}},_parentPathValues:{value:function value(){return{}}},_grid:Object}}},{key:"observers",get:function get(){return["_templateInstancesChanged(_templateInstances.*, _parentPathValues.*)"]}}]);function GridTemplatizer(){var _this51;babelHelpers.classCallCheck(this,GridTemplatizer);_this51=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(GridTemplatizer).call(this));_this51._instanceProps={detailsOpened:!0,index:!0,item:!0,selected:!0,expanded:!0,level:!0};return _this51}babelHelpers.createClass(GridTemplatizer,[{key:"createInstance",value:function createInstance(){this._ensureTemplatized();var instance=new this._TemplateClass({});this.addInstance(instance);return instance}},{key:"addInstance",value:function addInstance(instance){var _this52=this;if(-1===this._templateInstances.indexOf(instance)){this._templateInstances.push(instance);requestAnimationFrame(function(){return _this52.notifyPath("_templateInstances.*",_this52._templateInstances)})}}},{key:"removeInstance",value:function removeInstance(instance){var index=this._templateInstances.indexOf(instance);this.splice("_templateInstances",index,1)}},{key:"_ensureTemplatized",value:function _ensureTemplatized(){if(!this._TemplateClass){this._TemplateClass=_templatize(this.template,this,{instanceProps:this._instanceProps,parentModel:!0,forwardHostProp:function forwardHostProp(prop,value){this._forwardParentProp(prop,value);if(this._templateInstances){this._templateInstances.forEach(function(inst){return inst.notifyPath(prop,value)})}},notifyInstanceProp:function notifyInstanceProp(inst,prop,value){var _this53=this;if("index"===prop||"item"===prop){// We don’t need a change notification for these.
return}var originalProp="__".concat(prop,"__");// Notify for only user-action changes, not for scrolling updates. E. g.,
// if `detailsOpened` is different from `__detailsOpened__`, which was set during render.
if(inst[originalProp]===value){return}inst[originalProp]=value;var row=Array.from(this._grid.$.items.children).filter(function(row){return _this53._grid._itemsEqual(row._item,inst.item)})[0];if(row){Array.from(row.children).forEach(function(cell){if(cell._instance){cell._instance[originalProp]=value;cell._instance.notifyPath(prop,value)}})}var itemPrefix="item.";if(Array.isArray(this._grid.items)&&0===prop.indexOf(itemPrefix)){var itemsIndex=this._grid.items.indexOf(inst.item),_path8=prop.slice(itemPrefix.length);this._grid.notifyPath("items.".concat(itemsIndex,".").concat(_path8),value)}var gridCallback="_".concat(prop,"InstanceChangedCallback");if(this._grid&&this._grid[gridCallback]){this._grid[gridCallback](inst,value)}}})}}},{key:"_forwardParentProp",value:function _forwardParentProp(prop,value){this._parentPathValues[prop]=value;this._templateInstances.forEach(function(inst){return inst.notifyPath(prop,value)})}},{key:"_templateInstancesChanged",value:function _templateInstancesChanged(t,p){var _this54=this,index,count;if("_templateInstances"===t.path){// Iterate all instances
index=0;count=this._templateInstances.length}else if("_templateInstances.splices"===t.path){// Iterate only new instances
index=t.value.index;count=t.value.addedCount}else{return}Object.keys(this._parentPathValues||{}).forEach(function(keyName){for(var i=index;i<index+count;i++){_this54._templateInstances[i].set(keyName,_this54._parentPathValues[keyName])}})}}]);return GridTemplatizer}(/*#__PURE__*/function(_PolymerElement2){babelHelpers.inherits(_class3,_PolymerElement2);function _class3(){babelHelpers.classCallCheck(this,_class3);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(_class3).apply(this,arguments))}return _class3}(PolymerElement));_exports.Templatizer$1=GridTemplatizer;customElements.define(GridTemplatizer.is,GridTemplatizer);var vaadinGridTemplatizer={Templatizer:GridTemplatizer};_exports.$vaadinGridTemplatizer=vaadinGridTemplatizer;var ColumnBaseMixin=function ColumnBaseMixin(superClass){return(/*#__PURE__*/function(_superClass12){babelHelpers.inherits(ColumnBaseMixin,_superClass12);babelHelpers.createClass(ColumnBaseMixin,[{key:"connectedCallback",/** @protected */value:function connectedCallback(){var _this56=this;babelHelpers.get(babelHelpers.getPrototypeOf(ColumnBaseMixin.prototype),"connectedCallback",this).call(this);this._bodyTemplate&&(this._bodyTemplate.templatizer._grid=this._grid);this._headerTemplate&&(this._headerTemplate.templatizer._grid=this._grid);this._footerTemplate&&(this._footerTemplate.templatizer._grid=this._grid);this._templateObserver.flush();if(!this._bodyTemplate){// The observer might not have triggered if the tag is empty. Run manually.
this._templateObserver.callback()}requestAnimationFrame(function(){_this56._allCells.forEach(function(cell){if(!cell._content.parentNode){_this56._grid&&_this56._grid.appendChild(cell._content)}})})}/** @protected */},{key:"disconnectedCallback",value:function disconnectedCallback(){var _this57=this;babelHelpers.get(babelHelpers.getPrototypeOf(ColumnBaseMixin.prototype),"disconnectedCallback",this).call(this);requestAnimationFrame(function(){if(!_this57._findHostGrid()){_this57._allCells.forEach(function(cell){if(cell._content.parentNode){cell._content.parentNode.removeChild(cell._content)}})}});this._gridValue=void 0}},{key:"_findHostGrid",value:function _findHostGrid(){var el=this;// Custom elements extending grid must have a specific localName
while(el&&!/^vaadin.*grid(-pro)?$/.test(el.localName)){el=el.assignedSlot?el.assignedSlot.parentNode:el.parentNode}return el||void 0}},{key:"_grid",get:function get(){if(!this._gridValue){this._gridValue=this._findHostGrid()}return this._gridValue}},{key:"_allCells",get:function get(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(function(cell){return cell})}}],[{key:"properties",get:function get(){return{/**
       * When set to true, the column is user-resizable.
       * @default false
       */resizable:{type:Boolean,value:function value(){if("vaadin-grid-column-group"===this.localName){return}var parent=this.parentNode;if(parent&&"vaadin-grid-column-group"===parent.localName){return parent.resizable||!1}else{return!1}}},_headerTemplate:{type:Object},_footerTemplate:{type:Object},/**
       * When true, the column is frozen. When a column inside of a column group is frozen,
       * all of the sibling columns inside the group will get frozen also.
       */frozen:{type:Boolean,value:!1},/**
       * When set to true, the cells for this column are hidden.
       */hidden:{type:Boolean},/**
       * Text content to display in the header cell of the column.
       */header:{type:String},/**
       * Aligns the columns cell content horizontally.
       * Supported values: "start", "center" and "end".
       */textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,/**
       * Custom function for rendering the header content.
       * Receives two arguments:
       *
       * - `root` The header cell content DOM element. Append your content to it.
       * - `column` The `<vaadin-grid-column>` element.
       */headerRenderer:Function,/**
       * Custom function for rendering the footer content.
       * Receives two arguments:
       *
       * - `root` The footer cell content DOM element. Append your content to it.
       * - `column` The `<vaadin-grid-column>` element.
       */footerRenderer:Function}}},{key:"observers",get:function get(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_pathOrHeaderChanged(path, header, _headerCell, _footerCell, _cells.*, renderer, headerRenderer, _bodyTemplate, _headerTemplate)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_setBodyTemplateOrRenderer(_bodyTemplate, renderer, _cells, _cells.*)","_setHeaderTemplateOrRenderer(_headerTemplate, headerRenderer, _headerCell)","_setFooterTemplateOrRenderer(_footerTemplate, footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}}]);function ColumnBaseMixin(){var _this55;babelHelpers.classCallCheck(this,ColumnBaseMixin);_this55=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ColumnBaseMixin).call(this));_this55._templateObserver=new FlattenedNodesObserver(babelHelpers.assertThisInitialized(_this55),function(info){_this55._headerTemplate=_this55._prepareHeaderTemplate();_this55._footerTemplate=_this55._prepareFooterTemplate();_this55._bodyTemplate=_this55._prepareBodyTemplate()});return _this55}babelHelpers.createClass(ColumnBaseMixin,[{key:"_prepareHeaderTemplate",value:function _prepareHeaderTemplate(){return this._prepareTemplatizer(this._findTemplate(!0)||null,{})}},{key:"_prepareFooterTemplate",value:function _prepareFooterTemplate(){return this._prepareTemplatizer(this._findTemplate(!1,!0)||null,{})}},{key:"_prepareBodyTemplate",value:function _prepareBodyTemplate(){return this._prepareTemplatizer(this._findTemplate()||null)}},{key:"_prepareTemplatizer",value:function _prepareTemplatizer(template,instanceProps){if(template&&!template.templatizer){var templatizer=new GridTemplatizer;templatizer._grid=this._grid;templatizer.dataHost=this.dataHost;templatizer._instanceProps=instanceProps||templatizer._instanceProps;templatizer.template=template;template.templatizer=templatizer}return template}},{key:"_renderHeaderAndFooter",value:function _renderHeaderAndFooter(){if(this.headerRenderer){this.__runRenderer(this.headerRenderer,this._headerCell)}if(this.footerRenderer){this.__runRenderer(this.footerRenderer,this._footerCell)}}},{key:"__runRenderer",value:function __runRenderer(renderer,cell,rowData){var args=[cell._content,this];if(rowData&&rowData.item){args.push(rowData)}renderer.apply(this,args)}},{key:"__setColumnTemplateOrRenderer",value:function __setColumnTemplateOrRenderer(template,renderer,cells){var _this58=this;if(template&&renderer){throw new Error("You should only use either a renderer or a template")}cells.forEach(function(cell){var model=_this58._grid.__getRowModel(cell.parentElement);if(renderer){cell._renderer=renderer;if(model.item||renderer===_this58.headerRenderer||renderer===_this58.footerRenderer){_this58.__runRenderer(renderer,cell,model)}}else if(cell._template!==template){cell._template=template;cell._content.innerHTML="";template.templatizer._grid=template.templatizer._grid||_this58._grid;var inst=template.templatizer.createInstance();cell._content.appendChild(inst.root);cell._instance=inst;if(model.item){cell._instance.setProperties(model)}}})}},{key:"_setBodyTemplateOrRenderer",value:function _setBodyTemplateOrRenderer(template,renderer,cells,splices){if((template||renderer)&&cells){this.__setColumnTemplateOrRenderer(template,renderer,cells)}}},{key:"_setHeaderTemplateOrRenderer",value:function _setHeaderTemplateOrRenderer(headerTemplate,headerRenderer,headerCell){if((headerTemplate||headerRenderer)&&headerCell){this.__setColumnTemplateOrRenderer(headerTemplate,headerRenderer,[headerCell])}}},{key:"_setFooterTemplateOrRenderer",value:function _setFooterTemplateOrRenderer(footerTemplate,footerRenderer,footerCell){if((footerTemplate||footerRenderer)&&footerCell){this.__setColumnTemplateOrRenderer(footerTemplate,footerRenderer,[footerCell]);this._grid.__updateHeaderFooterRowVisibility(footerCell.parentElement)}}},{key:"_selectFirstTemplate",value:function _selectFirstTemplate(){var header=0<arguments.length&&arguments[0]!==void 0?arguments[0]:!1,footer=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1;return FlattenedNodesObserver.getFlattenedNodes(this).filter(function(node){return"template"===node.localName&&node.classList.contains("header")===header&&node.classList.contains("footer")===footer})[0]}},{key:"_findTemplate",value:function _findTemplate(header,footer){var template=this._selectFirstTemplate(header,footer);if(template){if(this.dataHost){// set dataHost to the context where template has been defined
template._rootDataHost=this.dataHost._rootDataHost||this.dataHost}}return template}},{key:"_flexGrowChanged",value:function _flexGrowChanged(flexGrow,headerCell,footerCell,cells){if(this.parentElement&&this.parentElement._columnPropChanged){this.parentElement._columnPropChanged("flexGrow")}this._allCells.forEach(function(cell){return cell.style.flexGrow=flexGrow})}},{key:"_orderChanged",value:function _orderChanged(order,headerCell,footerCell,cells){this._allCells.forEach(function(cell){return cell.style.order=order})}},{key:"_widthChanged",value:function _widthChanged(width,headerCell,footerCell,cells){if(this.parentElement&&this.parentElement._columnPropChanged){this.parentElement._columnPropChanged("width")}this._allCells.forEach(function(cell){return cell.style.width=width});// Force a reflow to workaround browser issues causing double scrollbars to grid
// https://github.com/vaadin/vaadin-grid/issues/1586
if(this._grid&&this._grid.__forceReflow){this._grid.__forceReflow()}}},{key:"_frozenChanged",value:function _frozenChanged(frozen,headerCell,footerCell,cells){var _this59=this;if(this.parentElement&&this.parentElement._columnPropChanged){this.parentElement._columnPropChanged("frozen",frozen)}this._allCells.forEach(function(cell){return _this59._toggleAttribute("frozen",frozen,cell)});this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}},{key:"_lastFrozenChanged",value:function _lastFrozenChanged(lastFrozen){var _this60=this;this._allCells.forEach(function(cell){return _this60._toggleAttribute("last-frozen",lastFrozen,cell)});if(this.parentElement&&this.parentElement._columnPropChanged){this.parentElement._lastFrozen=lastFrozen}}},{key:"_pathOrHeaderChanged",value:function _pathOrHeaderChanged(path,header,headerCell,footerCell,cells,renderer,headerRenderer,bodyTemplate,headerTemplate){var _this61=this,hasHeaderText=header!==void 0;if(!headerRenderer&&!headerTemplate&&hasHeaderText&&headerCell){this.__setTextContent(headerCell._content,header)}if(path&&cells.value){if(!renderer&&!bodyTemplate){var pathRenderer=function pathRenderer(root,owner,_ref2){var item=_ref2.item;return _this61.__setTextContent(root,_this61.get(path,item))};this.__setColumnTemplateOrRenderer(void 0,pathRenderer,cells.value)}if(!headerRenderer&&!headerTemplate&&!hasHeaderText&&headerCell&&null!==header){this.__setTextContent(headerCell._content,this._generateHeader(path))}}if(headerCell){this._grid.__updateHeaderFooterRowVisibility(headerCell.parentElement)}}},{key:"__setTextContent",value:function __setTextContent(node,textContent){node.textContent!==textContent&&(node.textContent=textContent)}},{key:"_generateHeader",value:function _generateHeader(path){return path.substr(path.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,function(match){return match.toUpperCase()})}},{key:"_toggleAttribute",value:function _toggleAttribute(name,bool,node){if(node.hasAttribute(name)===!bool){if(bool){node.setAttribute(name,"")}else{node.removeAttribute(name)}}}},{key:"_reorderStatusChanged",value:function _reorderStatusChanged(reorderStatus,headerCell,footerCell,cells){this._allCells.forEach(function(cell){return cell.setAttribute("reorder-status",reorderStatus)})}},{key:"_resizableChanged",value:function _resizableChanged(resizable,headerCell){if(resizable===void 0||headerCell===void 0){return}if(headerCell){[headerCell].concat(this._emptyCells).forEach(function(cell){if(cell){var existingHandle=cell.querySelector("[part~=\"resize-handle\"]");if(existingHandle){cell.removeChild(existingHandle)}if(resizable){var handle=document.createElement("div");handle.setAttribute("part","resize-handle");cell.appendChild(handle)}}})}}},{key:"_textAlignChanged",value:function _textAlignChanged(textAlign,_cells,_headerCell,_footerCell){if(textAlign===void 0){return}if(-1===["start","end","center"].indexOf(textAlign)){console.warn("textAlign can only be set as \"start\", \"end\" or \"center\"");return}var textAlignFallback;if("ltr"===getComputedStyle(this._grid).direction){if("start"===textAlign){textAlignFallback="left"}else if("end"===textAlign){textAlignFallback="right"}}else{if("start"===textAlign){textAlignFallback="right"}else if("end"===textAlign){textAlignFallback="left"}}this._allCells.forEach(function(cell){cell._content.style.textAlign=textAlign;if(getComputedStyle(cell._content).textAlign!==textAlign){cell._content.style.textAlign=textAlignFallback}})}},{key:"_hiddenChanged",value:function _hiddenChanged(hidden,headerCell,footerCell,cells){var _this62=this;if(this.parentElement&&this.parentElement._columnPropChanged){this.parentElement._columnPropChanged("hidden",hidden)}this._allCells.forEach(function(cell){return _this62._toggleAttribute("hidden",hidden,cell)});if(!!hidden!==!!this._previousHidden&&this._grid){this._grid._updateLastFrozen&&this._grid._updateLastFrozen();this._grid.notifyResize&&this._grid.notifyResize();this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()}this._previousHidden=hidden}}]);return ColumnBaseMixin}(superClass))};/**
    * A `<vaadin-grid-column>` is used to configure how a column in `<vaadin-grid>`
    * should look like.
    *
    * See `<vaadin-grid>` documentation and demos for instructions and examples on how
    * to configure the `<vaadin-grid-column>`.
    * ```
    *
    * @memberof Vaadin
    * @mixes Vaadin.Grid.ColumnBaseMixin
    */_exports.ColumnBaseMixin=ColumnBaseMixin;var GridColumnElement=/*#__PURE__*/function(_ColumnBaseMixin){babelHelpers.inherits(GridColumnElement,_ColumnBaseMixin);function GridColumnElement(){babelHelpers.classCallCheck(this,GridColumnElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(GridColumnElement).apply(this,arguments))}babelHelpers.createClass(GridColumnElement,null,[{key:"is",get:function get(){return"vaadin-grid-column"}},{key:"properties",get:function get(){return{/**
       * Width of the cells for this column.
       */width:{type:String,value:"100px"},/**
       * Flex grow ratio for the cell widths. When set to 0, cell width is fixed.
       */flexGrow:{type:Number,value:1},/**
       * Custom function for rendering the cell content.
       * Receives three arguments:
       *
       * - `root` The cell content DOM element. Append your content to it.
       * - `column` The `<vaadin-grid-column>` element.
       * - `rowData` The object with the properties related with
       *   the rendered item, contains:
       *   - `rowData.index` The index of the item.
       *   - `rowData.item` The item.
       *   - `rowData.expanded` Sublevel toggle state.
       *   - `rowData.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `rowData.selected` Selected state.
       */renderer:Function,/**
       * Path to an item sub-property whose value gets displayed in the column body cells.
       * The property name is also shown in the column header if an explicit header or renderer isn't defined.
       */path:{type:String},/**
       * Automatically sets the width of the column based on the column contents when this is set to `true`.
       *
       * For performance reasons the column width is calculated automatically only once when the grid items
       * are rendered for the first time and the calculation only considers the rows which are currently
       * rendered in DOM (a bit more than what is currently visible). If the grid is scrolled, or the cell
       * content changes, the column width might not match the contents anymore.
       *
       * Hidden columns are ignored in the calculation and their widths are not automatically updated when
       * you show a column that was initially hidden.
       *
       * You can manually trigger the auto sizing behavior again by calling `grid.recalculateColumnWidths()`.
       *
       * The column width may still grow larger when `flexGrow` is not 0.
       */autoWidth:{type:Boolean,value:!1},_bodyTemplate:{type:Object},_cells:Array}}}]);return GridColumnElement}(ColumnBaseMixin(PolymerElement));_exports.GridColumnElement=GridColumnElement;customElements.define(GridColumnElement.is,GridColumnElement);var vaadinGridColumn={ColumnBaseMixin:ColumnBaseMixin,GridColumnElement:GridColumnElement};_exports.$vaadinGridColumn=vaadinGridColumn;var ItemCache=/*#__PURE__*/function(){function ItemCache(grid,parentCache,parentItem){babelHelpers.classCallCheck(this,ItemCache);this.grid=grid;this.parentCache=parentCache;this.parentItem=parentItem;this.itemCaches={};this.items={};this.effectiveSize=0;this.size=0;this.pendingRequests={}}babelHelpers.createClass(ItemCache,[{key:"isLoading",value:function isLoading(){var _this63=this;return Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(function(index){return _this63.itemCaches[index].isLoading()})[0]}},{key:"getItemForIndex",value:function getItemForIndex(index){var _this$getCacheAndInde=this.getCacheAndIndex(index),cache=_this$getCacheAndInde.cache,scaledIndex=_this$getCacheAndInde.scaledIndex;return cache.items[scaledIndex]}},{key:"updateSize",value:function updateSize(){var _this64=this;this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce(function(prev,curr){var subCache=_this64.itemCaches[curr];subCache.updateSize();return prev+subCache.effectiveSize},0):0}},{key:"ensureSubCacheForScaledIndex",value:function ensureSubCacheForScaledIndex(scaledIndex){if(!this.itemCaches[scaledIndex]){var subCache=new ItemCache(this.grid,this,this.items[scaledIndex]);this.itemCaches[scaledIndex]=subCache;this.grid._loadPage(0,subCache)}}},{key:"getCacheAndIndex",value:function getCacheAndIndex(index){for(var thisLevelIndex=index,keys=Object.keys(this.itemCaches),i=0;i<keys.length;i++){var expandedIndex=+keys[i],subCache=this.itemCaches[expandedIndex];if(thisLevelIndex<=expandedIndex){return{cache:this,scaledIndex:thisLevelIndex}}else if(thisLevelIndex<=expandedIndex+subCache.effectiveSize){return subCache.getCacheAndIndex(thisLevelIndex-expandedIndex-1)}thisLevelIndex-=subCache.effectiveSize}return{cache:this,scaledIndex:thisLevelIndex}}}]);return ItemCache}();/**
    * @polymerMixin
    */_exports.ItemCache=ItemCache;var DataProviderMixin=function DataProviderMixin(superClass){return(/*#__PURE__*/function(_superClass13){babelHelpers.inherits(DataProviderMixin,_superClass13);function DataProviderMixin(){babelHelpers.classCallCheck(this,DataProviderMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DataProviderMixin).apply(this,arguments))}babelHelpers.createClass(DataProviderMixin,[{key:"_sizeChanged",value:function _sizeChanged(size){var delta=size-this._cache.size;this._cache.size+=delta;this._cache.effectiveSize+=delta;this._effectiveSize=this._cache.effectiveSize}},{key:"_updateRowItem",value:function _updateRowItem(item,el){el.children.forEach(function(cell){cell._instance&&(cell._instance.item=item)})}},{key:"_getItem",value:function _getItem(index,el){if(index>=this._effectiveSize){return}el.index=index;var _this$_cache$getCache=this._cache.getCacheAndIndex(index),cache=_this$_cache$getCache.cache,scaledIndex=_this$_cache$getCache.scaledIndex,item=cache.items[scaledIndex];if(item){this._toggleAttribute("loading",!1,el);this._updateItem(el,item);if(this._isExpanded(item)){cache.ensureSubCacheForScaledIndex(scaledIndex)}}else{this._toggleAttribute("loading",!0,el);this._loadPage(this._getPageForIndex(scaledIndex),cache)}}},{key:"_pagesForPhysicalItems",value:function _pagesForPhysicalItems(){var _this65=this,firstVisiblePage=this._getPageForIndex(this._firstVisibleIndex+this._vidxOffset);return[firstVisiblePage].concat(this._physicalItems.filter(function(row){return row.index}).items(function(row){return _this65._getPageForIndex(row.index)})).reduce(function(prev,curr){if(-1===prev.indexOf(curr)){prev.push(curr)}return prev},[])}},{key:"_expandedInstanceChangedCallback",value:function _expandedInstanceChangedCallback(inst,value){if(inst.item===void 0){return}if(value){this.expandItem(inst.item)}else{this.collapseItem(inst.item)}}/**
     * Returns a value that identifies the item. Uses `itemIdPath` if available.
     * Can be customized by overriding.
     */},{key:"getItemId",value:function getItemId(item){return this.itemIdPath?this.get(this.itemIdPath,item):item}},{key:"_isExpanded",value:function _isExpanded(item){return this.expandedItems&&-1<this._getItemIndexInArray(item,this.expandedItems)}},{key:"_expandedItemsChanged",value:function _expandedItemsChanged(e){this._cache.updateSize();this._effectiveSize=this._cache.effectiveSize;this._assignModels()}/**
     * Expands the given item tree.
     */},{key:"expandItem",value:function expandItem(item){if(!this._isExpanded(item)){this.push("expandedItems",item)}}/**
     * Collapses the given item tree.
     */},{key:"collapseItem",value:function collapseItem(item){if(this._isExpanded(item)){this.splice("expandedItems",this._getItemIndexInArray(item,this.expandedItems),1)}}},{key:"_getIndexLevel",value:function _getIndexLevel(index){var _this$_cache$getCache2=this._cache.getCacheAndIndex(index),cache=_this$_cache$getCache2.cache,level=0;while(cache.parentCache){cache=cache.parentCache;level++}return level}},{key:"_canPopulate",value:function _canPopulate(){return this._hasData&&this._columnTree}},{key:"_loadPage",value:function _loadPage(page,cache){var _this66=this;// make sure same page isn't requested multiple times.
if(!cache.pendingRequests[page]&&this.dataProvider){this._setLoading(!0);cache.pendingRequests[page]=!0;var params={page:page,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:cache.parentItem};this.dataProvider(params,function(items,size){if(size!==void 0){cache.size=size}else{if(params.parentItem){cache.size=items.length}}// Populate the cache with new items
items.forEach(function(item,itemsIndex){var itemIndex=page*_this66.pageSize+itemsIndex;cache.items[itemIndex]=item;if(_this66._isExpanded(item)){// Force synchronous data request for expanded item sub-cache
cache.ensureSubCacheForScaledIndex(itemIndex)}});_this66._hasData=!0;delete cache.pendingRequests[page];if(!_this66._cache.isLoading()){// All active requests have finished, update the effective size and rows
_this66._setLoading(!1);_this66._cache.updateSize();_this66._effectiveSize=_this66._cache.effectiveSize;Array.from(_this66.$.items.children).filter(function(row){return!row.hidden}).forEach(function(row){var cachedItem=_this66._cache.getItemForIndex(row.index);if(cachedItem){_this66._toggleAttribute("loading",!1,row);_this66._updateItem(row,cachedItem)}});_this66._increasePoolIfNeeded(0)}_this66.__setInitialColumnWidths()})}}},{key:"_getPageForIndex",value:function _getPageForIndex(index){return Math.floor(index/this.pageSize)}/**
     * Clears the cached pages and reloads data from dataprovider when needed.
     */},{key:"clearCache",value:function clearCache(){this._cache=new ItemCache(this);Array.from(this.$.items.children).forEach(function(row){Array.from(row.children).forEach(function(cell){// Force data system to pick up subproperty changes
cell._instance&&cell._instance._setPendingProperty("item",{},!1)})});this._cache.size=this.size||0;this._cache.updateSize();this._hasData=!1;this._assignModels();if(!this._effectiveSize){this._loadPage(0,this._cache)}}},{key:"_flushItemsDebouncer",value:function _flushItemsDebouncer(){if(this._debouncerLoad){this._debouncerLoad.flush()}}},{key:"_pageSizeChanged",value:function _pageSizeChanged(pageSize,oldPageSize){if(oldPageSize!==void 0&&pageSize!==oldPageSize){this.clearCache()}}},{key:"_checkSize",value:function _checkSize(){if(this.size===void 0&&0===this._effectiveSize){console.warn("The <vaadin-grid> needs the total number of items"+" in order to display rows. Set the total number of items"+" to the `size` property, or provide the total number of items"+" in the second argument of the `dataProvider`\u2019s `callback` call.")}}},{key:"_dataProviderChanged",value:function _dataProviderChanged(dataProvider,oldDataProvider){if(oldDataProvider!==void 0){this.clearCache()}if(dataProvider&&this.items&&this.items.length){// Fixes possibly invalid cached lastVisibleIndex value in <iron-list>
this._scrollToIndex(this._firstVisibleIndex)}this._ensureFirstPageLoaded();this._debouncerCheckSize=Debouncer.debounce(this._debouncerCheckSize,timeOut.after(2e3),this._checkSize.bind(this));this._scrollHandler()}},{key:"_ensureFirstPageLoaded",value:function _ensureFirstPageLoaded(){var _this67=this;if(!this._hasData){// load data before adding rows to make sure they have content when
// rendered for the first time.
this._loadPage(0,this._cache,function(){var hadData=_this67._hasData;_this67._hasData=!0;if(!hadData){_this67.notifyResize()}})}}},{key:"_itemsEqual",value:function _itemsEqual(item1,item2){return this.getItemId(item1)===this.getItemId(item2)}},{key:"_getItemIndexInArray",value:function _getItemIndexInArray(item,array){var _this68=this,result=-1;array.forEach(function(i,idx){if(_this68._itemsEqual(i,item)){result=idx}});return result}}],[{key:"properties",get:function get(){return{/**
       * Number of items fetched at a time from the dataprovider.
       */pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},/**
       * Function that provides items lazily. Receives arguments `params`, `callback`
       *
       * `params.page` Requested page index
       *
       * `params.pageSize` Current page size
       *
       * `params.filters` Currently applied filters
       *
       * `params.sortOrders` Currently applied sorting orders
       *
       * `params.parentItem` When tree is used, and sublevel items
       * are requested, reference to parent item of the requested sublevel.
       * Otherwise `undefined`.
       *
       * `callback(items, size)` Callback function with arguments:
       *   - `items` Current page of items
       *   - `size` Total number of items. When tree sublevel items
       *     are requested, total number of items in the requested sublevel.
       *     Optional when tree is not used, required for tree.
       */dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},/**
       * `true` while data is being requested from the data provider.
       */loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value:function value(){var cache=new ItemCache(this);return cache}},/**
       * Path to an item sub-property that identifies the item.
       */itemIdPath:{type:String,value:null},/**
       * An array that contains the expanded items.
       */expandedItems:{type:Object,notify:!0,value:function value(){return[]}}}}},{key:"observers",get:function get(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems.*)"]}}]);return DataProviderMixin}(superClass))};_exports.DataProviderMixin=DataProviderMixin;var vaadinGridDataProviderMixin={ItemCache:ItemCache,DataProviderMixin:DataProviderMixin};/**
   @license
   Copyright (c) 2019 Vaadin Ltd.
   This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */_exports.$vaadinGridDataProviderMixin=vaadinGridDataProviderMixin;var DropMode={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},DropLocation={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},DragAndDropMixin=function DragAndDropMixin(superClass){return(/*#__PURE__*/function(_superClass14){babelHelpers.inherits(DragAndDropMixin,_superClass14);function DragAndDropMixin(){babelHelpers.classCallCheck(this,DragAndDropMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DragAndDropMixin).apply(this,arguments))}babelHelpers.createClass(DragAndDropMixin,[{key:"ready",value:function ready(){var _this69=this;babelHelpers.get(babelHelpers.getPrototypeOf(DragAndDropMixin.prototype),"ready",this).call(this);this.$.table.addEventListener("dragstart",this._onDragStart.bind(this));this.$.table.addEventListener("dragend",this._onDragEnd.bind(this));this.$.table.addEventListener("dragover",this._onDragOver.bind(this));this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this));this.$.table.addEventListener("drop",this._onDrop.bind(this));this.$.table.addEventListener("dragenter",function(e){if(_this69.dropMode){e.preventDefault();e.stopPropagation()}})}},{key:"_onDragStart",value:function _onDragStart(e){var _this70=this;if(this.rowsDraggable){var row=e.target;if("vaadin-grid-cell-content"===row.localName){// The draggable node is the cell content element on browsers that support native shadow
row=row.assignedSlot.parentNode.parentNode}if(row.parentNode!==this.$.items){return}e.stopPropagation();this._toggleAttribute("dragging-rows",!0,this);if(this._safari){// Safari doesn't get proper drag images from transformed
// elements so we need to switch to top temporarily
var transform=row.style.transform;row.style.top=/translateY\((.*)\)/.exec(transform)[1];row.style.transform="none";requestAnimationFrame(function(){row.style.top="";row.style.transform=transform})}var rowRect=row.getBoundingClientRect();if(!window.ShadyDOM){if(this._ios){e.dataTransfer.setDragImage(row)}else{e.dataTransfer.setDragImage(row,e.clientX-rowRect.left,e.clientY-rowRect.top)}}var rows=[row];if(this._isSelected(row._item)){rows=this.__getViewportRows().filter(function(row){return _this70._isSelected(row._item)}).filter(function(row){return!_this70.dragFilter||_this70.dragFilter(_this70.__getRowModel(row))})}// Set the default transfer data
e.dataTransfer.setData("text",this.__formatDefaultTransferData(rows));row.setAttribute("dragstart",1<rows.length?rows.length:"");this.updateStyles({"--_grid-drag-start-x":"".concat(e.clientX-rowRect.left+20,"px"),"--_grid-drag-start-y":"".concat(e.clientY-rowRect.top+10,"px")});requestAnimationFrame(function(){row.removeAttribute("dragstart");_this70.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""})});var event=new CustomEvent("grid-dragstart",{detail:{draggedItems:rows.map(function(row){return row._item}),setDragData:function setDragData(type,data){return e.dataTransfer.setData(type,data)},setDraggedItemsCount:function setDraggedItemsCount(count){return row.setAttribute("dragstart",count)}}});event.originalEvent=e;this.dispatchEvent(event)}}},{key:"_onDragEnd",value:function _onDragEnd(e){this._toggleAttribute("dragging-rows",!1,this);e.stopPropagation();var event=new CustomEvent("grid-dragend");event.originalEvent=e;this.dispatchEvent(event)}},{key:"_onDragLeave",value:function _onDragLeave(e){e.stopPropagation();this._clearDragStyles()}},{key:"_onDragOver",value:function _onDragOver(e){if(this.dropMode){this._dropLocation=void 0;this._dragOverItem=void 0;if(this.__dndAutoScroll(e.clientY)){this._clearDragStyles();return}var row=e.composedPath().filter(function(node){return"tr"===node.localName})[0];if(!this._effectiveSize||this.dropMode===DropMode.ON_GRID){// The grid is empty or "on-grid" drop mode was used, always default to "empty"
this._dropLocation=DropLocation.EMPTY}else if(!row||row.parentNode!==this.$.items){// The dragover didn't occur on a body row but the grid has items
if(row){// The dragover occurred over a header/footer row
return}else if(this.dropMode===DropMode.BETWEEN||this.dropMode===DropMode.ON_TOP_OR_BETWEEN){// The drop mode allows setting the last row as the drag over item
row=Array.from(this.$.items.children).filter(function(row){return!row.hidden}).pop();this._dropLocation=DropLocation.BELOW}else{// Drop mode on-top used but the dragover didn't occur over one of the existing rows
return}}else{// The dragover occurred on a body row, determine the drop location from coordinates
var rowRect=row.getBoundingClientRect();this._dropLocation=DropLocation.ON_TOP;if(this.dropMode===DropMode.BETWEEN){var dropAbove=e.clientY-rowRect.top<rowRect.bottom-e.clientY;this._dropLocation=dropAbove?DropLocation.ABOVE:DropLocation.BELOW}else if(this.dropMode===DropMode.ON_TOP_OR_BETWEEN){if(e.clientY-rowRect.top<rowRect.height/3){this._dropLocation=DropLocation.ABOVE}else if(e.clientY-rowRect.top>2*(rowRect.height/3)){this._dropLocation=DropLocation.BELOW}}}if(row&&row.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}e.stopPropagation();e.preventDefault();if(this._dropLocation===DropLocation.EMPTY){this._toggleAttribute("dragover",!0,this)}else if(row){this._dragOverItem=row._item;if(row.getAttribute("dragover")!==this._dropLocation){row.setAttribute("dragover",this._dropLocation)}}else{this._clearDragStyles()}}}},{key:"__dndAutoScroll",value:function __dndAutoScroll(clientY){var _this71=this;if(this.__dndAutoScrolling){return!0}var headerBottom=this.$.header.getBoundingClientRect().bottom,footerTop=this.$.footer.getBoundingClientRect().top,topDiff=headerBottom-clientY+this.__dndAutoScrollThreshold,bottomDiff=clientY-footerTop+this.__dndAutoScrollThreshold,scrollTopDelta=0;if(0<bottomDiff){scrollTopDelta=2*bottomDiff}else if(0<topDiff){scrollTopDelta=2*-topDiff}if(scrollTopDelta){var scrollTop=this.$.table.scrollTop;this.$.table.scrollTop+=scrollTopDelta;var scrollTopChanged=scrollTop!==this.$.table.scrollTop;if(scrollTopChanged){this.__dndAutoScrolling=!0;// Disallow more auto-scrolls within 20ms
setTimeout(function(){return _this71.__dndAutoScrolling=!1},20);this._scrollHandler();return!0}}}},{key:"__getViewportRows",value:function __getViewportRows(){var headerBottom=this.$.header.getBoundingClientRect().bottom,footerTop=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(function(row){var rowRect=row.getBoundingClientRect();return rowRect.bottom>headerBottom&&rowRect.top<footerTop})}},{key:"_clearDragStyles",value:function _clearDragStyles(){this.removeAttribute("dragover");Array.from(this.$.items.children).forEach(function(row){return row.removeAttribute("dragover")})}},{key:"_onDrop",value:function _onDrop(e){if(this.dropMode){e.stopPropagation();e.preventDefault();var dragData=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(function(type){return{type:type,data:e.dataTransfer.getData(type)}});this._clearDragStyles();var event=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:dragData}});event.originalEvent=e;this.dispatchEvent(event)}}},{key:"__formatDefaultTransferData",value:function __formatDefaultTransferData(rows){return rows.map(function(row){return Array.from(row.children).filter(function(cell){return!cell.hidden&&-1===cell.getAttribute("part").indexOf("details-cell")}).sort(function(a,b){return a._column._order>b._column._order?1:-1}).map(function(cell){return cell._content.textContent.trim()}).filter(function(content){return content}).join("\t")}).join("\n")}},{key:"_dragDropAccessChanged",value:function _dragDropAccessChanged(rowsDraggable,dropMode,dragFilter,dropFilter){this.filterDragAndDrop()}/**
     * Runs the `dragFilter` and `dropFilter` hooks for the visible cells.
     * If the filter depends on varying conditions, you may need to
     * call this function manually in order to update the draggability when
     * the conditions change.
     */},{key:"filterDragAndDrop",value:function filterDragAndDrop(){var _this72=this;Array.from(this.$.items.children).filter(function(row){return!row.hidden}).forEach(function(row){_this72._filterDragAndDrop(row,_this72.__getRowModel(row))})}},{key:"_filterDragAndDrop",value:function _filterDragAndDrop(row,rowData){var dragDisabled=!this.rowsDraggable||this.dragFilter&&!this.dragFilter(rowData),dropDisabled=!this.dropMode||this.dropFilter&&!this.dropFilter(rowData),draggableElements=window.ShadyDOM?[row]:Array.from(row.children).map(function(cell){return cell._content});draggableElements.forEach(function(e){if(dragDisabled){e.removeAttribute("draggable")}else{e.setAttribute("draggable",!0)}});this._toggleAttribute("drag-disabled",dragDisabled,row);this._toggleAttribute("drop-disabled",dropDisabled,row)}/**
     * Fired when starting to drag grid rows.
     *
     * @event grid-dragstart
     * @param {Object} originalEvent The native dragstart event
     * @param {Object} detail
     * @param {Object} detail.draggedItems the items in the visible viewport that are dragged
     * @param {Function} detail.setDraggedItemsCount Overrides the default number shown in the drag image on multi row drag.
     * Parameter is of type number.
     * @param {Function} detail.setDragData Sets dataTransfer data for the drag operation.
     * Note that "text" is the only data type supported by all the browsers the grid currently supports (including IE11).
     * The function takes two parameters:
     * - type:string The type of the data
     * - data:string The data
     */ /**
         * Fired when the dragging of the rows ends.
         *
         * @event grid-dragend
         * @param {Object} originalEvent The native dragend event
         */ /**
             * Fired when a drop occurs on top of the grid.
             *
             * @event grid-drop
             * @param {Object} originalEvent The native drop event
             * @param {Object} detail
             * @param {Object} detail.dropTargetItem The item of the grid row on which the drop occurred.
             * @param {string} detail.dropLocation The position at which the drop event took place relative to a row.
             * Depending on the dropMode value, the drop location can be one of the following
             * - `on-top`: when the drop occurred on top of the row
             * - `above`: when the drop occurred above the row
             * - `below`: when the drop occurred below the row
             * - `empty`: when the drop occurred over the grid, not relative to any specific row
             * @param {string} detail.dragData An array of items with the payload as a string representation as the
             * `data` property and the type of the data as `type` property.
             */}],[{key:"properties",get:function get(){return{/**
       * Defines the locations within the Grid row where an element can be dropped.
       *
       * Possible values are:
       * - `between`: The drop event can happen between Grid rows.
       * - `on-top`: The drop event can happen on top of Grid rows.
       * - `on-top-or-between`: The drop event can happen either on top of or between Grid rows.
       * - `on-grid`: The drop event will not happen on any specific row, it will show the drop target outline around the whole grid.
       */dropMode:String,/**
       * Marks the grid's rows to be available for dragging.
       */rowsDraggable:Boolean,/**
       * A function that filters dragging of specific grid rows. The return value should be false
       * if dragging of the row should be disabled.
       *
       * Receives one argument:
       * - `rowData` The object with the properties related with
       *   the rendered item, contains:
       *   - `rowData.index` The index of the item.
       *   - `rowData.item` The item.
       *   - `rowData.expanded` Sublevel toggle state.
       *   - `rowData.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `rowData.selected` Selected state.
       */dragFilter:Function,/**
       * A function that filters dropping on specific grid rows. The return value should be false
       * if dropping on the row should be disabled.
       *
       * Receives one argument:
       * - `rowData` The object with the properties related with
       *   the rendered item, contains:
       *   - `rowData.index` The index of the item.
       *   - `rowData.item` The item.
       *   - `rowData.expanded` Sublevel toggle state.
       *   - `rowData.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `rowData.selected` Selected state.
       */dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}},{key:"observers",get:function get(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter)"]}}]);return DragAndDropMixin}(superClass))};_exports.DragAndDropMixin=DragAndDropMixin;var vaadinGridDragAndDropMixin={DragAndDropMixin:DragAndDropMixin};_exports.$vaadinGridDragAndDropMixin=vaadinGridDragAndDropMixin;var DynamicColumnsMixin=function DynamicColumnsMixin(superClass){return(/*#__PURE__*/function(_superClass15){babelHelpers.inherits(DynamicColumnsMixin,_superClass15);function DynamicColumnsMixin(){babelHelpers.classCallCheck(this,DynamicColumnsMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DynamicColumnsMixin).apply(this,arguments))}babelHelpers.createClass(DynamicColumnsMixin,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(DynamicColumnsMixin.prototype),"ready",this).call(this);this._addNodeObserver()}},{key:"_hasColumnGroups",value:function _hasColumnGroups(columns){for(var _i79=0;_i79<columns.length;_i79++){if("vaadin-grid-column-group"===columns[_i79].localName){return!0}}return!1}},{key:"_getChildColumns",value:function _getChildColumns(el){return FlattenedNodesObserver.getFlattenedNodes(el).filter(this._isColumnElement)}},{key:"_flattenColumnGroups",value:function _flattenColumnGroups(columns){var _this73=this;return columns.map(function(col){if("vaadin-grid-column-group"===col.localName){return _this73._getChildColumns(col)}else{return[col]}}).reduce(function(prev,curr){return prev.concat(curr)},[])}},{key:"_getColumnTree",value:function _getColumnTree(){for(var rootColumns=FlattenedNodesObserver.getFlattenedNodes(this).filter(this._isColumnElement),_columnTree=[],c=rootColumns;;){_columnTree.push(c);if(!this._hasColumnGroups(c)){break}c=this._flattenColumnGroups(c)}return _columnTree}},{key:"_updateColumnTree",value:function _updateColumnTree(){var columnTree=this._getColumnTree();if(!this._arrayEquals(columnTree,this._columnTree)){this._columnTree=columnTree}}},{key:"_addNodeObserver",value:function _addNodeObserver(){var _this74=this;this._observer=new FlattenedNodesObserver(this,function(info){var rowDetailsTemplate=info.addedNodes.filter(function(n){return"template"===n.localName&&n.classList.contains("row-details")})[0];if(rowDetailsTemplate&&_this74._rowDetailsTemplate!==rowDetailsTemplate){_this74._rowDetailsTemplate=rowDetailsTemplate}if(0<info.addedNodes.filter(_this74._isColumnElement).length||0<info.removedNodes.filter(_this74._isColumnElement).length){_this74._updateColumnTree()}_this74._debouncerCheckImports=Debouncer.debounce(_this74._debouncerCheckImports,timeOut.after(2e3),_this74._checkImports.bind(_this74));_this74._ensureFirstPageLoaded()})}},{key:"_arrayEquals",value:function _arrayEquals(arr1,arr2){if(!arr1||!arr2||arr1.length!=arr2.length){return!1}for(var i=0,l=arr1.length;i<l;i++){// Check if we have nested arrays
if(babelHelpers.instanceof(arr1[i],Array)&&babelHelpers.instanceof(arr2[i],Array)){// recurse into the nested arrays
if(!this._arrayEquals(arr1[i],arr2[i])){return!1}}else if(arr1[i]!=arr2[i]){return!1}}return!0}},{key:"_checkImports",value:function _checkImports(){var _this75=this;["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(function(elementName){var element=_this75.querySelector(elementName);if(element&&!babelHelpers.instanceof(element,PolymerElement)){console.warn("Make sure you have imported the required module for <".concat(elementName,"> element."))}})}},{key:"_updateFirstAndLastColumn",value:function _updateFirstAndLastColumn(){var _this76=this;Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(function(row){return _this76._updateFirstAndLastColumnForRow(row)})}},{key:"_updateFirstAndLastColumnForRow",value:function _updateFirstAndLastColumnForRow(row){var _this77=this;Array.from(row.querySelectorAll("[part~=\"cell\"]:not([part~=\"details-cell\"])")).sort(function(a,b){return a._column._order-b._column._order}).forEach(function(cell,cellIndex,children){_this77._toggleAttribute("first-column",0===cellIndex,cell);_this77._toggleAttribute("last-column",cellIndex===children.length-1,cell)})}},{key:"_isColumnElement",value:function _isColumnElement(node){return node.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(node.localName)}}]);return DynamicColumnsMixin}(superClass))};_exports.DynamicColumnsMixin=DynamicColumnsMixin;var vaadinGridDynamicColumnsMixin={DynamicColumnsMixin:DynamicColumnsMixin};/**
   @license
   Copyright (c) 2018 Vaadin Ltd.
   This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */ /**
       * @polymerMixin
       */_exports.$vaadinGridDynamicColumnsMixin=vaadinGridDynamicColumnsMixin;var EventContextMixin=function EventContextMixin(superClass){return(/*#__PURE__*/function(_superClass16){babelHelpers.inherits(EventContextMixin,_superClass16);function EventContextMixin(){babelHelpers.classCallCheck(this,EventContextMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(EventContextMixin).apply(this,arguments))}babelHelpers.createClass(EventContextMixin,[{key:"getEventContext",/**
   * Returns an object with context information about the event target:
   * - `item`: the data object corresponding to the targeted row (not specified when targeting header or footer)
   * - `column`: the column element corresponding to the targeted cell (not specified when targeting row details)
   * - `section`: whether the event targeted the body, header, footer or details of the grid
   *
   * These additional properties are included when `item` is specified:
   * - `index`: the index of the item
   * - `selected`: the selected state of the item
   * - `detailsOpened`: whether the row details are open for the item
   * - `expanded`: the expanded state of the tree toggle
   * - `level`: the tree hierarchy level
   *
   * The returned object is populated only when a grid cell, header, footer or row details is found in `event.composedPath()`.
   * This means mostly mouse and keyboard events. If such a grid part is not found in the path, an empty object is returned.
   * This may be the case eg. if the event is fired on the `<vaadin-grid>` element and not any deeper in the DOM, or if
   * the event targets the empty part of the grid body.
   */value:function getEventContext(event){var context={},path=event.composedPath(),cell=path[path.indexOf(this.$.table)-3];if(!cell){return context}context.section=["body","header","footer","details"].filter(function(section){return-1<cell.getAttribute("part").indexOf(section)})[0];if(cell._column){context.column=cell._column}if("body"===context.section||"details"===context.section){Object.assign(context,this.__getRowModel(cell.parentElement))}return context}}]);return EventContextMixin}(superClass))};_exports.EventContextMixin=EventContextMixin;var vaadinGridEventContextMixin={EventContextMixin:EventContextMixin};/**
   @license
   Copyright (c) 2017 Vaadin Ltd.
   This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */ /**
       * @polymerMixin
       */_exports.$vaadinGridEventContextMixin=vaadinGridEventContextMixin;var FilterMixin=function FilterMixin(superClass){return(/*#__PURE__*/function(_superClass17){babelHelpers.inherits(FilterMixin,_superClass17);function FilterMixin(){babelHelpers.classCallCheck(this,FilterMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(FilterMixin).apply(this,arguments))}babelHelpers.createClass(FilterMixin,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(FilterMixin.prototype),"ready",this).call(this);this.addEventListener("filter-changed",this._filterChanged.bind(this))}},{key:"_filterChanged",value:function _filterChanged(e){if(-1===this._filters.indexOf(e.target)){this._filters.push(e.target)}e.stopPropagation();if(this.dataProvider){this.clearCache()}}},{key:"_mapFilters",value:function _mapFilters(){return this._filters.map(function(filter){return{path:filter.path,value:filter.value}})}}],[{key:"properties",get:function get(){return{_filters:{type:Array,value:function value(){return[]}}}}}]);return FilterMixin}(superClass))};_exports.FilterMixin=FilterMixin;var vaadinGridFilterMixin={FilterMixin:FilterMixin};/**
   @license
   Copyright (c) 2017 Vaadin Ltd.
   This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */ /**
       * @polymerMixin
       */_exports.$vaadinGridFilterMixin=vaadinGridFilterMixin;var KeyboardNavigationMixin=function KeyboardNavigationMixin(superClass){return(/*#__PURE__*/function(_superClass18){babelHelpers.inherits(KeyboardNavigationMixin,_superClass18);function KeyboardNavigationMixin(){babelHelpers.classCallCheck(this,KeyboardNavigationMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(KeyboardNavigationMixin).apply(this,arguments))}babelHelpers.createClass(KeyboardNavigationMixin,[{key:"ready",value:function ready(){var _this78=this;babelHelpers.get(babelHelpers.getPrototypeOf(KeyboardNavigationMixin.prototype),"ready",this).call(this);if(this._ios||this._android){// Disable keyboard navigation on mobile devices
return}this.addEventListener("keydown",this._onKeyDown);this.addEventListener("focusin",this._onFocusIn);this.addEventListener("focusout",this._onFocusOut);// When focus goes from cell to another cell, focusin/focusout events do
// not escape the grid’s shadowRoot, thus listening inside the shadowRoot.
this.$.table.addEventListener("focusin",this._onCellFocusIn.bind(this));this.$.table.addEventListener("focusout",this._onCellFocusOut.bind(this));this.addEventListener("mousedown",function(){_this78._toggleAttribute("navigating",!1,_this78);_this78._isMousedown=!0});this.addEventListener("mouseup",function(){return _this78._isMousedown=!1})}},{key:"_focusableChanged",value:function _focusableChanged(focusable,oldFocusable){if(oldFocusable){oldFocusable.setAttribute("tabindex","-1")}if(focusable){focusable.setAttribute("tabindex","0")}}},{key:"_onKeyDown",value:function _onKeyDown(e){// Ensure standard key value, unified across browsers
var key=e.key;if("Up"===key||"Down"===key||"Left"===key||"Right"===key){// MSIE & Edge
key="Arrow"+key}if("Esc"===key){// MSIE & Edge
key="Escape"}if("Spacebar"===key){// MSIE
key=" "}var keyGroup;switch(key){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":keyGroup="Navigation";break;case"Enter":case"Escape":case"F2":keyGroup="Interaction";break;case"Tab":keyGroup="Tab";break;case" ":keyGroup="Space";break;}this._detectInteracting(e);if(this.hasAttribute("interacting")&&"Interaction"!==keyGroup){// When in the interacting mode, only the “Interaction” keys are handled.
keyGroup=void 0}if(keyGroup){this["_on".concat(keyGroup,"KeyDown")](e,key)}}},{key:"_ensureScrolledToIndex",value:function _ensureScrolledToIndex(index){var targetRowInDom=Array.from(this.$.items.children).filter(function(child){return child.index===index})[0];if(!targetRowInDom){this._scrollToIndex(index)}}},{key:"_onNavigationKeyDown",value:function _onNavigationKeyDown(e,key){var _this79=this;e.preventDefault();function indexOfChildElement(el){return Array.prototype.indexOf.call(el.parentNode.children,el)}var visibleItemsCount=this._lastVisibleIndex-this._firstVisibleIndex-1,dx=0,dy=0;switch(key){case"ArrowRight":dx=1;break;case"ArrowLeft":dx=-1;break;case"Home":dx=-Infinity;e.ctrlKey&&(dy=-Infinity);break;case"End":dx=1/0;e.ctrlKey&&(dy=1/0);break;case"ArrowDown":dy=1;break;case"ArrowUp":dy=-1;break;case"PageDown":dy=visibleItemsCount;break;case"PageUp":dy=-visibleItemsCount;break;}var activeCell=e.composedPath()[0],columnIndex=indexOfChildElement(activeCell),isRowDetails=this._elementMatches(activeCell,"[part~=\"details-cell\"]"),activeRow=activeCell.parentNode,activeRowGroup=activeRow.parentNode,maxRowIndex=(activeRowGroup===this.$.items?this._effectiveSize:activeRowGroup.children.length)-1,rowIndex=activeRowGroup===this.$.items?this._focusedItemIndex!==void 0?this._focusedItemIndex:activeRow.index:indexOfChildElement(activeRow),dstRowIndex=Math.max(0,Math.min(rowIndex+dy,maxRowIndex)),dstIsRowDetails=!1;if(activeRowGroup===this.$.items){var item=activeRow._item,dstItem=this._cache.getItemForIndex(dstRowIndex);// Should we navigate to row details?
if(isRowDetails){dstIsRowDetails=0===dy}else{dstIsRowDetails=1===dy&&this._isDetailsOpened(item)||-1===dy&&dstRowIndex!==rowIndex&&this._isDetailsOpened(dstItem)}// Should we navigate between details and regular cells of the same row?
if(dstIsRowDetails!==isRowDetails&&(1===dy&&dstIsRowDetails||-1===dy&&!dstIsRowDetails)){dstRowIndex=rowIndex}}// Header and footer could have hidden rows, e. g., if none of the columns
// or groups on the given column tree level define template. Skip them
// in vertical keyboard navigation.
if(activeRowGroup!==this.$.items){if(dstRowIndex>rowIndex){while(dstRowIndex<maxRowIndex&&activeRowGroup.children[dstRowIndex].hidden){dstRowIndex++}}else if(dstRowIndex<rowIndex){while(0<dstRowIndex&&activeRowGroup.children[dstRowIndex].hidden){dstRowIndex--}}}// _focusedColumnOrder is memoized — this is to ensure predictable
// navigation when entering and leaving detail and column group cells.
if(this._focusedColumnOrder===void 0){if(isRowDetails){this._focusedColumnOrder=0}else{this._focusedColumnOrder=this._getColumns(activeRowGroup,rowIndex)[columnIndex]._order}}// Find orderedColumnIndex — the index of order closest matching the
// original _focusedColumnOrder in the sorted array of orders
// of the visible columns on the destination row.
var dstColumns=this._getColumns(activeRowGroup,dstRowIndex),dstSortedColumnOrders=dstColumns.filter(function(c){return!c.hidden}).map(function(c){return c._order}).sort(function(b,a){return b-a}),maxOrderedColumnIndex=dstSortedColumnOrders.length-1,orderedColumnIndex=dstSortedColumnOrders.indexOf(dstSortedColumnOrders.slice(0).sort(function(b,a){return Math.abs(b-_this79._focusedColumnOrder)-Math.abs(a-_this79._focusedColumnOrder)})[0]),dstOrderedColumnIndex=0===dy&&isRowDetails?orderedColumnIndex:Math.max(0,Math.min(orderedColumnIndex+dx,maxOrderedColumnIndex));if(dstOrderedColumnIndex!==orderedColumnIndex){// Horizontal movement invalidates stored _focusedColumnOrder
this._focusedColumnOrder=void 0}// Ensure correct vertical scroll position, destination row is visible
if(activeRowGroup===this.$.items){this._ensureScrolledToIndex(dstRowIndex)}// This has to be set after scrolling, otherwise it can be removed by
// `_preventScrollerRotatingCellFocus(item, index)` during scrolling.
this._toggleAttribute("navigating",!0,this);var columnIndexByOrder=dstColumns.reduce(function(acc,col,i){return acc[col._order]=i,acc},{}),dstColumnIndex=columnIndexByOrder[dstSortedColumnOrders[dstOrderedColumnIndex]],dstRow=activeRowGroup===this.$.items?Array.from(activeRowGroup.children).filter(function(el){return el.index===dstRowIndex})[0]:activeRowGroup.children[dstRowIndex];if(!dstRow){return}// Here we go!
var dstCell=dstIsRowDetails?Array.from(dstRow.children).filter(function(el){return _this79._elementMatches(el,"[part~=\"details-cell\"]")})[0]:dstRow.children[dstColumnIndex];this._scrollHorizontallyToCell(dstCell);if(activeRowGroup===this.$.items){// When scrolling with repeated keydown, sometimes FocusEvent listeners
// are too late to update _focusedItemIndex. Ensure next keydown
// listener invocation gets updated _focusedItemIndex value.
this._focusedItemIndex=dstRowIndex}if(activeRowGroup===this.$.items){var dstRect=dstCell.getBoundingClientRect(),footerTop=this.$.footer.getBoundingClientRect().top,headerBottom=this.$.header.getBoundingClientRect().bottom;if(dstRect.bottom>footerTop){this.$.table.scrollTop+=dstRect.bottom-footerTop;this._scrollHandler()}else if(dstRect.top<headerBottom){this.$.table.scrollTop-=headerBottom-dstRect.top;this._scrollHandler()}}dstCell.focus()}},{key:"_parseEventPath",value:function _parseEventPath(path){var tableIndex=path.indexOf(this.$.table);return{rowGroup:path[tableIndex-1],row:path[tableIndex-2],cell:path[tableIndex-3]}}},{key:"_onInteractionKeyDown",value:function _onInteractionKeyDown(e,key){var localTarget=e.composedPath()[0],localTargetIsTextInput="input"===localTarget.localName&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(localTarget.type),wantInteracting;switch(key){case"Enter":wantInteracting=this.hasAttribute("interacting")?!localTargetIsTextInput:!0;break;case"Escape":wantInteracting=!1;break;case"F2":wantInteracting=!this.hasAttribute("interacting");break;}var _this$_parseEventPath=this._parseEventPath(e.composedPath()),cell=_this$_parseEventPath.cell;if(this.hasAttribute("interacting")!==wantInteracting){if(wantInteracting){var focusTarget=cell._content.querySelector("[focus-target]")||cell._content.firstElementChild;if(focusTarget){e.preventDefault();focusTarget.focus();this._toggleAttribute("interacting",!0,this);this._toggleAttribute("navigating",!1,this)}}else{e.preventDefault();this._focusedColumnOrder=void 0;cell.focus();this._toggleAttribute("interacting",!1,this);this._toggleAttribute("navigating",!0,this)}}}},{key:"_predictFocusStepTarget",value:function _predictFocusStepTarget(srcElement,step){var tabOrder=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit],index=tabOrder.indexOf(srcElement);index+=step;while(0<=index&&index<=tabOrder.length-1&&(!tabOrder[index]||tabOrder[index].parentNode.hidden)){index+=step}return tabOrder[index]}},{key:"_onTabKeyDown",value:function _onTabKeyDown(e){var _this80=this,focusTarget=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(focusTarget===this.$.table){// The focus is about to exit the grid to the top.
this.$.table.focus()}else if(focusTarget===this.$.focusexit){// The focus is about to exit the grid to the bottom.
this.$.focusexit.focus()}else if(focusTarget===this._itemsFocusable){var itemsFocusTarget=focusTarget,targetRow=this._itemsFocusable.parentNode;this._ensureScrolledToIndex(this._focusedItemIndex);if(targetRow.index!==this._focusedItemIndex){// The target row, which is about to be focused next, has been
// assigned with a new index since last focus, probably because of
// scrolling. Focus the row for the stored focused item index instead.
var columnIndex=Array.from(targetRow.children).indexOf(this._itemsFocusable),focusedItemRow=Array.from(this.$.items.children).filter(function(row){return row.index===_this80._focusedItemIndex})[0];if(focusedItemRow){itemsFocusTarget=focusedItemRow.children[columnIndex]}}e.preventDefault();itemsFocusTarget.focus()}else{e.preventDefault();focusTarget.focus()}this._toggleAttribute("navigating",!0,this)}},{key:"_onSpaceKeyDown",value:function _onSpaceKeyDown(e){e.preventDefault();var cell=e.composedPath()[0];if(cell._content&&cell._content.firstElementChild){var wasNavigating=this.hasAttribute("navigating");cell._content.firstElementChild.click();this._toggleAttribute("navigating",wasNavigating,this)}else{this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(cell.parentElement)}}))}}},{key:"_onFocusIn",value:function _onFocusIn(e){if(!this._isMousedown){this._toggleAttribute("navigating",!0,this)}var rootTarget=e.composedPath()[0];if(rootTarget===this.$.table||rootTarget===this.$.focusexit){// The focus enters the top (bottom) of the grid, meaning that user has
// tabbed (shift-tabbed) into the grid. Move the focus to
// the first (the last) focusable.
this._predictFocusStepTarget(rootTarget,rootTarget===this.$.table?1:-1).focus();this._toggleAttribute("interacting",!1,this)}else{this._detectInteracting(e)}}},{key:"_onFocusOut",value:function _onFocusOut(e){this._toggleAttribute("navigating",!1,this);this._detectInteracting(e)}},{key:"_onCellFocusIn",value:function _onCellFocusIn(e){this._detectInteracting(e);if(3===e.composedPath().indexOf(this.$.table)){var cell=e.composedPath()[0];this._activeRowGroup=cell.parentNode.parentNode;if(this._activeRowGroup===this.$.header){this._headerFocusable=cell}else if(this._activeRowGroup===this.$.items){this._itemsFocusable=cell}else if(this._activeRowGroup===this.$.footer){this._footerFocusable=cell}// Inform cell content of the focus (used in <vaadin-grid-sorter>)
cell._content.dispatchEvent(new CustomEvent("cell-focusin",{bubbles:!1}))}this._detectFocusedItemIndex(e)}},{key:"_onCellFocusOut",value:function _onCellFocusOut(e){if(3===e.composedPath().indexOf(this.$.table)){var cell=e.composedPath()[0];// Inform cell content of the focus (used in <vaadin-grid-sorter>)
cell._content.dispatchEvent(new CustomEvent("cell-focusout",{bubbles:!1}))}}},{key:"_detectInteracting",value:function _detectInteracting(e){this._toggleAttribute("interacting",e.composedPath().some(function(el){return"vaadin-grid-cell-content"===el.localName}),this)}},{key:"_detectFocusedItemIndex",value:function _detectFocusedItemIndex(e){var _this$_parseEventPath2=this._parseEventPath(e.composedPath()),rowGroup=_this$_parseEventPath2.rowGroup,row=_this$_parseEventPath2.row;if(rowGroup===this.$.items){this._focusedItemIndex=row.index}}},{key:"_preventScrollerRotatingCellFocus",value:function _preventScrollerRotatingCellFocus(item,index){if(item.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items){// Focused item has went, hide navigation mode
this._navigatingIsHidden=!0;this._toggleAttribute("navigating",!1,this)}if(index===this._focusedItemIndex&&this._navigatingIsHidden){// Focused item is back, restore navigation mode
this._navigatingIsHidden=!1;this._toggleAttribute("navigating",!0,this)}}},{key:"_getColumns",value:function _getColumns(rowGroup,rowIndex){var columnTreeLevel=this._columnTree.length-1;if(rowGroup===this.$.header){columnTreeLevel=rowIndex}else if(rowGroup===this.$.footer){columnTreeLevel=this._columnTree.length-1-rowIndex}return this._columnTree[columnTreeLevel]}},{key:"_resetKeyboardNavigation",value:function _resetKeyboardNavigation(){var _this81=this;if(this.$.header.firstElementChild){this._headerFocusable=Array.from(this.$.header.firstElementChild.children).filter(function(el){return!el.hidden})[0]}if(this.$.items.firstElementChild){var firstVisibleIndexRow=this._iterateItems(function(pidx,vidx){if(_this81._firstVisibleIndex===vidx){return _this81.$.items.children[pidx]}});if(firstVisibleIndexRow){this._itemsFocusable=Array.from(firstVisibleIndexRow.children).filter(function(el){return!el.hidden})[0]}}if(this.$.footer.firstElementChild){this._footerFocusable=Array.from(this.$.footer.firstElementChild.children).filter(function(el){return!el.hidden})[0]}}},{key:"_scrollHorizontallyToCell",value:function _scrollHorizontallyToCell(dstCell){if(dstCell.hasAttribute("frozen")||this._elementMatches(dstCell,"[part~=\"details-cell\"]")){// These cells are, by design, always visible, no need to scroll.
return}for(var dstCellRect=dstCell.getBoundingClientRect(),dstRow=dstCell.parentNode,dstCellIndex=Array.from(dstRow.children).indexOf(dstCell),tableRect=this.$.table.getBoundingClientRect(),leftBoundary=tableRect.left,rightBoundary=tableRect.right,_i80=dstCellIndex-1,cell;0<=_i80;_i80--){cell=dstRow.children[_i80];if(cell.hasAttribute("hidden")||this._elementMatches(cell,"[part~=\"details-cell\"]")){continue}if(cell.hasAttribute("frozen")){leftBoundary=cell.getBoundingClientRect().right;break}}for(var _i81=dstCellIndex+1,_cell;_i81<dstRow.children.length;_i81++){_cell=dstRow.children[_i81];if(_cell.hasAttribute("hidden")||this._elementMatches(_cell,"[part~=\"details-cell\"]")){continue}if(_cell.hasAttribute("frozen")){rightBoundary=_cell.getBoundingClientRect().left;break}}if(dstCellRect.left<leftBoundary){this.$.table.scrollLeft+=Math.round(dstCellRect.left-leftBoundary)}if(dstCellRect.right>rightBoundary){this.$.table.scrollLeft+=Math.round(dstCellRect.right-rightBoundary)}}},{key:"_elementMatches",value:function _elementMatches(el,query){return el.matches?el.matches(query):-1!==Array.from(el.parentNode.querySelectorAll(query)).indexOf(el)}}],[{key:"properties",get:function get(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number}}}]);return KeyboardNavigationMixin}(superClass))};_exports.KeyboardNavigationMixin=KeyboardNavigationMixin;var vaadinGridKeyboardNavigationMixin={KeyboardNavigationMixin:KeyboardNavigationMixin};_exports.$vaadinGridKeyboardNavigationMixin=vaadinGridKeyboardNavigationMixin;var GridOuterScrollerElement=/*#__PURE__*/function(_ref3){babelHelpers.inherits(GridOuterScrollerElement,_ref3);function GridOuterScrollerElement(){babelHelpers.classCallCheck(this,GridOuterScrollerElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(GridOuterScrollerElement).apply(this,arguments))}babelHelpers.createClass(GridOuterScrollerElement,[{key:"ready",value:function ready(){var _this82=this;babelHelpers.get(babelHelpers.getPrototypeOf(GridOuterScrollerElement.prototype),"ready",this).call(this);this.addEventListener("scroll",function(){return _this82._syncScrollTarget()});this.parentElement.addEventListener("mousemove",this._onMouseMove.bind(this));// for some reason scroll bars are hidden in iOS if this style is
// added in stylesheets or before attaching.
this.style.webkitOverflowScrolling="touch";this.addEventListener("mousedown",function(_){return _this82.outerScrolling=!0});this.addEventListener("mouseup",function(_){_this82.outerScrolling=!1;_this82.scrollHandler._scrollHandler()})}},{key:"_onMouseMove",value:function _onMouseMove(e){// Ignore mousemove events on touch devices
if(!this._touchDevice){if(this.noScrollbars&&this.parentElement.hasAttribute("scroll-period")){this.passthrough=e.offsetY<=this.clientHeight-20&&e.offsetX<=this.clientWidth-20}else{this.passthrough=e.offsetY<=this.clientHeight&&e.offsetX<=this.clientWidth}}}},{key:"syncOuterScroller",value:function syncOuterScroller(){this.scrollTop=this.scrollTarget.scrollTop;this.scrollLeft=this.scrollTarget.scrollLeft}},{key:"_syncScrollTarget",value:function _syncScrollTarget(){var _this83=this;requestAnimationFrame(function(){_this83.scrollTarget.scrollTop=_this83.scrollTop;_this83.scrollTarget.scrollLeft=_this83.scrollLeft;_this83.scrollHandler._scrollHandler()})}}],[{key:"template",get:function get(){return html(_templateObject7_7280bdd0bea211e98f44c3131ec74eb1())}},{key:"is",get:function get(){return"vaadin-grid-outer-scroller"}},{key:"properties",get:function get(){return{scrollTarget:{type:Object},scrollHandler:{type:Object},passthrough:{type:Boolean,reflectToAttribute:!0,value:!0},outerScrolling:Boolean,noScrollbars:Boolean,_touchDevice:Boolean}}}]);return GridOuterScrollerElement}(/*#__PURE__*/function(_PolymerElement3){babelHelpers.inherits(_class4,_PolymerElement3);function _class4(){babelHelpers.classCallCheck(this,_class4);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(_class4).apply(this,arguments))}return _class4}(PolymerElement));customElements.define(GridOuterScrollerElement.is,GridOuterScrollerElement);var RowDetailsMixin=function RowDetailsMixin(superClass){return(/*#__PURE__*/function(_superClass19){babelHelpers.inherits(RowDetailsMixin,_superClass19);function RowDetailsMixin(){babelHelpers.classCallCheck(this,RowDetailsMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(RowDetailsMixin).apply(this,arguments))}babelHelpers.createClass(RowDetailsMixin,[{key:"_rowDetailsTemplateOrRendererChanged",value:function _rowDetailsTemplateOrRendererChanged(rowDetailsTemplate,rowDetailsRenderer){var _this84=this;if(rowDetailsTemplate&&rowDetailsRenderer){throw new Error("You should only use either a renderer or a template for row details")}if(rowDetailsTemplate||rowDetailsRenderer){if(rowDetailsTemplate&&!rowDetailsTemplate.templatizer){var templatizer=new GridTemplatizer;templatizer._grid=this;templatizer.dataHost=this.dataHost;templatizer.template=rowDetailsTemplate;rowDetailsTemplate.templatizer=templatizer}if(this._columnTree){// Only update the rows if the column tree has already been initialized
Array.from(this.$.items.children).forEach(function(row){if(!row.querySelector("[part~=details-cell]")){_this84._updateRow(row,_this84._columnTree[_this84._columnTree.length-1]);_this84._a11yUpdateRowDetailsOpened(row,!1)}// Clear any old template instances
delete row.querySelector("[part~=details-cell]")._instance})}if(this.detailsOpenedItems.length){Array.from(this.$.items.children).forEach(this._toggleDetailsCell,this);this._update()}}}},{key:"_detailsOpenedItemsChanged",value:function _detailsOpenedItemsChanged(changeRecord,rowDetailsTemplate,rowDetailsRenderer){var _this85=this;if("detailsOpenedItems.length"===changeRecord.path||!changeRecord.value){// Let’s avoid duplicate work of both “.splices” and “.length” updates.
return}Array.from(this.$.items.children).forEach(function(row){_this85._toggleDetailsCell(row,row._item);_this85._a11yUpdateRowDetailsOpened(row,_this85._isDetailsOpened(row._item));_this85._toggleAttribute("details-opened",_this85._isDetailsOpened(row._item),row)})}},{key:"_configureDetailsCell",value:function _configureDetailsCell(cell){cell.setAttribute("part","cell details-cell");// Freeze the details cell, so that it does not scroll horizontally
// with the normal cells. This way it looks less weird.
this._toggleAttribute("frozen",!0,cell)}},{key:"_toggleDetailsCell",value:function _toggleDetailsCell(row,item){var _this86=this,cell=row.querySelector("[part~=\"details-cell\"]");if(!cell){return}var detailsHidden=!this._isDetailsOpened(item),hiddenChanged=!!cell.hidden!==detailsHidden;if(!cell._instance&&!cell._renderer||cell.hidden!==detailsHidden){cell.hidden=detailsHidden;if(detailsHidden){row.style.removeProperty("padding-bottom")}else{if(this.rowDetailsRenderer){cell._renderer=this.rowDetailsRenderer;cell._renderer.call(this,cell._content,this,{index:row.index,item:item})}else if(this._rowDetailsTemplate&&!cell._instance){// Stamp the template
cell._instance=this._rowDetailsTemplate.templatizer.createInstance();cell._content.innerHTML="";cell._content.appendChild(cell._instance.root);this._updateItem(row,item)}flush$1();row.style.setProperty("padding-bottom","".concat(cell.offsetHeight,"px"));requestAnimationFrame(function(){return _this86.notifyResize()})}}if(hiddenChanged){this._updateMetrics();this._positionItems()}}},{key:"_updateDetailsCellHeights",value:function _updateDetailsCellHeights(){Array.from(this.$.items.querySelectorAll("[part~=\"details-cell\"]:not([hidden])")).forEach(function(cell){cell.parentElement.style.setProperty("padding-bottom","".concat(cell.offsetHeight,"px"))})}},{key:"_isDetailsOpened",value:function _isDetailsOpened(item){return this.detailsOpenedItems&&-1!==this._getItemIndexInArray(item,this.detailsOpenedItems)}/**
     * Open the details row of a given item.
     */},{key:"openItemDetails",value:function openItemDetails(item){if(!this._isDetailsOpened(item)){this.push("detailsOpenedItems",item)}}/**
     * Close the details row of a given item.
     */},{key:"closeItemDetails",value:function closeItemDetails(item){if(this._isDetailsOpened(item)){this.splice("detailsOpenedItems",this._getItemIndexInArray(item,this.detailsOpenedItems),1)}}},{key:"_detailsOpenedInstanceChangedCallback",value:function _detailsOpenedInstanceChangedCallback(instance,value){if(babelHelpers.get(babelHelpers.getPrototypeOf(RowDetailsMixin.prototype),"_detailsOpenedInstanceChangedCallback",this)){babelHelpers.get(babelHelpers.getPrototypeOf(RowDetailsMixin.prototype),"_detailsOpenedInstanceChangedCallback",this).call(this,instance,value)}if(value){this.openItemDetails(instance.item)}else{this.closeItemDetails(instance.item)}}}],[{key:"properties",get:function get(){return{/**
       * An array containing references to items with open row details.
       */detailsOpenedItems:{type:Array,value:function value(){return[]}},_rowDetailsTemplate:Object,/**
       * Custom function for rendering the content of the row details.
       * Receives three arguments:
       *
       * - `root` The row details content DOM element. Append your content to it.
       * - `grid` The `<vaadin-grid>` element.
       * - `rowData` The object with the properties related with
       *   the rendered item, contains:
       *   - `rowData.index` The index of the item.
       *   - `rowData.item` The item.
       */rowDetailsRenderer:Function,_detailsCells:{type:Array}}}},{key:"observers",get:function get(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, _rowDetailsTemplate, rowDetailsRenderer)","_rowDetailsTemplateOrRendererChanged(_rowDetailsTemplate, rowDetailsRenderer)"]}}]);return RowDetailsMixin}(superClass))};_exports.RowDetailsMixin=RowDetailsMixin;var vaadinGridRowDetailsMixin={RowDetailsMixin:RowDetailsMixin};_exports.$vaadinGridRowDetailsMixin=vaadinGridRowDetailsMixin;var ScrollMixin=function ScrollMixin(superClass){return(/*#__PURE__*/function(_superClass20){babelHelpers.inherits(ScrollMixin,_superClass20);function ScrollMixin(){babelHelpers.classCallCheck(this,ScrollMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ScrollMixin).apply(this,arguments))}babelHelpers.createClass(ScrollMixin,[{key:"ready",value:function ready(){var _this87=this;babelHelpers.get(babelHelpers.getPrototypeOf(ScrollMixin.prototype),"ready",this).call(this);this.scrollTarget=this.$.table;this.addEventListener("wheel",function(e){_this87._wheelScrolling=!0;_this87._debouncerWheelScrolling=Debouncer.debounce(_this87._debouncerWheelScrolling,timeOut.after(_this87._timeouts.WHEEL_SCROLLING),function(){return _this87._wheelScrolling=!1});_this87._onWheel(e)});this.$.table.addEventListener("scroll",function(e){if(_this87.$.outerscroller.outerScrolling){e.stopImmediatePropagation()}},!0);this.$.items.addEventListener("focusin",function(e){var itemsIndex=e.composedPath().indexOf(_this87.$.items);_this87._rowWithFocusedElement=e.composedPath()[itemsIndex-1]});this.$.items.addEventListener("focusout",function(){return _this87._rowWithFocusedElement=void 0})}},{key:"_onWheel",value:function _onWheel(e){var _this88=this;if(e.ctrlKey||this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY)){return}var table=this.$.table,deltaY=e.deltaY;if(1===e.deltaMode){// Mode 1 == scrolling by lines instead of pixels
deltaY*=this._physicalAverage}if(this._wheelAnimationFrame){// Skip new wheel events while one is being processed
this._deltaYAcc+=deltaY;e.preventDefault();return}deltaY+=this._deltaYAcc;this._deltaYAcc=0;this._wheelAnimationFrame=!0;this._debouncerWheelAnimationFrame=Debouncer.debounce(this._debouncerWheelAnimationFrame,animationFrame,function(){return _this88._wheelAnimationFrame=!1});var momentum=Math.abs(e.deltaX)+Math.abs(deltaY);if(this._canScroll(table,e.deltaX,deltaY)){e.preventDefault();table.scrollTop+=deltaY;table.scrollLeft+=e.deltaX;this._scrollHandler();this._hasResidualMomentum=!0;this._ignoreNewWheel=!0;this._debouncerIgnoreNewWheel=Debouncer.debounce(this._debouncerIgnoreNewWheel,timeOut.after(this._timeouts.IGNORE_WHEEL),function(){return _this88._ignoreNewWheel=!1})}else if(this._hasResidualMomentum&&momentum<=this._previousMomentum||this._ignoreNewWheel){e.preventDefault()}else if(momentum>this._previousMomentum){this._hasResidualMomentum=!1}this._previousMomentum=momentum}/**
     * Determines if the element has an ancestor prior to this
     * cell content that handles the scroll delta
     */},{key:"_hasScrolledAncestor",value:function _hasScrolledAncestor(el,deltaX,deltaY){if("vaadin-grid-cell-content"===el.localName){return!1}else if(this._canScroll(el,deltaX,deltaY)&&-1!==["auto","scroll"].indexOf(getComputedStyle(el).overflow)){return!0}else if(el!==this&&el.parentElement){return this._hasScrolledAncestor(el.parentElement,deltaX,deltaY)}}/**
     * Determines if the the given scroll deltas can be applied to the element
     * (fully or partially)
     */},{key:"_canScroll",value:function _canScroll(el,deltaX,deltaY){return 0<deltaY&&el.scrollTop<el.scrollHeight-el.offsetHeight||0>deltaY&&0<el.scrollTop||0<deltaX&&el.scrollLeft<el.scrollWidth-el.offsetWidth||0>deltaX&&0<el.scrollLeft}},{key:"_scheduleScrolling",value:function _scheduleScrolling(){var _this89=this;if(!this._scrollingFrame){// Defer setting state attributes to avoid Edge hiccups
this._scrollingFrame=requestAnimationFrame(function(){return _this89._toggleAttribute("scrolling",!0,_this89.$.scroller)})}this._debounceScrolling=Debouncer.debounce(this._debounceScrolling,timeOut.after(this._timeouts.SCROLLING),function(){cancelAnimationFrame(_this89._scrollingFrame);delete _this89._scrollingFrame;_this89._toggleAttribute("scrolling",!1,_this89.$.scroller);if(!_this89.$.outerscroller.outerScrolling){_this89._reorderRows()}});if(!this._scrollPeriodFrame){this._scrollPeriodFrame=requestAnimationFrame(function(){return _this89._toggleAttribute("scroll-period",!0,_this89.$.scroller)})}this._debounceScrollPeriod=Debouncer.debounce(this._debounceScrollPeriod,timeOut.after(this._timeouts.SCROLL_PERIOD),function(){cancelAnimationFrame(_this89._scrollPeriodFrame);delete _this89._scrollPeriodFrame;_this89._toggleAttribute("scroll-period",!1,_this89.$.scroller)})}},{key:"_afterScroll",value:function _afterScroll(){this._translateStationaryElements();if(!this.hasAttribute("reordering")){this._scheduleScrolling()}var os=this.$.outerscroller;if(!this._ios&&(this._wheelScrolling||os.passthrough)){os.syncOuterScroller()}if(this._ios){// Enable vertical rubberband feedback
var overScroll=Math.max(-os.scrollTop,0)||Math.min(0,os.scrollHeight-os.scrollTop-os.offsetHeight);this.$.items.style.transform="translateY(".concat(overScroll,"px)")}this._updateOverflow()}},{key:"_updateOverflow",value:function _updateOverflow(){var _this90=this,overflow="",table=this.$.table;if(table.scrollTop<table.scrollHeight-table.clientHeight){overflow+=" bottom"}if(0<table.scrollTop){overflow+=" top"}if(table.scrollLeft<table.scrollWidth-table.clientWidth){overflow+=" right"}if(0<table.scrollLeft){overflow+=" left"}this._debounceOverflow=Debouncer.debounce(this._debounceOverflow,animationFrame,function(){var value=overflow.trim();if(0<value.length&&_this90.getAttribute("overflow")!==value){_this90.setAttribute("overflow",value)}else if(0==value.length&&_this90.hasAttribute("overflow")){_this90.removeAttribute("overflow")}})}// correct order needed for preserving correct tab order between cell contents.
},{key:"_reorderRows",value:function _reorderRows(){var body=this.$.items,items=body.querySelectorAll("tr");if(!items.length){return}var adjustedVirtualStart=this._virtualStart+this._vidxOffset,targetRow=this._rowWithFocusedElement||Array.from(items).filter(function(row){return!row.hidden})[0];// Which row to use as a target?
if(!targetRow){// All rows are hidden, don't reorder
return}// Where the target row should be?
var targetPhysicalIndex=targetRow.index-adjustedVirtualStart,delta=Array.from(items).indexOf(targetRow)-targetPhysicalIndex;// Reodrer the DOM elements to keep the target row at the target physical index
if(0<delta){for(var _i82=0;_i82<delta;_i82++){body.appendChild(items[_i82])}}else if(0>delta){for(var _i83=items.length+delta;_i83<items.length;_i83++){body.insertBefore(items[_i83],items[0])}}}},{key:"_frozenCellsChanged",value:function _frozenCellsChanged(){var _this91=this;this._debouncerCacheElements=Debouncer.debounce(this._debouncerCacheElements,microTask,function(){Array.from(_this91.root.querySelectorAll("[part~=\"cell\"]")).forEach(function(cell){cell.style.transform=""});_this91._frozenCells=Array.prototype.slice.call(_this91.$.table.querySelectorAll("[frozen]"));_this91._translateStationaryElements()});this._updateLastFrozen()}},{key:"_updateLastFrozen",value:function _updateLastFrozen(){if(!this._columnTree){return}var columnsRow=this._columnTree[this._columnTree.length-1].slice(0);columnsRow.sort(function(a,b){return a._order-b._order});var lastFrozen=columnsRow.reduce(function(prev,col,index){col._lastFrozen=!1;return col.frozen&&!col.hidden?index:prev},void 0);if(lastFrozen!==void 0){columnsRow[lastFrozen]._lastFrozen=!0}}},{key:"_translateStationaryElements",value:function _translateStationaryElements(){if(this._edge&&!this._scrollbarWidth){// Fixed mode (Tablet Edge)
this.$.items.style.transform=this._getTranslate(-this._scrollLeft||0,-this._scrollTop||0);this.$.footer.style.transform=this.$.header.style.transform=this._getTranslate(-this._scrollLeft||0,0)}else{this.$.footer.style.transform=this.$.header.style.transform=this._getTranslate(0,this._scrollTop)}for(var frozenCellTransform=this._getTranslate(this._scrollLeft,0),i=0;i<this._frozenCells.length;i++){this._frozenCells[i].style.transform=frozenCellTransform}}},{key:"_getTranslate",value:function _getTranslate(x,y){return"translate("+x+"px,"+y+"px)"}},{key:"_scrollHeightUpdated",value:function _scrollHeightUpdated(_estScrollHeight){this.$.outersizer.style.top=this.$.fixedsizer.style.top=_estScrollHeight+"px"}},{key:"_timeouts",get:function get(){return{SCROLL_PERIOD:1e3,WHEEL_SCROLLING:200,SCROLLING:100,IGNORE_WHEEL:500}}},{key:"_scrollTop",// Override (from iron-scroll-target-behavior) to avoid document scroll
set:function set(top){this.$.table.scrollTop=top},get:function get(){return this.$.table.scrollTop}}],[{key:"properties",get:function get(){return{// Cached array of frozen cells
_frozenCells:{type:Array,value:function value(){return[]}},_scrollbarWidth:{type:Number,value:function value(){// Create the measurement node
var scrollDiv=document.createElement("div");scrollDiv.style.width="100px";scrollDiv.style.height="100px";scrollDiv.style.overflow="scroll";scrollDiv.style.position="absolute";scrollDiv.style.top="-9999px";document.body.appendChild(scrollDiv);// Get the scrollbar width
var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;// Delete the DIV
document.body.removeChild(scrollDiv);return scrollbarWidth}},_rowWithFocusedElement:Element,_deltaYAcc:{type:Number,value:0}}}},{key:"observers",get:function get(){return["_scrollHeightUpdated(_estScrollHeight)"]}}]);return ScrollMixin}(superClass))};_exports.ScrollMixin=ScrollMixin;var vaadinGridScrollMixin={ScrollMixin:ScrollMixin};_exports.$vaadinGridScrollMixin=vaadinGridScrollMixin;var GridScrollerElement=/*#__PURE__*/function(_PolymerIronList){babelHelpers.inherits(GridScrollerElement,_PolymerIronList);function GridScrollerElement(){babelHelpers.classCallCheck(this,GridScrollerElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(GridScrollerElement).apply(this,arguments))}babelHelpers.createClass(GridScrollerElement,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(GridScrollerElement.prototype),"connectedCallback",this).call(this);this._scrollHandler()}/**
    * @protected
    */},{key:"_updateScrollerItem",value:function _updateScrollerItem(item,index){}/**
                                      * @protected
                                      */},{key:"_afterScroll",value:function _afterScroll(){}/**
                    * @protected
                    */},{key:"_getRowTarget",value:function _getRowTarget(){}/**
                     * @protected
                     */},{key:"_createScrollerRows",value:function _createScrollerRows(){}/**
                           * @protected
                           */},{key:"_canPopulate",value:function _canPopulate(){}/**
                    * @private
                    */},{key:"scrollToIndex",value:function scrollToIndex(index){var _this92=this;this._warnPrivateAPIAccess("scrollToIndex");if(0<index){this._pendingScrollToIndex=null}if(!parseInt(this.$.items.style.borderTopWidth)&&0<index){// Schedule another scroll to be invoked once init is complete
this._pendingScrollToIndex=index}this._scrollingToIndex=!0;index=Math.min(Math.max(index,0),this._effectiveSize-1);this.$.table.scrollTop=index/this._effectiveSize*(this.$.table.scrollHeight-this.$.table.offsetHeight);this._scrollHandler();if(this._accessIronListAPI(function(){return _this92._maxScrollTop})&&this._virtualCount<this._effectiveSize){this._adjustVirtualIndexOffset(1e6)}this._accessIronListAPI(function(){return babelHelpers.get(babelHelpers.getPrototypeOf(GridScrollerElement.prototype),"scrollToIndex",_this92).call(_this92,index-_this92._vidxOffset)});this._scrollHandler();// Ensure scroll position
var row=Array.from(this.$.items.children).filter(function(child){return child.index===index})[0];if(row){var headerOffset=row.getBoundingClientRect().top-this.$.header.getBoundingClientRect().bottom;if(1<Math.abs(headerOffset)){this.$.table.scrollTop+=headerOffset;this._scrollHandler()}}this._scrollingToIndex=!1}},{key:"_effectiveSizeChanged",value:function _effectiveSizeChanged(size){var _this93=this,fvi,fviOffset=0;this._iterateItems(function(pidx,vidx){if(vidx===_this93._firstVisibleIndex){var row=_this93._physicalItems[pidx];fvi=row.index;fviOffset=row.getBoundingClientRect().top}});if(this.items&&size<this.items.length){// Size was reduced, scroll to 0 first
this._scrollTop=0}if(!Array.isArray(this.items)){// Edge/IE seems to have the lowest maximum
var maxVirtualItems=this._edge||this._ie?3e4:1e5;this.items={length:Math.min(size,maxVirtualItems)}}this._accessIronListAPI(function(){return babelHelpers.get(babelHelpers.getPrototypeOf(GridScrollerElement.prototype),"_itemsChanged",_this93).call(_this93,{path:"items"})});this._virtualCount=Math.min(this.items.length,size)||0;if(0===this._scrollTop){this._accessIronListAPI(function(){return _this93._scrollToIndex(Math.min(size-1,fvi))});this._iterateItems(function(pidx,vidx){var row=_this93._physicalItems[pidx];if(row.index===fvi){_this93.$.table.scrollTop+=Math.round(row.getBoundingClientRect().top-fviOffset)}// Restore keyboard focus to the right cell
if(row.index===_this93._focusedItemIndex&&_this93._itemsFocusable&&_this93.$.items.contains(_this93.shadowRoot.activeElement)){var cellIndex=Array.from(_this93._itemsFocusable.parentElement.children).indexOf(_this93._itemsFocusable);row.children[cellIndex].focus()}})}this._assignModels();requestAnimationFrame(function(){return _this93._update()})}},{key:"_positionItems",value:function _positionItems(){var _this94=this;this._adjustScrollPosition();var rePosition;if(isNaN(this._physicalTop)){rePosition=!0;this._physicalTop=0}var y=this._physicalTop;this._iterateItems(function(pidx,vidx){_this94._physicalItems[pidx].style.transform="translateY(".concat(y,"px)");y+=_this94._physicalSizes[pidx]});if(rePosition){this._scrollToIndex(0)}}},{key:"_increasePoolIfNeeded",value:function _increasePoolIfNeeded(count){var _this95=this;if(0===count&&this._scrollingToIndex||!this._canPopulate()||!this._effectiveSize){return}if(!this._initialPoolCreated){this._initialPoolCreated=!0;babelHelpers.get(babelHelpers.getPrototypeOf(GridScrollerElement.prototype),"_increasePoolIfNeeded",this).call(this,25)}else if(this._optPhysicalSize!==1/0){this._debounceIncreasePool=Debouncer.debounce(this._debounceIncreasePool,animationFrame,function(){_this95._updateMetrics();var remainingPhysicalSize=_this95._optPhysicalSize-_this95._physicalSize,estimatedMissingRowCount=Math.ceil(remainingPhysicalSize/_this95._physicalAverage);if(_this95._physicalCount+estimatedMissingRowCount>_this95._effectiveSize){// Do not increase the physical item count above the this._effectiveSize
estimatedMissingRowCount=Math.max(0,_this95._effectiveSize-_this95._physicalCount)}if(_this95._physicalSize&&0<estimatedMissingRowCount){babelHelpers.get(babelHelpers.getPrototypeOf(GridScrollerElement.prototype),"_increasePoolIfNeeded",_this95).call(_this95,estimatedMissingRowCount);// Ensure the rows are in order after increasing pool
_this95.__reorderChildNodes()}})}}},{key:"__reorderChildNodes",value:function __reorderChildNodes(){var _this96=this,childNodes=Array.from(this.$.items.childNodes),rowsInOrder=!!childNodes.reduce(function(inOrder,current,currentIndex,array){if(0===currentIndex||array[currentIndex-1].index===current.index-1){return inOrder}},!0);if(!rowsInOrder){childNodes.sort(function(row1,row2){return row1.index-row2.index}).forEach(function(row){return _this96.$.items.appendChild(row)})}}},{key:"_createPool",value:function _createPool(size){var _this97=this,fragment=document.createDocumentFragment(),physicalItems=this._createScrollerRows(size);physicalItems.forEach(function(inst){return fragment.appendChild(inst)});this._getRowTarget().appendChild(fragment);// Weird hack needed to get Safari to actually distribute slots
var content=this.querySelector("[slot]");if(content){var slot=content.getAttribute("slot");content.setAttribute("slot","foo-bar");content.setAttribute("slot",slot)}this._updateHeaderFooterMetrics();afterNextRender(this,function(){return _this97.notifyResize()});return physicalItems}/**
     * Assigns the data models to a given set of items.
     * @param {!Array<number>=} itemSet
     */},{key:"_assignModels",value:function _assignModels(itemSet){var _this98=this;this._iterateItems(function(pidx,vidx){var el=_this98._physicalItems[pidx];_this98._toggleAttribute("hidden",vidx>=_this98._effectiveSize,el);_this98._updateScrollerItem(el,vidx+(_this98._vidxOffset||0))},itemSet)}},{key:"_scrollHandler",value:function _scrollHandler(){var _this99=this,delta=this.$.table.scrollTop-this._scrollPosition;this._accessIronListAPI(babelHelpers.get(babelHelpers.getPrototypeOf(GridScrollerElement.prototype),"_scrollHandler",this));var oldOffset=this._vidxOffset;if(this._accessIronListAPI(function(){return _this99._maxScrollTop})&&this._virtualCount<this._effectiveSize){this._adjustVirtualIndexOffset(delta)}if(this._vidxOffset!==oldOffset){this._update()}this._afterScroll()}},{key:"_adjustVirtualIndexOffset",value:function _adjustVirtualIndexOffset(delta){if(1e4<Math.abs(delta)){if(this._noScale){this._noScale=!1;return}var scale=this.$.table.scrollTop/(this.$.table.scrollHeight-this.$.table.offsetHeight),offset=scale*this._effectiveSize;this._vidxOffset=Math.round(offset-scale*this._virtualCount)}else{// Make sure user can always swipe/wheel scroll to the start and end
var oldOffset=this._vidxOffset||0,threshold=1e3,maxShift=100;// At start
if(0===this._scrollTop){this._vidxOffset=0;if(oldOffset!==this._vidxOffset){babelHelpers.get(babelHelpers.getPrototypeOf(GridScrollerElement.prototype),"scrollToIndex",this).call(this,0)}}else if(this.firstVisibleIndex<threshold&&0<this._vidxOffset){this._vidxOffset-=Math.min(this._vidxOffset,maxShift);if(oldOffset!==this._vidxOffset){babelHelpers.get(babelHelpers.getPrototypeOf(GridScrollerElement.prototype),"scrollToIndex",this).call(this,this.firstVisibleIndex+(oldOffset-this._vidxOffset))}this._noScale=!0}// At end
var maxOffset=this._effectiveSize-this._virtualCount;if(this._scrollTop>=this._maxScrollTop&&0<this._maxScrollTop){this._vidxOffset=maxOffset;if(oldOffset!==this._vidxOffset){babelHelpers.get(babelHelpers.getPrototypeOf(GridScrollerElement.prototype),"scrollToIndex",this).call(this,this._virtualCount)}}else if(this.firstVisibleIndex>this._virtualCount-threshold&&this._vidxOffset<maxOffset){this._vidxOffset+=Math.min(maxOffset-this._vidxOffset,maxShift);if(oldOffset!==this._vidxOffset){babelHelpers.get(babelHelpers.getPrototypeOf(GridScrollerElement.prototype),"scrollToIndex",this).call(this,this.firstVisibleIndex-(this._vidxOffset-oldOffset))}this._noScale=!0}}}},{key:"_accessIronListAPI",value:function _accessIronListAPI(cb){var _this100=this;this._warnPrivateAPIAccessAsyncEnabled=!1;var returnValue=cb.apply(this);this._debouncerWarnPrivateAPIAccess=Debouncer.debounce(this._debouncerWarnPrivateAPIAccess,animationFrame,function(){return _this100._warnPrivateAPIAccessAsyncEnabled=!0});return returnValue}/* Allow iron-list to access its APIs from debounced callbacks without warns */},{key:"_debounceRender",value:function _debounceRender(cb,asyncModule){var _this101=this;babelHelpers.get(babelHelpers.getPrototypeOf(GridScrollerElement.prototype),"_debounceRender",this).call(this,function(){return _this101._accessIronListAPI(cb)},asyncModule)}/* Warn when iron-list APIs are being accessed directly */},{key:"_warnPrivateAPIAccess",value:function _warnPrivateAPIAccess(apiName){if(this._warnPrivateAPIAccessAsyncEnabled){console.warn("Accessing private API (".concat(apiName,")!"))}}},{key:"_render",value:function _render(){this._accessIronListAPI(babelHelpers.get(babelHelpers.getPrototypeOf(GridScrollerElement.prototype),"_render",this))}},{key:"_createFocusBackfillItem",value:function _createFocusBackfillItem(){/* Ignore */}},{key:"_multiSelectionChanged",value:function _multiSelectionChanged(){/* Ignore */}},{key:"clearSelection",value:function clearSelection(){/* Ignore */}},{key:"_itemsChanged",value:function _itemsChanged(){/* Ignore */}},{key:"_manageFocus",value:function _manageFocus(){/* Ignore */}},{key:"_removeFocusedItem",value:function _removeFocusedItem(){/* Ignore */}},{key:"_scrollToIndex",value:function _scrollToIndex(index){var _this102=this;this._accessIronListAPI(function(){return _this102.scrollToIndex(index)})}},{key:"updateViewportBoundaries",value:function updateViewportBoundaries(){this._warnPrivateAPIAccess("updateViewportBoundaries");babelHelpers.get(babelHelpers.getPrototypeOf(GridScrollerElement.prototype),"updateViewportBoundaries",this).apply(this,arguments)}},{key:"_resizeHandler",value:function _resizeHandler(){babelHelpers.get(babelHelpers.getPrototypeOf(GridScrollerElement.prototype),"_resizeHandler",this).call(this);flush$1()}},{key:"_firstVisibleIndex",get:function get(){var _this103=this;return this._accessIronListAPI(function(){return babelHelpers.get(babelHelpers.getPrototypeOf(GridScrollerElement.prototype),"firstVisibleIndex",_this103)})}},{key:"_lastVisibleIndex",get:function get(){var _this104=this;return this._accessIronListAPI(function(){return babelHelpers.get(babelHelpers.getPrototypeOf(GridScrollerElement.prototype),"lastVisibleIndex",_this104)})}},{key:"firstVisibleIndex",get:function get(){this._warnPrivateAPIAccess("firstVisibleIndex");return babelHelpers.get(babelHelpers.getPrototypeOf(GridScrollerElement.prototype),"firstVisibleIndex",this)},set:function set(value){this._warnPrivateAPIAccess("firstVisibleIndex");babelHelpers.set(babelHelpers.getPrototypeOf(GridScrollerElement.prototype),"firstVisibleIndex",value,this,!0)}},{key:"lastVisibleIndex",get:function get(){this._warnPrivateAPIAccess("lastVisibleIndex");return babelHelpers.get(babelHelpers.getPrototypeOf(GridScrollerElement.prototype),"lastVisibleIndex",this)},set:function set(value){this._warnPrivateAPIAccess("lastVisibleIndex");babelHelpers.set(babelHelpers.getPrototypeOf(GridScrollerElement.prototype),"lastVisibleIndex",value,this,!0)}}],[{key:"is",get:function get(){return"vaadin-grid-scroller"}},{key:"properties",get:function get(){return{size:{type:Number,notify:!0},_vidxOffset:{value:0}}}},{key:"observers",get:function get(){return["_effectiveSizeChanged(_effectiveSize)"]}}]);return GridScrollerElement}(PolymerIronList);_exports.ScrollerElement=GridScrollerElement;customElements.define(GridScrollerElement.is,GridScrollerElement);var vaadinGridScroller={ScrollerElement:GridScrollerElement};/**
   @license
   Copyright (c) 2017 Vaadin Ltd.
   This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */ /**
       * @polymerMixin
       */_exports.$vaadinGridScroller=vaadinGridScroller;var SelectionMixin=function SelectionMixin(superClass){return(/*#__PURE__*/function(_superClass21){babelHelpers.inherits(SelectionMixin,_superClass21);function SelectionMixin(){babelHelpers.classCallCheck(this,SelectionMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SelectionMixin).apply(this,arguments))}babelHelpers.createClass(SelectionMixin,[{key:"_isSelected",value:function _isSelected(item){return this.selectedItems&&-1<this._getItemIndexInArray(item,this.selectedItems)}/**
     * Selects the given item.
     *
     * @method selectItem
     * @param {Object} item The item object
     */},{key:"selectItem",value:function selectItem(item){if(!this._isSelected(item)){this.push("selectedItems",item)}}/**
     * Deselects the given item if it is already selected.
     *
     * @method deselect
     * @param {Object} item The item object
     */},{key:"deselectItem",value:function deselectItem(item){var index=this._getItemIndexInArray(item,this.selectedItems);if(-1<index){this.splice("selectedItems",index,1)}}/**
     * Toggles the selected state of the given item.
     *
     * @method toggle
     * @param {Object} item The item object
     */},{key:"_toggleItem",value:function _toggleItem(item){var index=this._getItemIndexInArray(item,this.selectedItems);if(-1===index){this.selectItem(item)}else{this.deselectItem(item)}}},{key:"_selectedItemsChanged",value:function _selectedItemsChanged(e){var _this105=this;if(this.$.items.children.length&&("selectedItems"===e.path||"selectedItems.splices"===e.path)){Array.from(this.$.items.children).forEach(function(row){_this105._updateItem(row,row._item)})}}},{key:"_selectedInstanceChangedCallback",value:function _selectedInstanceChangedCallback(instance,value){if(babelHelpers.get(babelHelpers.getPrototypeOf(SelectionMixin.prototype),"_selectedInstanceChangedCallback",this)){babelHelpers.get(babelHelpers.getPrototypeOf(SelectionMixin.prototype),"_selectedInstanceChangedCallback",this).call(this,instance,value)}if(value){this.selectItem(instance.item)}else{this.deselectItem(instance.item)}}}],[{key:"properties",get:function get(){return{/**
       * An array that contains the selected items.
       */selectedItems:{type:Object,notify:!0,value:function value(){return[]}}}}},{key:"observers",get:function get(){return["_selectedItemsChanged(selectedItems.*)"]}}]);return SelectionMixin}(superClass))};_exports.SelectionMixin=SelectionMixin;var vaadinGridSelectionMixin={SelectionMixin:SelectionMixin};_exports.$vaadinGridSelectionMixin=vaadinGridSelectionMixin;var SortMixin=function SortMixin(superClass){return(/*#__PURE__*/function(_superClass22){babelHelpers.inherits(SortMixin,_superClass22);function SortMixin(){babelHelpers.classCallCheck(this,SortMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SortMixin).apply(this,arguments))}babelHelpers.createClass(SortMixin,[{key:"ready",value:function ready(){var _this106=this;babelHelpers.get(babelHelpers.getPrototypeOf(SortMixin.prototype),"ready",this).call(this);this.addEventListener("sorter-changed",this._onSorterChanged);// With Polymer 2 & shady the 'sorter-changed' listener isn't guaranteed to be registered
// before child <vaadin-grid-sorter>'s upgrade and fire the events. The following
// makes sure that 'sorter-changed' is fired for all <vaadin-grid-sorter> elements
// after this (<vaadin-grid>) is ready (and the listeners are active).
if(window.ShadyDOM){microTask.run(function(){var sorters=_this106.querySelectorAll("vaadin-grid-sorter");Array.from(sorters).forEach(function(sorter){// Don't try to fire if the sorter hasn't been upgraded yet
if(babelHelpers.instanceof(sorter,PolymerElement)){sorter.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))}})})}}},{key:"_onSorterChanged",value:function _onSorterChanged(e){var _this107=this,sorter=e.target;this._removeArrayItem(this._sorters,sorter);sorter._order=null;if(this.multiSort){if(sorter.direction){this._sorters.unshift(sorter)}this._sorters.forEach(function(sorter,index){return sorter._order=1<_this107._sorters.length?index:null},this)}else{if(sorter.direction){this._sorters.forEach(function(sorter){sorter._order=null;sorter.direction=null});this._sorters=[sorter]}}e.stopPropagation();if(this.dataProvider&&// No need to clear cache if sorters didn't change
JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())){this.clearCache()}this._a11yUpdateSorters();this._previousSorters=this._mapSorters()}},{key:"_mapSorters",value:function _mapSorters(){return this._sorters.map(function(sorter){return{path:sorter.path,direction:sorter.direction}})}},{key:"_removeArrayItem",value:function _removeArrayItem(array,item){var index=array.indexOf(item);if(-1<index){array.splice(index,1)}}}],[{key:"properties",get:function get(){return{/**
       * When `true`, all `<vaadin-grid-sorter>` are applied for sorting.
       */multiSort:{type:Boolean,value:!1},_sorters:{type:Array,value:function value(){return[]}},_previousSorters:{type:Array,value:function value(){return[]}}}}}]);return SortMixin}(superClass))};_exports.SortMixin=SortMixin;var vaadinGridSortMixin={SortMixin:SortMixin};_exports.$vaadinGridSortMixin=vaadinGridSortMixin;var VaadinGridStyles=document.createElement("dom-module");// NOTE(web-padawan): https://github.com/vaadin/vaadin-grid/issues/1514
VaadinGridStyles.appendChild(html(_templateObject8_7280bdd0bea211e98f44c3131ec74eb1()));var safari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),firefox=-1<navigator.userAgent.toLowerCase().indexOf("firefox");if(safari||firefox){var scrollingStyles=document.createElement("style");scrollingStyles.textContent="\n    [scrolling][safari] #outerscroller,\n    [scrolling][firefox] #outerscroller {\n      pointer-events: auto;\n    }\n\n    [ios] #outerscroller {\n      pointer-events: auto;\n      z-index: -3;\n    }\n\n    [ios][scrolling] #outerscroller {\n      z-index: 0;\n    }\n  ";VaadinGridStyles.querySelector("template").content.appendChild(scrollingStyles)}VaadinGridStyles.register("vaadin-grid-styles");/**
                                                 @license
                                                 Copyright (c) 2018 Vaadin Ltd.
                                                 This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
                                                 */ /**
                                                     * @polymerMixin
                                                     */var StylingMixin=function StylingMixin(superClass){return(/*#__PURE__*/function(_superClass23){babelHelpers.inherits(StylingMixin,_superClass23);function StylingMixin(){babelHelpers.classCallCheck(this,StylingMixin);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(StylingMixin).apply(this,arguments))}babelHelpers.createClass(StylingMixin,[{key:"__cellClassNameGeneratorChanged",value:function __cellClassNameGeneratorChanged(cellClassGenerator){this.generateCellClassNames()}/**
     * Runs the `cellClassNameGenerator` for the visible cells.
     * If the generator depends on varying conditions, you need to
     * call this function manually in order to update the styles when
     * the conditions change.
     */},{key:"generateCellClassNames",value:function generateCellClassNames(){var _this108=this;Array.from(this.$.items.children).filter(function(row){return!row.hidden}).forEach(function(row){return _this108._generateCellClassNames(row,_this108.__getRowModel(row))})}},{key:"_generateCellClassNames",value:function _generateCellClassNames(row,rowData){var _this109=this;Array.from(row.children).forEach(function(cell){if(cell.__generatedClasses){cell.__generatedClasses.forEach(function(className){return cell.classList.remove(className)})}if(_this109.cellClassNameGenerator){var result=_this109.cellClassNameGenerator(cell._column,rowData);cell.__generatedClasses=result&&result.split(" ").filter(function(className){return 0<className.length});if(cell.__generatedClasses){cell.__generatedClasses.forEach(function(className){return cell.classList.add(className)})}}})}}],[{key:"properties",get:function get(){return{/**
       * A function that allows generating CSS class names for grid cells
       * based on their row and column. The return value should be the generated
       * class name as a string, or multiple class names separated by whitespace
       * characters.
       *
       * Receives two arguments:
       * - `column` The `<vaadin-grid-column>` element (`undefined` for details-cell).
       * - `rowData` The object with the properties related with
       *   the rendered item, contains:
       *   - `rowData.index` The index of the item.
       *   - `rowData.item` The item.
       *   - `rowData.expanded` Sublevel toggle state.
       *   - `rowData.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `rowData.selected` Selected state.
       */cellClassNameGenerator:Function}}},{key:"observers",get:function get(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}}]);return StylingMixin}(superClass))};_exports.StylingMixin=StylingMixin;var vaadinGridStylingMixin={StylingMixin:StylingMixin};_exports.$vaadinGridStylingMixin=vaadinGridStylingMixin;var TOUCH_DEVICE=function(){try{document.createEvent("TouchEvent");return!0}catch(e){return!1}}(),GridElement=/*#__PURE__*/function(_ElementMixin$4){babelHelpers.inherits(GridElement,_ElementMixin$4);babelHelpers.createClass(GridElement,null,[{key:"template",get:function get(){return html(_templateObject9_7280bdd0bea211e98f44c3131ec74eb1())}},{key:"is",get:function get(){return"vaadin-grid"}},{key:"version",get:function get(){return"5.4.7"}},{key:"observers",get:function get(){return["_columnTreeChanged(_columnTree, _columnTree.*)"]}},{key:"properties",get:function get(){return{_this:{type:Object,value:function value(){return this}},_safari:{type:Boolean,value:/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},_ios:{type:Boolean,value:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},_edge:{type:Boolean,value:"undefined"!==typeof CSS&&CSS.supports("(-ms-ime-align:auto)")},_ie:{type:Boolean,value:!!(navigator.userAgent.match(/Trident/)&&!navigator.userAgent.match(/MSIE/))},_firefox:{type:Boolean,value:-1<navigator.userAgent.toLowerCase().indexOf("firefox")},_android:{type:Boolean,value:/android/i.test(navigator.userAgent)},_touchDevice:{type:Boolean,value:TOUCH_DEVICE},/**
       * If true, the grid's height is defined by the number of its rows.
       */heightByRows:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_heightByRowsChanged"}}}}]);function GridElement(){var _this110;babelHelpers.classCallCheck(this,GridElement);_this110=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(GridElement).call(this));_this110.addEventListener("animationend",_this110._onAnimationEnd);return _this110}babelHelpers.createClass(GridElement,[{key:"__hasRowsWithClientHeight",value:function __hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(function(row){return row.clientHeight}).length}},{key:"__setInitialColumnWidths",value:function __setInitialColumnWidths(){if(!this._initialColumnWidthsSet&&this.__hasRowsWithClientHeight()){this._initialColumnWidthsSet=!0;this.recalculateColumnWidths()}}/**
     * @param {Array<Vaadin.GridColumnElement>} cols the columns to auto size based on their content width
     */},{key:"_recalculateColumnWidths",value:function _recalculateColumnWidths(cols){// Note: The `cols.forEach()` loops below could be implemented as a single loop but this has been
// split for performance reasons to batch these similar actions [write/read] together to avoid
// unnecessary layout trashing.
// [write] Set automatic width for all cells (breaks column alignment)
cols.forEach(function(col){col.width="auto";col._origFlexGrow=col.flexGrow;col.flexGrow=0});// [read] Measure max cell width in each column
cols.forEach(function(col){col._currentWidth=0;// Note: _allCells only contains cells which are currently rendered in DOM
col._allCells.forEach(function(c){var cellWidth=Math.ceil(c.getBoundingClientRect().width);col._currentWidth=Math.max(col._currentWidth,cellWidth)})});// [write] Set column widths to fit widest measured content
cols.forEach(function(col){col.width="".concat(col._currentWidth,"px");col.flexGrow=col._origFlexGrow;col._currentWidth=void 0;col._origFlexGrow=void 0})}/**
     * Updates the `width` of all columns which have `autoWidth` set to `true`.
     */},{key:"recalculateColumnWidths",value:function recalculateColumnWidths(){if(!this._columnTree){return;// No columns
}var cols=this._getColumns().filter(function(col){return!col.hidden&&col.autoWidth});this._recalculateColumnWidths(cols)}},{key:"_createScrollerRows",value:function _createScrollerRows(count){for(var _this111=this,rows=[],i=0,row;i<count;i++){row=document.createElement("tr");row.setAttribute("part","row");row.setAttribute("role","row");if(this._columnTree){this._updateRow(row,this._columnTree[this._columnTree.length-1],"body",!1,!0)}rows.push(row)}if(this._columnTree){this._columnTree[this._columnTree.length-1].forEach(function(c){return c.notifyPath&&c.notifyPath("_cells.*",c._cells)})}beforeNextRender(this,function(){_this111._updateFirstAndLastColumn();_this111._resetKeyboardNavigation()});return rows}},{key:"_getRowTarget",value:function _getRowTarget(){return this.$.items}},{key:"_createCell",value:function _createCell(tagName){var _this112=this,contentId=this._contentIndex=this._contentIndex+1||0,slotName="vaadin-grid-cell-content-"+contentId,cellContent=document.createElement("vaadin-grid-cell-content");cellContent.setAttribute("slot",slotName);var cell=document.createElement(tagName);cell.id=slotName.replace("-content-","-");cell.setAttribute("tabindex","-1");cell.setAttribute("role","td"===tagName?"gridcell":"columnheader");var slot=document.createElement("slot");slot.setAttribute("name",slotName);cell.appendChild(slot);cell._content=cellContent;// With native Shadow DOM, mousedown on slotted element does not focus
// focusable slot wrapper, that is why cells are not focused with
// mousedown. Workaround: listen for mousedown and focus manually.
cellContent.addEventListener("mousedown",function(){if(window.chrome){// Chrome bug: focusing before mouseup prevents text selection, see http://crbug.com/771903
var mouseUpListener=function mouseUpListener(){if(!cellContent.contains(_this112.getRootNode().activeElement)){cell.focus()}// If focus is in the cell content — respect it, do not change.
document.removeEventListener("mouseup",mouseUpListener,!0)};document.addEventListener("mouseup",mouseUpListener,!0)}else{// Focus on mouseup, on the other hand, removes selection on Safari.
// Watch out sync focus removal issue, only async focus works here.
setTimeout(function(){if(!cellContent.contains(_this112.getRootNode().activeElement)){cell.focus()}})}});return cell}},{key:"_updateRow",value:function _updateRow(row,columns,section,isColumnRow,noNotify){var _this113=this;section=section||"body";var contentsFragment=document.createDocumentFragment();Array.from(row.children).forEach(function(cell){return cell._vacant=!0});row.innerHTML="";if("outersizer"!==row.id&&"fixedsizer"!==row.id){row.hidden=!0}columns.forEach(function(column,index){var cell;if("body"===section){// Body
column._cells=column._cells||[];cell=column._cells.filter(function(cell){return cell._vacant})[0];if(!cell){cell=_this113._createCell("td");column._cells.push(cell)}cell.setAttribute("part","cell body-cell");row.appendChild(cell);if(index===columns.length-1&&(_this113._rowDetailsTemplate||_this113.rowDetailsRenderer)){// Add details cell as last cell to body rows
_this113._detailsCells=_this113._detailsCells||[];var detailsCell=_this113._detailsCells.filter(function(cell){return cell._vacant})[0]||_this113._createCell("td");if(-1===_this113._detailsCells.indexOf(detailsCell)){_this113._detailsCells.push(detailsCell)}if(!detailsCell._content.parentElement){contentsFragment.appendChild(detailsCell._content)}_this113._configureDetailsCell(detailsCell);row.appendChild(detailsCell);_this113._a11ySetRowDetailsCell(row,detailsCell);detailsCell._vacant=!1}if(column.notifyPath&&!noNotify){column.notifyPath("_cells.*",column._cells)}}else{// Header & footer
var tagName="header"===section?"th":"td";if(isColumnRow||"vaadin-grid-column-group"===column.localName){cell=column["_".concat(section,"Cell")]||_this113._createCell(tagName);cell._column=column;row.appendChild(cell);column["_".concat(section,"Cell")]=cell}else{column._emptyCells=column._emptyCells||[];cell=column._emptyCells.filter(function(cell){return cell._vacant})[0]||_this113._createCell(tagName);cell._column=column;row.appendChild(cell);if(-1===column._emptyCells.indexOf(cell)){column._emptyCells.push(cell)}}cell.setAttribute("part","cell ".concat(section,"-cell"));_this113.__updateHeaderFooterRowVisibility(row)}if(!cell._content.parentElement){contentsFragment.appendChild(cell._content)}cell._vacant=!1;cell._column=column});// Might be empty if only cache was used
this.appendChild(contentsFragment);this._frozenCellsChanged();this._updateFirstAndLastColumnForRow(row)}},{key:"__updateHeaderFooterRowVisibility",value:function __updateHeaderFooterRowVisibility(row){var _this114=this;if(!row){return}var visibleRowCells=Array.from(row.children).filter(function(cell){var column=cell._column;if(column._emptyCells&&-1<column._emptyCells.indexOf(cell)){// The cell is an "empty cell"  -> doesn't block hiding the row
return!1}if(row.parentElement===_this114.$.header){if(column.headerRenderer||column._headerTemplate){// The cell is the header cell of a column that has a header renderer
// or a header template -> row should be visible
return!0}if(null===column.header){// The column header is explicilty set to null -> doesn't block hiding the row
return!1}if(column.path||column.header!==void 0){// The column has an explicit non-null header or a path that generates a header
// -> row should be visible
return!0}}else{if(column.footerRenderer||column._footerTemplate){// The cell is the footer cell of a column that has a footer renderer
// or a footer template -> row should be visible
return!0}}});if(row.hidden!==!visibleRowCells.length){row.hidden=!visibleRowCells.length;this.notifyResize()}}},{key:"_updateScrollerItem",value:function _updateScrollerItem(row,index){this._preventScrollerRotatingCellFocus(row,index);if(!this._columnTree){return}this._toggleAttribute("first",0===index,row);this._toggleAttribute("odd",index%2,row);this._a11yUpdateRowRowindex(row,index);this._getItem(index,row)}},{key:"_columnTreeChanged",value:function _columnTreeChanged(columnTree,splices){var _this115=this;Array.from(this.$.items.children).forEach(function(row){return _this115._updateRow(row,columnTree[columnTree.length-1])});while(this.$.header.children.length<columnTree.length){var headerRow=document.createElement("tr");headerRow.setAttribute("part","row");headerRow.setAttribute("role","row");this.$.header.appendChild(headerRow);var footerRow=document.createElement("tr");footerRow.setAttribute("part","row");footerRow.setAttribute("role","row");this.$.footer.appendChild(footerRow)}while(this.$.header.children.length>columnTree.length){this.$.header.removeChild(this.$.header.firstElementChild);this.$.footer.removeChild(this.$.footer.firstElementChild)}Array.from(this.$.header.children).forEach(function(headerRow,index){return _this115._updateRow(headerRow,columnTree[index],"header",index===columnTree.length-1)});Array.from(this.$.footer.children).forEach(function(footerRow,index){return _this115._updateRow(footerRow,columnTree[columnTree.length-1-index],"footer",0===index)});// Sizer rows
this._updateRow(this.$.outersizer,columnTree[columnTree.length-1]);this._updateRow(this.$.fixedsizer,columnTree[columnTree.length-1]);this._resizeHandler();this._frozenCellsChanged();this._updateFirstAndLastColumn();this._resetKeyboardNavigation();this._a11yUpdateHeaderRows();this._a11yUpdateFooterRows()}},{key:"_updateItem",value:function _updateItem(row,item){var _this116=this;row._item=item;var model=this.__getRowModel(row);this._toggleAttribute("selected",model.selected,row);this._a11yUpdateRowSelected(row,model.selected);this._a11yUpdateRowLevel(row,model.level);this._toggleAttribute("expanded",model.expanded,row);if(this._rowDetailsTemplate||this.rowDetailsRenderer){this._toggleDetailsCell(row,item)}this._generateCellClassNames(row,model);this._filterDragAndDrop(row,model);Array.from(row.children).forEach(function(cell){if(cell._renderer){var owner=cell._column||_this116;cell._renderer.call(owner,cell._content,owner,model)}else if(cell._instance){cell._instance.__detailsOpened__=model.detailsOpened;cell._instance.__selected__=model.selected;cell._instance.__level__=model.level;cell._instance.__expanded__=model.expanded;cell._instance.setProperties(model)}});this._debouncerUpdateHeights=Debouncer.debounce(this._debouncerUpdateHeights,timeOut.after(1),function(){_this116._updateMetrics();_this116._positionItems();_this116._updateScrollerSize()})}},{key:"_resizeHandler",value:function _resizeHandler(){this._updateDetailsCellHeights();this._accessIronListAPI(babelHelpers.get(babelHelpers.getPrototypeOf(GridElement.prototype),"_resizeHandler",this),!0);this._updateHeaderFooterMetrics()}},{key:"_updateHeaderFooterMetrics",value:function _updateHeaderFooterMetrics(){var _this117=this,headerHeight=this.$.header.clientHeight+"px",footerHeight=this.$.footer.clientHeight+"px";[this.$.outersizer,this.$.fixedsizer,this.$.items].forEach(function(element){element.style.borderTopWidth=headerHeight;element.style.borderBottomWidth=footerHeight});afterNextRender(this.$.header,function(){if(_this117._pendingScrollToIndex){_this117._scrollToIndex(_this117._pendingScrollToIndex)}})}},{key:"_onAnimationEnd",value:function _onAnimationEnd(e){// ShadyCSS applies scoping suffixes to animation names
if(0===e.animationName.indexOf("vaadin-grid-appear")){this._render();this._updateHeaderFooterMetrics();e.stopPropagation();this.notifyResize();this.__setInitialColumnWidths()}}},{key:"_toggleAttribute",value:function _toggleAttribute(name,bool,node){if(node.hasAttribute(name)===!bool){if(bool){node.setAttribute(name,"")}else{node.removeAttribute(name)}}}},{key:"__getRowModel",value:function __getRowModel(row){return{index:row.index,item:row._item,level:this._getIndexLevel(row.index),expanded:this._isExpanded(row._item),selected:this._isSelected(row._item),detailsOpened:!!(this._rowDetailsTemplate||this.rowDetailsRenderer)&&this._isDetailsOpened(row._item)}}/**
     * Manually invoke existing renderers for all the columns
     * (header, footer and body cells) and opened row details.
     */},{key:"render",value:function render(){if(this._columnTree){// header and footer renderers
this._columnTree.forEach(function(level){level.forEach(function(column){return column._renderHeaderAndFooter()})});// body and row details renderers
this._update()}}/**
     * Updates the computed metrics and positioning of internal grid parts
     * (row/details cell positioning etc). Needs to be invoked whenever the sizing of grid
     * content changes asynchronously to ensure consistent appearance (e.g. when a
     * contained image whose bounds aren't known beforehand finishes loading).
     */},{key:"notifyResize",value:function notifyResize(){babelHelpers.get(babelHelpers.getPrototypeOf(GridElement.prototype),"notifyResize",this).call(this)}},{key:"_heightByRowsChanged",value:function _heightByRowsChanged(value,oldValue){if(value||oldValue){this.notifyResize()}}},{key:"__forceReflow",value:function __forceReflow(){var _this118=this;this._debouncerForceReflow=Debouncer.debounce(this._debouncerForceReflow,animationFrame,function(){_this118.$.scroller.style.overflow="hidden";setTimeout(function(){return _this118.$.scroller.style.overflow=""})})}}]);return GridElement}(ElementMixin$1(ThemableMixin(DataProviderMixin(ArrayDataProviderMixin(DynamicColumnsMixin(ActiveItemMixin(ScrollMixin(SelectionMixin(SortMixin(RowDetailsMixin(KeyboardNavigationMixin(A11yMixin(FilterMixin(ColumnReorderingMixin(ColumnResizingMixin(EventContextMixin(DragAndDropMixin(StylingMixin(GridScrollerElement)))))))))))))))))));/**
       *
       * `<vaadin-grid>` is a free, high quality data grid / data table Web Component. The content of the
       * the grid can be populated in two ways: imperatively by using renderer callback function and
       * declaratively by using Polymer's Templates.
       *
       * ### Quick Start
       *
       * Start with an assigning an array to the [`items`](#/elements/vaadin-grid#property-items) property to visualize your data.
       *
       * Use the [`<vaadin-grid-column>`](#/elements/vaadin-grid-column) element to configure the grid columns. Set `path` and `header`
       * shorthand properties for the columns to define what gets rendered in the cells of the column.
       *
       * #### Example:
       * ```html
       * <vaadin-grid>
       *   <vaadin-grid-column path="name.first" header="First name"></vaadin-grid-column>
       *   <vaadin-grid-column path="name.last" header="Last name"></vaadin-grid-column>
       *   <vaadin-grid-column path="email"></vaadin-grid-column>
       * </vaadin-grid>
       * ```
       *
       * For custom content `vaadin-grid-column` element provides you with three types of `renderer` callback functions: `headerRenderer`,
       * `renderer` and `footerRenderer`.
       *
       * Each of those renderer functions provides `root`, `column`, `rowData` arguments when applicable.
       * Generate DOM content, append it to the `root` element and control the state
       * of the host element by accessing `column`. Before generating new content,
       * users are able to check if there is already content in `root` for reusing it.
       *
       * Renderers are called on initialization of new column cells and each time the
       * related row data is updated. DOM generated during the renderer call can be reused
       * in the next renderer call and will be provided with the `root` argument.
       * On first call it will be empty.
       *
       * #### Example:
       * ```html
       * <vaadin-grid>
       *   <vaadin-grid-column></vaadin-grid-column>
       *   <vaadin-grid-column></vaadin-grid-column>
       *   <vaadin-grid-column></vaadin-grid-column>
       * </vaadin-grid>
       * ```
       * ```js
       * const grid = document.querySelector('vaadin-grid');
       * grid.items = [{'name': 'John', 'surname': 'Lennon', 'role': 'singer'},
       *               {'name': 'Ringo', 'surname': 'Starr', 'role': 'drums'}];
       *
       * const columns = grid.querySelectorAll('vaadin-grid-column');
       *
       * columns[0].headerRenderer = function(root) {
       *   root.textContent = 'Name';
       * };
       * columns[0].renderer = function(root, column, rowData) {
       *   root.textContent = rowData.item.name;
       * };
       *
       * columns[1].headerRenderer = function(root) {
       *   root.textContent = 'Surname';
       * };
       * columns[1].renderer = function(root, column, rowData) {
       *   root.textContent = rowData.item.surname;
       * };
       *
       * columns[2].headerRenderer = function(root) {
       *   root.textContent = 'Role';
       * };
       * columns[2].renderer = function(root, column, rowData) {
       *   root.textContent = rowData.item.role;
       * };
       * ```
       *
       * Alternatively, the content can be provided with Polymer's Templates:
       *
       * #### Example:
       * ```html
       * <vaadin-grid items='[{"name": "John", "surname": "Lennon", "role": "singer"},
       * {"name": "Ringo", "surname": "Starr", "role": "drums"}]'>
       *   <vaadin-grid-column>
       *     <template class="header">Name</template>
       *     <template>[[item.name]]</template>
       *   </vaadin-grid-column>
       *   <vaadin-grid-column>
       *     <template class="header">Surname</template>
       *     <template>[[item.surname]]</template>
       *   </vaadin-grid-column>
       *   <vaadin-grid-column>
       *     <template class="header">Role</template>
       *     <template>[[item.role]]</template>
       *   </vaadin-grid-column>
       * </vaadin-grid>
       * ```
       *
       * The following helper elements can be used for further customization:
       * - [`<vaadin-grid-column-group>`](#/elements/vaadin-grid-column-group)
       * - [`<vaadin-grid-filter>`](#/elements/vaadin-grid-filter)
       * - [`<vaadin-grid-sorter>`](#/elements/vaadin-grid-sorter)
       * - [`<vaadin-grid-selection-column>`](#/elements/vaadin-grid-selection-column)
       * - [`<vaadin-grid-tree-toggle>`](#/elements/vaadin-grid-tree-toggle)
       *
       * __Note that the helper elements must be explicitly imported.__
       * If you want to import everything at once you can use the `all-imports.html` bundle.
       *
       * A column template can be decorated with one the following class names to specify its purpose
       * - `header`: Marks a header template
       * - `footer`: Marks a footer template
       * - `row-details`: Marks a row details template
       *
       * The following built-in template variables can be bound to inside the column templates:
       * - `[[index]]`: Number representing the row index
       * - `[[item]]` and it's sub-properties: Data object (provided by a data provider / items array)
       * - `{{selected}}`: True if the item is selected (can be two-way bound)
       * - `{{detailsOpened}}`: True if the item has row details opened (can be two-way bound)
       * - `{{expanded}}`: True if the item has tree sublevel expanded (can be two-way bound)
       * - `[[level]]`: Number of the tree sublevel of the item, first level-items have 0
       *
       * ### Lazy Loading with Function Data Provider
       *
       * In addition to assigning an array to the items property, you can alternatively
       * provide the `<vaadin-grid>` data through the
       * [`dataProvider`](#/elements/vaadin-grid#property-dataProvider) function property.
       * The `<vaadin-grid>` calls this function lazily, only when it needs more data
       * to be displayed.
       *
       * See the [`dataProvider`](#/elements/vaadin-grid#property-dataProvider) in
       * the API reference below for the detailed data provider arguments description,
       * and the “Assigning Data” page in the demos.
       *
       * __Note that expanding the tree grid's item will trigger a call to the `dataProvider`.__
       *
       * __Also, note that when using function data providers, the total number of items
       * needs to be set manually. The total number of items can be returned
       * in the second argument of the data provider callback:__
       *
       * ```javascript
       * grid.dataProvider = function(params, callback) {
       *   var url = 'https://api.example/data' +
       *       '?page=' + params.page +        // the requested page index
       *       '&per_page=' + params.pageSize; // number of items on the page
       *   var xhr = new XMLHttpRequest();
       *   xhr.onload = function() {
       *     var response = JSON.parse(xhr.responseText);
       *     callback(
       *       response.employees, // requested page of items
       *       response.totalSize  // total number of items
       *     );
       *   };
       *   xhr.open('GET', url, true);
       *   xhr.send();
       * };
       * ```
       *
       * __Alternatively, you can use the `size` property to set the total number of items:__
       *
       * ```javascript
       * grid.size = 200; // The total number of items
       * grid.dataProvider = function(params, callback) {
       *   var url = 'https://api.example/data' +
       *       '?page=' + params.page +        // the requested page index
       *       '&per_page=' + params.pageSize; // number of items on the page
       *   var xhr = new XMLHttpRequest();
       *   xhr.onload = function() {
       *     var response = JSON.parse(xhr.responseText);
       *     callback(response.employees);
       *   };
       *   xhr.open('GET', url, true);
       *   xhr.send();
       * };
       * ```
       *
       * ### Styling
       *
       * The following shadow DOM parts are available for styling:
       *
       * Part name | Description
       * ----------------|----------------
       * `row` | Row in the internal table
       * `cell` | Cell in the internal table
       * `header-cell` | Header cell in the internal table
       * `body-cell` | Body cell in the internal table
       * `footer-cell` | Footer cell in the internal table
       * `details-cell` | Row details cell in the internal table
       * `resize-handle` | Handle for resizing the columns
       * `reorder-ghost` | Ghost element of the header cell being dragged
       *
       * The following state attributes are available for styling:
       *
       * Attribute    | Description | Part name
       * -------------|-------------|------------
       * `loading` | Set when the grid is loading data from data provider | :host
       * `interacting` | Keyboard navigation in interaction mode | :host
       * `navigating` | Keyboard navigation in navigation mode | :host
       * `overflow` | Set when rows are overflowing the grid viewport. Possible values: `top`, `bottom`, `left`, `right` | :host
       * `reordering` | Set when the grid's columns are being reordered | :host
       * `dragover` | Set when the grid (not a specific row) is dragged over | :host
       * `dragging-rows` : Set when grid rows are dragged  | :host
       * `reorder-status` | Reflects the status of a cell while columns are being reordered | cell
       * `frozen` | Frozen cell | cell
       * `last-frozen` | Last frozen cell | cell
      * * `first-column` | First visible cell on a row | cell
       * `last-column` | Last visible cell on a row | cell
       * `selected` | Selected row | row
       * `expanded` | Expanded row | row
       * `details-opened` | Row with details open | row
       * `loading` | Row that is waiting for data from data provider | row
       * `odd` | Odd row | row
       * `first` | The first body row | row
       * `dragstart` | Set for one frame when drag of a row is starting. The value is a number when multiple rows are dragged | row
       * `dragover` | Set when the row is dragged over | row
       * `drag-disabled` | Set to a row that isn't available for dragging | row
       * `drop-disabled` | Set to a row that can't be dropped on top of | row
       *
       * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
       *
       * @memberof Vaadin
       * @mixes Vaadin.ThemableMixin
       * @mixes Vaadin.Grid.A11yMixin
       * @mixes Vaadin.Grid.ActiveItemMixin
       * @mixes Vaadin.Grid.ArrayDataProviderMixin
       * @mixes Vaadin.Grid.ColumnResizingMixin
       * @mixes Vaadin.Grid.DataProviderMixin
       * @mixes Vaadin.Grid.DynamicColumnsMixin
       * @mixes Vaadin.Grid.FilterMixin
       * @mixes Vaadin.Grid.RowDetailsMixin
       * @mixes Vaadin.Grid.ScrollMixin
       * @mixes Vaadin.Grid.SelectionMixin
       * @mixes Vaadin.Grid.SortMixin
       * @mixes Vaadin.Grid.KeyboardNavigationMixin
       * @mixes Vaadin.Grid.ColumnReorderingMixin
       * @mixes Vaadin.Grid.EventContextMixin
       * @mixes Vaadin.Grid.StylingMixin
       * @mixes Vaadin.Grid.DragAndDropMixin
       * @demo demo/index.html
       */_exports.GridElement=GridElement;/**
   * Fired when the columns in the grid are reordered.
   *
   * @event column-reorder
   * @param {Object} detail
   * @param {Object} detail.columns the columns in the new order
   */customElements.define(GridElement.is,GridElement);var vaadinGrid={GridElement:GridElement};_exports.$vaadinGrid=vaadinGrid;var $_documentContainer$8=document.createElement("template");$_documentContainer$8.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: 'lumo-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMQAAADYSnCkuaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh55IAsbWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAAYi2NOJ94fpuvDNzML4AiDNc/fzqEoP+/Zp7KdAvI5WBgAokCAGkcDfgAAAB4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo8CoIKuArwC1ALlgu8eJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: \"\\ea01\";\n      --lumo-icons-align-left: \"\\ea02\";\n      --lumo-icons-align-right: \"\\ea03\";\n      --lumo-icons-angle-down: \"\\ea04\";\n      --lumo-icons-angle-left: \"\\ea05\";\n      --lumo-icons-angle-right: \"\\ea06\";\n      --lumo-icons-angle-up: \"\\ea07\";\n      --lumo-icons-arrow-down: \"\\ea08\";\n      --lumo-icons-arrow-left: \"\\ea09\";\n      --lumo-icons-arrow-right: \"\\ea0a\";\n      --lumo-icons-arrow-up: \"\\ea0b\";\n      --lumo-icons-bar-chart: \"\\ea0c\";\n      --lumo-icons-bell: \"\\ea0d\";\n      --lumo-icons-calendar: \"\\ea0e\";\n      --lumo-icons-checkmark: \"\\ea0f\";\n      --lumo-icons-chevron-down: \"\\ea10\";\n      --lumo-icons-chevron-left: \"\\ea11\";\n      --lumo-icons-chevron-right: \"\\ea12\";\n      --lumo-icons-chevron-up: \"\\ea13\";\n      --lumo-icons-clock: \"\\ea14\";\n      --lumo-icons-cog: \"\\ea15\";\n      --lumo-icons-cross: \"\\ea16\";\n      --lumo-icons-download: \"\\ea17\";\n      --lumo-icons-dropdown: \"\\ea18\";\n      --lumo-icons-edit: \"\\ea19\";\n      --lumo-icons-error: \"\\ea1a\";\n      --lumo-icons-eye: \"\\ea1b\";\n      --lumo-icons-eye-disabled: \"\\ea1c\";\n      --lumo-icons-menu: \"\\ea1d\";\n      --lumo-icons-minus: \"\\ea1e\";\n      --lumo-icons-ordered-list: \"\\ea1f\";\n      --lumo-icons-phone: \"\\ea20\";\n      --lumo-icons-photo: \"\\ea21\";\n      --lumo-icons-play: \"\\ea22\";\n      --lumo-icons-plus: \"\\ea23\";\n      --lumo-icons-redo: \"\\ea24\";\n      --lumo-icons-reload: \"\\ea25\";\n      --lumo-icons-search: \"\\ea26\";\n      --lumo-icons-undo: \"\\ea27\";\n      --lumo-icons-unordered-list: \"\\ea28\";\n      --lumo-icons-upload: \"\\ea29\";\n      --lumo-icons-user: \"\\ea2a\";\n    }\n  </style>\n</custom-style>";document.head.appendChild($_documentContainer$8.content);/* NOTICE: Generated with 'gulp icons' */ /*
                                                                                                    FIXME(polymer-modulizer): the above comments were extracted
                                                                                                    from HTML and may be out of place here. Review them and
                                                                                                    then delete this comment!
                                                                                                    */;var $_documentContainer$9=html(_templateObject10_7280bdd0bea211e98f44c3131ec74eb1());document.head.appendChild($_documentContainer$9.content);var $_documentContainer$a=document.createElement("template");$_documentContainer$a.innerHTML="<dom-module id=\"lumo-field-button\">\n  <template>\n    <style>\n      [part$=\"button\"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$=\"button\"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$=\"button\"],\n      :host([readonly]) [part$=\"button\"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$=\"button\"]::before {\n        font-family: \"lumo-icons\";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer$a.content);var $_documentContainer$b=document.createElement("template");$_documentContainer$b.innerHTML="<dom-module id=\"lumo-required-field\">\n  <template>\n    <style>\n      [part=\"label\"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part=\"label\"] {\n        padding-right: 1em;\n      }\n\n      [part=\"label\"]::after {\n        content: var(--lumo-required-field-indicator, \"\u2022\");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part=\"label\"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part=\"label\"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part=\"error-message\"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn\u2019t reserve space when there\u2019s no error message */\n      [part=\"error-message\"]:not(:empty)::before,\n      [part=\"error-message\"]:not(:empty)::after {\n        content: \"\";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part=\"error-message\"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer$b.content);var SplitLayoutElement=/*#__PURE__*/function(_ElementMixin$5){babelHelpers.inherits(SplitLayoutElement,_ElementMixin$5);function SplitLayoutElement(){babelHelpers.classCallCheck(this,SplitLayoutElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SplitLayoutElement).apply(this,arguments))}babelHelpers.createClass(SplitLayoutElement,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(SplitLayoutElement.prototype),"ready",this).call(this);new FlattenedNodesObserver(this,this._processChildren)}},{key:"_processChildren",value:function _processChildren(){var _this119=this;this.getEffectiveChildren().forEach(function(child,i){if(0===i){_this119._primaryChild=child;child.setAttribute("slot","primary")}else if(1==i){_this119._secondaryChild=child;child.setAttribute("slot","secondary")}else{child.removeAttribute("slot")}})}},{key:"_setFlexBasis",value:function _setFlexBasis(element,flexBasis,containerSize){flexBasis=Math.max(0,Math.min(flexBasis,containerSize));if(0===flexBasis){// Pure zero does not play well in Safari
flexBasis=1e-6}element.style.flex="1 1 "+flexBasis+"px"}},{key:"_setPointerEventsNone",value:function _setPointerEventsNone(event){if(!this._primaryChild||!this._secondaryChild){return}this._previousPrimaryPointerEvents=this._primaryChild.style.pointerEvents;this._previousSecondaryPointerEvents=this._secondaryChild.style.pointerEvents;this._primaryChild.style.pointerEvents="none";this._secondaryChild.style.pointerEvents="none";event.preventDefault()}},{key:"_restorePointerEvents",value:function _restorePointerEvents(){if(!this._primaryChild||!this._secondaryChild){return}this._primaryChild.style.pointerEvents=this._previousPrimaryPointerEvents;this._secondaryChild.style.pointerEvents=this._previousSecondaryPointerEvents}},{key:"_onHandleTrack",value:function _onHandleTrack(event){if(!this._primaryChild||!this._secondaryChild){return}var size="vertical"===this.orientation?"height":"width";if("start"===event.detail.state){this._startSize={container:this.getBoundingClientRect()[size]-this.$.splitter.getBoundingClientRect()[size],primary:this._primaryChild.getBoundingClientRect()[size],secondary:this._secondaryChild.getBoundingClientRect()[size]};return}var distance="vertical"===this.orientation?event.detail.dy:event.detail.dx;this._setFlexBasis(this._primaryChild,this._startSize.primary+distance,this._startSize.container);this._setFlexBasis(this._secondaryChild,this._startSize.secondary-distance,this._startSize.container);this.notifyResize();if("end"===event.detail.state){this.dispatchEvent(new CustomEvent("splitter-dragend"));delete this._startSize}}/**
     * Fired when the splitter is dragged. Non-bubbling. Fired for the splitter
     * element and any nested elements with `IronResizableBehavior`.
     *
     * @event iron-resize
     */ /**
         * Fired after dragging the splitter have ended.
         *
         * @event splitter-dragend
         */}],[{key:"template",get:function get(){return html(_templateObject11_7280bdd0bea211e98f44c3131ec74eb1())}},{key:"is",get:function get(){return"vaadin-split-layout"}},{key:"version",get:function get(){return"4.1.1"}},{key:"properties",get:function get(){return{/**
       * The split layout's orientation. Possible values are: `horizontal|vertical`.
       */orientation:{type:String,reflectToAttribute:!0,value:"horizontal"},_previousPrimaryPointerEvents:String,_previousSecondaryPointerEvents:String}}}]);return SplitLayoutElement}(ElementMixin$1(ThemableMixin(GestureEventListeners(mixinBehaviors([IronResizableBehavior],PolymerElement)))));_exports.SplitLayoutElement=SplitLayoutElement;customElements.define(SplitLayoutElement.is,SplitLayoutElement);var vaadinSplitLayout={SplitLayoutElement:SplitLayoutElement};_exports.$vaadinSplitLayout=vaadinSplitLayout;var $_documentContainer$c=html(_templateObject12_7280bdd0bea211e98f44c3131ec74eb1());document.head.appendChild($_documentContainer$c.content);var $_documentContainer$d=document.createElement("template");$_documentContainer$d.innerHTML="<dom-module id=\"vaadin-text-field-shared-styles\">\n  <template>\n    <style>\n      :host {\n        display: inline-flex;\n        outline: none;\n      }\n\n      :host::before {\n        content: \"\\2003\";\n        width: 0;\n        display: inline-block;\n        /* Size and position this element on the same vertical position as the input-field element\n           to make vertical align for the host element work as expected */\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      .vaadin-text-field-container,\n      .vaadin-text-area-container {\n        display: flex;\n        flex-direction: column;\n        min-width: 100%;\n        max-width: 100%;\n        width: var(--vaadin-text-field-default-width, 12em);\n      }\n\n      [part=\"label\"]:empty {\n        display: none;\n      }\n\n      [part=\"input-field\"] {\n        display: flex;\n        align-items: center;\n        flex: auto;\n      }\n\n      .vaadin-text-field-container [part=\"input-field\"] {\n        flex-grow: 0;\n      }\n\n      /* Reset the native input styles */\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea) {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        outline: none;\n        margin: 0;\n        padding: 0;\n        border: 0;\n        border-radius: 0;\n        min-width: 0;\n        font: inherit;\n        font-size: 1em;\n        line-height: normal;\n        color: inherit;\n        background-color: transparent;\n        /* Disable default invalid style in Firefox */\n        box-shadow: none;\n      }\n\n      [part=\"input-field\"] ::slotted(*) {\n        flex: none;\n      }\n\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part=\"input-field\"] ::slotted([part=\"value\"]) {\n        flex: auto;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      [part=\"input-field\"] ::slotted(textarea) {\n        resize: none;\n      }\n\n      [part=\"value\"]::-ms-clear,\n      [part=\"input-field\"] ::slotted(input)::-ms-clear {\n        display: none;\n      }\n\n      [part=\"clear-button\"] {\n        cursor: default;\n      }\n\n      [part=\"clear-button\"]::before {\n        content: \"\u2715\";\n      }\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer$d.content);var HOST_PROPS={default:["list","autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title"],accessible:["disabled","readonly","required","invalid"]},PROP_TYPE={DEFAULT:"default",ACCESSIBLE:"accessible"},TextFieldMixin=function TextFieldMixin(subclass){return(/*#__PURE__*/function(_ControlStateMixin){babelHelpers.inherits(VaadinTextFieldMixin,_ControlStateMixin);babelHelpers.createClass(VaadinTextFieldMixin,null,[{key:"properties",get:function get(){return{/**
       * Whether the value of the control can be automatically completed by the browser.
       * List of available options at:
       * https://developer.mozilla.org/en/docs/Web/HTML/Element/input#attr-autocomplete
       */autocomplete:{type:String},/**
       * This is a property supported by Safari that is used to control whether
       * autocorrection should be enabled when the user is entering/editing the text.
       * Possible values are:
       * on: Enable autocorrection.
       * off: Disable autocorrection.
       */autocorrect:{type:String},/**
       * This is a property supported by Safari and Chrome that is used to control whether
       * autocapitalization should be enabled when the user is entering/editing the text.
       * Possible values are:
       * characters: Characters capitalization.
       * words: Words capitalization.
       * sentences: Sentences capitalization.
       * none: No capitalization.
       */autocapitalize:{type:String},/**
       * Specify that the value should be automatically selected when the field gains focus.
       */autoselect:{type:Boolean,value:!1},/**
       * Set to true to display the clear icon which clears the input.
       */clearButtonVisible:{type:Boolean,value:!1},/**
       * Error to show when the input value is invalid.
       */errorMessage:{type:String,value:""},/**
       * Object with translated strings used for localization. Has
       * the following structure and default values:
       *
       * ```
       * {
       *   // Translation of the clear icon button accessible label
       *   clear: 'Clear'
       * }
       * ```
       */i18n:{type:Object,value:function value(){return{clear:"Clear"}}},/**
       * String used for the label element.
       */label:{type:String,value:"",observer:"_labelChanged"},/**
       * Maximum number of characters (in Unicode code points) that the user can enter.
       */maxlength:{type:Number},/**
       * Minimum number of characters (in Unicode code points) that the user can enter.
       */minlength:{type:Number},/**
       * The name of the control, which is submitted with the form data.
       */name:{type:String},/**
       * A hint to the user of what can be entered in the control.
       */placeholder:{type:String},/**
       * This attribute indicates that the user cannot modify the value of the control.
       */readonly:{type:Boolean,reflectToAttribute:!0},/**
       * Specifies that the user must fill in a value.
       */required:{type:Boolean,reflectToAttribute:!0},/**
       * The initial value of the control.
       * It can be used for two-way data binding.
       */value:{type:String,value:"",observer:"_valueChanged",notify:!0},/**
       * This property is set to true when the control value is invalid.
       */invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},/**
       * Specifies that the text field has value.
       */hasValue:{type:Boolean,reflectToAttribute:!0},/**
       * When set to true, user is prevented from typing a value that
       * conflicts with the given `pattern`.
       */preventInvalidInput:{type:Boolean},_labelId:String,_errorId:String,_inputId:String}}},{key:"observers",get:function get(){return["_stateChanged(disabled, readonly, clearButtonVisible, hasValue)","_hostPropsChanged("+HOST_PROPS.default.join(", ")+")","_hostAccessiblePropsChanged("+HOST_PROPS.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId)","_getActiveLabelId(label, _labelId, _inputId)","__observeOffsetHeight(errorMessage, invalid, label)"]}}]);function VaadinTextFieldMixin(){var _this120;babelHelpers.classCallCheck(this,VaadinTextFieldMixin);_this120=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(VaadinTextFieldMixin).call(this));// This complex observer needs to be added dynamically here (instead of defining it above in the `get observers()`)
// so that it runs after complex observers of inheriting classes. Otherwise e.g. `_stepOrMinChanged()` observer of
// vaadin-number-field would run after this and the `min` and `step` properties would not yet be propagated to
// the `inputElement` when this runs.
_this120._createMethodObserver("__constraintsChanged(required, minlength, maxlength, pattern, min, max, step)");return _this120}babelHelpers.createClass(VaadinTextFieldMixin,[{key:"_onInput",value:function _onInput(e){var _this121=this;if(this.__preventInput){e.stopImmediatePropagation();this.__preventInput=!1;return}if(this.preventInvalidInput){var input=this.inputElement;if(0<input.value.length&&!this.checkValidity()){input.value=this.value||"";// add input-prevented attribute for 200ms
this.setAttribute("input-prevented","");this._inputDebouncer=Debouncer.debounce(this._inputDebouncer,timeOut.after(200),function(){_this121.removeAttribute("input-prevented")});return}}if(!e.__fromClearButton){this.__userInput=!0}this.value=e.target.value}// NOTE(yuriy): Workaround needed for IE11 and Edge for proper displaying
// of the clear button instead of setting display property for it depending on state.
},{key:"_stateChanged",value:function _stateChanged(disabled,readonly,clearButtonVisible,hasValue){if(!disabled&&!readonly&&clearButtonVisible&&hasValue){this.$.clearButton.removeAttribute("hidden")}else{this.$.clearButton.setAttribute("hidden",!0)}}},{key:"_onChange",value:function _onChange(e){if(this._valueClearing){return}// In the Shadow DOM, the `change` event is not leaked into the
// ancestor tree, so we must do this manually.
var changeEvent=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(changeEvent)}},{key:"_valueChanged",value:function _valueChanged(newVal,oldVal){// setting initial value to empty string, skip validation
if(""===newVal&&oldVal===void 0){return}if(""!==newVal&&null!=newVal){this.hasValue=!0}else{this.hasValue=!1}if(this.__userInput){this.__userInput=!1;return}else if(newVal!==void 0){this.inputElement.value=newVal}else{this.value=this.inputElement.value=""}if(this.invalid){this.validate()}}},{key:"_labelChanged",value:function _labelChanged(label){if(""!==label&&null!=label){this.setAttribute("has-label","")}else{this.removeAttribute("has-label")}}},{key:"_onSlotChange",value:function _onSlotChange(){var _this122=this,slotted=this.querySelector("".concat(this._slottedTagName,"[slot=\"").concat(this._slottedTagName,"\"]"));if(this.value){this.inputElement.value=this.value;this.validate()}if(slotted&&!this._slottedInput){this._validateSlottedValue(slotted);this._addInputListeners(slotted);this._addIEListeners(slotted);this._slottedInput=slotted}else if(!slotted&&this._slottedInput){this._removeInputListeners(this._slottedInput);this._removeIEListeners(this._slottedInput);this._slottedInput=void 0}Object.keys(PROP_TYPE).map(function(key){return PROP_TYPE[key]}).forEach(function(type){return _this122._propagateHostAttributes(HOST_PROPS[type].map(function(attr){return _this122[attr]}),type)})}},{key:"_hostPropsChanged",value:function _hostPropsChanged(){for(var _len11=arguments.length,attributesValues=Array(_len11),_key11=0;_key11<_len11;_key11++){attributesValues[_key11]=arguments[_key11]}this._propagateHostAttributes(attributesValues,PROP_TYPE.DEFAULT)}},{key:"_hostAccessiblePropsChanged",value:function _hostAccessiblePropsChanged(){for(var _len12=arguments.length,attributesValues=Array(_len12),_key12=0;_key12<_len12;_key12++){attributesValues[_key12]=arguments[_key12]}this._propagateHostAttributes(attributesValues,PROP_TYPE.ACCESSIBLE)}},{key:"_validateSlottedValue",value:function _validateSlottedValue(slotted){if(slotted.value!==this.value){console.warn("Please define value on the vaadin-text-field component!");slotted.value=""}}},{key:"_propagateHostAttributes",value:function _propagateHostAttributes(attributesValues,type){var _this123=this,input=this.inputElement,attributeNames=HOST_PROPS[type];if("accessible"===type){attributeNames.forEach(function(attr,index){_this123._setOrToggleAttribute(attr,attributesValues[index],input);_this123._setOrToggleAttribute("aria-".concat(attr),attributesValues[index],input)})}else{attributeNames.forEach(function(attr,index){_this123._setOrToggleAttribute(attr,attributesValues[index],input)})}}},{key:"_setOrToggleAttribute",value:function _setOrToggleAttribute(name,value,node){if(!name||!node){return}if(value){node.setAttribute(name,"boolean"===typeof value?"":value)}else{node.removeAttribute(name)}}},{key:"__constraintsChanged",value:function __constraintsChanged(required,minlength,maxlength,pattern,min,max,step){if(!this.invalid){return}var isNumUnset=function isNumUnset(n){return!n&&0!==n};if(!required&&!minlength&&!maxlength&&!pattern&&isNumUnset(min)&&isNumUnset(max)){this.invalid=!1}else{this.validate()}}/**
     * Returns true if the current input value satisfies all constraints (if any)
     * @returns {boolean}
     */},{key:"checkValidity",value:function checkValidity(){if(this.required||this.pattern||this.maxlength||this.minlength){return this.inputElement.checkValidity()}else{return!this.invalid}}},{key:"_addInputListeners",value:function _addInputListeners(node){node.addEventListener("input",this._boundOnInput);node.addEventListener("change",this._boundOnChange);node.addEventListener("blur",this._boundOnBlur);node.addEventListener("focus",this._boundOnFocus)}},{key:"_removeInputListeners",value:function _removeInputListeners(node){node.removeEventListener("input",this._boundOnInput);node.removeEventListener("change",this._boundOnChange);node.removeEventListener("blur",this._boundOnBlur);node.removeEventListener("focus",this._boundOnFocus)}},{key:"ready",value:function ready(){var _this124=this;babelHelpers.get(babelHelpers.getPrototypeOf(VaadinTextFieldMixin.prototype),"ready",this).call(this);this._boundOnInput=this._onInput.bind(this);this._boundOnChange=this._onChange.bind(this);this._boundOnBlur=this._onBlur.bind(this);this._boundOnFocus=this._onFocus.bind(this);var defaultInput=this.shadowRoot.querySelector("[part=\"value\"]");this._slottedInput=this.querySelector("".concat(this._slottedTagName,"[slot=\"").concat(this._slottedTagName,"\"]"));this._addInputListeners(defaultInput);this._addIEListeners(defaultInput);if(this._slottedInput){this._addIEListeners(this._slottedInput);this._addInputListeners(this._slottedInput)}this.shadowRoot.querySelector("[name=\"input\"], [name=\"textarea\"]").addEventListener("slotchange",this._onSlotChange.bind(this));if(!(window.ShadyCSS&&window.ShadyCSS.nativeCss)){this.updateStyles()}this.$.clearButton.addEventListener("mousedown",function(){return _this124._valueClearing=!0});this.$.clearButton.addEventListener("mouseleave",function(){return _this124._valueClearing=!1});this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this));this.addEventListener("keydown",this._onKeyDown.bind(this));var uniqueId=TextFieldMixin._uniqueId=1+TextFieldMixin._uniqueId||0;this._errorId="".concat(this.constructor.is,"-error-").concat(uniqueId);this._labelId="".concat(this.constructor.is,"-label-").concat(uniqueId);this._inputId="".concat(this.constructor.is,"-input-").concat(uniqueId);// Lumo theme defines a max-height transition for the "error-message"
// part on invalid state change.
this.shadowRoot.querySelector("[part=\"error-message\"]").addEventListener("transitionend",function(){_this124.__observeOffsetHeight()})}/**
     * Returns true if `value` is valid.
     * `<iron-form>` uses this to check the validity for all its elements.
     *
     * @return {boolean} True if the value is valid.
     */},{key:"validate",value:function validate(){return!(this.invalid=!this.checkValidity())}},{key:"clear",value:function clear(){this.value=""}},{key:"_onBlur",value:function _onBlur(){this.validate()}},{key:"_onFocus",value:function _onFocus(){var _this125=this;if(this.autoselect){this.inputElement.select();// iOS 9 workaround: https://stackoverflow.com/a/7436574
setTimeout(function(){try{_this125.inputElement.setSelectionRange(0,9999)}catch(e){// The workaround may cause errors on different input types.
// Needs to be suppressed. See https://github.com/vaadin/flow/issues/6070
}})}}},{key:"_onClearButtonClick",value:function _onClearButtonClick(e){e.preventDefault();// NOTE(yuriy): This line won't affect focus on the host. Cannot be properly tested.
this.inputElement.focus();this.clear();this._valueClearing=!1;if(navigator.userAgent.match(/Trident/)){// Disable IE input" event prevention here, we want the input event from
// below to propagate normally.
this.__preventInput=!1}var inputEvent=new Event("input",{bubbles:!0,composed:!0});inputEvent.__fromClearButton=!0;var changeEvent=new Event("change",{bubbles:!this._slottedInput});changeEvent.__fromClearButton=!0;this.inputElement.dispatchEvent(inputEvent);this.inputElement.dispatchEvent(changeEvent)}},{key:"_onKeyDown",value:function _onKeyDown(e){if(27===e.keyCode&&this.clearButtonVisible){var dispatchChange=!!this.value;this.clear();dispatchChange&&this.inputElement.dispatchEvent(new Event("change",{bubbles:!this._slottedInput}))}}},{key:"_addIEListeners",value:function _addIEListeners(node){var _this126=this;/* istanbul ignore if */if(navigator.userAgent.match(/Trident/)){// IE11 dispatches `input` event in following cases:
// - focus or blur, when placeholder attribute is set
// - placeholder attribute value changed
// https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/101220/
this._shouldPreventInput=function(){_this126.__preventInput=!0;requestAnimationFrame(function(){_this126.__preventInput=!1})};node.addEventListener("focusin",this._shouldPreventInput);node.addEventListener("focusout",this._shouldPreventInput);this._createPropertyObserver("placeholder",this._shouldPreventInput)}}},{key:"_removeIEListeners",value:function _removeIEListeners(node){/* istanbul ignore if */if(navigator.userAgent.match(/Trident/)){node.removeEventListener("focusin",this._shouldPreventInput);node.removeEventListener("focusout",this._shouldPreventInput)}}},{key:"_getActiveErrorId",value:function _getActiveErrorId(invalid,errorMessage,errorId){this._setOrToggleAttribute("aria-describedby",errorMessage&&invalid?errorId:void 0,this.focusElement)}},{key:"_getActiveLabelId",value:function _getActiveLabelId(label,_labelId,_inputId){var ids=_inputId;if(label){ids="".concat(_labelId," ").concat(_inputId)}this.focusElement.setAttribute("aria-labelledby",ids)}},{key:"_getErrorMessageAriaHidden",value:function _getErrorMessageAriaHidden(invalid,errorMessage,errorId){return(!(errorMessage&&invalid?errorId:void 0)).toString()}},{key:"_dispatchIronResizeEventIfNeeded",value:function _dispatchIronResizeEventIfNeeded(sizePropertyName,value){var previousSizePropertyName="__previous"+sizePropertyName;if(this[previousSizePropertyName]!==void 0&&this[previousSizePropertyName]!==value){this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0}))}this[previousSizePropertyName]=value}},{key:"__observeOffsetHeight",value:function __observeOffsetHeight(){this._dispatchIronResizeEventIfNeeded("Height",this.offsetHeight)}/**
     * @protected
     */},{key:"attributeChangedCallback",value:function attributeChangedCallback(prop,oldVal,newVal){babelHelpers.get(babelHelpers.getPrototypeOf(VaadinTextFieldMixin.prototype),"attributeChangedCallback",this).call(this,prop,oldVal,newVal);// Needed until Edge has CSS Custom Properties (present in Edge Preview)
/* istanbul ignore if */if(!(window.ShadyCSS&&window.ShadyCSS.nativeCss)&&/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(prop)){this.updateStyles()}// Safari has an issue with repainting shadow root element styles when a host attribute changes.
// Need this workaround (toggle any inline css property on and off) until the issue gets fixed.
var isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);/* istanbul ignore if */if(isSafari&&this.root){var WEBKIT_PROPERTY="-webkit-backface-visibility";this.root.querySelectorAll("*").forEach(function(el){el.style[WEBKIT_PROPERTY]="visible";el.style[WEBKIT_PROPERTY]=""})}}/**
     * Fired when the user commits a value change.
     *
     * @event change
     */ /**
         * Fired when the value is changed by the user: on every typing keystroke,
         * and the value is cleared using the clear button.
         *
         * @event input
         */ /**
             * Fired when the size of the element changes.
             *
             * @event iron-resize
             */},{key:"focusElement",get:function get(){if(!this.shadowRoot){return}var slotted=this.querySelector("".concat(this._slottedTagName,"[slot=\"").concat(this._slottedTagName,"\"]"));if(slotted){return slotted}return this.shadowRoot.querySelector("[part=\"value\"]")}/**
     * @private
     */},{key:"inputElement",get:function get(){return this.focusElement}},{key:"_slottedTagName",get:function get(){return"input"}}]);return VaadinTextFieldMixin}(ControlStateMixin(subclass)))};_exports.TextFieldMixin=TextFieldMixin;var vaadinTextFieldMixin={TextFieldMixin:TextFieldMixin};_exports.$vaadinTextFieldMixin=vaadinTextFieldMixin;var TextAreaElement=/*#__PURE__*/function(_ElementMixin$6){babelHelpers.inherits(TextAreaElement,_ElementMixin$6);function TextAreaElement(){babelHelpers.classCallCheck(this,TextAreaElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TextAreaElement).apply(this,arguments))}babelHelpers.createClass(TextAreaElement,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(TextAreaElement.prototype),"ready",this).call(this);this._updateHeight();this.addEventListener("animationend",this._onAnimationEnd)}},{key:"_onAnimationEnd",value:function _onAnimationEnd(e){if(0===e.animationName.indexOf("vaadin-text-area-appear")){this._updateHeight()}}},{key:"_textAreaValueChanged",value:function _textAreaValueChanged(value){this._updateHeight()}},{key:"_updateHeight",value:function _updateHeight(){var inputField=this.root.querySelector("[part=input-field]"),scrollTop=inputField.scrollTop,input=this.inputElement,inputWidth=getComputedStyle(input).width,valueLength=this.value?this.value.length:0;// Only clear the height when the content shortens to minimize scrollbar flickering.
if(this._oldValueLength>=valueLength){// Fix the input element width so its scroll height isn't affected by host's disappearing scrollbars
input.style.maxWidth=inputWidth;input.style.height="auto";// Avoid a jumpy Safari rendering issue
inputField.style.display="block"}this._oldValueLength=valueLength;var inputHeight=input.scrollHeight;if(inputHeight>input.clientHeight){input.style.height=inputHeight+"px"}// Restore
input.style.removeProperty("max-width");inputField.style.removeProperty("display");inputField.scrollTop=scrollTop;this._dispatchIronResizeEventIfNeeded("InputHeight",inputHeight)}/**
     * Fired when the text-area height changes.
     *
     * @event iron-resize
     */},{key:"_slottedTagName",get:function get(){return"textarea"}}],[{key:"template",get:function get(){return html(_templateObject13_7280bdd0bea211e98f44c3131ec74eb1())}},{key:"is",get:function get(){return"vaadin-text-area"}},{key:"version",get:function get(){return"2.4.10"}},{key:"observers",get:function get(){return["_textAreaValueChanged(value)"]}}]);return TextAreaElement}(ElementMixin$1(TextFieldMixin(ThemableMixin(PolymerElement))));_exports.TextAreaElement=TextAreaElement;customElements.define(TextAreaElement.is,TextAreaElement);var vaadinTextArea={TextAreaElement:TextAreaElement};_exports.$vaadinTextArea=vaadinTextArea;var TextFieldElement=/*#__PURE__*/function(_ElementMixin$7){babelHelpers.inherits(TextFieldElement,_ElementMixin$7);function TextFieldElement(){babelHelpers.classCallCheck(this,TextFieldElement);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(TextFieldElement).apply(this,arguments))}babelHelpers.createClass(TextFieldElement,null,[{key:"template",get:function get(){return html(_templateObject14_7280bdd0bea211e98f44c3131ec74eb1())}},{key:"is",get:function get(){return"vaadin-text-field"}},{key:"version",get:function get(){return"2.4.10"}},{key:"properties",get:function get(){return{/**
       * Identifies a list of pre-defined options to suggest to the user.
       * The value must be the id of a <datalist> element in the same document.
       */list:{type:String},/**
       * A regular expression that the value is checked against.
       * The pattern must match the entire value, not just some subset.
       */pattern:{type:String},/**
       * Message to show to the user when validation fails.
       */title:{type:String}}}}]);return TextFieldElement}(ElementMixin$1(TextFieldMixin(ThemableMixin(PolymerElement))));_exports.TextFieldElement=TextFieldElement;customElements.define(TextFieldElement.is,TextFieldElement);var vaadinTextField={TextFieldElement:TextFieldElement};_exports.$vaadinTextField=vaadinTextField;var $_documentContainer$e=html(_templateObject15_7280bdd0bea211e98f44c3131ec74eb1());document.head.appendChild($_documentContainer$e.content);var $_documentContainer$f=html(_templateObject16_7280bdd0bea211e98f44c3131ec74eb1());document.head.appendChild($_documentContainer$f.content);var LogPanel=/*#__PURE__*/function(_PolymerElement4){babelHelpers.inherits(LogPanel,_PolymerElement4);function LogPanel(){babelHelpers.classCallCheck(this,LogPanel);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(LogPanel).apply(this,arguments))}babelHelpers.createClass(LogPanel,null,[{key:"template",get:function get(){return html(_templateObject17_7280bdd0bea211e98f44c3131ec74eb1())}}]);return LogPanel}(PolymerElement);window.customElements.define("log-panel",LogPanel);var RecordListPanel=/*#__PURE__*/function(_PolymerElement5){babelHelpers.inherits(RecordListPanel,_PolymerElement5);function RecordListPanel(){babelHelpers.classCallCheck(this,RecordListPanel);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(RecordListPanel).apply(this,arguments))}babelHelpers.createClass(RecordListPanel,[{key:"onGridActiveItemChanged",value:function onGridActiveItemChanged(evt){var recordDataGrid=this.shadowRoot.querySelector("vaadin-grid"),selectedItem=evt.detail.value;recordDataGrid.selectedItems=selectedItem?[selectedItem]:[];this.set("selectedRecordData",selectedItem)}},{key:"displayStatus",value:function displayStatus(status){switch(status){case"monitoring":return"\u76D1\u63A7\u4E2D";case"recording":return"\u5F55\u5236\u4E2D";case"free":return"\u95F2\u7F6E\u4E2D";default:return"";}}}],[{key:"template",get:function get(){return html(_templateObject18_7280bdd0bea211e98f44c3131ec74eb1())}},{key:"properties",get:function get(){return{recordDatas:{type:Array,notify:!0,value:function value(){return RecordData.create(SampleRecordData)}},selectedRecordData:{type:Object,notify:!0}}}}]);return RecordListPanel}(PolymerElement);window.customElements.define("record-list-panel",RecordListPanel);var SettingPanel=/*#__PURE__*/function(_PolymerElement6){babelHelpers.inherits(SettingPanel,_PolymerElement6);function SettingPanel(){babelHelpers.classCallCheck(this,SettingPanel);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SettingPanel).apply(this,arguments))}babelHelpers.createClass(SettingPanel,[{key:"onClickEnableAutoRec",value:function onClickEnableAutoRec(){this.dispatchCustomEvent("auto-rec-changed",{value:!0,roomId:this.selectedRecordData.roomId})}},{key:"onClickDisableAutoRec",value:function onClickDisableAutoRec(){this.dispatchCustomEvent("auto-rec-changed",{value:!1,roomId:this.selectedRecordData.roomId})}},{key:"onClickTriggerRec",value:function onClickTriggerRec(){this.dispatchCustomEvent("rec-changed",{value:!0,roomId:this.selectedRecordData.roomId})}},{key:"onClickCutRec",value:function onClickCutRec(){this.dispatchCustomEvent("rec-changed",{value:!1,roomId:this.selectedRecordData.roomId})}},{key:"onClickRemoveRecRoom",value:function onClickRemoveRecRoom(){this.dispatchCustomEvent("remove-room",{value:this.selectedRecordData.roomId})}},{key:"onClickAddRoom",value:function onClickAddRoom(){this.dispatchCustomEvent("add-room",{value:this.addRoomId})}},{key:"onClickEnableAllAutoRec",value:function onClickEnableAllAutoRec(){this.dispatchCustomEvent("all-auto-rec-changed",{value:!0})}},{key:"onClickDisableAllAutoRec",value:function onClickDisableAllAutoRec(){this.dispatchCustomEvent("all-auto-rec-changed",{value:!1})}},{key:"displayStatus",value:function displayStatus(status){switch(status){case"monitoring":return"\u76D1\u63A7\u4E2D";case"recording":return"\u5F55\u5236\u4E2D";case"free":return"\u95F2\u7F6E\u4E2D";default:return"";}}},{key:"displayDownloadSpeedKiBps",value:function displayDownloadSpeedKiBps(downloadSpeedKiBps){return downloadSpeedKiBps?"".concat(downloadSpeedKiBps," KiB/s"):""}},{key:"displayDownloadSpeedPersentage",value:function displayDownloadSpeedPersentage(downloadSpeedPersentage){return downloadSpeedPersentage?"".concat(downloadSpeedPersentage," %"):""}},{key:"dispatchCustomEvent",value:function dispatchCustomEvent(eventName,detail){var bubbles=2<arguments.length&&arguments[2]!==void 0?arguments[2]:!0,composed=3<arguments.length&&arguments[3]!==void 0?arguments[3]:!0;this.dispatchEvent(new CustomEvent(eventName,{detail:detail,bubbles:bubbles,composed:composed}))}}],[{key:"template",get:function get(){return html(_templateObject19_7280bdd0bea211e98f44c3131ec74eb1())}},{key:"properties",get:function get(){return{selectedRecordData:{type:Object,notify:!0},addRoomId:Number}}}]);return SettingPanel}(PolymerElement);window.customElements.define("setting-panel",SettingPanel);// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(!0);// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
// eslint-disable-next-line no-undef
setRootPath(BililiveRecorderAppGlobals.rootPath);var BililiveRecorderApp=/*#__PURE__*/function(_PolymerElement7){babelHelpers.inherits(BililiveRecorderApp,_PolymerElement7);function BililiveRecorderApp(){babelHelpers.classCallCheck(this,BililiveRecorderApp);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(BililiveRecorderApp).apply(this,arguments))}babelHelpers.createClass(BililiveRecorderApp,[{key:"onAutoRecChanged",value:function onAutoRecChanged(evt){console.log(evt);var recordIndex=RecordData.findIndex(this.recordDatas,"roomId",evt.detail.roomId);this.set("recordDatas.".concat(recordIndex,".status"),evt.detail.value?"monitoring":"free");this.clearAndSet("selectedRecordData.status",evt.detail.value?"monitoring":"free");// this.set('selectedRecordData', {})
// this.set('selectedRecordData', this.get(`recordDatas.${recordIndex}`))
}},{key:"onRecChanged",value:function onRecChanged(evt){console.log(evt);var recordIndex=RecordData.findIndex(this.recordDatas,"roomId",evt.detail.roomId);this.set("recordDatas.".concat(recordIndex,".status"),evt.detail.value?"recording":"monitoring");this.clearAndSet("selectedRecordData.status",evt.detail.value?"recording":"monitoring");// this.set('selectedRecordData', {})
// this.set('selectedRecordData', this.get(`recordDatas.${recordIndex}`))
}},{key:"onRemoveRoom",value:function onRemoveRoom(evt){console.log(evt);var recordIndex=RecordData.findIndex(this.recordDatas,"roomId",evt.detail.value);this.splice("recordDatas",recordIndex,1);this.set("selectedRecordData",{})}},{key:"clearAndSet",value:function clearAndSet(path,value){this.set(path,value);var hostPath=path.split(".")[0],oldVar=this.get(hostPath);this.set(hostPath,{});this.set(hostPath,oldVar)}},{key:"onChanged",value:function onChanged(){console.log(this.selectedRecordData)}}],[{key:"template",get:function get(){return html(_templateObject20_7280bdd0bea211e98f44c3131ec74eb1())}},{key:"properties",get:function get(){return{recordDatas:Array,selectedRecordData:Object}}},{key:"observers",get:function get(){return["onChanged(recordDatas.*, selectedRecordData)"]}}]);return BililiveRecorderApp}(PolymerElement);window.customElements.define("bililive-recorder-app",BililiveRecorderApp)});