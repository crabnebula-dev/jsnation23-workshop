// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::sync::Mutex;
use tauri::{Manager, State};

#[derive(Debug, Default)]
struct Values(Mutex<Vec<u64>>);

fn fib(x: u64) -> u64 {
    if x <= 1 {
        x
    } else {
        fib(x - 1) + fib(x - 2)
    }
}

#[tauri::command(async)]
fn calculate(limit: u64, values: State<Values>) -> Vec<u64> {
    let mut values = values.0.lock().unwrap();
    values.clear();

    for i in 0..limit {
        values.push(fib(i));
    }

    values.clone()
}

#[tauri::command(async)]
fn get_values(values: State<Values>) -> Vec<u64> {
    let values = values.0.lock().unwrap();

    values.clone()
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![calculate, get_values])
        .setup(|app| {
            app.manage(Values::default());

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
