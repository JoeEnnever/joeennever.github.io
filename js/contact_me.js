$(function () {
  $("input,textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {
      // additional error messages or events
    },
    filter: function () {
      return $(this).is(":visible");
    }
  });

  $('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$("#name").focus(function () {
  $("#success").html("");
});

var form = document.getElementById("contactForm");

async function handleSubmit(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json"
    }
  })
    .then((response) => {
      $("#success").html("<div class='alert alert-success'>");
      $("#success > .alert-success")
        .html(
          "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
        )
        .append("</button>");
      $("#success > .alert-success").append(
        "<strong>Your message has been sent. </strong>"
      );
      $("#success > .alert-success").append("</div>");
      form.reset();
    })
    .catch((error) => {
      $("#success").html("<div class='alert alert-danger'>");
      $("#success > .alert-danger")
        .html(
          "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
        )
        .append("</button>");
      $("#success > .alert-danger").append(
        "<strong>Sorry " +
          firstName +
          ", it seems that my mail server is not responding. Please try again later!"
      );
      $("#success > .alert-danger").append("</div>");
      form.reset();
    });
}
form.addEventListener("submit", handleSubmit);
