exports.seed = function(knex) {
  return knex('listing').del()
    .then(function () {
      return knex('listing').insert([{
        item: "Monitor",
        price: 70,
        description: "1080p monitor, ips panel, in great condition, picture quality looks great! Contact me for more information or to setup a meeting.",
        image_url: "#",
        userId: 2
      },{
        item: "keyboard",
        price: 20,
        description: "Mechanical Corsair k70 keyboard. It has cherry red switches for that linear and smooth key press. has a built in usb connection for your mouse. red led lighting on al keys! in good condition,",
        image_url: "#",
        userId: 2
      },{
        item: "Nvidia 1660ti",
        price: 500,
        description: "Great graphics card to run games at 1080p great condition, and is a gamers dream right now.",
        image_url: "#",
        userId: 3
      },{
        item: "Iphone 8s",
        price: 30,
        description: "Iphone 8 no broken screen, runs fast, factory reset and ready to use!",
        image_url: "#",
        userId: 4
      },{
        item: "Razer Deathadder v2",
        price: 30,
        description: "Mouse is in great condition, and has been lightly used. has rgb lighting and good tactile feedback on clicks.",
        image_url: "#",
        userId: 4
      }
      ]);
    });
};