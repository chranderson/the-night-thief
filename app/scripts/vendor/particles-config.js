/* jshint ignore:start */

/* particlesJS('dom-id', params);
      /* @dom-id : set the html tag id [string, optional, default value : particles-js]
      /* @params: set the params [object, optional, default values : check particles.js] */

      /* config dom id (optional) + config particles params */
      particlesJS('particles-js', {
        particles: {
          color: '#fff',
          shape: 'triangle', // "circle", "edge" or "triangle"
          opacity: 1,
          size: 0.5,
          size_random: true,
          nb: 500,
          line_linked: {
            enable_auto: false,
            distance: 100,
            color: '#fff',
            opacity: 0.8,
            width: 1,
            condensed_mode: {
              enable: true,
              rotateX: 600,
              rotateY: 600
            }
          },
          anim: {
            enable: true,
            speed: 1
          }
        },
        interactivity: {
          enable: true,
          mouse: {
            distance: 250
          },
          detect_on: 'canvas', // "canvas" or "window"
          mode: 'grab',
          line_linked: {
            opacity: 0.5
          },
          events: {
            onclick: {
              enable: true,
              mode: 'push', // "push" or "remove" (particles)
              nb: 4
            }
          }
        },
        /* Retina Display Support */
        retina_detect: true
      });

/* jshint ignore:end */