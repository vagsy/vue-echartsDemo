<template lang="html">
  <div class="modal-template">
    <div class="modal-mask">
         <div class="modal-wrapper">
           <div class="modal-container">
             <form class="form-horizontal">
               <div class="form-group modal-header">
                 <slot name="header">
                   <div class="col-md-6 message-wording">提示</div>
                   <div class="col-md-6 message-right">
                     <span class="glyphicon glyphicon-remove"></span>
                   </div>
                 </slot>
               </div>
               <div class="form-group modal-body">
                 <slot name="body">
                  <div class="col-md-6 message-confirm">确认退出吗？</div>
                 </slot>
               </div>
               <div class="form-group modal-footer">
                 <slot name="footer">
                   <div class="col-md-5 col-md-offset-7">
                     <button type="button" name="button" class="btn btn-default">取消</button>
                     <button type="button" name="button" class="btn btn-info confirm-btn">确认</button>
                   </div>
                 </slot>
               </div>
             </form>
           </div>
         </div>
       </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css">
/*.prompt-content {
    background-color: #000;
    opacity: 0.6;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
}
.prompt-content .prompt-body .form-horizontal{
    width: 400px;
    margin: 0 auto;
}
.col-md-6.message-wording {
    font-size: 18px;
    font-weight: bold;
}
.col-md-6.message-confirm {
    color: #8590a6;
    font-size: 15px;
}
.message-right{
  text-align: right;
}
.prompt-content .prompt-body .form-horizontal {
    padding: 25px 20px;
    border-radius: 6px;
    background-color: #fff;
    width: 430px;
    margin: 15% auto;
}
.confirm-btn{
    background-color: #12c4f9;
    border-color: #12c4f9;
}*/
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.col-md-6.message-wording {
    font-size: 18px;
    font-weight: bold;
}
.col-md-6.message-confirm {
    color: #8590a6;
    font-size: 15px;
}
.message-right{
  text-align: right;
}
</style>
