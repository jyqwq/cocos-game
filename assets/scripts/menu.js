/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 11:20:47
 * @LastEditTime: 2019-10-12 16:14:31
 * @LastEditors: Please set LastEditors
 */
cc.Class({
    extends: cc.Component,

    properties: {
        recruitBtn:cc.Node,
        choose:cc.Node,
        cavalry:cc.Node,
        infantry:cc.Node,
        bowmen:cc.Node,
        spearman:cc.Node,
        durable:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.city = null;
    },

    start () {

    },

    update (dt) {
        if(this.city) this.updateLabel();
    },

    toChoose (e,data) {
        if(!this.choose.active){
            this.choose.active = true;
        }else if (this.choose.active && data){
            let d = data.split(",");
            this.city.city.recruitNow = d;
            this.recruitBtn.getChildByName('Background').getChildByName('Label').getComponent(cc.Label).string='招募'+d[1]+'中';
            this.choose.active = false;
        }
    },

    getCity (e) {
        this.city = e.target.parent.getComponent("city");
        this.city.isChoose = true;
        this.recruitBtn.getChildByName('Background').getChildByName('Label').getComponent(cc.Label).string='招募'+this.city.city.recruitNow[1]+'中';
        this.updateLabel();
    },

    updateLabel () {
        this.cavalry.getComponent(cc.Label).string = '骑兵   '+this.city.city.cavalry;
        this.infantry.getComponent(cc.Label).string = '步兵   '+this.city.city.infantry;
        this.bowmen.getComponent(cc.Label).string = '弓兵   '+this.city.city.bowmen;
        this.spearman.getComponent(cc.Label).string = '枪兵   '+this.city.city.spearman;
        this.durable.getComponent(cc.Label).string = '耐久   '+this.city.city.durable;
    }
});
