
<template>
    <div class="preview__container" id="preview-container" @scroll="handleScroll(eScroll)"> 
        <div class="launch-card__item" v-for="(oLaunches, iIndex) in aLaunches" :key="iIndex" :launch="oLaunches">
            <div class="image__wrapper">
            <img :src="oLaunches.links.patch.small" alt=""></div>
            <div class="lauch-desc__wrapper">
                <p class="name">Flight number: <span class="mission">{{oLaunches.flight_number}}</span> (<span class="mission-year">{{ filterDate(oLaunches.date_local)}}</span>)</p>
                <p class="details">Details: {{oLaunches.details}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
    data() {
        return {
            aLaunches: [],
        }
    },
    methods: {
        loadLaunches() {
            let self = this;
            $.ajax({
                method: 'GET',
                dataType: "json",
                url: 'https://api.spacexdata.com/v4/launches/',
                success: function (data) {
                    self.aLaunches = data;
                }
            });
        },

        filterDate(oOLaunches) {
            let sDate = oOLaunches.substring(0,4);
            console.log(sDate)
            return sDate.toString();
        },

        handleScroll (event) {
            
            console.log(event);
        }
    },
    mounted() {
        this.loadLaunches();
    },
    
}
</script>
<style>
.preview__container {
    height: 593px;
    max-height: 593px;
    overflow-x: hidden;
    overflow-y: auto;
    background: #FFFFFF;
  }
.launch-card__item {
    margin: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.launch-card__item .image__wrapper {
    width: 95px;
    height: 95px;
    margin-right: 31px;
}

.launch-card__item .image__wrapper img {
    width: 95px;
    height: 95px;
    margin-right: 31px;
}

.lauch-desc__wrapper {
    text-align: left;
}

.lauch-desc__wrapper .name {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
}

.lauch-desc__wrapper .details {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
}
</style>