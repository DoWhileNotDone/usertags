const models = require('../../domain/models');

exports.get_all_tags = function(req, res, next) {
  models.Tag.findAll().then(function(tags) {
    res.render('tags/tags_list', {
       tags: tags,
       title: 'Tags'
     });
  });
}

exports.get_tag = function(req, res, next) {
  models.Tag.findOne({
      where: {
        id: req.params.tag_id
      }
  }).then(function(tag) {
    res.render('tags/tag_details', {
       tag: tag,
       title: 'Selected Tag'
     });
  });
}

exports.show_create_form = function(req, res, next) {
  res.render('tags/tag_create', {
    title: 'Add Tag' ,
    action: 'Create'
  });
}

exports.create_tag = function(req, res, next) {
  console.log("Tag name: ", req.body.tag_name);
  return models.Tag.create({
    name: req.body.tag_name,
  }).then(tag => {
    res.redirect("/tags");
  });
}

exports.show_update_form = function(req, res, next) {
  models.Tag.findOne({
      where: {
        id: req.params.tag_id
      }
  }).then(function(tag) {
    res.render('tags/tag_edit', {
       tag: tag,
       title: 'Update Tag',
       action: 'Edit'
     });

  });
}

exports.update_tag = function(req, res, next) {
  models.Tag.findOne({
      where: {
        id: req.params.tag_id
      }
  }).then(function(tag) {
    tag.name = req.body.tag_name,
    tag.save().then(() => {
      res.redirect("/tags");
    });
  });
}

exports.delete_tag = function(req, res, next) {
  models.Tag.destroy({
      where: {
        id: req.params.tag_id
      }
  }).then(result => {
      res.redirect("/tags");
  });
}

exports.delete_tag_json = function(req, res, next) {
  models.Tag.destroy({
      where: {
        id: req.params.tag_id
      }
  }).then(result => {
      res.send({ msg: "Success" });
  });
}
