"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[35414],{95244:function(a,b,c){c.d(b,{Z:function(){return aq}});var d=c(10253),e=c(85893),f=c(93999),g=c(67294),h=c(48608),i=c(73391),j=c(11890),k=c(97073),l=c(10071),m=c(65999),n=c(23685),o=c(63537),p=c(45230),q=c(3610),r=c(64491),s=c(29697),t=c(39011),u=c(51112),v=c(53698),w=c(89261),x=c(7297),y=c(44119),z=c.n(y);function A(){var a=(0,x.Z)(["\n  query getTokenizedVgsData($cardData: PaymentCardDataInput!) {\n    getTokenizedVgsData(cardData: $cardData) {\n      number\n      cvv\n      last4\n      iin\n      expMonth\n      expYear\n      zip\n    }\n  }\n"]);return A=function(){return a},a}var B=z()(A()),C=c(37290),D=c(36189),E=c(94063),F=c(90824),G=c(2886),H=c(4831),I=c(63070),J=c(9718),K=c(38934),L=c(1864),M=c(96303),N=c(95623),O=c(87708);function P(a){var b=a.submitting,c=a.isInline,f=a.paymentCardTracking,h=a.onClose,i=a.onFinish,x=a.refetchQueries,y=a.isSubscriptionsEnabled,z=(0,d.Z)((0,r.Z)(),3),A=z[0],P=z[1],Q=z[2],R=(0,J.Y)(),S=(0,M.Uj)(),T=(0,d.Z)(g.useState(new Set),2),U=T[0],V=T[1],W=(0,d.Z)(g.useState({inlineErrors:{},globalError:void 0}),2),X=W[0],Y=W[1],Z=(0,d.Z)(g.useState(!1),2),$=Z[0],_=Z[1],aa=function(){_(!0),Y({inlineErrors:{},globalError:void 0}),f.onSubmit(S),ac(ae,af)},ab=function(a){var b,c,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],f=arguments.length>2?arguments[2]:void 0,h=arguments.length>3?arguments[3]:void 0,i=(0,J.V)(),j=(0,F.e)(),k=(0,E.ZP)().vgsConfig,l=(0,G.RN)().consumer,m=(0,v.Z)().isStorefront,o=(0,g.useState)(null),p=o[0],q=o[1],r=(0,g.useState)({last4:0,iin:0}),x=r[0],y=r[1],z=(0,d.Z)((0,s.B9)({refetchQueries:e}),1)[0],A=(0,g.useState)(!m),N=A[0],O=A[1],P=function(){return O(!N)},Q=(0,v.Z)().experience,R=n.default.getCurrentLocale(),S={countryCode:(0,H.Nn)((0,I.Z)(null==l?void 0:null===(b=l.orderCart)||void 0===b?void 0:null===(c=b.restaurant)||void 0===c?void 0:c.address))};(0,D.ZP)({isVgsLoaded:a,vgsConfig:k,setForm:q,setCardData:y,onFieldError:f,setValidFields:h});var T=function(a,b){if(!p||!p.submit)throw Error("VGS vendor form is not initialized");var c,e,f,g,h,l,m,n,o,q=new Date().getTime();return p.submit(k.SUBMIT_URL,{mapDotToObject:"merge",data:{operationName:"getTokenizedVgsData",query:(0,t.print)(B),variables:{cardData:x}},headers:{"Accept-Language":R,"X-Experience-Id":Q,"X-Channel-Id":u.jD,"X-CSRFToken":(0,w.vQ)(L.E.csrf_token)||""}},(c=q,e=a,f=b,g=z,h=N,l=S,m=null==j?void 0:j.paymentConfigToken,function(a,b){if(200!==a){var d=JSON.stringify(b);f({inlineErrors:{},globalError:{displayMsg:K.GG.addCard(),reason:"vgs_failure",message:d,originalException:b}});return}var i=null==b?void 0:null===(j=b.data)||void 0===j?void 0:j.getTokenizedVgsData;if(!i){var j,k,n=null==b?void 0:null===(k=b.errors)||void 0===k?void 0:k[0];f({inlineErrors:{},globalError:{displayMsg:(null==n?void 0:n.message)||K.GG.addCard(),reason:"vgs_failure",message:(null==n?void 0:n.message)||"".concat(n)||"Unknown error occurred getting tokenized VGS card data",originalException:b}});return}g({variables:{tokenizationProvider:"vgs",stripeToken:"",syncSubscriptionPaymentCard:h,cardData:i,payerData:l,paymentConfigToken:m}}).then(function(a){if(null===(b=a.errors)||void 0===b?void 0:b[0]){var b,d,g=a.errors[0];return f({inlineErrors:{},globalError:{displayMsg:K.GG.addCard(),reason:"vgs_failure",message:"".concat(g.name,": ").concat(g.message),originalException:a}})}var h=new Date().getTime()-c;return(0,M.Ve)(h),e(null===(d=a.data)||void 0===d?void 0:d.addPaymentMethod)}).catch(function(a){var b,c,d,e=(null===(b=a.graphQLErrors[0].extensions)||void 0===b?void 0:null===(c=b.responseData)||void 0===c?void 0:c.error_message)||(null===(d=a.networkError)||void 0===d?void 0:d.message)||a.message||JSON.stringify(a);f({inlineErrors:{},globalError:{displayMsg:K.GG.addCard(),reason:"vgs_failure",message:e,originalException:a}})})}),(n=b,o=i,function(a){var b={};o?Object.entries(a).forEach(function(a){var c,e=(0,d.Z)(a,2),f=e[0],g=e[1],h=null===(c=g.errorMessages)||void 0===c?void 0:c[0],i=K.pw.get(h)||K.pw.get("default");b[f]=i}):Object.keys(C.c).forEach(function(c){var d,e,f=C.c[c],g=null===(d=a[f])||void 0===d?void 0:null===(e=d.errorMessages)||void 0===e?void 0:e[0],h=K.oS.get(g)||K.oS.get("default");b[f]=h}),n({inlineErrors:b,globalError:void 0})}))};return{form:p,formSubmit:T,formData:{syncSubscriptionPaymentCard:N,toggleSyncSubscriptionPaymentCard:P}}}(A,void 0===x?[]:x,Y,V),ac=ab.formSubmit,ad=ab.formData,ae=function(){_(!1),f.onSuccess(null,"vgs",S),null==h||h()},af=function(a){if(Y(a),_(!1),a.globalError){var b,c=a.globalError.reason,d=a.globalError.message;f.onFailure(c,d,"vgs",S),(0,K.uy)("AddVgsCardForm",{vgsConfig:Q,errors:null===(b=a.globalError)||void 0===b?void 0:b.originalException},Error(d))}else{var e=JSON.stringify(a.inlineErrors);f.onFailure("vgs_validation_failure",e,"vgs",S)}i&&i()};if(g.useEffect(function(){b&&aa()},[b]),P)return(0,K.uy)("AddVgsCardForm",{vgsConfig:Q,timeout:1e4},Error(P)),(0,e.jsx)(l.Text,{color:l.Text.Colors.TextError,styles:l.Text.Styles.Bold16,children:(0,e.jsx)(O.I,{error:P,children:P})});if(!A)return(0,e.jsx)(j.default,{});var ag=X.inlineErrors;return(0,e.jsxs)(o.Yb,{children:[(0,e.jsxs)(o.p7,{children:[(0,e.jsx)(N.b,{isFullWidth:!0,children:(0,e.jsx)(p.Z,{labelName:R?m.Z.cardNumber():m.Z.cardDetails(),isValid:U.has(C.c.Number),error:ag[C.c.Number]||"",children:(0,e.jsx)(N.B,{id:"cc-number"})})}),(0,e.jsx)(N.b,{children:(0,e.jsx)(p.Z,{labelName:"CVC",isValid:U.has(C.c.CVC),error:ag[C.c.CVC]||"",children:(0,e.jsx)(N.B,{id:"cc-cvc"})})})]}),(0,e.jsxs)(o.p7,{children:[(0,e.jsx)(N.b,{children:(0,e.jsx)(p.Z,{labelName:m.Z.cardExpiration(),isValid:U.has(C.c.Expiration),error:ag[C.c.Expiration]||"",children:(0,e.jsx)(N.B,{id:"cc-expiration-date"})})}),Q.ZIP_REQUIRED&&(0,e.jsx)(N.b,{children:(0,e.jsx)(p.Z,{labelName:m.Z.cardZipCode(),isValid:U.has(C.c.Zip),error:ag[C.c.Zip]||"",children:(0,e.jsx)(N.B,{id:"cc-zip"})})}),c&&(0,e.jsx)(N.b,{children:(0,e.jsx)(q.Z,{onSubmit:aa,isLoading:$})})]}),void 0!==y&&y&&(0,e.jsx)(o.p7,{children:(0,e.jsx)(k.ZP,{label:n.default.t("dashPassStrings_useCardForDashPass"),isSelected:ad.syncSubscriptionPaymentCard,onChange:ad.toggleSyncSubscriptionPaymentCard})}),!$&&X.globalError&&(0,e.jsx)(o.KH,{children:(0,e.jsx)(O.I,{error:X.globalError.displayMsg,children:(0,e.jsx)(l.Text,{children:X.globalError.displayMsg})})})]})}var Q=c(51438),R=c(14924),S=c(28668),T=c(26042),U=c(69396),V=c(99534),W=c(71418),X=c(32558),Y=c(93942),Z=c(19982),$=Z.Z.cardFields.errors,_=$.invalidField(),aa=new Map([["incomplete_cvc",$.incompleteField()],["incomplete_expiry",$.incompleteField()],["incomplete_number",$.incompleteField()],["invalid_expiry_year_past",$.invalidField()],["invalid_number",$.invalidField()],]),ab=function(a){var b,c,d,e;return(null===(b=null==a?void 0:a.graphQLErrors[0])||void 0===b?void 0:null===(c=b.extensions)||void 0===c?void 0:null===(d=c.response)||void 0===d?void 0:null===(e=d.body)||void 0===e?void 0:e.stripe_token)||$.addCard()},ac=c(53390),ad=c(20688),ae=function(a){var b=a.onChange,c=a.error,f=(0,d.Z)(g.useState(""),2),h=f[0],i=f[1];return(0,e.jsx)(p.Z,{labelName:"Full Name",error:c,isCustomElement:!0,children:(0,e.jsx)(ac.TextField,{value:h,label:"",onChange:function(a){i(a),b(a)},error:!!c,"data-anchor-id":ad.Qe.CardFullNameInput})})},af=function(a){var b=a.onChange,c=a.error,d=(0,J.Y)();return(0,e.jsx)(p.Z,{labelName:d?m.Z.cardNumber():m.Z.cardDetails(),error:c,children:(0,e.jsx)(X.CardNumberElement,{style:o.cR,placeholder:"0000 0000 0000 0000",onChange:b})})},ag=function(a){var b=a.onChange,c=a.error;return(0,e.jsx)(p.Z,{labelName:m.Z.cardZipCode(),error:c,children:(0,e.jsx)(X.PostalCodeElement,{style:o.cR,onChange:b})})},ah=c(95846),ai=function(a){(0,S.Z)(c,a);var b=(0,W.Z)(c);function c(){return(0,Q.Z)(this,c),b.apply(this,arguments)}return c.prototype.render=function(){var a=this.props,b=a.clearSelected,c=a.error,d=a.onSelect;return(0,e.jsxs)(l.StackChildren,{children:[(0,e.jsx)(l.Text,{styles:l.Text.Styles.Label,children:m.Z.billingAddress()}),(0,e.jsxs)(l.StackChildren,{size:l.StackChildren.Sizes.XxxSmall,children:[(0,e.jsx)(ah.Z,{clearSelected:b,error:!!c,onSelect:d,shouldFlipResults:!0,"data-anchor-id":ad.Qe.CardAddressAutoCompleteInput}),c&&(0,e.jsx)(o.cp,{children:(0,e.jsx)(O.B,{error:c})})]})]})},c}(g.Component),aj=function(a){var b=a.onChange,c=a.error;return(0,e.jsx)(p.Z,{labelName:"CVV",error:c,children:(0,e.jsx)(X.CardCVCElement,{style:o.cR,onChange:b})})},ak=function(a){var b=a.onChange,c=a.error;return(0,e.jsx)(p.Z,{labelName:m.Z.cardExpiration(),error:c,children:(0,e.jsx)(X.CardExpiryElement,{style:o.cR,onChange:b})})},al=Z.Z.cardFields.errors,am=function(a){(0,S.Z)(c,a);var b=(0,W.Z)(c);function c(){var a;return(0,Q.Z)(this,c),a=b.apply(this,arguments),a.state={billingAddress:void 0,cardFullname:"",errors:{billingAddress:"",cardNumber:"",cardCVV:"",cardExp:"",postalCode:"",stripeError:"",cardFullname:""},syncSubscriptionPaymentCard:!0,isSubmitting:!1,validFields:{billingAddress:!1,cardNumber:!1,cardCVV:!1,cardExp:!1,postalCode:!1,cardFullname:!1}},a.handleSubmit=function(){var b=a.props,c=b.onClose,d=b.onFinish,e=b.onSubmit,f=b.paymentCardTracking,g=b.stripe;a.setState({isSubmitting:!0,errors:{stripeError:""}}),f.onSubmit(a.props.countryCode);var h=a.state,i=h.billingAddress,j=h.syncSubscriptionPaymentCard,k=h.cardFullname;if(a.validateCustomFields()&&g){var l={};k&&(l=Object.assign(l,{name:k})),i&&(l=Object.assign(l,i));var m=g.createToken(l),n=new Date().getTime();m.then(function(b){var g,h=b.token,i=b.error;if(h&&e(h.id,null===(g=h.card)||void 0===g?void 0:g.id,Y.$0.STRIPE,j).then(function(b){var d,e=null==b?void 0:null===(d=b.data)||void 0===d?void 0:d.addPaymentMethod,g=e?e.find(function(a){return null==a?void 0:a.isDefault}):void 0;f.onSuccess(null==g?void 0:g.type,"stripe",a.props.countryCode);var h=new Date().getTime()-n;(0,M.V_)(h),a.setState({isSubmitting:!1}),null==c||c()}).catch(function(b){f.onFailure("stripe_failure",b.message,"stripe",a.props.countryCode),a.setState({isSubmitting:!1}),d&&d()}),i){var k="validation_error"==i.type;f.onFailure(k?"stripe_validation_failure":"stripe_failure",i.message||"","stripe",a.props.countryCode),a.setState({isSubmitting:!1,errors:{stripeError:i.message}}),d&&d()}})}},a.clearSelectedBillingAddress=function(){a.state.billingAddress&&a.setState({billingAddress:void 0,errors:(0,U.Z)((0,T.Z)({},a.state.errors),{billingAddress:al.requiredField()}),validFields:(0,U.Z)((0,T.Z)({},a.state.validFields),{billingAddress:!1})})},a.handleCardBillingAddressSelection=function(b){if(b){var c,d,e={address_city:b.city,address_line1:b.street,address_line2:b.subpremise,address_state:b.state};(null===(d=null===(c=a.props.cardConfig)||void 0===c?void 0:c.zipRequired)||void 0===d||d)&&(e.address_zip=b.zipCode),a.setState({billingAddress:e,errors:(0,U.Z)((0,T.Z)({},a.state.errors),{billingAddress:""}),validFields:(0,U.Z)((0,T.Z)({},a.state.validFields),{billingAddress:!0})})}else a.clearSelectedBillingAddress()},a.handleCardFullnameChange=function(b){b?a.setState({cardFullname:b,errors:(0,U.Z)((0,T.Z)({},a.state.errors),{cardFullname:""}),validFields:(0,U.Z)((0,T.Z)({},a.state.validFields),{cardFullname:!0})}):a.setState({cardFullname:b,errors:(0,U.Z)((0,T.Z)({},a.state.errors),{cardFullname:al.requiredField()}),validFields:(0,U.Z)((0,T.Z)({},a.state.validFields),{cardFullname:!1})})},a.handleCardInputChange=function(b){return function(c){var d,e,f;a.setState({errors:(0,U.Z)((0,T.Z)({},a.state.errors),(0,R.Z)({},b,(e=c.empty,f=null===(d=c.error)||void 0===d?void 0:d.code,e?$.requiredField():void 0===f?null:aa.get(f)||_))),validFields:(0,U.Z)((0,T.Z)({},a.state.validFields),(0,R.Z)({},b,c.complete))})}},a.validateCustomFields=function(){var b=a.props,c=b.supportBillingAddress,d=b.supportFullname,e=a.state,f=e.billingAddress,g=e.cardFullname;return!(c&&!f&&a.isMissingTheField(["billingAddress"],al.incompleteBillingAddress())||d&&!g&&a.isMissingTheField(["cardFullname"],al.incompleteName())||d&&c&&!g&&!f&&a.isMissingTheField(["cardFullname","billingAddress"],al.incompleteNameAndBillingAddress()))},a.isMissingTheField=function(b,c){var e=a.state.validFields;return!!Object.entries((e.postalCode,(0,V.Z)(e,["postalCode"]))).filter(function(a){var c=(0,d.Z)(a,2),e=c[0];return c[1],!b.includes(e)}).map(function(a){var b=(0,d.Z)(a,2);return b[0],b[1]}).every(Boolean)&&(a.setState({isSubmitting:!1,errors:(0,U.Z)((0,T.Z)({},a.state.errors),{stripeError:c})}),a.props.onFinish&&a.props.onFinish(),!0)},a}var f=c.prototype;return f.componentDidUpdate=function(a){!a.submitting&&this.props.submitting&&this.handleSubmit()},f.render=function(){var a,b=this,c=this.state,d=c.errors,f=c.isSubmitting,h=this.state.syncSubscriptionPaymentCard,i=this.props,j=i.customError,m=i.isInline,p=i.submitRes,r=i.supportBillingAddress,s=i.hasActiveSubscription,t=i.isSubscriptionPartnerPlan,u=i.cardConfig,v=i.supportFullname,w=null;(null==d?void 0:d.stripeError)?w=d.stripeError:(null==p?void 0:p.error)&&(w=j||ab(p.error));var x=null===(a=null==u?void 0:u.zipRequired)||void 0===a||a;return(0,e.jsxs)(o.Yb,{children:[v&&(0,e.jsx)(o.p7,{children:(0,e.jsx)(o.iD,{children:(0,e.jsx)(ae,{error:d.cardFullname,onChange:this.handleCardFullnameChange})})}),(0,e.jsxs)(o.p7,{children:[(0,e.jsx)(o.eB,{children:(0,e.jsx)(af,{error:d.cardNumber,onChange:this.handleCardInputChange("cardNumber")})}),(0,e.jsx)(o.Ih,{children:(0,e.jsx)(aj,{error:d.cardCVV,onChange:this.handleCardInputChange("cardCVV")})})]}),(0,e.jsxs)(o.p7,{children:[(0,e.jsx)(o.bm,{children:(0,e.jsx)(ak,{error:d.cardExp,onChange:this.handleCardInputChange("cardExp")})}),!r&&(0,e.jsxs)(g.Fragment,{children:[x&&(0,e.jsx)(o.bm,{children:(0,e.jsx)(ag,{error:d.postalCode,onChange:this.handleCardInputChange("postalCode")})}),m&&(0,e.jsx)(o.bm,{children:(0,e.jsx)(q.Z,{onSubmit:this.handleSubmit,isLoading:f})})]})]}),r&&(0,e.jsxs)(g.Fragment,{children:[(0,e.jsx)(o.p7,{children:(0,e.jsx)(o.qy,{children:(0,e.jsx)(ai,{clearSelected:this.clearSelectedBillingAddress,error:this.state.errors.billingAddress,onSelect:this.handleCardBillingAddressSelection})})}),m&&(0,e.jsx)(o.p7,{children:(0,e.jsx)(o.bm,{children:(0,e.jsx)(q.Z,{onSubmit:this.handleSubmit,isLoading:f})})})]}),s&&!t&&(0,e.jsx)(o.p7,{children:(0,e.jsx)(k.ZP,{label:n.default.t("dashPassStrings_useCardForDashPass"),isSelected:h,onChange:function(){b.setState((0,U.Z)((0,T.Z)({},b.state),{syncSubscriptionPaymentCard:!h}))}})}),(0,e.jsx)(l.Stack,{}),!f&&w&&(0,e.jsx)(o.KH,{children:(0,e.jsx)(l.Text,{children:w})})]})},c}(g.Component),an=(0,X.injectStripe)(am),ao=c(70308),ap=c(78288),aq=function(a){var b,c=a.paymentCardTracking,g=a.isInline,j=a.onClose,k=a.onFinish,l=a.stripeKey,m=a.submitting,n=a.trackingKey,o=a.entryPoint,p=a.refetchQueries,q=a.subscriptionId,r=a.hasActiveSubscription,s=a.isSubscriptionPartnerPlan,t=(0,E.ZP)().isVgsProviderEnabled,u=(0,d.Z)((0,f.useMutation)(i.E),1),v=u[0],w=(0,F.e)(),x=null!==(b=null==w?void 0:w.cardConfig)&&void 0!==b?b:null,y=(0,M.Uj)();return(0,e.jsx)(ao.Z,{stripeKey:l,children:(0,e.jsx)(ap.f$,{providers:[{name:ap.dD.Stripe,config:{timeout:ap.YV}},{name:ap.dD.Braintree,config:{timeout:ap.YV}},],children:t?(0,e.jsx)(P,{submitting:Boolean(m),isInline:g,onClose:j,onFinish:k,paymentCardTracking:c,refetchQueries:p,isSubscriptionsEnabled:r&&!s}):(0,e.jsx)(h.QB,{entryPoint:o,refetchQueries:p,children:function(a,b){var d=function(b,c,d,e){return q?a(b,d).then(function(){return v({variables:{syncSubscriptionPaymentCard:e,subscriptionId:q,stripeId:c}})}):a(b,d,e)};return(0,e.jsx)(an,{hasActiveSubscription:r,isSubscriptionPartnerPlan:s,paymentCardTracking:c,isInline:g,onSubmit:d,submitRes:b,cardConfig:x,onClose:j,submitting:m,onFinish:k,trackingKey:n,supportBillingAddress:!1,supportFullname:!1,countryCode:y})}})})})}},63537:function(a,b,c){c.d(b,{IP:function(){return w},Ih:function(){return B},KH:function(){return F},Yb:function(){return v},ZJ:function(){return E},bm:function(){return D},cR:function(){return u},cp:function(){return y},eB:function(){return A},fv:function(){return x},iD:function(){return G},p7:function(){return z},qy:function(){return C}});var d=c(26042),e=c(7297),f=c(10071),g=c(87379);function h(){var a=(0,e.Z)(["\n  margin-top: ","px;\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n  justify-content: space-between;\n  padding-bottom: ","px;\n"]);return h=function(){return a},a}function i(){var a=(0,e.Z)(["\n  margin: ","px ","px 0 0;\n  padding: ",";\n  border: ",";\n"]);return i=function(){return a},a}function j(){var a=(0,e.Z)(["\n  margin: ","px ","px 0 0;\n  padding: ","px;\n  border-radius: ","px;\n"]);return j=function(){return a},a}function k(){var a=(0,e.Z)(["\n  position: absolute;\n  margin-top: ","px;\n"]);return k=function(){return a},a}function l(){var a=(0,e.Z)(["\n  display: flex;\n  align-items: flex-end;\n"]);return l=function(){return a},a}function m(){var a=(0,e.Z)(["\n  flex: 2;\n"]);return m=function(){return a},a}function n(){var a=(0,e.Z)(["\n  flex: 1;\n"]);return n=function(){return a},a}function o(){var a=(0,e.Z)(["\n  flex: 1;\n  padding-right: ","px;\n"]);return o=function(){return a},a}function p(){var a=(0,e.Z)(["\n  flex: ",";\n"]);return p=function(){return a},a}function q(){var a=(0,e.Z)(["\n  margin-right: ","px;\n"]);return q=function(){return a},a}function r(){var a=(0,e.Z)(["\n  padding: ","px;\n  background-color: ",";\n  border-radius: ","px;\n  margin-bottom: ","px;\n  margin-right: ","px;\n"]);return r=function(){return a},a}function s(){var a=(0,e.Z)(["\n  flex: 1;\n"]);return s=function(){return a},a}var t=function(a){return(0,d.Z)({fontFamily:f.fontFamily,color:f.Colors.TextSecondary,fontSize:"16px",fontSmoothing:"antialiased",lineHeight:"22px"},a)},u={base:t(),invalid:t({color:f.Colors.TextError}),empty:t(),complete:t()},v=(0,g.default)(f.StackChildren).attrs(function(){return{size:f.StackChildren.Sizes.XLarge}}).withConfig({componentId:"sc-51ece916-0"})(h(),f.Spacing.Medium,f.Spacing.XxxSmall,f.Spacing.Medium),w=g.default.div.withConfig({componentId:"sc-51ece916-1"})(i(),f.Spacing.XSmall,f.Spacing.XSmall,f.Spacing.None,f.Spacing.None),x=g.default.div.withConfig({componentId:"sc-51ece916-2"})(j(),f.Spacing.XSmall,f.Spacing.XSmall,f.Spacing.XxSmall,f.BorderRadius.Small),y=g.default.div.withConfig({componentId:"sc-51ece916-3"})(k(),f.Spacing.XxxSmall),z=g.default.div.withConfig({componentId:"sc-51ece916-4"})(l()),A=g.default.div.withConfig({componentId:"sc-51ece916-5"})(m()),B=g.default.div.withConfig({componentId:"sc-51ece916-6"})(n()),C=g.default.div.withConfig({componentId:"sc-51ece916-7"})(o(),f.Spacing.XxSmall),D=g.default.div.withConfig({componentId:"sc-51ece916-8"})(p(),function(a){return a.isInline?"1":"2"}),E=g.default.div.withConfig({componentId:"sc-51ece916-9"})(q(),f.Spacing.XSmall),F=g.default.div.withConfig({componentId:"sc-51ece916-10"})(r(),f.Spacing.Small,f.Colors.WarningBackground,f.BorderRadius.Small,f.Spacing.XxSmall,f.Spacing.XSmall),G=g.default.div.withConfig({componentId:"sc-51ece916-11"})(s())},3610:function(a,b,c){var d=c(85893),e=c(24906);c(67294);var f=c(20688),g=c(65999),h=c(63537),i=function(a){var b=a.onSubmit,c=a.isLoading,i=a.submitText;return(0,d.jsx)(h.ZJ,{children:(0,d.jsx)(e.default,{type:e.default.Types.PrimaryPill,state:c?e.default.States.Loading:e.default.States.Default,onClick:b,"data-anchor-id":f.Qe.InlineSubmitButton,children:i||g.Z.saveCard()})})};b.Z=i},45230:function(a,b,c){var d=c(85893),e=c(87708),f=c(10071),g=c(67294),h=c(63537),i=function(a){var b=a.labelName,c=a.error,i=a.isValid,j=a.children,k=a.isCustomElement,l=a.renderCustomLabel,m=g.useMemo(function(){var a,b;return{border:"1px solid ".concat((a=!!c,b=!0===i,a?f.Colors.TextError:b?f.Colors.TextPositive:f.Colors.BorderSecondary))}},[c,i]),n=l?l(b):(0,d.jsx)(f.Text,{styles:f.Text.Styles.Label,children:b});return(0,d.jsxs)(f.Text,{tag:"label",styles:f.Text.Styles.Medium14,children:[n,k?(0,d.jsx)(h.IP,{children:j}):(0,d.jsx)(h.fv,{style:m,children:j}),c&&(0,d.jsx)(h.cp,{children:(0,d.jsx)(e.B,{error:c})})]})};b.Z=i},19982:function(a,b,c){var d=c(23685);b.Z={cardFields:{errors:{addCard:function(){return d.default.t("paymentComponentStrings_cardFields_errors_addCard")},incompleteBillingAddress:function(){return d.default.t("paymentComponentStrings_cardFields_errors_incompleteBillingAddress")},incompleteName:function(){return d.default.t("paymentComponentStrings_cardFields_errors_incompleteName")},incompleteNameAndBillingAddress:function(){return d.default.t("paymentComponentStrings_cardFields_errors_incompleteNameAndBillingAddress")},incompleteField:function(){return d.default.t("paymentComponentStrings_cardFields_errors_incompleteField")},invalidField:function(){return d.default.t("paymentComponentStrings_cardFields_errors_invalidField")},requiredField:function(){return d.default.t("paymentComponentStrings_cardFields_errors_requiredField")},invalidExpirationDate:function(){return d.default.t("paymentComponentStrings_cardFields_errors_invalidDate")},invalidCardNumber:function(){return d.default.t("paymentComponentStrings_cardFields_errors_invalidCardNumber")},invalidSecurityCode:function(){return d.default.t("paymentComponentStrings_cardFields_errors_invalidCvc")}}},expressPay:{applePayLabel:function(){return d.default.t("storefront_express_checkout_apple_pay")}}}},70308:function(a,b,c){c.d(b,{Z:function(){return l}});var d=c(51438),e=c(28668),f=c(71418),g=c(85893),h=c(67294),i=c(32558),j=c(23275),k=c(109),l=function(a){(0,e.Z)(c,a);var b=(0,f.Z)(c);function c(){var a;return(0,d.Z)(this,c),a=b.apply(this,arguments),a.state={stripe:null},a.setStripe=function(b){a.setState({stripe:b})},a}var h=c.prototype;return h.componentDidMount=function(){var a=this.props.stripeKey;a&&(0,j.J)(this.setStripe,a)},h.render=function(){return(0,g.jsx)(i.StripeProvider,{stripe:this.state.stripe,children:(0,g.jsx)(i.Elements,{children:(0,g.jsx)(k.ZP,{children:this.props.children})})})},c}(h.Component)},35414:function(a,b,c){c.r(b),c.d(b,{default:function(){return p}});var d=c(85893),e=c(1968),f=c(67294),g=c(1019),h=c(10253),i=c(24906),j=c(10071),k=c(20688),l=c(95244),m=c(70994),n=function(a){var b=a.consumerStripeKey,c=a.entryPoint,e=a.onClose,n=a.onCancel,o=a.paymentCardTracking,p=a.refetchQueries,q=a.subscriptionId,r=a.hasActiveSubscription,s=a.isSubscriptionPartnerPlan,t=(0,h.Z)(f.useState(!1),2),u=t[0],v=t[1];return(0,d.jsxs)("div",{"data-anchor-id":k.Qe.AddCardForm,children:[b&&(0,d.jsx)(l.Z,{hasActiveSubscription:r,isSubscriptionPartnerPlan:s,stripeKey:b,entryPoint:c,isInline:!1,onClose:e,refetchQueries:p,submitting:u,onFinish:function(){return v(!1)},paymentCardTracking:o,subscriptionId:q}),(0,d.jsxs)(j.InlineChildren,{size:j.InlineChildren.Sizes.Small,children:[n&&(0,d.jsx)(i.default,{onClick:function(){n(),(0,g.Dv)()},type:i.default.Types.Tertiary,children:m.Z.back()}),(0,d.jsx)(i.default,{onClick:function(){return v(!0)},state:u?i.default.States.Loading:i.default.States.Default,children:m.Z.addCard()})]})]})},o=c(90824),p=function(a){var b=a.consumerStripeKey,c=a.paymentConfig,f=a.entryPoint,h=a.onClose,i=a.onCancel,j=a.onSuccess,k=a.refetchQueries,l=a.subscriptionId,p=a.hasActiveSubscription,q=a.isSubscriptionPartnerPlan;return(0,d.jsx)(e.Modal,{headerAlignment:e.Modal.HeaderAlignment.Center,onClose:h,title:m.Z.addNewCard(),size:e.Modal.Sizes.Large,children:(0,d.jsx)(o.K,{value:c,children:(0,d.jsx)(n,{hasActiveSubscription:p,isSubscriptionPartnerPlan:q,consumerStripeKey:b,entryPoint:f,onClose:function(){j?j():h()},onCancel:i,refetchQueries:k,paymentCardTracking:g.x5,subscriptionId:l})})})}},93942:function(a,b,c){c.d(b,{"$0":function(){return h},CZ:function(){return j},Nj:function(){return i},Uj:function(){return l},wp:function(){return k}}),(d=h||(h={})).STRIPE="stripe",d.PAYPAL="paypal",(e=i||(i={})).Stripe="stripe",e.Vgs="vgs",e.Braintree="braintree",(f=j||(j={})).HOME="home",f.ACCOUNT_PAYMENT="account_payment",f.DASHPASS_MANAGE_SUBSCRIPTION="manage_subscription",f.CHECKOUT="checkout",f.CHECKOUTINFO_WITHOUT_LOGIN="checkoutInfoWithoutLogin_paymentDetails",f.CHECKOUTINFO="checkoutInfo_changePaymentModal",f.CHECKOUTINFO_PAYMENTPANEL="mx_checkout_payment_panel",f.CHECKOUTINFO_PAYMENTPANEL_NO_PROMO="mx_checkout_payment_panel_no_promo",f.CHECKOUTSIDEBAR_PM_DECLINED="checkoutSidebar_paymentDeclined",f.CHECKOUTSIDEBAR_PM_MISSING="checkoutSidebar_paymentMissing",f.CHECKOUTSIDEBAR_CX_GUIDED_RECOVERY="checkoutSidebar_cxGuidedRecovery",f.CHECKOUTINFO_PAYMENT_ERROR="checkoutInfoPaymentError",f.CHECKOUT_SHIP_ANYWHERE="checkoutShipAnywhere",f.CHECKOUT_DOUBLEDASH="checkoutDoubleDash",f.DRIVE_CHECKOUT="checkoutDrive",f.STOREFRONT_CHECKOUT="checkoutStorefront",(g=k||(k={})).DASHPASS_SIGNUP="dashpassSignup",g.DASHPASS_ANNUAL_PLAN_UPSELL="dashpass_annual_plan_upsell",g.DASHPASS_ANNUAL_PLAN_UPSELL_BUTTON="dashpass_annual_plan_upsell_button",g.DASHPASS_ANNUAL_PLAN_ADD_CARD_BUTTON="dashpass_annual_plan_add_button",g.DASHPASS_MANAGE_SUBSCRIPTION="manage_subscription",g.DASHPASS_MODAL="dashpass_modal",g.DASHPASS_LANDING="dashpass_landing",g.DASHPASS_PARTNER="partner_dashpass",g.EXCLUSIVE_ITEM="exclusive_item";var d,e,f,g,h,i,j,k,l=new Set([j.CHECKOUTINFO,j.CHECKOUTINFO_WITHOUT_LOGIN,j.CHECKOUTINFO_PAYMENTPANEL,j.CHECKOUTINFO_PAYMENTPANEL_NO_PROMO,j.CHECKOUTSIDEBAR_PM_DECLINED,j.CHECKOUTSIDEBAR_PM_MISSING,j.CHECKOUTSIDEBAR_CX_GUIDED_RECOVERY,j.CHECKOUTINFO_PAYMENT_ERROR,j.CHECKOUT_SHIP_ANYWHERE,j.CHECKOUT_DOUBLEDASH,j.STOREFRONT_CHECKOUT,j.DRIVE_CHECKOUT,])},73391:function(a,b,c){c.d(b,{E:function(){return k},f:function(){return l}});var d=c(10253),e=c(7297),f=c(67294),g=c(44119),h=c.n(g),i=c(46367);function j(){var a=(0,e.Z)(["\n  mutation setSubscriptionPaymentCard(\n    $subscriptionId: ID!\n    $stripeId: String!\n  ) {\n    setSubscriptionPaymentCard(\n      subscriptionId: $subscriptionId\n      stripeId: $stripeId\n    )\n  }\n"]);return j=function(){return a},a}var k=h()(j()),l=function(){var a=(0,d.Z)((0,i.Db)(k),1)[0];return f.useCallback(function(b,c){return a({variables:{subscriptionId:b,stripeId:c}})},[a])}},89671:function(a,b,c){c.d(b,{O:function(){return d.Oh}});var d=c(16935)},1019:function(a,b,c){c.d(b,{Dv:function(){return k},FZ:function(){return p},Fe:function(){return w},QC:function(){return n},Sx:function(){return u},cT:function(){return t},i8:function(){return r},kT:function(){return s},n3:function(){return l},nF:function(){return i},rY:function(){return x},tJ:function(){return v},uQ:function(){return j},vk:function(){return o},x5:function(){return m},xf:function(){return q}});var d=c(26042),e=c(43947),f=c(96303),g=c(3532),h=c(89671),i=function(a,b,c){(0,g.ZP)("payment_page_load",{load_time:a,number_of_payment_methods:b,number_of_payment_types:c})},j=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"US";(0,g.ZP)("payment_add_method_menu_clicked",{countryCode:a,paymentType:h.O.CARD})},k=function(){(0,g.ZP)("payment_add_modal_tapped_back",{paymentType:h.O.CARD})},l=function(a){(0,g.ZP)("payment_remove_method",{paymentType:a})},m={onSubmit:function(a){(0,g.ZP)("payment_add_method_click",{countryCode:a,paymentType:h.O.CARD})},onFailure:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"stripe",d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"US";(0,g.ZP)("payment_add_new_card_failure",{reason:a,message:b,tokenizer:c}),(0,g.ZP)("payment_add_method_failure",{reason:a,message:b,tokenizer:c,paymentType:h.O.CARD,countryCode:d}),e.Tb("payment_add_new_card_failure",{tags:{tokenizer:c,reason:a,message:b}})},onSuccess:function(a,b){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"US";(0,g.ZP)("payment_add_new_card_success",{card_type:a,tokenizer:null!=b?b:"stripe"}),(0,g.ZP)("payment_add_method_success",{cardType:a,paymentType:h.O.CARD,tokenizer:null!=b?b:"stripe",countryCode:c})}},n=function(a,b,c,d){var e=(0,f.Vy)(c),h=(0,f.Vy)(d);(0,g.ZP)("payment_change_method_click",{entryPoint:a,default_card_id:b,paymentType:e,prevType:h,cardType:c})},o=function(a,b,c,d){var e=(0,f.Vy)(c),h=(0,f.Vy)(d);(0,g.ZP)("payment_change_method_success",{entryPoint:a,default_card_id:b,paymentType:e,prevType:h,cardType:c})},p=function(a,b,c,d){var e=(0,f.Vy)(c),h=(0,f.Vy)(d);(0,g.ZP)("payment_change_default_method_failure",{entryPoint:a,default_card_id:b,paymentType:e,prevType:h,cardType:c})},q=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,g.ZP)("payment_add_method_success",(0,d.Z)({paymentType:a},b))},r=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,g.ZP)("payment_add_method_failure",(0,d.Z)({paymentType:a},b))},s=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,g.ZP)("payment_confirm_setup_intent_success",(0,d.Z)({paymentType:a},b))},t=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,g.ZP)("payment_confirm_setup_intent_failure",(0,d.Z)({paymentType:a},b))},u=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,g.ZP)("payment_add_method_menu_clicked",(0,d.Z)({paymentType:a},b))},v=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,g.ZP)("payment_add_method_tokenization",(0,d.Z)({paymentType:a},b))},w=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,g.ZP)("payment_link_method_to_doordash_success",(0,d.Z)({paymentType:a},b))},x=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,g.ZP)("payment_link_method_to_doordash_failure",(0,d.Z)({paymentType:a},b))}},95623:function(a,b,c){c.d(b,{B:function(){return i},b:function(){return j}});var d=c(7297),e=c(10071),f=c(87379);function g(){var a=(0,d.Z)(["\n  display: flex;\n  height: ","px;\n  line-height: ","px;\n  overflow: hidden;\n"]);return g=function(){return a},a}function h(){var a=(0,d.Z)(["\n  flex: ",";\n  overflow: hidden;\n"]);return h=function(){return a},a}var i=f.default.div.withConfig({componentId:"sc-df1011c9-0"})(g(),e.Spacing.Medium,e.Spacing.Medium),j=f.default.div.withConfig({componentId:"sc-df1011c9-1"})(h(),function(a){return a.isFullWidth?"2":"1"})},37290:function(a,b,c){var d,e;c.d(b,{c:function(){return d}}),(e=d||(d={})).Expiration="variables.cardData",e.Number="variables.cardData.number",e.CVC="variables.cardData.cvv",e.Zip="variables.cardData.zip",e.Pin="variables.cardData.pin",e.EbtNumber="variables.ebtCardData.number"},64491:function(a,b,c){c.d(b,{Z:function(){return g}});var d=c(67294),e=c(94063),f=c(38934);function g(a){var b=(0,d.useState)(!1),c=b[0],g=b[1],h=(0,d.useState)(""),i=h[0],j=h[1],k=(0,e.ZP)(),l=(null==a?void 0:a.vgsConfig)||(null==k?void 0:k.vgsConfig),m=(null==a?void 0:a.isVgsProviderEnabled)||(null==k?void 0:k.isVgsProviderEnabled);return(0,d.useEffect)(function(){if(!c){if(!c&&!m){j("Failed to load vgs provider");return}(0,f.Cz)(l).then(function(){g(!0)}).catch(function(a){j(a.message)})}},[c,m,l]),[c,i,l]}},36189:function(a,b,c){c.d(b,{Cf:function(){return n},Pm:function(){return m},W2:function(){return o}});var d=c(10253),e=c(86520),f=c(10071),g=c(67294),h=c(65999),i=c(10395),j=c(9718),k=c(37290),l=c(38934),m=f.Colors.TextSecondary,n=f.Colors.TextError,o={"font-family":'DD-TTNorms, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',color:m,"font-size":"16px","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale","&:focus":{color:"".concat(f.Colors.TextPrimary," !important")}},p=function(a){var b,c=a.isVgsLoaded,f=a.vgsConfig,p=a.setForm,q=a.setCardData,r=a.onFieldError,s=a.setValidFields,t=(0,j.V)(),u=(0,j.Y)(),v=(0,e.useDynamicBoolean)(i.P$.useCountrySpecificZipCodeValidation,{country:null!==(b=null==f?void 0:f.COUNTRY)&&void 0!==b?b:"US"});(0,g.useEffect)(function(){if(c){var a,b,e=window.VGSCollect.create(f.VAULT_ID,f.VAULT_ENV,function(b){var c,d,e,f,g=parseInt(null!==(e=null===(c=b[k.c.Number])||void 0===c?void 0:c.bin)&&void 0!==e?e:0,10),h=parseInt(null!==(f=null===(d=b[k.c.Number])||void 0===d?void 0:d.last4)&&void 0!==f?f:0,10);q({last4:h,iin:g}),a=b}),g=function(){t&&setTimeout(function(){var b={},c=new Set,e=!0,f=!1,g=void 0;try{for(var h,i=Object.entries(a)[Symbol.iterator]();!(e=(h=i.next()).done);e=!0){var j,k=(0,d.Z)(h.value,2),m=k[0],n=k[1];if(m&&n.isTouched){if(n.isValid){c.add(m);continue}var o=n.errorMessages,p=o[o.length-1];b[m]=null!==(j=l.pw.get(p))&&void 0!==j?j:l.pw.get("default")}}}catch(q){f=!0,g=q}finally{try{e||null==i.return||i.return()}finally{if(f)throw g}}r({inlineErrors:b}),s(c)},50)};p(e),e.useCname(f.VAULT_CNAME),e.field("#cc-expiration-date",{type:"card-expiration-date",name:k.c.Expiration,successColor:m,errorColor:n,placeholder:h.Z.cardExpiryMMYY(),validations:["required","validCardExpirationDate"],css:o,autoComplete:"cc-exp",yearLength:"2",serializers:[{name:"separate",options:{monthName:"expMonth",yearName:"expYear"}},]}).on("blur",g);var i=e.field("#cc-number",{type:"card-number",name:k.c.Number,successColor:m,errorColor:n,placeholder:"XXXX XXXX XXXX XXXX",showCardIcon:!1,validations:["required","validCardNumber"],autoComplete:"cc-number",css:o,autoFocus:!0});i.on("blur",g);var j=e.field("#cc-cvc",{type:"card-security-code",name:k.c.CVC,successColor:m,errorColor:n,placeholder:"CVC",validations:["required","validCardSecurityCode"],autoComplete:"cc-csc",css:o});j.on("blur",g),i.setCVCDependency(j),f.ZIP_REQUIRED&&e.field("#cc-zip",{type:"text",name:k.c.Zip,successColor:m,errorColor:n,placeholder:h.Z.cardZipCode(),validations:v?["postal_code/".concat(null!==(b=null==f?void 0:f.COUNTRY)&&void 0!==b?b:"intl")]:["postal_code/intl"],autoComplete:u?"postal-code":void 0,css:o}).on("blur",g)}},[c])};b.ZP=p},94063:function(a,b,c){c.d(b,{j2:function(){return s},w3:function(){return e}});var d,e,f,g,h,i,j=c(26042),k=c(67294),l=c(80163),m=c(86973),n=c(90824),o=c(11459),p=c(24401),q="/in/consumerweb/graphql",r="/in/consumerweb-ebt/graphql";(g=d||(d={})).PRODUCTION="live",g.SANDBOX="sandbox",g.STOREFRONT_PRODUCTION="live",g.PAYMENT_PRODUCTION="live",g.PAYMENT_SANDBOX="sandbox",(h=e||(e={})).PRODUCTION="tnt6lmmk3ml",h.SANDBOX="tntcmtf4wpl",h.STOREFRONT_PRODUCTION="tntn6xhofmd",h.PAYMENT_PRODUCTION="tntz84cipyt",h.PAYMENT_SANDBOX="tntgonvkbqe",(i=f||(f={})).PRODUCTION="vgs.doordash.com",i.SANDBOX="vgs.doorcrawl.com",i.STOREFRONT_PRODUCTION="vgs-storefront.doordash.com",i.PAYMENT_PRODUCTION="vgs-payment.doordash.com",i.PAYMENT_SANDBOX="vgs-payment.doorcrawl.com";var s=function(a,b,c,g){var h={VAULT_ENV:"",VAULT_CNAME:""};switch(a){case e.PRODUCTION:h={VAULT_ENV:d.PRODUCTION,VAULT_CNAME:f.PRODUCTION};break;case e.SANDBOX:h={VAULT_ENV:d.PRODUCTION,VAULT_CNAME:f.SANDBOX};break;case e.STOREFRONT_PRODUCTION:h={VAULT_ENV:d.STOREFRONT_PRODUCTION,VAULT_CNAME:f.STOREFRONT_PRODUCTION};break;case e.PAYMENT_PRODUCTION:h={VAULT_ENV:d.PAYMENT_PRODUCTION,VAULT_CNAME:f.PAYMENT_PRODUCTION,SUBMIT_URL:g?r:q};break;case e.PAYMENT_SANDBOX:h={VAULT_ENV:d.PAYMENT_SANDBOX,VAULT_CNAME:f.PAYMENT_SANDBOX,SUBMIT_URL:g?r:q}}return(0,j.Z)({VAULT_ID:a,ZIP_REQUIRED:b,SCRIPT_URL:"https://js.verygoodvault.com/vgs-collect/2.7.0/vgs-collect.js",SUBMIT_URL:q,COUNTRY:c||"US"},h)},t=function(){var a,b,c,d,e,f,g,h,i,j,q,r=(0,n.e)(),t=k.useContext(m.q).storeInformation,u=k.useContext(l.iB).orderCart;if(!(0,p.ZP)(p.P$.enableVgsCardForm,{businessId:(null==t?void 0:null===(a=t.businessId)||void 0===a?void 0:a.toString())||"",country:null!==(i=null==u?void 0:null===(b=u.restaurant)||void 0===b?void 0:null===(c=b.address)||void 0===c?void 0:c.country)&&void 0!==i?i:"US",storeId:(null==t?void 0:null===(d=t.storeId)||void 0===d?void 0:d.toString())||""}))return{isVgsProviderEnabled:!1,vgsConfig:{}};var v=null==r?void 0:null===(e=r.cardConfig)||void 0===e?void 0:e.key,w=null===(j=null==r?void 0:null===(f=r.cardConfig)||void 0===f?void 0:f.zipRequired)||void 0===j||j,x=null!==(q=null==r?void 0:null===(g=r.cardConfig)||void 0===g?void 0:g.country)&&void 0!==q?q:"US",y=(null==r?void 0:null===(h=r.cardConfig)||void 0===h?void 0:h.provider)===o.Oj.vgs;return{isVgsProviderEnabled:y,vgsConfig:y?s(v,w,x):{}}};b.ZP=t},38934:function(a,b,c){c.d(b,{Cz:function(){return m},GG:function(){return i},HA:function(){return o},oS:function(){return j},pw:function(){return k},uy:function(){return n}});var d=c(43947),e=c(13819),f=c(19982),g=!1;function h(){return Boolean(window.VGSCollect)}var i=f.Z.cardFields.errors,j=new Map([["is required",i.requiredField()],["is not a valid expiration date",i.invalidField()],["is not a valid card number",i.invalidField()],["is not a valid security code",i.invalidField()],["default",i.invalidField()],]),k=new Map([["is required",i.requiredField()],["is not a valid expiration date",i.invalidExpirationDate()],["is not a valid card number",i.invalidCardNumber()],["is not a valid security code",i.invalidSecurityCode()],["default",i.invalidField()],]);function l(){return new Promise(function(a,b){if(h())return a(!0);var c=0,d=setInterval(function(){return(c+=1)>=100?(clearInterval(d),b(Error("Failed to load VGS vendor script"))):h()?(clearInterval(d),a(!0)):void 0},100)})}function m(a){if(g)return l();g=!0;var b=document.createElement("script");return b.src=a.SCRIPT_URL,b.async=!0,document.head.append(b),b.onerror=function(b){n("injectVgs",{vgsConfig:a,scriptError:b},Error("Global VGS script failed to load"))},l()}var n=function(a,b,c){var f,g,h,i;f=e.z.Warning,g=(null==c?void 0:c.message)||"Vgs Error",h={context:b,error:c},i={component:a},d.eN({message:g,level:f,contexts:h,tags:i})},o=function(a){return new Promise(function(b){setTimeout(b,a)})}},9718:function(a,b,c){c.d(b,{V:function(){return f},Y:function(){return g}});var d=c(24401),e=c(10395),f=function(){return(0,d.ZP)(e.P$.improvedCardErrors)},g=function(){return(0,d.ZP)(e.P$.improvedCardAutofill)}}}])