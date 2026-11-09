export function openDialog(dialog: HTMLDialogElement | null) {
  if (!dialog) return false;

  // already open
  if (dialog.open) return true;

  // not mounted
  if (!dialog.isConnected) return false;

  try {
    dialog.showModal();
    return true;
  } catch (err) {
    console.error("Failed to open dialog", err);
    return false;
  }
}
