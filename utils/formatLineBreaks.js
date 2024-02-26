import React from 'react';

export const formatLineBreaks = (text, tag, replacement) => {
  const regex = /<br\s*[\/]?>/gi;
  const result = text.replace(regex, replacement);
  return result;
};

export const convertNewlinesToBreaks = (content) => {
  return content.replace(/\n/g, '<br/>');
};

export const newLine = (line) =>
  line.split('\n').map((item, key, arr) => (
    <React.Fragment key={key}>
      {item} {key !== arr.length - 1 && <br />}
    </React.Fragment>
  ));
