document.addEventListener('DOMContentLoaded', function () {
   var media = document.querySelectorAll('.materialboxed');
   var instances = M.Materialbox.init(media);
   var modal = document.querySelectorAll('.modal');
   var instances = M.Modal.init(modal);

   var nav = document.querySelectorAll('.sidenav');
   var instances_sidenav = M.Sidenav.init(nav);
});