<template>
    <div>
      <div>
        <stusentInfo>

        </stusentInfo>
      <StudentsForm>

      </StudentsForm>
      </div>
    </div>
</template>

<script>
  import StudentsInfo from './StudentsInfo'
  import StudentsForm from './StudentsForm.vue'
    export default{
        data(){
            return{

            }
        },
        components:{
          stusentInfo:StudentsInfo,
          StudentsForm:StudentsForm
        }
    }
</script>
