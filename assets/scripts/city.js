/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 14:13:24
 * @LastEditTime: 2019-10-12 16:03:24
 * @LastEditors: Please set LastEditors
 */

cc.Class({
    extends: cc.Component,

    properties: {
        menu:cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.type = 'city';
        this.city = {
            power:'red',
            cavalry:100,
            infantry:100,
            bowmen:100,
            spearman:100,
            recruitNow:['cavalry','骑兵'],
            durable:500
        };
        this.recruitTimer = 0;
        this.isChoose = false;
    },

    start () {

    },

    update (dt) {
        if (this.recruitTimer === 500){
            this.city[this.city.recruitNow[0]] += 50;
            this.recruitTimer = 0;
            if (this.isChoose){
                this.menu.getComponent('menu').city = this;
            }
        }
        this.recruitTimer++;
    },
});
