export function checkIfErrorDismissable(error: Error) {
  const dismissableMessages = [
    'not enough rights',
    'message to delete not found',
    'bot was kicked',
    'not in the chat',
  ]
  for (const message of dismissableMessages) {
    if (error.message.indexOf(message) > -1) {
      return true
    }
  }
  return false
}