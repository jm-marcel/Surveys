<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::location('/dashboard');
});

Route::get('/dashboard', function () {
    return Inertia::render('Default');
});

Route::get('/surveys', function () {
    return Inertia::render('Default');
});

Route::get('/login', function () {
    return Inertia::render('Login');
});

Route::get('/register', function () {
    return Inertia::render('Register');
});

// Route::get('/laravel', function () {
//     return view('laravel');
// });