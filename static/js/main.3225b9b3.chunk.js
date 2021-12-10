(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{18:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),i=n(11),c=n.n(i),o=n(12),r=n(3),l=n(5),u=n(6),d=n(8),b=n(7),m=n(20),h=n(9),j=n.n(h),_=n(0),p=function(t){var e=t.contacts,n=t.onRemoveContact;return Object(_.jsx)("ul",{className:j.a.TaskList,children:e.map((function(t){return Object(_.jsxs)("li",{className:j.a.TaskList_item,children:[t.name+":"+t.number,Object(_.jsx)("button",{className:j.a.TaskList_button,type:"button",name:"delete",onClick:function(){return n(t.id)},children:"delete"})]},t.id)}))})};function C(t){var e=t.value,n=t.onChangeFilter;return Object(_.jsxs)("div",{children:["Find contacts by name",Object(_.jsx)("input",{type:"text",value:e,onChange:n})]})}var f=n(4),k=n(2),v=n.n(k),O=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,s=n.value;t.setState(Object(f.a)({},a,s))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(Object(r.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(_.jsxs)("form",{className:v.a.TaskEditor,onSubmit:this.handleSubmit,children:[Object(_.jsxs)("label",{className:v.a.TaskEditor_label,children:["Name",Object(_.jsx)("input",{className:v.a.TaskEditor_input,type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:this.handleChange})]}),Object(_.jsxs)("label",{className:v.a.TaskEditor_label,children:["Number",Object(_.jsx)("input",{className:v.a.TaskEditor_input,type:"text",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:this.handleChange})]}),Object(_.jsx)("button",{className:v.a.TaskEditor_button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),T=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){if(t.state.contacts.map((function(t){return t.name})).includes(e.name))alert("".concat(e.name," is already in contacts"));else if(0===e.name.length)alert("Fields must be filled!");else{var n=Object(r.a)(Object(r.a)({},e),{},{id:Object(m.a)()});t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[n])}}))}},t.changeFilter=function(e){e.preventDefault(),t.setState({filter:e.target.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts(),n=this.state.contacts.length>1;return Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{children:"Phonebook"}),Object(_.jsx)(O,{onAddContact:this.addContact}),Object(_.jsx)("h2",{children:"Contacts"}),n&&Object(_.jsx)(C,{value:t,onChangeFilter:this.changeFilter}),e.length>0&&Object(_.jsx)(p,{contacts:e,onRemoveContact:this.removeContact})]})}}]),n}(a.Component);c.a.render(Object(_.jsx)(s.a.StrictMode,{children:Object(_.jsx)(T,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={TaskEditor:"ContactForm_TaskEditor__34R4e",TaskEditor_label:"ContactForm_TaskEditor_label__2jM2j",TaskEditor_input:"ContactForm_TaskEditor_input__3EnSy",TaskEditorinput:"ContactForm_TaskEditorinput__3FZof",TaskEditor_button:"ContactForm_TaskEditor_button__34gUv"}},9:function(t,e,n){t.exports={TaskList:"ContactList_TaskList__1GJZy",TaskList_item:"ContactList_TaskList_item__3Pt5u",completed:"ContactList_completed__2LPUg",TaskList_text:"ContactList_TaskList_text__CRdYa",TaskList_actions:"ContactList_TaskList_actions__3TKYQ",TaskList_button:"ContactList_TaskList_button__135xv"}}},[[18,1,2]]]);
//# sourceMappingURL=main.3225b9b3.chunk.js.map