﻿var assert = require('assert');
var VendingMachine = require('../app.js');
var Quarter = require('../coins/quarter.js');
var Dime = require('../coins/dime.js');
var Nickel = require('../coins/nickel.js');
var Penny = require('../coins/penny.js');

describe('VendingMachine', function () {

    it('should return "insert coin"', function () {
        var vendor = new VendingMachine();
        assert.equal('insert coin', vendor.display);
    });

    describe('#isCoin', function () {
        var vendor = new VendingMachine();
        it('should recognize a coin', function () {
            var coin = new Quarter();
            assert(vendor.isCoin(coin, coin.weight, coin.diameter))
        })
    })

    describe('#isQuarter', function () {
        var vendor = new VendingMachine();
        it('should recognize a quarter is a quarter', function () {
            assert(vendor.isQuarter(new Quarter()));
        })
        it('should recognize a nickel is not a quarter', function () {
            assert.equal(vendor.isQuarter(new Nickel()), false);
        })
        it('should recognize a dime is not a quarter', function () {
            assert.equal(vendor.isQuarter(new Dime()), false);
        })
        it('should recognize a penny is not a quarter', function () {
            assert.equal(vendor.isQuarter(new Penny()), false);
        })
    })

    describe('#isDime', function () {
        var vendor = new VendingMachine();
        it('should recognize a dime is a dime', function () {
            assert(vendor.isDime(new Dime()));
        })
        it('should recognize a nickel is not a dime', function () {
            assert.equal(vendor.isDime(new Nickel()), false);
        })
        it('should recognize a quarter is not a dime', function () {
            assert.equal(vendor.isDime(new Quarter()), false);
        })
        it('should recognize a penny is not a dime', function () {
            assert.equal(vendor.isDime(new Penny()), false);
        })
    })

    describe('#isNickel', function () {
        var vendor = new VendingMachine();
        it('should recognize a nickel is a nickel', function () {
            assert(vendor.isNickel(new Nickel()));
        })
        it('should recognize a dime is not a nickel', function () {
            assert.equal(vendor.isNickel(new Dime()), false);
        })
        it('should recognize a quarter is not a nickel', function () {
            assert.equal(vendor.isNickel(new Quarter()), false);
        })
        it('should recognize a penny is not a nickel', function () {
            assert.equal(vendor.isNickel(new Penny()), false);
        })
    }) 

    describe('#isAcceptedCoin', function () {
        var vendor = new VendingMachine();
        it('should accept a quarter', function () {
            var coin = new Quarter();
            assert(vendor.isAcceptedCoin(coin), 'quarter was rejected');
        })
        it('should accept a dime', function () {
            var coin = new Dime();
            assert(vendor.isAcceptedCoin(coin), 'dime was rejected');
        })
        it('should accept a nickel', function () {
            var coin = new Nickel();
            assert(vendor.isAcceptedCoin(coin), 'nickel was rejected' );
        })
        it('should reject a penny', function () {
            var coin = new Penny();
            assert.equal(vendor.isAcceptedCoin(coin), false, 'penny was accepted');
        })
    })

    describe('#addCoinToArray', function () {
        var vendor = new VendingMachine();
        it('should add coin to the array', function() {
            var array = [];
            var coin = new Quarter;
            vendor.addCoinToArray(array, coin)
            assert(array.length);
        })
    })

    describe('#addCoinToInsertedCoins', function () {
        it('should add coin to the inserted coins array')
    })
});
