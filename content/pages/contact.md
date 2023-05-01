---
title: Contact
hide_title: false
sections:
  - section_id: contact-form
    type: section_form
    content: >-
      Hola, gracias una vez más por estar aquí, si tienes alguna idea genial o un proyecto que consideres que podamos colaborar en conjunto no dudes en dejarme un mensaje, tan pronto como pueda me comunicaré contigo.
    form_id: contactForm
    form_action: /home
    form_fields:
      - input_type: text
        name: name
        label: Nombre
        default_value: ¿Cuál es tu nombre?
        is_required: true
      - input_type: email
        name: email
        label: Email
        default_value: Email de contacto
        is_required: true
      - input_type: select
        name: subject
        label: ¿Cuál es el motivo de tu mensaje?
        default_value: Selecciona una opción
        options:
          - Un proyecto para colaborar
          - Un servicio que necesito
          - Una idea para emprender
          - Otro
      - input_type: textarea
        name: message
        label: ¡Cuéntame un poco más!
        default_value: Escribe tu mensaje
      - input_type: checkbox
        name: consent
        label: >-
          Acepto enviar este mensaje que protegerá mis datos y no los compartirá con nadie respetando mi privacidad.
    submit_label: enviar mensaje
seo:
  title: Contact
  description: This is the contact page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Contact
      keyName: property
    - name: 'og:description'
      value: This is the contact page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Contact
    - name: 'twitter:description'
      value: This is the contact page
layout: advanced
---
