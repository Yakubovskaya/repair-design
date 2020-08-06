<?php

wp_enqueue_style( 'style', get_template_directory_uri().'/css/style.css');
wp_enqueue_style( 'fonts', '//fonts.googleapis.com/css2?family=Yeseva+One&display=swap');
wp_enqueue_style( 'animate', '//cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css');
wp_enqueue_style( 'swiper', '//unpkg.com/swiper/css/swiper-bundle.min.css');

wp_deregister_script('jquery');
wp_register_script( 'jquery', '//code.jquery.com/jquery-3.5.1.min.js', true);

wp_enqueue_script( 'jquery');
wp_enqueue_script( 'wow.min', get_template_directory_uri().'/js/wow.min.js', true);
wp_enqueue_script( 'jquery.validate.min', get_template_directory_uri().'/js/jquery.validate.min.js', 'jquery', true);
wp_enqueue_script( 'jquery.mask.min', get_template_directory_uri().'/js/jquery.mask.min.js', 'jquery', true);
wp_enqueue_script( 'main', get_template_directory_uri().'/js/main.js', 'jquery', true);
wp_enqueue_script( 'swiper.min', '//unpkg.com/swiper/swiper-bundle.min.js', 'jquery', true);




