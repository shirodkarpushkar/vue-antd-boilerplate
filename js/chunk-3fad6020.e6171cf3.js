(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fad6020"],{ddbb:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-form",{staticClass:"register-form",attrs:{form:e.form},on:{submit:e.handleSubmit}},[t("h3",[e._v("Register")]),t("a-form-item",e._b({attrs:{label:"E-mail"}},"a-form-item",e.formItemLayout,!1),[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]}],expression:"[\n        'email',\n        {\n          rules: [\n            {\n              type: 'email',\n              message: 'The input is not valid E-mail!',\n            },\n            {\n              required: true,\n              message: 'Please input your E-mail!',\n            },\n          ],\n        },\n      ]"}]})],1),t("a-form-item",e._b({attrs:{label:"Password","has-feedback":""}},"a-form-item",e.formItemLayout,!1),[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"Please input your password!"},{validator:e.validateToNextPassword}]}],expression:"[\n        'password',\n        {\n          rules: [\n            {\n              required: true,\n              message: 'Please input your password!',\n            },\n            {\n              validator: validateToNextPassword,\n            },\n          ],\n        },\n      ]"}],attrs:{type:"password"}})],1),t("a-form-item",e._b({attrs:{label:"Confirm Password","has-feedback":""}},"a-form-item",e.formItemLayout,!1),[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:e.compareToFirstPassword}]}],expression:"[\n        'confirm',\n        {\n          rules: [\n            {\n              required: true,\n              message: 'Please confirm your password!',\n            },\n            {\n              validator: compareToFirstPassword,\n            },\n          ],\n        },\n      ]"}],attrs:{type:"password"},on:{blur:e.handleConfirmBlur}})],1),t("a-form-item",e._b({},"a-form-item",e.formItemLayout,!1),[t("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n      Nickname \n      "),t("a-tooltip",{attrs:{title:"What do you want others to call you?"}},[t("a-icon",{attrs:{type:"question-circle-o"}})],1)],1),t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["nickname",{rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}]}],expression:"[\n        'nickname',\n        {\n          rules: [\n            {\n              required: true,\n              message: 'Please input your nickname!',\n              whitespace: true,\n            },\n          ],\n        },\n      ]"}]})],1),t("a-form-item",e._b({attrs:{label:"Habitual Residence"}},"a-form-item",e.formItemLayout,!1),[t("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["residence",{initialValue:["zhejiang","hangzhou","xihu"],rules:[{type:"array",required:!0,message:"Please select your habitual residence!"}]}],expression:"[\n        'residence',\n        {\n          initialValue: ['zhejiang', 'hangzhou', 'xihu'],\n          rules: [\n            {\n              type: 'array',\n              required: true,\n              message: 'Please select your habitual residence!',\n            },\n          ],\n        },\n      ]"}],attrs:{options:e.residences}})],1),t("a-form-item",e._b({attrs:{label:"Phone Number"}},"a-form-item",e.formItemLayout,!1),[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["phone",{rules:[{required:!0,message:"Please input your phone number!"}]}],expression:"[\n        'phone',\n        {\n          rules: [\n            { required: true, message: 'Please input your phone number!' },\n          ],\n        },\n      ]"}],staticStyle:{width:"100%"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["prefix",{initialValue:"86"}],expression:"['prefix', { initialValue: '86' }]"}],staticStyle:{width:"70px"},attrs:{slot:"addonBefore"},slot:"addonBefore"},[t("a-select-option",{attrs:{value:"86"}},[e._v("\n          +86\n        ")]),t("a-select-option",{attrs:{value:"87"}},[e._v("\n          +87\n        ")])],1)],1)],1),t("a-form-item",e._b({attrs:{label:"Website"}},"a-form-item",e.formItemLayout,!1),[t("a-auto-complete",{directives:[{name:"decorator",rawName:"v-decorator",value:["website",{rules:[{required:!0,message:"Please input website!"}]}],expression:"[\n        'website',\n        { rules: [{ required: true, message: 'Please input website!' }] },\n      ]"}],attrs:{placeholder:"website"},on:{change:e.handleWebsiteChange}},[t("template",{slot:"dataSource"},e._l(e.autoCompleteResult,(function(a){return t("a-select-option",{key:a},[e._v("\n          "+e._s(a)+"\n        ")])})),1),t("a-input")],2)],1),t("a-form-item",e._b({attrs:{label:"Captcha",extra:"We must make sure that your are a human."}},"a-form-item",e.formItemLayout,!1),[t("a-row",{attrs:{gutter:8}},[t("a-col",{attrs:{span:12}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["captcha",{rules:[{required:!0,message:"Please input the captcha you got!"}]}],expression:"[\n            'captcha',\n            {\n              rules: [\n                {\n                  required: true,\n                  message: 'Please input the captcha you got!',\n                },\n              ],\n            },\n          ]"}]})],1),t("a-col",{attrs:{span:12}},[t("a-button",[e._v("Get captcha")])],1)],1)],1),t("a-form-item",e._b({},"a-form-item",e.tailFormItemLayout,!1),[t("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["agreement",{valuePropName:"checked"}],expression:"['agreement', { valuePropName: 'checked' }]"}]},[e._v("\n      I have read the\n      "),t("a",{attrs:{href:""}},[e._v("\n        agreement\n      ")])])],1),t("a-form-item",e._b({},"a-form-item",e.tailFormItemLayout,!1),[t("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("\n      Register\n    ")])],1)],1)},n=[];const s=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];var o={data(){return{confirmDirty:!1,residences:s,autoCompleteResult:[],formItemLayout:{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},tailFormItemLayout:{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}}}},beforeCreate(){this.form=this.$form.createForm(this,{name:"register"})},methods:{handleSubmit(e){e.preventDefault(),this.form.validateFieldsAndScroll((e,a)=>{e||console.log("Received values of form: ",a)})},handleConfirmBlur(e){const a=e.target.value;this.confirmDirty=this.confirmDirty||!!a},compareToFirstPassword(e,a,t){const r=this.form;a&&a!==r.getFieldValue("password")?t("Two passwords that you enter is inconsistent!"):t()},validateToNextPassword(e,a,t){const r=this.form;a&&this.confirmDirty&&r.validateFields(["confirm"],{force:!0}),t()},handleWebsiteChange(e){let a;a=e?[".com",".org",".net"].map(a=>`${e}${a}`):[],this.autoCompleteResult=a}}},i=o,l=(t("f813"),t("2877")),u=Object(l["a"])(i,r,n,!1,null,"fc46cc04",null);a["default"]=u.exports},f0d5:function(e,a,t){},f813:function(e,a,t){"use strict";var r=t("f0d5"),n=t.n(r);n.a}}]);