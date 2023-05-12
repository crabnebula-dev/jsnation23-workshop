// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    let ctx = tauri::generate_context!();

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(ctx)
        .expect("error while running tauri application");
}
