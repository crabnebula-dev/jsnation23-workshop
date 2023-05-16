// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn fib(x: u64) -> u64 {
    if x <= 1 {
        x
    } else {
        fib(x - 1) + fib(x - 2)
    }
}

#[tauri::command(async)]
fn calculate(limit: u64) -> Vec<u64> {
    let mut values = vec![];
    for i in 0..limit {
        values.push(fib(i));
    }
    values
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![calculate])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
