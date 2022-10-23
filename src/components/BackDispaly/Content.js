import AutoScroll from '@brianmcallister/react-auto-scroll';
import moment from 'moment';
import React, { useMemo, useState } from 'react';
import { useInnerSize } from '../../hooks/useInnerSize';
import socket from '../../utils/socketIOInstance';
import Item from './Item';

const Content = () => {
  const { height: windowHeight } = useInnerSize();
  const [allMessages, setMessages] = useState([]);

  const removeItem = (id) => {
    const filterData = allMessages.filter((item) => item.id !== id);
    setMessages(filterData);
  };

  const height = useMemo(() => {
    const calculateHeight = windowHeight / allMessages.length;
    if (calculateHeight > 150) return calculateHeight;
    return 150 + 50;
  }, [allMessages, windowHeight]);

  socket.on('connect', () => {
    let savedMessagedData = [];
    socket.on('users connected', function () {
      socket.on('new note', function (data) {
        if (Array.isArray(data)) {
          data.forEach((item) => {
            work(item);
          });
        } else {
          work(data);
        }
        function work(messageData) {
          const findData = savedMessagedData?.find((item) => {
            return item.id === messageData.id;
          });
          // messageData

          if (!findData) {
            setMessages((prevData) => {
              const find = prevData.find((p) => p.id === messageData.id);

              if (!find) {
                savedMessagedData.push(messageData);

                setTimeout(() => {
                  removeItem(messageData.id);
                  savedMessagedData = savedMessagedData.filter(
                    (item) => item.id !== messageData.id
                  );
                }, 90 * 1000);
                return [...prevData, messageData];
              }
              return prevData;
            });
          }
        }
      });
    });
  });

  return (
    <AutoScroll height={windowHeight}>
      {allMessages.map((item) => (
        <Item
          key={item.id}
          text={item.message}
          date={moment(item.dateTime).format('h:mm:ss a, MMM D, YYYY')}
          height={height}
        />
      ))}
    </AutoScroll>
  );
};

export default Content;
