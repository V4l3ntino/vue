import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useUserStore = defineStore('user', () => {
  const users = ref([
    { id: 1, name: 'Admin', role: 'admin', permissions: ['manage_users', 'edit_content'] },
    { id: 2, name: 'Editor', role: 'editor', permissions: ['edit_content'] },
    { id: 3, name: 'Viewer', role: 'viewer', permissions: [] },
  ]);

  const filter = ref('');

  const filteredUsers = computed(() => {
    return users.value.filter(user =>
      user.name.toLowerCase().includes(filter.value.toLowerCase()) ||
      user.role.toLowerCase().includes(filter.value.toLowerCase())
    );
  });

  function addUser(user) {
    users.value.push({ id: users.value.length + 1, ...user });
  }

  function updateUser(id, updatedUser) {
    const index = users.value.findIndex(user => user.id === id);
    if (index !== -1) users.value[index] = { ...users.value[index], ...updatedUser };
  }

  function deleteUser(id) {
    users.value = users.value.filter(user => user.id !== id);
  }

  return { users, filter, filteredUsers, addUser, updateUser, deleteUser };
});
