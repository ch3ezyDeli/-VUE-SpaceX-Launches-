
<template>
<div>
    <div class="preview__container" id="preview-container" @scroll="handleScroll"> 
        <div class="launch-card__item" v-for="(oLaunches, iIndex) in launchesLoaded" :key="iIndex" :launch="oLaunches">
            <div class="image__wrapper">
            <img :src="oLaunches.links.patch.small" alt=""></div>
            <div class="lauch-desc__wrapper">
                <p class="name">Flight number: <span class="mission">{{oLaunches.flight_number}}</span> (<span class="mission-year">{{ filterDate(oLaunches.date_local)}}</span>)</p>
                <p class="details">Details: {{oLaunches.details}}</p>
            </div>
        </div>
        
    </div>
    <div class="loader show">
        <img src="../assets/images/loading.png" alt="">
    </div>
</div>
    
</template>
<script>
    export default {
    data() {
        return {
            aLaunches: [],
            length: 5,
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
                    $('.loader').removeClass('show')
                    self.aLaunches = data;
                }
            });
        },

        filterDate(oOLaunches) {
            let sDate = oOLaunches.substring(0,4);
            return sDate.toString();
        },

        loadMore() {
            if(this.length > this.aLaunches.length) return;
            this.length = this.length + 5;
        },

        handleScroll(e) {
            var iCurrentScrollPosition = e.target.scrollTop;
            var iTriggerPoint = iCurrentScrollPosition + 595 
            if (iCurrentScrollPosition > this.scrollPosition) {
                
            }
            if (iTriggerPoint > e.target.scrollHeight) {
                this.loadMore();
            }
            this.scrollPosition = iCurrentScrollPosition;
        }
    },
    computed: {
        launchesLoaded() {
            return this.aLaunches.slice(0, this.length);
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
    position: relative;
}

.loader {
    margin-top: 38px;
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 948px;
    height: 595px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.loader img {
    width: 52px;
    height: 52px;
    animation: spin 2s linear infinite;
}

.loader.show {
    display: flex;
    justify-content: center;
    align-items: center;
    
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

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>