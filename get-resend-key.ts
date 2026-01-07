import { Resend } from 'resend';

async function getApiKey() {
  const resend = new Resend('re_7nHeUasV_HhDCHvVfE3vJq5P8XgB2G8A5'); // Utilisation d'une clé temporaire si nécessaire pour la création ou celle fournie
  try {
    const { data, error } = await resend.apiKeys.create({ name: 'Production' });
    if (error) {
      console.error('Error creating API key:', error);
      return;
    }
    console.log('--- API KEY START ---');
    console.log(data.token);
    console.log('--- API KEY END ---');
  } catch (e) {
    console.error('Execution error:', e);
  }
}

getApiKey();
