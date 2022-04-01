import React from 'react';
import ThemeProvider from './providers/themeProvider';
import Header from './common/components/Header/Header';
import './App.scss';

const App = () => (
  <ThemeProvider>
    <Header />
      <p>here's some text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet asperiores dicta ea, esse fugiat laudantium molestiae vero? Aliquam aspernatur assumenda consequatur culpa doloribus error eum ipsa ipsum maxime natus neque nostrum nulla numquam odio pariatur quae repudiandae sed veniam veritatis, voluptate. Aliquid assumenda aut cumque doloribus est fuga, id ipsa minima quas rem! Animi aperiam architecto aspernatur at aut consectetur deserunt dignissimos eligendi et excepturi explicabo facilis id illum laborum libero modi, molestias nobis nostrum nulla odio odit pariatur praesentium quaerat quo temporibus veritatis voluptas voluptates? At, atque dolores et laborum non provident quia sint voluptate? Ab, asperiores blanditiis consectetur dolor dolores error fugit in incidunt iure magni molestiae optio perferendis perspiciatis possimus, quas qui quibusdam suscipit ut voluptas voluptates. Ab aliquid aut ea est et itaque nihil nobis, quos. Atque deleniti ducimus earum, eius, eum natus nesciunt nisi nobis officia omnis praesentium quam quos sint tempora voluptate voluptatem voluptatibus? Ad aliquam aliquid blanditiis debitis dolorum eligendi error, facere facilis fuga itaque labore laboriosam magnam maiores minima molestiae nemo neque omnis perferendis quasi quia repudiandae sed vitae. Cumque dignissimos ex ipsa iusto, maiores molestias! Accusamus animi eaque, labore minus modi odio quidem veniam voluptatibus? Ducimus illum inventore ipsum rem!</p>
  </ThemeProvider>
);

export default App;
