import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client =  sanityClient({
  projectId:'xlv6njoy', // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: '2021-11-16',
  useCdn: true,
  token: "skOOvSlganJ8n3umZEblSI3HCZGZrkbF1EHVkJjN5lh2BtUeK9YWSJ3FmIIeDNstz8p6QMQzOD6LSzIzl4TEhSk6WnAQ2s3VYKADFYxqLnkBsf4fmj7foRMu5eMl5L0dItGtU2H6zL30RzVmbbcSmWDQx80E4uMhPX9LF8Pj8MAe2fsFZNC6",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  if (!source) {
    return '';
  }
  return builder.image(source);
};

