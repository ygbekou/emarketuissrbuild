(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"4tE/":function(t,e,o){"use strict";o.d(e,"a",function(){return R}),o.d(e,"d",function(){return j}),o.d(e,"e",function(){return T}),o.d(e,"c",function(){return k}),o.d(e,"b",function(){return F}),o.d(e,"f",function(){return L});var i=o("mrSG"),n=o("lLAP"),s=o("n6gG"),a=o("CcnG"),r=o("Wf4p"),l=o("YSh2"),c=o("eDkP"),p=o("dWZg"),u=o("4c35"),h=(o("gIcY"),o("pugT")),_=o("K9Ia"),f=o("lYZG"),d=o("p0ib"),m=o("F/XL"),y=o("bne5"),v=o("t9fZ"),b=o("15JJ"),g=o("VnD/"),O=o("67Y/"),w=o("xMyE"),S=o("vubp"),P=0,A=function(){return function(t,e){this.source=t,this.option=e}}(),C=function(){return function(){}}(),E=Object(r.E)(C),R=new a.r("mat-autocomplete-default-options",{providedIn:"root",factory:function(){return{autoActiveFirstOption:!1}}}),j=function(t){function e(e,o,i){var n=t.call(this)||this;return n._changeDetectorRef=e,n._elementRef=o,n.showPanel=!1,n._isOpen=!1,n.displayWith=null,n.optionSelected=new a.n,n.opened=new a.n,n.closed=new a.n,n._classList={},n.id="mat-autocomplete-"+P++,n._autoActiveFirstOption=!!i.autoActiveFirstOption,n}return Object(i.__extends)(e,t),Object.defineProperty(e.prototype,"isOpen",{get:function(){return this._isOpen&&this.showPanel},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"autoActiveFirstOption",{get:function(){return this._autoActiveFirstOption},set:function(t){this._autoActiveFirstOption=Object(s.c)(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"classList",{set:function(t){this._classList=t&&t.length?t.split(" ").reduce(function(t,e){return t[e.trim()]=!0,t},{}):{},this._setVisibilityClasses(this._classList),this._elementRef.nativeElement.className=""},enumerable:!0,configurable:!0}),e.prototype.ngAfterContentInit=function(){this._keyManager=new n.b(this.options).withWrap(),this._setVisibility()},e.prototype._setScrollTop=function(t){this.panel&&(this.panel.nativeElement.scrollTop=t)},e.prototype._getScrollTop=function(){return this.panel?this.panel.nativeElement.scrollTop:0},e.prototype._setVisibility=function(){this.showPanel=!!this.options.length,this._setVisibilityClasses(this._classList),this._changeDetectorRef.markForCheck()},e.prototype._emitSelectEvent=function(t){var e=new A(this,t);this.optionSelected.emit(e)},e.prototype._setVisibilityClasses=function(t){t["mat-autocomplete-visible"]=this.showPanel,t["mat-autocomplete-hidden"]=!this.showPanel},e}(E),F=new a.r("mat-autocomplete-scroll-strategy");function k(t){return function(){return t.scrollStrategies.reposition()}}var L=function(){function t(t,e,o,i,n,s,a,r,l,c){var p=this;this._element=t,this._overlay=e,this._viewContainerRef=o,this._zone=i,this._changeDetectorRef=n,this._dir=a,this._formField=r,this._document=l,this._viewportRuler=c,this._componentDestroyed=!1,this._autocompleteDisabled=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=h.a.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new _.b,this._windowBlurHandler=function(){p._canOpenOnNextFocus=p._document.activeElement!==p._element.nativeElement||p.panelOpen},this._onChange=function(){},this._onTouched=function(){},this.position="auto",this.autocompleteAttribute="off",this._overlayAttached=!1,this.optionSelections=Object(f.a)(function(){return p.autocomplete&&p.autocomplete.options?d.a.apply(void 0,p.autocomplete.options.map(function(t){return t.onSelectionChange})):p._zone.onStable.asObservable().pipe(Object(v.a)(1),Object(b.a)(function(){return p.optionSelections}))}),this._scrollStrategy=s}return Object.defineProperty(t.prototype,"autocompleteDisabled",{get:function(){return this._autocompleteDisabled},set:function(t){this._autocompleteDisabled=Object(s.c)(t)},enumerable:!0,configurable:!0}),t.prototype.ngAfterViewInit=function(){var t=this;if("undefined"!=typeof window&&(this._zone.runOutsideAngular(function(){window.addEventListener("blur",t._windowBlurHandler)}),Object(p.d)())){var e=this._element.nativeElement,o=e.getRootNode?e.getRootNode():null;this._isInsideShadowRoot=o instanceof window.ShadowRoot}},t.prototype.ngOnChanges=function(t){t.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())},t.prototype.ngOnDestroy=function(){"undefined"!=typeof window&&window.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()},Object.defineProperty(t.prototype,"panelOpen",{get:function(){return this._overlayAttached&&this.autocomplete.showPanel},enumerable:!0,configurable:!0}),t.prototype.openPanel=function(){this._attachOverlay(),this._floatLabel()},t.prototype.closePanel=function(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this.autocomplete.closed.emit(),this.autocomplete._isOpen=this._overlayAttached=!1,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._changeDetectorRef.detectChanges())},t.prototype.updatePosition=function(){this._overlayAttached&&this._overlayRef.updatePosition()},Object.defineProperty(t.prototype,"panelClosingActions",{get:function(){var t=this;return Object(d.a)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(Object(g.a)(function(){return t._overlayAttached})),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(Object(g.a)(function(){return t._overlayAttached})):Object(m.a)()).pipe(Object(O.a)(function(t){return t instanceof r.t?t:null}))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"activeOption",{get:function(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null},enumerable:!0,configurable:!0}),t.prototype._getOutsideClickStream=function(){var t=this;return Object(d.a)(Object(y.a)(this._document,"click"),Object(y.a)(this._document,"touchend")).pipe(Object(g.a)(function(e){var o=t._isInsideShadowRoot&&e.composedPath?e.composedPath()[0]:e.target,i=t._formField?t._formField._elementRef.nativeElement:null;return t._overlayAttached&&o!==t._element.nativeElement&&(!i||!i.contains(o))&&!!t._overlayRef&&!t._overlayRef.overlayElement.contains(o)}))},t.prototype.writeValue=function(t){var e=this;Promise.resolve(null).then(function(){return e._setTriggerValue(t)})},t.prototype.registerOnChange=function(t){this._onChange=t},t.prototype.registerOnTouched=function(t){this._onTouched=t},t.prototype.setDisabledState=function(t){this._element.nativeElement.disabled=t},t.prototype._handleKeydown=function(t){var e=t.keyCode;if(e===l.g&&t.preventDefault(),this.activeOption&&e===l.f&&this.panelOpen)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){var o=this.autocomplete._keyManager.activeItem,i=e===l.p||e===l.d;this.panelOpen||e===l.o?this.autocomplete._keyManager.onKeydown(t):i&&this._canOpen()&&this.openPanel(),(i||this.autocomplete._keyManager.activeItem!==o)&&this._scrollToOption()}},t.prototype._handleInput=function(t){var e=t.target,o=e.value;"number"===e.type&&(o=""==o?null:parseFloat(o)),this._previousValue!==o&&(this._previousValue=o,this._onChange(o),this._canOpen()&&this._document.activeElement===t.target&&this.openPanel())},t.prototype._handleFocus=function(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(),this._floatLabel(!0)):this._canOpenOnNextFocus=!0},t.prototype._floatLabel=function(t){void 0===t&&(t=!1),this._formField&&"auto"===this._formField.floatLabel&&(t?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)},t.prototype._resetLabel=function(){this._manuallyFloatingLabel&&(this._formField.floatLabel="auto",this._manuallyFloatingLabel=!1)},t.prototype._scrollToOption=function(){var t=this.autocomplete._keyManager.activeItemIndex||0,e=Object(r.B)(t,this.autocomplete.options,this.autocomplete.optionGroups);if(0===t&&1===e)this.autocomplete._setScrollTop(0);else{var o=Object(r.C)(t+e,48,this.autocomplete._getScrollTop(),256);this.autocomplete._setScrollTop(o)}},t.prototype._subscribeToClosingActions=function(){var t=this,e=this._zone.onStable.asObservable().pipe(Object(v.a)(1)),o=this.autocomplete.options.changes.pipe(Object(w.a)(function(){return t._positionStrategy.reapplyLastPosition()}),Object(S.a)(0));return Object(d.a)(e,o).pipe(Object(b.a)(function(){var e=t.panelOpen;return t._resetActiveItem(),t.autocomplete._setVisibility(),t.panelOpen&&(t._overlayRef.updatePosition(),e!==t.panelOpen&&t.autocomplete.opened.emit()),t.panelClosingActions}),Object(v.a)(1)).subscribe(function(e){return t._setValueAndClose(e)})},t.prototype._destroyPanel=function(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)},t.prototype._setTriggerValue=function(t){var e=this.autocomplete&&this.autocomplete.displayWith?this.autocomplete.displayWith(t):t,o=null!=e?e:"";this._formField?this._formField._control.value=o:this._element.nativeElement.value=o,this._previousValue=o},t.prototype._setValueAndClose=function(t){t&&t.source&&(this._clearPreviousSelectedOption(t.source),this._setTriggerValue(t.source.value),this._onChange(t.source.value),this._element.nativeElement.focus(),this.autocomplete._emitSelectEvent(t.source)),this.closePanel()},t.prototype._clearPreviousSelectedOption=function(t){this.autocomplete.options.forEach(function(e){e!=t&&e.selected&&e.deselect()})},t.prototype._attachOverlay=function(){var t=this;if(!this.autocomplete)throw Error("Attempting to open an undefined instance of `mat-autocomplete`. Make sure that the id passed to the `matAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");var e=this._overlayRef;e?(this._positionStrategy.setOrigin(this._getConnectedElement()),e.updateSize({width:this._getPanelWidth()})):(this._portal=new u.h(this.autocomplete.template,this._viewContainerRef),e=this._overlay.create(this._getOverlayConfig()),this._overlayRef=e,e.keydownEvents().subscribe(function(e){(e.keyCode===l.g||e.keyCode===l.p&&e.altKey)&&(t._resetActiveItem(),t._closeKeyEventStream.next(),e.stopPropagation(),e.preventDefault())}),this._viewportRuler&&(this._viewportSubscription=this._viewportRuler.change().subscribe(function(){t.panelOpen&&e&&e.updateSize({width:t._getPanelWidth()})}))),e&&!e.hasAttached()&&(e.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());var o=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.panelOpen&&o!==this.panelOpen&&this.autocomplete.opened.emit()},t.prototype._getOverlayConfig=function(){return new c.d({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir})},t.prototype._getOverlayPosition=function(){var t=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(t),this._positionStrategy=t,t},t.prototype._setStrategyPositions=function(t){var e={originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},o={originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-autocomplete-panel-above"};t.withPositions("above"===this.position?[o]:"below"===this.position?[e]:[e,o])},t.prototype._getConnectedElement=function(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element},t.prototype._getPanelWidth=function(){return this.autocomplete.panelWidth||this._getHostWidth()},t.prototype._getHostWidth=function(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width},t.prototype._resetActiveItem=function(){this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption?0:-1)},t.prototype._canOpen=function(){var t=this._element.nativeElement;return!t.readOnly&&!t.disabled&&!this._autocompleteDisabled},t}(),T=function(){return function(){}}()}}]);