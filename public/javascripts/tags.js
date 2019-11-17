"use strict";

function deleteTag(tag_id) {
  $.ajax({
    url: '/tags/' + tag_id + '/delete-json',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    data: JSON.stringify({tag_id}),
    type: 'DELETE',
    success: ((res) => {
        console.log("Result: " + res);
        $("#"+tag_id).remove();
    }),
    error: ((error) => {
      console.log("Error: " + error);
    })
  });

};
