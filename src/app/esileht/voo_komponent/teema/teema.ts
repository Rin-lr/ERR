import { Component } from '@angular/core';
import { DataType } from "../../../data-type/data-type";


export function Teema(page: DataType): HTMLElement {
  const wrap = document.createElement('div');
  wrap.classList.add('teema_videos');

  // -------------------------Teema pealkiri-------------------------
  const Teema_pealkiri = document.createElement('h2');
  Teema_pealkiri.textContent = page.header;
  Teema_pealkiri.classList.add('Teema_pealkiri');

  wrap.appendChild(Teema_pealkiri);

  return wrap;
}
