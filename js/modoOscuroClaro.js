
$(document).ready(function () {
  let modo = localStorage.getItem('modo');
  if (modo === 'oscuro') {
    activarModoOscuro();
  } else {
    activarModoClaro();
  }
});


$(".modoOscuroClaro").click(function(){
 // Alternar modo
  let modo = localStorage.getItem('modo');
  if (modo === 'oscuro') {
    activarModoClaro();
    localStorage.setItem('modo', 'claro');
  } else {
    activarModoOscuro();
    localStorage.setItem('modo', 'oscuro');
  }
});

function activarModoClaro() {
  
            $('body').css(
                            {
                                'background-color':'#f5f5f5',
                                'color': '#1e1e1e', 
                            });

            $('nav').css(
                            {
                                'background-color': '#ffffff',
                                'color': '#1e1e1e'
                            }
            );

            $('nav,li,a').css(
                            {
                                'color': '#0077b6'
                            }
            );

            $('.navbar-brand').css(
                            {
                                'color': '#1e1e1e'
                            }
            );

            $('.navbar-brand:hover').css(
                            {
                                'color': '#005f73'
                            }
            );

            $('.navbar-toggler').css(
                            {
                                'background-color': '#e0e0e0',
                                'color': '#1e1e1e'
                            }
            );

            $('.list-group-item').css(
                            {
                                'background-color': '#ffffff',
                                'color': '#333333'
                            }
            );

                $('.list-group-item.active').css(
                            {
                                'background-color': '#e0e0e0',
                                'color': '#000000',
                                'border-color': '#aaaaaa'
                            }
            );

            $('table').css(
                            {
                                'background-color': '#ffffff'
                            }
            );

            $('.estilosTablas, th').css(
                            {
                                'background-color': 'transparent',
                                'color': '#333333',
                            }
            );

            $('.estilosTablas, td').css(
                            {
                                'background-color': 'transparent',
                                'color': '#333333',
                            }
            );

            $('.titulosh3').css(
                            {
                                'color': '#1e1e1e',
                            }
            );

            $('.modoOscuroClaro').css(
                            {
                                'background-color': 'black'
                            }
            );

};

function activarModoOscuro() 
{
     $('body').css(
                            {
                                'background-color':'#1e1e2f',
                                'color': '#e0e0e0', 
                            });

            $('nav').css(
                            {
                                'background-color': '#2c2c3a', 
                                'color': '#f1f1f1' 
                            }
            );

            $('nav,li,a').css(
                            {
                                'color': '#0077b6' 
                            }
            );

            $('.navbar-brand').css(
                            {
                                'color': '#f1f1f1' 
                            }
            );

            $('.navbar-brand:hover').css(
                            {
                                'color': '#0097a7'
                            }
            );

            $('.navbar-toggler').css(
                            {
                                'background-color': '#f1f1f1',
                                'color': '#f1f1f1'
                            }
            );

            $('.list-group-item').css(
                            {
                                'background-color': '#252530',
                                'color': 'rgb(200, 200, 200)'
                            }
            );

                $('.list-group-item.active').css(
                            {
                                'background-color': 'transparent',
                                'color': 'white',
                                'border-color': 'rgb(200, 200, 200)'
                            }
            );

            $('table').css(
                            {
                                'background-color': '#292935'
                            }
            );

            $('.estilosTablas, th').css(
                            {
                                'background-color': 'rgb(45, 49, 55)',
                                'color': 'white',
                            }
            );

             $('.estilosTablas, td').css(
                            {
                                'background-color': 'transparent',
                                'color': 'rgb(220, 220, 220)',
                            }
            );

            $('.titulosh3').css(
                            {
                                'color': '#ffffff',
                            }
            );

            $('.modoOscuroClaro').css(
                            {
                                'background-color': 'white'
                            }
            );

}