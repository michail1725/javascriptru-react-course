import React from 'react'
import ReactDOM from 'react-dom/client'

import { restaurants } from '../materials/mock.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ul>
    <li>
      <h1>{restaurants[0].name}</h1>
      <h3>Меню</h3>
        <ul>
          <li>
            {restaurants[0].menu[0].name}
            <br/>Цена: {restaurants[0].menu[0].price}
            <br/>Ингридиенты:
            <ul>
              <li>
                {restaurants[0].menu[0].ingredients[0]}
              </li>
              <li>
                {restaurants[0].menu[0].ingredients[1]}
              </li>
            </ul>
          </li>
          <li>
            {restaurants[0].menu[1].name}
            <br/>Цена: {restaurants[0].menu[1].price}
            <br/>Ингридиенты:
            <ul>
              <li>
                {restaurants[0].menu[1].ingredients[0]}
              </li>
            </ul>
          </li>
          <li>
            {restaurants[0].menu[2].name}
            <br/>Цена: {restaurants[0].menu[2].price}
            <br/>Ингридиенты:
            <ul>
              <li>
                {restaurants[0].menu[2].ingredients[0]}
              </li>
              <li>
                {restaurants[0].menu[2].ingredients[1]}
              </li>
            </ul>
          </li>
        </ul>
      <h3>Отзывы</h3>
      <ul>
        <li>
            {restaurants[0].reviews[0].user} - {restaurants[0].reviews[0].rating}
            <br/>{restaurants[0].reviews[0].text}
        </li>
        <li>
            {restaurants[0].reviews[1].user} - {restaurants[0].reviews[1].rating}
            <br/>{restaurants[0].reviews[1].text}
        </li>
        
      </ul>
    </li>
    <li>
      <h1>{restaurants[1].name}</h1>
      <h3>Меню</h3>
        <ul>
          <li>
            {restaurants[1].menu[0].name}
            <br/>Цена: {restaurants[1].menu[0].price}
            <br/>Ингридиенты:
            <ul>
              <li>
                {restaurants[1].menu[0].ingredients[0]}
              </li>
              <li>
                {restaurants[1].menu[0].ingredients[1]}
              </li>
              <li>
                {restaurants[1].menu[0].ingredients[2]}
              </li>
            </ul>
          </li>
          <li>
            {restaurants[1].menu[1].name}
            <br/>Цена: {restaurants[1].menu[1].price}
            <br/>Ингридиенты:
            <ul>
              <li>
                {restaurants[1].menu[1].ingredients[0]}
              </li>
              <li>
                {restaurants[1].menu[1].ingredients[1]}
              </li>
              <li>
                {restaurants[1].menu[1].ingredients[2]}
              </li>
              <li>
                {restaurants[1].menu[1].ingredients[3]}
              </li>
            </ul>
          </li>
        </ul>
      <h3>Отзывы</h3>
      <ul>
        <li>
            {restaurants[1].reviews[0].user} - {restaurants[1].reviews[0].rating}
            <br/>{restaurants[1].reviews[0].text}
        </li>
        <li>
            {restaurants[1].reviews[1].user} - {restaurants[1].reviews[1].rating}
            <br/>{restaurants[1].reviews[1].text}
        </li>
        <li>
            {restaurants[1].reviews[2].user} - {restaurants[1].reviews[2].rating}
            <br/>{restaurants[1].reviews[2].text}
        </li>
        
      </ul>
    </li>
    <li>
      <h1>{restaurants[2].name}</h1>
      <h3>Меню</h3>
        <ul>
          <li>
            {restaurants[2].menu[0].name}
            <br/>Цена: {restaurants[2].menu[0].price}
            <br/>Ингридиенты:
            <ul>
              <li>
                {restaurants[2].menu[0].ingredients[0]}
              </li>
            </ul>
          </li>
          <li>
            {restaurants[2].menu[1].name}
            <br/>Цена: {restaurants[2].menu[1].price}
            <br/>Ингридиенты:
            <ul>
              <li>
                {restaurants[2].menu[1].ingredients[0]}
              </li>
              <li>
                {restaurants[2].menu[1].ingredients[1]}
              </li>
            </ul>
          </li>
          <li>
            {restaurants[2].menu[2].name}
            <br/>Цена: {restaurants[2].menu[2].price}
            <br/>Ингридиенты:
            <ul>
              <li>
                {restaurants[2].menu[2].ingredients[0]}
              </li>
            </ul>
          </li>
        </ul>
      <h3>Отзывы</h3>
      <ul>
        <li>
            {restaurants[2].reviews[0].user} - {restaurants[2].reviews[0].rating}
            <br/>{restaurants[2].reviews[0].text}
        </li>        
      </ul>
    </li>
    <li>
      <h1>{restaurants[3].name}</h1>
      <h3>Меню</h3>
        <ul>
          <li>
            {restaurants[3].menu[0].name}
            <br/>Цена: {restaurants[3].menu[0].price}
            <br/>Ингридиенты:
            <ul>
              <li>
                {restaurants[3].menu[0].ingredients[0]}
              </li>
            </ul>
          </li>
          <li>
            {restaurants[3].menu[1].name}
            <br/>Цена: {restaurants[3].menu[1].price}
            <br/>Ингридиенты:
            <ul>
              <li>
                {restaurants[3].menu[1].ingredients[0]}
              </li>
              <li>
                {restaurants[3].menu[1].ingredients[1]}
              </li>
            </ul>
          </li>
        </ul>
      <h3>Отзывы</h3>
      <ul>
        <li>
            {restaurants[3].reviews[0].user} - {restaurants[3].reviews[0].rating}
            <br/>{restaurants[3].reviews[0].text}
        </li>
        <li>
            {restaurants[3].reviews[1].user} - {restaurants[3].reviews[1].rating}
            <br/>{restaurants[3].reviews[1].text}
        </li>
        
      </ul>
    </li>
  </ul>
)
