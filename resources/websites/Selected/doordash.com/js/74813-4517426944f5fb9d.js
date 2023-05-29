"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74813],{84829:function(a,b,c){c.d(b,{vR:function(){return O},t7:function(){return d.Z}}),c(95244);var d=c(70308),e=c(51438),f=c(28668),g=c(71418),h=c(85893),i=c(67294),j=c(32558),k=c(87264),l=c(99286),m=c(93942),n=c(40638),o=function(a){(0,f.Z)(c,a);var b=(0,g.Z)(c);function c(a){(0,e.Z)(this,c),(d=b.call(this,a)).lastClickStartTime=null,d.onApplePayButtonClick=function(){return d.lastClickStartTime=Date.now(),(0,n.SA)({storeId:d.props.storeId,businessId:d.props.businessId}),d.state.paymentRequest.show()};var d,f=(0,k.gH)(a.total,a.countryCode,a.currencyCode,a.storefrontName),g=a.stripe.paymentRequest(f);return g.on("token",function(a){var b,c=a.complete,e=a.token;d.props.submitOrderCartHandler({applePayToken:e.id});var g=d.lastClickStartTime?Date.now()-d.lastClickStartTime:null;(0,n.MQ)({timeSinceLastStep:g,tokenizer:m.Nj.Stripe,hasZipCode:!!(null===(b=e.card)||void 0===b?void 0:b.address_zip),hasRequestPayerName:!!f.requestPayerName}),c("success")}),g.canMakePayment().then(function(b){(0,n.Lb)({isAvailable:!!b,storeId:a.storeId,businessId:a.businessId}),d.setState({canMakePayment:!!b})}),d.state={paymentRequest:g,canMakePayment:!1},d}var d=c.prototype;return d.componentDidUpdate=function(a){var b=a.total,c=this.props.total;b!==c&&this.state.paymentRequest.update({total:{label:this.props.storefrontName||"doordash.com",amount:c},currency:(this.props.currencyCode||l.EJ).toLocaleLowerCase()})},d.render=function(){return this.state.canMakePayment&&(0,h.jsx)(j.PaymentRequestButtonElement,{paymentRequest:this.state.paymentRequest,onClick:this.onApplePayButtonClick,className:"PaymentRequestButton"})},c}(i.Component),p=c(47568),q=c(26042),r=c(69396),s=c(10253),t=c(59637),u=c(34051),v=c.n(u),w=c(24906),x=c(10071),y=c(36208),z=c(93999),A=c(38380),B=c(38768),C=c(7119),D=function(){var a=(0,k.Gc)(),b=a.firstName,c=a.lastName,d=a.email,e=a.phoneNumber,f=a.countryCode,g=a.set,h=(0,s.Z)((0,z.useMutation)(y.QF),1)[0];return(0,i.useCallback)(function(a){var i=a.firstName,j=a.lastName,k=a.phoneNumber,l=a.email,m=(0,r.Z)((0,q.Z)({},a),{firstName:(0,C.q)(b||i),lastName:(0,C.q)(c||j),phoneNumber:e||F(null!=k?k:"",null!=f?f:""),email:d||l});return g("firstName",m.firstName),g("lastName",m.lastName),g("email",m.email),g("phoneNumber",m.phoneNumber),!d&&l&&(0,B.I4)(l),h({variables:m,refetchQueries:["consumer"]})},[b,c,d,e,f,g,h,])},E={},F=function(a,b){if("+"===a.substring(0,1))return a;E[b]||(E[b]=new A.R(b));var c=E[b];c.input(a);var d=a;if(c.isValid()){var e,f=c.getNumber();d="".concat(null!==(e=null==f?void 0:f.number)&&void 0!==e?e:a)}return c.reset(),d},G=function(a){var b=a.initialText,c=a.amountOfLeadingCharsToKeep,d=void 0===c?0:c,e=a.amountOfLastCharsToKeep,f=void 0===e?0:e,g=a.characterToReplaceWith;if(!b||0===b.length)return"";if(d<0)throw Error("Amount of leading characters to keep need to be greater or equal to 0.");if(f<0)throw Error("Amount of last characters to keep need to be greater or equal to 0.");if(d+f>=b.length)return b;var h=Math.min(d,b.length),i=b.slice(0,h),j=b.slice(b.length-f),k=b.substring(h,b.length-f),l=k.replace(/[0-9]/g,void 0===g?"X":g);return"".concat(i).concat(l).concat(j)},H=c(53698),I=c(83186),J=c(3532),K=c(19982),L=function(a){var b=a.submitOrderCartHandler,c=a.total,d=a.countryCode,e=a.currencyCode,f=a.storefrontName,g=a.storeId,o=a.businessId,u=a.requestPayerContactInfo,y=a.stripe,z=(0,s.Z)(i.useState(!1),2),A=z[0],B=z[1],C=i.useRef(),E=D(),F=(0,H.Z)().isStorefront,L=(0,s.Z)((0,I.Z)(),1),M=L[0];i.useEffect(function(){var a=(0,k.gH)(c,d,e,f);u&&(a=(0,r.Z)((0,q.Z)({},a),{requestPayerName:!0,requestPayerEmail:!0,requestPayerPhone:!0}));var h,i=y.paymentRequest(a);i.on("token",(h=(0,p.Z)(v().mark(function c(d){var e,f,h,i,j,k,l,p,q,r;return v().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return e=d.complete,f=d.token,h=d.payerName,i=void 0===h?"":h,j=d.payerEmail,k=d.payerPhone,p=(l=(0,t.Z)(i.split(" ")))[0],q=l.slice(1),c.prev=2,c.next=6,E({firstName:p,lastName:q.join(" "),email:j,phoneNumber:k});case 6:if(!F){c.next=9;break}return c.next=9,M();case 9:return c.next=11,b({applePayToken:f.id,bypassProfileUpdate:!0});case 11:(0,n.MQ)({tokenizer:m.Nj.Stripe,hasZipCode:!!(null===(r=f.card)||void 0===r?void 0:r.address_zip),hasRequestPayerName:!!a.requestPayerName}),e("success"),c.next=19;break;case 15:c.prev=15,c.t0=c.catch(2),(0,J.ZP)("apple_pay_express_pay_submit_failure",{error:c.t0.message,phone:G({initialText:null!=k?k:"",amountOfLeadingCharsToKeep:4,amountOfLastCharsToKeep:0}),storeId:g,businessId:o}),e("fail");case 19:case"end":return c.stop()}},c,null,[[2,15]])})),function(a){return h.apply(this,arguments)})),i.canMakePayment().then(function(a){B(!!a),(0,J.ZP)("apple_pay_express_pay_available",{isAvailable:!!a,storeId:g,businessId:o})}),C.current=i},[]),i.useEffect(function(){var a;null===(a=C.current)||void 0===a||a.update({total:{label:f||"doordash.com",amount:c},currency:(e||l.EJ).toLocaleLowerCase()})},[c,f,e]);var N=K.Z.expressPay.applePayLabel();return A&&C.current?u?(0,h.jsx)(x.Theming,{overrides:{Colors:{ButtonPrimaryBackground:"ButtonPrimaryToggleBackground",ButtonPrimaryBackgroundHovered:"ButtonPrimaryToggleBackground",ButtonPrimaryBackgroundPressed:"ButtonPrimaryToggleBackground"}},children:(0,h.jsx)(w.default,{type:w.default.Types.PrimaryPill,onClick:function(){var a;return(0,J.ZP)("apple_pay_express_pay_clicked",{storeId:g,businessId:o}),null===(a=C.current)||void 0===a?void 0:a.show()},children:N})}):(0,h.jsx)(j.PaymentRequestButtonElement,{paymentRequest:C.current,className:"PaymentRequestButton"}):null},M=L,N=function(a){(0,f.Z)(c,a);var b=(0,g.Z)(c);function c(){return(0,e.Z)(this,c),b.apply(this,arguments)}return c.prototype.render=function(){var a=this.props.isExpressCheckout?M:o;return this.props.stripe&&(0,h.jsx)(a,{stripe:this.props.stripe,total:this.props.total,countryCode:this.props.countryCode,currencyCode:this.props.currencyCode,storefrontName:this.props.storefrontName,storeId:this.props.storeId,businessId:this.props.businessId,submitOrderCartHandler:this.props.submitOrderCartHandler,requestPayerContactInfo:!!this.props.isExpressCheckout})},c}(i.Component),O=(0,j.injectStripe)(N)},74813:function(a,b,c){c.r(b),c.d(b,{LinkAfterpayModal:function(){return F},LinkAfterpayModalWithPaymentFraudContext:function(){return G}});var d=c(47568),e=c(26042),f=c(10253),g=c(34051),h=c.n(g),i=c(85893),j=c(67294),k=c(11890),l=c(1968),m=c(10071),n=c(84829),o=c(78288),p=c(11698),q=c(48608),r=c(1019),s=c(7297),t=c(87379);function u(){var a=(0,s.Z)(["\n  width: 100%;\n  height: ","px;\n  border: 0;\n  transition: opacity 0.5s;\n  opacity: ",";\n"]);return u=function(){return a},a}function v(){var a=(0,s.Z)(["\n  position: absolute;\n  display: flex;\n  height: calc(100% - ","px);\n  width: calc(100% - ","px);\n  justify-content: center;\n  align-items: center;\n"]);return v=function(){return a},a}function w(){var a=(0,s.Z)(["\n  width: 100%;\n  height: ","px;\n"]);return w=function(){return a},a}var x=t.default.iframe.withConfig({componentId:"sc-7a980d12-0"})(u(),732,function(a){return a.isLoading?"0":"1"}),y=t.default.div.withConfig({componentId:"sc-7a980d12-1"})(v(),m.Spacing.XxxLarge,m.Spacing.XLarge),z=t.default.div.withConfig({componentId:"sc-7a980d12-2"})(w(),732),A=c(109),B=c(36943),C=function(a){var b=(0,B.YV)(),c=(0,B.yj)();return j.useCallback((0,d.Z)(h().mark(function d(){var e,g,i,j,k,l,m,n,o;return h().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=3,b(a);case 3:if((l=(null!==(k=null==(j=d.sent)?void 0:null===(e=j.data)||void 0===e?void 0:e.addPaymentMethod)&&void 0!==k?k:[]).filter(function(a){return(null==a?void 0:a.type)===q.Oh.AFTERPAY})).length){d.next=9;break}throw(0,r.i8)(q.Oh.AFTERPAY,{entryPoint:a}),Error("No valid payment method found");case 9:if(o=null==(n=(m=(0,f.Z)(l,1))[0])?void 0:null===(g=n.metadata)||void 0===g?void 0:g.setupIntentClientSecret,!(!n||!o||!n.stripeId||!n.paymentMethodUuid)){d.next=14;break}throw(0,r.i8)(q.Oh.AFTERPAY,{entryPoint:a}),Error("Invalid payment method returned");case 14:if((0,r.xf)(q.Oh.AFTERPAY,{entryPoint:a}),!(!(null==n?void 0:null===(i=n.metadata)||void 0===i?void 0:i.setupIntentRequiresAction)&&(null==n?void 0:n.paymentMethodUuid))){d.next=19;break}return d.next=18,c(null==n?void 0:n.paymentMethodUuid);case 18:return d.abrupt("return",null);case 19:return d.abrupt("return",n);case 20:case"end":return d.stop()}},d)})),[b,a,c])},D=function(a){var b=(0,A.MD)().stripe,c=C(a),e=(0,j.useCallback)((0,d.Z)(h().mark(function a(){var d,e,f,g,i,j,k,l,m;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,c();case 3:if(j=a.sent){a.next=6;break}return a.abrupt("return",null);case 6:return k=null==j?void 0:null===(d=j.metadata)||void 0===d?void 0:d.setupIntentClientSecret,a.next=9,null==b?void 0:null===(e=b.confirmAfterpayClearpaySetup)||void 0===e?void 0:e.call(b,k||"",{payment_method:j.stripeId||"",mandate_data:{customer_acceptance:{type:"online",online:{infer_from_client:!0}}},return_url:"".concat(window.location.origin,"/afterpay/confirm")},{handleActions:!1}).catch(function(a){var b=a.message?{message:a.message}:{};throw(0,r.cT)(q.Oh.AFTERPAY,b),a});case 9:if(m=null==(l=a.sent)?void 0:null===(f=l.setupIntent)||void 0===f?void 0:null===(g=f.next_action)||void 0===g?void 0:null===(i=g.redirect_to_url)||void 0===i?void 0:i.url){a.next=13;break}throw Error("Invalid response from confrimAfterpayClearpaySetup");case 13:return(0,r.kT)(q.Oh.AFTERPAY),a.abrupt("return",{iframeUrl:m,paymentMethod:j});case 15:case"end":return a.stop()}},a)})),[c,b]);return b&&c?e:null},E=function(a,b){var c,e=(0,B.yj)(),f=j.useRef(null),g=j.useCallback((c=(0,d.Z)(h().mark(function a(c){var d,e,f;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:f=null===(d=c.data)||void 0===d?void 0:null===(e=d.confirmPaymentMethod)||void 0===e?void 0:e.find(function(a){return(null==a?void 0:a.isDefault)===!0&&(null==a?void 0:a.type)===q.Oh.AFTERPAY}),(0,r.Fe)(q.Oh.AFTERPAY),b(f);case 4:case"end":return a.stop()}},a)})),function(a){return c.apply(this,arguments)}),[b]);return j.useEffect(function(){var b=function(b){if((null==b?void 0:b.data)==="confirm-afterpay-linked"){if(!f.current){a("PM UUID missing");return}e(f.current).then(g).catch(function(b){return a(b.message)})}};return window.addEventListener("message",b),function(){window.removeEventListener("message",b)}},[f,e,a,g]),j.useCallback(function(a){f.current=a},[f])},F=function(a){var b=a.entryPoint,c=a.onSuccess,e=a.onCancel,g=(0,f.Z)(j.useState(!0),2),n=g[0],o=g[1],s=(0,f.Z)(j.useState(),2),t=s[0],u=s[1],v=(0,f.Z)(j.useState(),2),w=v[0],A=v[1],B=(0,p.ac)().isMobile,C=j.useCallback(function(a){if(a.includes("attached customer")){e();return}(0,r.rY)(q.Oh.AFTERPAY,{entryPoint:b,message:a}),A(q.VD.afterpay.linkError())},[e,b]),F=D(b),G=E(C,c),H=j.useCallback((0,d.Z)(h().mark(function a(){var d,e,f;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(F){a.next=2;break}return a.abrupt("return");case 2:return o(!0),a.prev=3,a.next=6,F();case 6:if(d=a.sent){a.next=10;break}return c(),a.abrupt("return");case 10:e=d.paymentMethod,f=d.iframeUrl,G(null==e?void 0:e.paymentMethodUuid),u(f),a.next=19;break;case 15:a.prev=15,a.t0=a.catch(3),(0,r.rY)(q.Oh.AFTERPAY,{entryPoint:b,message:a.t0.message}),A(q.VD.afterpay.linkError());case 19:case"end":return a.stop()}},a,null,[[3,15]])})),[F,b,G,c,]);return j.useEffect(function(){H()},[H]),(0,i.jsxs)(l.Modal,{onClose:e,size:l.Modal.Sizes.Medium,shouldRenderStickyHeader:!1,hasCloseButton:!!w||B&&n,shouldCloseOnOverlayClick:n,children:[w&&(0,i.jsx)(m.Inset,{size:m.Inset.Sizes.Medium,children:(0,i.jsx)(m.Text,{styles:m.Text.Styles.SectionSubtext,textAlign:m.Text.TextAlignments.Center,color:m.Text.Colors.TextError,children:w})}),!w&&(0,i.jsxs)(i.Fragment,{children:[n&&(0,i.jsx)(y,{children:(0,i.jsx)(k.default,{})}),t?(0,i.jsx)(x,{onLoad:function(){return o(!1)},src:t,title:q.VD.afterpay.linkTitle(),isLoading:n}):(0,i.jsx)(z,{})]})]})},G=function(a){return(0,i.jsx)(n.t7,{stripeKey:a.stripeKey,children:(0,i.jsx)(o.f$,{providers:[{name:o.dD.Stripe,config:{timeout:o.YV}},{name:o.dD.Braintree,config:{timeout:o.YV}},],children:(0,i.jsx)(F,(0,e.Z)({},a))})})}},36943:function(a,b,c){c.d(b,{Yr:function(){return w},YV:function(){return z},gD:function(){return x},U1:function(){return C},"$0":function(){return y},yj:function(){return B}});var d=c(47568),e=c(10253),f=c(7297),g=c(34051),h=c.n(g),i=c(67294),j=c(93999),k=c(44119),l=c.n(k),m=c(93942),n=c(90824),o=c(78288),p=c(81047),q=c(16935),r=c(9448),s=c(81271),t=c(66173);function u(){var a=(0,f.Z)(["\n  mutation addPaymentMethodV2(\n    $token: String\n    $entryPoint: String\n    $syncSubscriptionPaymentCard: Boolean\n    $paymentGateway: String\n    $tokenizationProvider: String\n    $cardData: PaymentCardDataInput\n    $clientFraudContext: PaymentClientFraudContextInput\n    $payerData: PayerDataInput\n    $paymentConfigToken: String\n    $paymentMethodType: String\n    $setDefault: Boolean\n    $digitalWalletCardData: PaymentDigitalWalletCardDataInput\n    $showAddedPaymentMethodOnly: Boolean\n    $ebtCardData: PaymentEbtCardDataInput\n  ) {\n    addPaymentMethod(\n      token: $token\n      entryPoint: $entryPoint\n      syncSubscriptionPaymentCard: $syncSubscriptionPaymentCard\n      paymentGateway: $paymentGateway\n      tokenizationProvider: $tokenizationProvider\n      cardData: $cardData\n      clientFraudContext: $clientFraudContext\n      payerData: $payerData\n      paymentConfigToken: $paymentConfigToken\n      paymentMethodType: $paymentMethodType\n      setDefault: $setDefault\n      digitalWalletCardData: $digitalWalletCardData\n      showAddedPaymentMethodOnly: $showAddedPaymentMethodOnly\n      ebtCardData: $ebtCardData\n    ) {\n      ...PaymentCardFragment\n    }\n  }\n  ","\n"]);return u=function(){return a},a}function v(){var a=(0,f.Z)(["\n  mutation confirmPaymentMethod($paymentMethodId: ID!) {\n    confirmPaymentMethod(paymentMethodId: $paymentMethodId) {\n      ...PaymentCardFragment\n    }\n  }\n  ","\n"]);return v=function(){return a},a}var w=l()(u(),r.Z),x=function(a,b){var c=(0,e.Z)((0,s.Z)({name:t.r.AddToCart,type:t.Yh.TypedInput},w),2),f=c[0],g=c[1],j=(0,n.e)(),k=(0,o.on)();return[i.useCallback((0,d.Z)(h().mark(function c(){var d;return h().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,k.getClientContext();case 2:return d=c.sent,c.next=5,f({refetchQueries:a,variables:{entryPoint:b,clientFraudContext:d,tokenizationProvider:m.Nj.Stripe,paymentMethodType:q.Oh.CASHAPP,paymentConfigToken:null==j?void 0:j.paymentConfigToken}});case 5:return c.abrupt("return",c.sent);case 6:case"end":return c.stop()}},c)})),[b,a,k,f,j]),g]},y=function(a){var b=(0,j.useApolloClient)(),c=(0,e.Z)((0,s.Z)({name:t.r.AddToCart,type:t.Yh.TypedInput},w,{refetchQueries:a,onCompleted:function(a){(0,p.a)(b,a.addPaymentMethod)}}),1)[0],d=(0,n.e)();return function(a){var b=a.venmoNonce,e=a.entryPoint,f=a.clientFraudContext;return c({variables:{entryPoint:e,clientFraudContext:f,token:b,tokenizationProvider:m.Nj.Braintree,paymentMethodType:q.Oh.VENMO,paymentConfigToken:null==d?void 0:d.paymentConfigToken,setDefault:!0}})}},z=function(){var a,b=(0,e.Z)((0,s.Z)({name:t.r.AddToCart,type:t.Yh.TypedInput},w),1)[0],c=(0,n.e)(),f=(0,o.on)();return i.useCallback((a=(0,d.Z)(h().mark(function a(d){var e;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.getClientContext();case 2:return e=a.sent,a.next=5,b({variables:{entryPoint:d,clientFraudContext:e,tokenizationProvider:m.Nj.Stripe,paymentMethodType:q.Oh.AFTERPAY,paymentConfigToken:null==c?void 0:c.paymentConfigToken}});case 5:return a.abrupt("return",a.sent);case 6:case"end":return a.stop()}},a)})),function(b){return a.apply(this,arguments)}),[f,b,c])},A=l()(v(),r.Z),B=function(){var a=(0,j.useApolloClient)(),b=(0,e.Z)((0,j.useMutation)(A,{onCompleted:function(b){(0,p.a)(a,b.confirmPaymentMethod)}}),1)[0];return i.useCallback(function(a){return b({variables:{paymentMethodId:a}})},[b])},C=function(){var a,b=(0,j.useApolloClient)(),c=(0,e.Z)((0,s.Z)({name:t.r.AddToCart,type:t.Yh.TypedInput},w,{onCompleted:function(a){(0,p.a)(b,a.addPaymentMethod)}}),1)[0],f=(0,n.e)(),g=(0,o.on)();return i.useCallback((a=(0,d.Z)(h().mark(function a(b,d){var e;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.getClientContext();case 2:return e=a.sent,a.next=5,c({variables:{entryPoint:d,clientFraudContext:e,tokenizationProvider:m.Nj.Vgs,paymentMethodType:q.Oh.EBT,paymentConfigToken:null==f?void 0:f.paymentConfigToken,ebtCardData:{number:b}}});case 5:return a.abrupt("return",a.sent);case 6:case"end":return a.stop()}},a)})),function(b,c){return a.apply(this,arguments)}),[g,c,f])}},40638:function(a,b,c){c.d(b,{Lb:function(){return f},MQ:function(){return e},SA:function(){return g},Yl:function(){return i},sl:function(){return h}});var d=c(3532),e=function(a){return(0,d.ZP)("apple_pay_tokenization",a)},f=function(a){var b=a.isAvailable,c=a.storeId,e=a.businessId;(0,d.ZP)("apple_pay_available",{isAvailable:b,storeId:c,businessId:e})},g=function(a){var b=a.storeId,c=a.businessId;(0,d.ZP)("apple_pay_clicked",{storeId:b,businessId:c})},h=function(a){var b=a.storeId,c=a.businessId,e=a.tokenizer,f=a.timeSinceLastStep,g=a.timeSinceOnClick;(0,d.ZP)("apple_pay_authorized",{storeId:b,businessId:c,tokenizer:e,timeSinceLastStep:f,timeSinceOnClick:g})},i=function(a){var b=a.storeId,c=a.businessId,e=a.message;(0,d.ZP)("apple_pay_error",{storeId:b,businessId:c,message:e})}}}])