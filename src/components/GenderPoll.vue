 /* eslint-disable */ 

<template>
 <div class="container">
        <div class="m-header">
            <h1 class="display-2">I am.....</h1>
        </div>

   <div class="row">
        <div class="col">
           <div class="hr-container">
               <h4 >FEMALE</h4>
           </div>
              <i class="fa poll-icon-size fa-female" title="Female" label="Female"></i>
            <div class="ctn-container">
               <span v-bind:style="{color: FemalePercentColor}">{{FemalePercent}}%</span>
           </div>
           <div class="ctn-containerr">
                <md-button class="md-primary" @click.native="onFemaleClicked" >
                  <i class="fa fa-check"></i> Vote 
                </md-button>
           </div>
           <div class="hr-container">
              <h6>Female Vote count: {{FemaleVote}}</h6>
           </div>
        </div>
        <div class="col">
           <div class="hr-container">
              <h4 >MALE</h4>
           </div>
               <i class="fa fa-male poll-icon-size" title="Male" ></i>
           <div class="ctn-container">
                <span v-bind:style="{color: MalePercentColor}">{{MalePercent}}%</span>
           </div>
            <div class="ctn-containerr">
                <md-button class="md-primary" @click.native="onMaleClicked" >
                 <i class="fa fa-check"></i> Vote 
               </md-button>
            </div>
            <div class="hr-container">
              <h6 >Male Vote count: {{MaleVote}}</h6>
           </div>
          </div>
      
    </div>
      <md-button class="md-primary" @click.native="OnReset" >Reset</md-button>
 </div>
</template>

<script>
export default {
  name: 'Poll',
  data: () => ({
    FemaleVote: 0,
    MaleVote: 0,
    FemalePercent:0,
    MalePercent:0,
    FemalePercentColor: 'green',
    MalePercentColor: 'green',
  }),
  computed: {
     CalculatePercentage () {
       let totalVotes = parseInt(this.FemaleVote) + parseInt(this.MaleVote);
          if(this.totalVotes === 0) { 
            this.FemalePercent = '0';
            this.MalePercent = '0';
          } else {
            this.FemalePercent = ( Math.round((this.FemaleVote * 100)/totalVotes ));
            this.MalePercent = ( Math.round((this.MaleVote * 100)/ totalVotes ) );
          }
          this.AssignColor;
     },
     AssignColor () {
       if(this.FemalePercent === this.MalePercent) {
         this.FemalePercentColor = 'green';
         this.MalePercentColor = 'green';
       } else if(this.FemalePercent > this.MalePercent) {
         this.FemalePercentColor = 'green';
         this.MalePercentColor = 'red';
       } else if(this.FemalePercent < this.MalePercent){
         this.FemalePercentColor = 'red';
         this.MalePercentColor = 'green';
       } 
       },
  },
  methods: {
     onFemaleClicked (){
       if(this.FemaleVote === undefined || this.FemaleVote === null){
         this.FemaleVote = 0;
       } else {
       this.FemaleVote++;
       }
       this.CalculatePercentage;
     },
     onMaleClicked (){
       if(this.MaleVote === undefined || this.MaleVote === null){
         this.MaleVote = 1;
       } else {
       this.MaleVote++;
       }
       this.CalculatePercentage;
     },
     OnReset () {
        this.FemaleVote = 0;
        this.MaleVote = 0;
        this.FemalePercent = 0;
        this.MalePercent = 0;
        this.AssignColor;
     }
  }
}
</script>

<style lang="scss" scoped>

.md-button.md-primary {
    width: 15px;
   height: 26px;
    color: rgba(255, 255, 255, .87);
    background-color: rgb(49, 177, 49);
    font-size: 10px;
}

.poll-icon-size{
 font-size: 50px;
}
.fa-check {
    size: 5px;
}
.ctn-container {
    margin-top: 10px;
}
.hr-container {
    margin: 10px 0;
    color:#CCC;
}
.col {
    text-align:center;
}
.m-header {
   text-align: center;
   margin: 10px 0;
  font-weight:bold;
}
</style>
