/**
 * Created by leojpod on 3/7/16.
 */

var names = [
  'leo',
  'Fredrik',
  'Alexandre',
  'Richardson',
  'Thoai Nghia'
];

module.exports = function () {
  return names[Math.floor(Math.random()*names.length)];
};
