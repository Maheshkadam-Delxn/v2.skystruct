import React, { useState, useCallback, useMemo } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions, 
  ActivityIndicator,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import MainLayout from '../../components/MainLayout';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { 
  FadeInDown, 
  FadeOut, 
  FadeInUp
} from 'react-native-reanimated';

const screenWidth = Dimensions.get('window').width;
const cardWidth = Math.min(screenWidth - 32, 600);

// Sample data
const roles = [
  { id: '1', name: 'Project Admin', key: 'PROJECT_ADMIN', status: 'Active' },
  { id: '2', name: 'Consultant', key: 'Consultant', status: 'Active' },
  { id: '3', name: 'Approver', key: 'Approver', status: 'Active' },
  { id: '4', name: 'Contractor', key: 'Contractor', status: 'Active' },
];

const users = [
  { id: '1', name: 'Alan David', role: 'Project Admin', mobile: '+91764585655', email: 'viyipa437@acedby.com' },
  { id: '2', name: 'Mukesh Sinha', role: 'Consultant', mobile: '9863212225', email: 'vikashoffice38@gmail.com' },
  { id: '3', name: 'moteen', role: 'Consultant', mobile: '+98765456787', email: 'mo3@gmail.com' },
  { id: '4', name: 'Sonalika', role: 'Approver', mobile: '6955363533', email: 'bicisov382@pricegh.com' },
];

const approvals = [
  { id: '1', project: 'Granite Horizon', approver: 'Alan David', module: 'Indent', status: 'Yes' },
  { id: '2', project: 'Granite Horizon', approver: 'Alan David', module: 'Bill Payment', status: 'Yes' },
  { id: '3', project: 'Granite Horizon', approver: 'Alan David', module: 'Document', status: 'Yes' },
  { id: '4', project: 'Granite Horizon', approver: 'Alan David', module: 'Drawing', status: 'Yes' },
];

const dashboards = [
  { id: '1', project: 'Granite Horizon', role: 'Project Admin', title: 'Not Started Activity', type: 'Counter' },
  { id: '2', project: 'Granite Horizon', role: 'Project Admin', title: 'Drawings Under Review', type: 'Counter' },
  { id: '3', project: 'Granite Horizon', role: 'Project Admin', title: 'Open GRN', type: 'Counter' },
  { id: '4', project: 'Granite Horizon', role: 'Project Admin', title: 'Paid Bill', type: 'Counter' },
];

// Status Badge Component
const StatusBadge = ({ status }) => {
  const statusConfig = {
    active: { color: '#10b981', bgColor: '#d1fae5', text: 'Active' },
    inactive: { color: '#6b7280', bgColor: '#f3f4f6', text: 'Inactive' },
    pending: { color: '#f59e0b', bgColor: '#fef3c7', text: 'Pending' },
    yes: { color: '#10b981', bgColor: '#d1fae5', text: 'Yes' },
    no: { color: '#ef4444', bgColor: '#fee2e2', text: 'No' }
  };

  const config = statusConfig[status.toLowerCase()] || statusConfig.active;

  return (
    <View style={{
      flexDirection: 'row', 
      alignItems: 'center',
      backgroundColor: config.bgColor,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
      alignSelf: 'flex-start'
    }}>
      <View style={{
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: config.color,
        marginRight: 4
      }} />
      <Text style={{ 
        fontSize: 12, 
        fontWeight: '600', 
        color: config.color 
      }}>
        {config.text}
      </Text>
    </View>
  );
};

// Card Components
const RoleCard = ({ item, expanded, onToggle }) => (
  <Animated.View entering={FadeInDown.duration(500)}>
    <View style={{
      borderRadius: 20,
      backgroundColor: '#ffffff',
      marginBottom: 16,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    }}>
      {/* Header */}
      <TouchableOpacity onPress={onToggle}>
        <LinearGradient 
          colors={['#dbeafe', '#bfdbfe']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ padding: 20 }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ 
                fontSize: 18, 
                fontWeight: '700', 
                color: '#1e40af',
                marginBottom: 4
              }}>
                {item.name}
              </Text>
              <Text style={{ 
                fontSize: 13, 
                color: '#3b82f6',
                marginBottom: 8
              }}>
                Key: {item.key}
              </Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <StatusBadge status={item.status} />
            </View>
            <Icon 
              name={expanded ? 'chevron-up' : 'chevron-down'} 
              size={24} 
              color="#1e40af" 
              style={{ marginLeft: 12 }} 
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>

      {/* Expanded Content */}
      {expanded && (
        <Animated.View entering={FadeInUp} exiting={FadeOut}>
          <View style={{ padding: 16, backgroundColor: '#f8fafc' }}>
            {/* Action Buttons */}
            <View style={{ 
              flexDirection: 'row', 
              justifyContent: 'space-between',
              backgroundColor: '#ffffff', 
              borderRadius: 12, 
              padding: 16
            }}>
              <TouchableOpacity 
                style={{ alignItems: 'center', padding: 8, flex: 1 }}
                onPress={() => console.log('Edit', item.id)}
              >
                <Icon name="pencil-outline" size={24} color="#10b981" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={{ alignItems: 'center', padding: 8, flex: 1 }}
                onPress={() => console.log('View', item.id)}
              >
                <Icon name="eye-outline" size={24} color="#3b82f6" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={{ alignItems: 'center', padding: 8, flex: 1 }}
                onPress={() => console.log('Permissions', item.id)}
              >
                <Icon name="shield-account-outline" size={24} color="#8b5cf6" />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      )}
    </View>
  </Animated.View>
);

const UserCard = ({ item, expanded, onToggle, onViewPermissions }) => (
  <Animated.View entering={FadeInDown.duration(500)}>
    <View style={{
      borderRadius: 20,
      backgroundColor: '#ffffff',
      marginBottom: 16,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    }}>
      {/* Header */}
      <TouchableOpacity onPress={onToggle}>
        <LinearGradient 
          colors={['#dbeafe', '#bfdbfe']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ padding: 20 }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ 
                fontSize: 18, 
                fontWeight: '700', 
                color: '#1e40af',
                marginBottom: 4
              }}>
                {item.name}
              </Text>
              <Text style={{ 
                fontSize: 13, 
                color: '#3b82f6',
                marginBottom: 8
              }}>
                Role: {item.role}
              </Text>
            </View>
            <Icon 
              name={expanded ? 'chevron-up' : 'chevron-down'} 
              size={24} 
              color="#1e40af" 
              style={{ marginLeft: 12 }} 
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>

      {/* Expanded Content */}
      {expanded && (
        <Animated.View entering={FadeInUp} exiting={FadeOut}>
          <View style={{ padding: 16, backgroundColor: '#f8fafc' }}>
            {/* Details */}
            <View style={{ 
              backgroundColor: '#ffffff', 
              borderRadius: 12, 
              padding: 16,
              marginBottom: 12
            }}>
              <Text style={{ 
                fontSize: 16, 
                fontWeight: '700', 
                color: '#1f2937',
                marginBottom: 12
              }}>
                User Details
              </Text>
              
              <View style={{ marginBottom: 8 }}>
                <Text style={{ fontSize: 12, color: '#6b7280' }}>Mobile</Text>
                <Text style={{ fontSize: 14, fontWeight: '600', color: '#374151' }}>{item.mobile}</Text>
              </View>
              
              <View style={{ marginBottom: 8 }}>
                <Text style={{ fontSize: 12, color: '##6b7280' }}>Email</Text>
                <Text style={{ fontSize: 14, fontWeight: '600', color: '#374151' }}>{item.email}</Text>
              </View>
            </View>
            
            {/* Action Buttons */}
            <View style={{ 
              flexDirection: 'row', 
              justifyContent: 'space-between',
              backgroundColor: '#ffffff', 
              borderRadius: 12, 
              padding: 16
            }}>
              <TouchableOpacity 
                style={{ alignItems: 'center', padding: 8, flex: 1 }}
                onPress={onViewPermissions}
              >
                <Icon name="shield-account-outline" size={24} color="#3b82f6" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={{ alignItems: 'center', padding: 8, flex: 1 }}
                onPress={() => console.log('View', item.id)}
              >
                <Icon name="eye-outline" size={24} color="#3b82f6" />
              </TouchableOpacity>

              <TouchableOpacity 
                style={{ alignItems: 'center', padding: 8, flex: 1 }}
                onPress={() => console.log('Manage Role', item.id)}
              >
                <Icon name="account-cog-outline" size={24} color="#8b5cf6" />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      )}
    </View>
  </Animated.View>
);

const ApprovalCard = ({ item, expanded, onToggle }) => (
  <Animated.View entering={FadeInDown.duration(500)}>
    <View style={{
      borderRadius: 20,
      backgroundColor: '#ffffff',
      marginBottom: 16,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    }}>
      {/* Header */}
      <TouchableOpacity onPress={onToggle}>
        <LinearGradient 
          colors={['#dbeafe', '#bfdbfe']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ padding: 20 }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ 
                fontSize: 18, 
                fontWeight: '700', 
                color: '#1e40af',
                marginBottom: 4
              }}>
                {item.module}
              </Text>
              <Text style={{ 
                fontSize: 13, 
                color: '#3b82f6',
                marginBottom: 8
              }}>
                Project: {item.project}
              </Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <StatusBadge status={item.status} />
            </View>
            <Icon 
              name={expanded ? 'chevron-up' : 'chevron-down'} 
              size={24} 
              color="#1e40af" 
              style={{ marginLeft: 12 }} 
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>

      {/* Expanded Content */}
      {expanded && (
        <Animated.View entering={FadeInUp} exiting={FadeOut}>
          <View style={{ padding: 16, backgroundColor: '#f8fafc' }}>
            {/* Details */}
            <View style={{ 
              backgroundColor: '#ffffff', 
              borderRadius: 12, 
              padding: 16,
              marginBottom: 12
            }}>
              <Text style={{ 
                fontSize: 16, 
                fontWeight: '700', 
                color: '#1f2937',
                marginBottom: 12
              }}>
                Approval Details
              </Text>
              
              <View style={{ marginBottom: 8 }}>
                <Text style={{ fontSize: 12, color: '#6b7280' }}>Approver</Text>
                <Text style={{ fontSize: 14, fontWeight: '600', color: '#374151' }}>{item.approver}</Text>
              </View>
            </View>
            
            {/* Action Buttons */}
            <View style={{ 
              flexDirection: 'row', 
              justifyContent: 'space-between',
              backgroundColor: '#ffffff', 
              borderRadius: 12, 
              padding: 16
            }}>
              <TouchableOpacity 
                style={{ alignItems: 'center', padding: 8, flex: 1 }}
                onPress={() => console.log('Edit', item.id)}
              >
                <Icon name="pencil-outline" size={24} color="#10b981" />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      )}
    </View>
  </Animated.View>
);

const DashboardCard = ({ item, expanded, onToggle }) => (
  <Animated.View entering={FadeInDown.duration(500)}>
    <View style={{
      borderRadius: 20,
      backgroundColor: '#ffffff',
      marginBottom: 16,
      overflow: 'hidden',
      shadowColor: '##000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    }}>
      {/* Header */}
      <TouchableOpacity onPress={onToggle}>
        <LinearGradient 
          colors={['#dbeafe', '#bfdbfe']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ padding: 20 }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ 
                fontSize: 18, 
                fontWeight: '700', 
                color: '#1e40af',
                marginBottom: 4
              }}>
                {item.title}
              </Text>
              <Text style={{ 
                fontSize: 13, 
                color: '#3b82f6',
                marginBottom: 8
              }}>
                Type: {item.type}
              </Text>
            </View>
            <Icon 
              name={expanded ? 'chevron-up' : 'chevron-down'} 
              size={24} 
              color="#1e40af" 
              style={{ marginLeft: 12 }} 
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>

      {/* Expanded Content */}
      {expanded && (
        <Animated.View entering={FadeInUp} exiting={FadeOut}>
          <View style={{ padding: 16, backgroundColor: '#f8fafc' }}>
            {/* Details */}
            <View style={{ 
              backgroundColor: '#ffffff', 
              borderRadius: 12, 
              padding: 16,
              marginBottom: 12
            }}>
              <Text style={{ 
                fontSize: 16, 
                fontWeight: '700', 
                color: '#1f2937',
                marginBottom: 12
              }}>
                Dashboard Details
              </Text>
              
              <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 12, color: '#6b7280' }}>Project</Text>
                  <Text style={{ fontSize: 14, fontWeight: '600', color: '#374151' }}>{item.project}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 12, color: '#6b7280' }}>Role</Text>
                  <Text style={{ fontSize: 14, fontWeight: '600', color: '#374151' }}>{item.role}</Text>
                </View>
              </View>
            </View>
            
            {/* Action Buttons */}
            <View style={{ 
              flexDirection: 'row', 
              justifyContent: 'space-between',
              backgroundColor: '#ffffff', 
              borderRadius: 12, 
              padding: 16
            }}>
              <TouchableOpacity 
                style={{ alignItems: 'center', padding: 8, flex: 1 }}
                onPress={() => console.log('Edit', item.id)}
              >
                <Icon name="pencil-outline" size={24} color="#10b981" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={{ alignItems: 'center', padding: 8, flex: 1 }}
                onPress={() => console.log('Delete', item.id)}
              >
                <Icon name="delete-outline" size={24} color="#ef4444" />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      )}
    </View>
  </Animated.View>
);

// Empty State Component
const EmptyState = ({ searchQuery, tabName }) => (
  <Animated.View 
    entering={FadeInUp}
    style={{ 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: 40,
      backgroundColor: '#ffffff',
      borderRadius: 24,
      margin: 16
    }}
  >
    <Icon name="shield-account-outline" size={64} color="#d1d5db" />
    <Text style={{ 
      fontSize: 18, 
      fontWeight: '600', 
      color: '#6b7280',
      marginTop: 16
    }}>
      No permissions found
    </Text>
    <Text style={{ 
      fontSize: 14, 
      color: '#9ca3af',
      marginTop: 8,
      textAlign: 'center'
    }}>
      {searchQuery ? 
        'Try adjusting your search terms' : 
        `No ${tabName.toLowerCase()} available`
      }
    </Text>
  </Animated.View>
);

// Modal Components
const ModalHeader = ({ title, onClose }) => (
  <LinearGradient 
    colors={['#3b82f6', '#2563eb']}
    style={{ 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: 16,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12
    }}
  >
    <Text style={{ fontSize: 18, fontWeight: '700', color: '#ffffff' }}>
      {title}
    </Text>
    <TouchableOpacity onPress={onClose}>
      <Icon name="close" size={24} color="#ffffff" />
    </TouchableOpacity>
  </LinearGradient>
);

const ModalFooter = ({ onClose, onSave }) => (
  <View style={{ 
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    gap: 12, 
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb'
  }}>
    <TouchableOpacity 
      onPress={onClose} 
      style={{ 
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: '#f3f4f6'
      }}
    >
      <Text style={{ color: '#374151', fontWeight: '600' }}>Close</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      onPress={onSave} 
      style={{ 
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: '#3b82f6'
      }}
    >
      <Text style={{ color: '#ffffff', fontWeight: '600' }}>Save</Text>
    </TouchableOpacity>
  </View>
);

// Add Role Modal
const AddRoleModal = ({ visible, onClose, onSave }) => {
  const [roleName, setRoleName] = useState('');
  const [roleKey, setRoleKey] = useState('');
  const [copyPermission, setCopyPermission] = useState(false);

  const handleSave = () => {
    onSave({ roleName, roleKey, copyPermission });
    setRoleName('');
    setRoleKey('');
    setCopyPermission(false);
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <View style={{ backgroundColor: '#ffffff', borderRadius: 12, width: '90%', maxWidth: 500 }}>
          <ModalHeader title="Add Role" onClose={onClose} />
          
          <View style={{ padding: 16 }}>
            <TextInput
              placeholder="Role Name"
              value={roleName}
              onChangeText={setRoleName}
              style={{ 
                borderWidth: 1, 
                borderColor: '#e5e7eb', 
                borderRadius: 8, 
                padding: 12, 
                marginBottom: 16,
                fontSize: 16
              }}
            />
            <TextInput
              placeholder="Role Key"
              value={roleKey}
              onChangeText={setRoleKey}
              style={{ 
                borderWidth: 1, 
                borderColor: '#e5e7eb', 
                borderRadius: 8, 
                padding: 12, 
                marginBottom: 16,
                fontSize: 16
              }}
            />
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#374151', marginBottom: 8 }}>
              Copy Permission From Other Role?
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
              <TouchableOpacity 
                onPress={() => setCopyPermission(true)} 
                style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}
              >
                <Icon 
                  name={copyPermission ? 'radiobox-marked' : 'radiobox-blank'} 
                  size={20} 
                  color={copyPermission ? '#3b82f6' : '#6b7280'} 
                />
                <Text style={{ marginLeft: 8, color: '#374151' }}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => setCopyPermission(false)} 
                style={{ flexDirection: 'row', alignItems: 'center' }}
              >
                <Icon 
                  name={!copyPermission ? 'radiobox-marked' : 'radiobox-blank'} 
                  size={20} 
                  color={!copyPermission ? '#3b82f6' : '#6b7280'} 
                />
                <Text style={{ marginLeft: 8, color: '#374151' }}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <ModalFooter onClose={onClose} onSave={handleSave} />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

// Manage Role Modal
const ManageRoleModal = ({ visible, onClose, onSave }) => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleSave = () => {
    onSave({ selectedRole });
    setSelectedRole('');
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <View style={{ backgroundColor: '#ffffff', borderRadius: 12, width: '90%', maxWidth: 500 }}>
          <ModalHeader title="Manage Role" onClose={onClose} />
          
          <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#374151', marginBottom: 8 }}>
              Select Role to Manage
            </Text>
            
            <TouchableOpacity 
              style={{ 
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                borderWidth: 1, 
                borderColor: '#e5e7eb', 
                borderRadius: 8, 
                padding: 12, 
                marginBottom: 16
              }}
              onPress={() => console.log('Show role dropdown')}
            >
              <Text style={{ color: selectedRole ? '#374151' : '#9ca3af' }}>
                {selectedRole || 'Select a role'}
              </Text>
              <Icon name="chevron-down" size={20} color="#6b7280" />
            </TouchableOpacity>
            
            <Text style={{ fontSize: 14, color: '#6b7280', marginBottom: 16 }}>
              Manage permissions and settings for the selected role.
            </Text>
          </View>
          
          <ModalFooter onClose={onClose} onSave={handleSave} />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

// Add Dashboard Permission Modal
const AddDashboardPermissionModal = ({ visible, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Counter');
  const [selectedProject, setSelectedProject] = useState('Granite Horizon');
  const [selectedRole, setSelectedRole] = useState('Project Admin');

  const handleSave = () => {
    onSave({ title, type, selectedProject, selectedRole });
    setTitle('');
    setType('Counter');
    setSelectedProject('Granite Horizon');
    setSelectedRole('Project Admin');
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <View style={{ backgroundColor: '#ffffff', borderRadius: 12, width: '90%', maxWidth: 500 }}>
          <ModalHeader title="Add Dashboard Permission" onClose={onClose} />
          
          <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#374151', marginBottom: 8 }}>
              Title
            </Text>
            <TextInput
              placeholder="Enter title"
              value={title}
              onChangeText={setTitle}
              style={{ 
                borderWidth: 1, 
                borderColor: '#e5e7eb', 
                borderRadius: 8, 
                padding: 12, 
                marginBottom: 16,
                fontSize: 16
              }}
            />

            <Text style={{ fontSize: 16, fontWeight: '600', color: '#374151', marginBottom: 8 }}>
              Type
            </Text>
            <View style={{ flexDirection: 'row', marginBottom: 16 }}>
              <TouchableOpacity 
                onPress={() => setType('Counter')} 
                style={{ 
                  flex: 1, 
                  flexDirection: 'row', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  padding: 12,
                  borderWidth: 1,
                  borderColor: type === 'Counter' ? '#3b82f6' : '#e5e7eb',
                  borderRadius: 8,
                  marginRight: 8,
                  backgroundColor: type === 'Counter' ? '#dbeafe' : '#ffffff'
                }}
              >
                <Icon 
                  name={type === 'Counter' ? 'radiobox-marked' : 'radiobox-blank'} 
                  size={20} 
                  color={type === 'Counter' ? '#3b82f6' : '#6b7280'} 
                />
                <Text style={{ marginLeft: 8, color: '#374151' }}>Counter</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => setType('Chart')} 
                style={{ 
                  flex: 1, 
                  flexDirection: 'row', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  padding: 12,
                  borderWidth: 1,
                  borderColor: type === 'Chart' ? '#3b82f6' : '#e5e7eb',
                  borderRadius: 8,
                  backgroundColor: type === 'Chart' ? '#dbeafe' : '#ffffff'
                }}
              >
                <Icon 
                  name={type === 'Chart' ? 'radiobox-marked' : 'radiobox-blank'} 
                  size={20} 
                  color={type === 'Chart' ? '#3b82f6' : '#6b7280'} 
                />
                <Text style={{ marginLeft: 8, color: '#374151' }}>Chart</Text>
              </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 16, fontWeight: '600', color: '#374151', marginBottom: 8 }}>
              Project
            </Text>
            <TouchableOpacity 
              style={{ 
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                borderWidth: 1, 
                borderColor: '#e5e7eb', 
                borderRadius: 8, 
                padding: 12, 
                marginBottom: 16
              }}
              onPress={() => console.log('Show project dropdown')}
            >
              <Text style={{ color: '#374151' }}>
                {selectedProject}
              </Text>
              <Icon name="chevron-down" size={20} color="#6b7280" />
            </TouchableOpacity>

            <Text style={{ fontSize: 16, fontWeight: '600', color: '#374151', marginBottom: 8 }}>
              Role
            </Text>
            <TouchableOpacity 
              style={{ 
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                borderWidth: 1, 
                borderColor: '#e5e7eb', 
                borderRadius: 8, 
                padding: 12, 
                marginBottom: 16
              }}
              onPress={() => console.log('Show role dropdown')}
            >
              <Text style={{ color: '#374151' }}>
                {selectedRole}
              </Text>
              <Icon name="chevron-down" size={20} color="#6b7280" />
            </TouchableOpacity>
          </View>
          
          <ModalFooter onClose={onClose} onSave={handleSave} />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default function SettingsPermissionScreen() {
  const [activeTab, setActiveTab] = useState('Role Permission');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [addRoleModalVisible, setAddRoleModalVisible] = useState(false);
  const [manageRoleModalVisible, setManageRoleModalVisible] = useState(false);
  const [viewUserPermissionsModalVisible, setViewUserPermissionsModalVisible] = useState(false);
  const [addUserPermissionModalVisible, setAddUserPermissionModalVisible] = useState(false);
  const [approvalFilterModalVisible, setApprovalFilterModalVisible] = useState(false);
  const [dashboardFilterModalVisible, setDashboardFilterModalVisible] = useState(false);
  const [addDashboardPermissionModalVisible, setAddDashboardPermissionModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const tabs = ['Role Permission', 'User Permission', 'Approval Workflow', 'Dashboard Permission'];

  const handleRefresh = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  const toggleItem = useCallback((id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);

  const getData = () => {
    switch (activeTab) {
      case 'Role Permission':
        return roles.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
      case 'User Permission':
        return users.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
      case 'Approval Workflow':
        return approvals.filter(item => item.module.toLowerCase().includes(searchQuery.toLowerCase()));
      case 'Dashboard Permission':
        return dashboards.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
      default:
        return [];
    }
  };

  const renderItem = (item) => {
    switch (activeTab) {
      case 'Role Permission':
        return (
          <RoleCard 
            key={item.id} 
            item={item} 
            expanded={expandedItems[item.id]}
            onToggle={() => toggleItem(item.id)}
          />
        );
      case 'User Permission':
        return (
          <UserCard 
            key={item.id} 
            item={item} 
            expanded={expandedItems[item.id]}
            onToggle={() => toggleItem(item.id)}
            onViewPermissions={() => {
              setSelectedUser(item);
              setViewUserPermissionsModalVisible(true);
            }}
          />
        );
      case 'Approval Workflow':
        return (
          <ApprovalCard 
            key={item.id} 
            item={item} 
            expanded={expandedItems[item.id]}
            onToggle={() => toggleItem(item.id)}
          />
        );
      case 'Dashboard Permission':
        return (
          <DashboardCard 
            key={item.id} 
            item={item} 
            expanded={expandedItems[item.id]}
            onToggle={() => toggleItem(item.id)}
          />
        );
      default:
        return null;
    }
  };

  const handleAddRole = (data) => {
    console.log('Add Role:', data);
    setAddRoleModalVisible(false);
  };

  const handleManageRole = (data) => {
    console.log('Manage Role:', data);
    setManageRoleModalVisible(false);
  };

  const handleAddUserPermission = (data) => {
    console.log('Add User Permission:', data);
    setAddUserPermissionModalVisible(false);
  };

  const handleApplyApprovalFilters = (filters) => {
    console.log('Apply Approval Filters:', filters);
    setApprovalFilterModalVisible(false);
  };

  const handleApplyDashboardFilters = (filters) => {
    console.log('Apply Dashboard Filters:', filters);
    setDashboardFilterModalVisible(false);
  };

  const handleAddDashboardPermission = (data) => {
    console.log('Add Dashboard Permission:', data);
    setAddDashboardPermissionModalVisible(false);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8fafc' }}>
          <View style={{ 
            backgroundColor: '#ffffff', 
            padding: 32, 
            borderRadius: 24,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 4
          }}>
            <ActivityIndicator size="large" color="#3b82f6" />
            <Text style={{ 
              marginTop: 16, 
              fontSize: 16, 
              fontWeight: '600', 
              color: '#374151' 
            }}>
              Loading permissions...
            </Text>
          </View>
        </View>
      );
    }

    const data = getData();
    
    return (
      <ScrollView 
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {data.length > 0 ? (
          data.map(renderItem)
        ) : (
          <EmptyState 
            searchQuery={searchQuery} 
            tabName={activeTab} 
          />
        )}
      </ScrollView>
    );
  };

  return (
    <MainLayout title="Permissions">
      <View style={{ flex: 1, backgroundColor: '#f8fafc' }}>

        {/* Header */}
        <View style={{ backgroundColor: '#dbeafe', padding: 16 }}>
          <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: 12
          }}>
            <View>
              <Text style={{ 
                fontSize: 20, 
                fontWeight: '700', 
                color: '#1e40af' 
              }}>
                Permission Settings
              </Text>
              <Text style={{ 
                fontSize: 12, 
                color: '#3b82f6',
                marginTop: 2
              }}>
                Manage user permissions for the project
              </Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <TouchableOpacity
                style={{ 
                  padding: 10, 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                  borderRadius: 12 
                }}
                onPress={handleRefresh}
              >
                <Icon name="refresh" size={18} color="#1e40af" />
              </TouchableOpacity>
              
              {(activeTab === 'Role Permission' || activeTab === 'User Permission') && (
                <TouchableOpacity
                  style={{ 
                    padding: 10, 
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                    borderRadius: 12 
                  }}
                  onPress={() => setManageRoleModalVisible(true)}
                >
                  <Icon name="account-cog" size={18} color="#1e40af" />
                </TouchableOpacity>
              )}
              
              {activeTab === 'Role Permission' && (
                <TouchableOpacity
                  style={{ 
                    padding: 10, 
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                    borderRadius: 12 
                  }}
                  onPress={() => setAddRoleModalVisible(true)}
                >
                  <Icon name="plus" size={18} color="#1e40af" />
                </TouchableOpacity>
              )}
              
              {activeTab === 'Dashboard Permission' && (
                <TouchableOpacity
                  style={{ 
                    padding: 10, 
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                    borderRadius: 12 
                  }}
                  onPress={() => setAddDashboardPermissionModalVisible(true)}
                >
                  <Icon name="plus" size={18} color="#1e40af" />
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* Search Bar */}
          <View style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 12,
            paddingHorizontal: 12,
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Icon name="magnify" size={20} color="#6b7280" />
            <TextInput
              placeholder="Search permissions..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={{
                flex: 1,
                padding: 12,
                fontSize: 16,
                color: '#374151'
              }}
              placeholderTextColor="#9ca3af"
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Icon name="close-circle-outline" size={20} color="#9ca3af" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Tabs */}
        <View style={{ 
          flexDirection: 'row', 
          backgroundColor: '#ffffff',
          borderBottomWidth: 1,
          borderBottomColor: '#e5e7eb'
        }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            {tabs.map(tab => (
              <TouchableOpacity
                key={tab}
                style={{ 
                  flex: 1,
                  paddingVertical: 16,
                  paddingHorizontal: 16,
                  borderBottomWidth: activeTab === tab ? 2 : 0,
                  borderBottomColor: activeTab === tab ? '#3b82f6' : 'transparent',
                  minWidth: 120,
                  alignItems: 'center'
                }}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={{ 
                  fontSize: 14, 
                  fontWeight: activeTab === tab ? '600' : '400',
                  color: activeTab === tab ? '#3b82f6' : '#6b7280',
                  textAlign: 'center'
                }}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Content */}
        {renderContent()}
      </View>

      {/* Modals */}
      <AddRoleModal
        visible={addRoleModalVisible}
        onClose={() => setAddRoleModalVisible(false)}
        onSave={handleAddRole}
      />
      
      <ManageRoleModal
        visible={manageRoleModalVisible}
        onClose={() => setManageRoleModalVisible(false)}
        onSave={handleManageRole}
      />
      
      <AddDashboardPermissionModal
        visible={addDashboardPermissionModalVisible}
        onClose={() => setAddDashboardPermissionModalVisible(false)}
        onSave={handleAddDashboardPermission}
      />
      
      {/* Other modals would be included here... */}
    </MainLayout>
  );
}