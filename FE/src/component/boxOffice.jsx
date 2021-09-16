import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function BoxOffice() {
  const data = useSelector((state) => state.boxOffice);
}
