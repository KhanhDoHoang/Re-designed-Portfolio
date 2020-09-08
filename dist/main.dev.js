"use strict";

$(document).ready(function () {
  $("html").niceScroll();
});

function delay(n) {
  n = n || 2000;
  return new Promise(function (done) {
    setTimeout(function () {
      done();
    }, n);
  });
}

function pageTransition() {
  var tl = gsap.timeline();
  tl.to(".loading-screen", {
    duration: 1.1,
    width: "100%",
    left: "0%",
    ease: "Expo.easeInOut"
  });
  tl.to(".loading-screen", {
    duration: 0.8,
    width: "100%",
    left: "100%",
    ease: "Expo.easeInOut",
    delay: 0.3
  });
  tl.set(".loading-screen", {
    left: "-100%"
  });
}

function contentAnimation() {
  var tl = gsap.timeline();
  tl.from(".animate-this", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.4,
    delay: 0.2
  });
}

$(function () {
  barba.init({
    sync: true,
    transitions: [{
      leave: function leave(data) {
        var done;
        return regeneratorRuntime.async(function leave$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                done = this.async();
                pageTransition();
                _context.next = 4;
                return regeneratorRuntime.awrap(delay(1000));

              case 4:
                done();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, null, this);
      },
      enter: function enter(data) {
        return regeneratorRuntime.async(function enter$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                contentAnimation();

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        });
      },
      once: function once(data) {
        return regeneratorRuntime.async(function once$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                contentAnimation();

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        });
      }
    }]
  });
});