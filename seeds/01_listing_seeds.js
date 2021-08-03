exports.seed = function(knex) {
  return knex('listing').del()
    .then(function () {
      return knex('listing').insert([{
        item: "Monitor",
        price: 70,
        description: "1080p monitor, ips panel, in great condition, picture quality looks great! Contact me for more information or to setup a meeting.",
        image_url: "https://firebasestorage.googleapis.com/v0/b/level-up-storage.appspot.com/o/images%2F81ONemBAVtL._AC_SL1500_.jpg?alt=media&token=f12474ab-9342-4bab-b8cc-b6765d2656eb",
        userId: 2,
        author: "stacey"
      },{
        item: "keyboard",
        price: 20,
        description: "Mechanical Corsair k70 keyboard. It has cherry red switches for that linear and smooth key press. has a built in usb connection for your mouse. red led lighting on al keys! in good condition,",
        image_url: "https://firebasestorage.googleapis.com/v0/b/level-up-storage.appspot.com/o/images%2Fshopping%20(1).png?alt=media&token=8b540d02-a10d-4978-a0f1-51f8a1efe765",
        userId: 2,
        author: "stacey"
      },{
        item: "Nvidia 1660ti",
        price: 500,
        description: "Great graphics card to run games at 1080p great condition, and is a gamers dream right now.",
        image_url: "https://firebasestorage.googleapis.com/v0/b/level-up-storage.appspot.com/o/images%2F1660ti.jfif?alt=media&token=8f8fca1e-ca23-49c1-90e3-1b2f34e175fa",
        userId: 3,
        author: "zipps"
      },{
        item: "Iphone 8s",
        price: 30,
        description: "Iphone 8 no broken screen, runs fast, factory reset and ready to use!",
        image_url: "https://firebasestorage.googleapis.com/v0/b/level-up-storage.appspot.com/o/images%2Fimages.jfif?alt=media&token=5c58c1c0-22b5-4b0c-9a51-9e17b77da796",
        userId: 4,
        author: "kiki"
      },{
        item: "Razer Deathadder v2",
        price: 30,
        description: "Mouse is in great condition, and has been lightly used. has rgb lighting and good tactile feedback on clicks.",
        image_url: "https://firebasestorage.googleapis.com/v0/b/level-up-storage.appspot.com/o/images%2Fimages%20(2).jfif?alt=media&token=d9a2cd6e-78cf-4dea-b4aa-af58321432fc",
        userId: 4,
        author: "kiki"
      }
      ]);
    });
};