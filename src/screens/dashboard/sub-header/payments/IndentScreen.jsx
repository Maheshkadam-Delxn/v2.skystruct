// import React from 'react';
//   import { View, Text } from 'react-native';

//   export default function IndentScreen() {
//     return (
//       <View className="flex-1 justify-center items-center bg-white">
//         <Text className="text-2xl font-bold text-gray-800">Bill of Quantity</Text>
//         <Text className="text-gray-600 mt-2">Manage your bill of quantities here.</Text>
//       </View>
//     );
//   }

import React, { useState, useCallback, useMemo } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions, 
  ActivityIndicator,
  TextInput,
  Modal
} from 'react-native';
import MainLayout from '../../../components/MainLayout';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { 
  FadeInDown, 
  FadeOut, 
  FadeInUp,
  SlideInRight
} from 'react-native-reanimated';

const screenWidth = Dimensions.get('window').width;
const cardWidth = Math.min(screenWidth - 32, 600);

// Sample indent data
const indentData = [
  {
    id: 'GH101-INDENT-00024',
    reqBy: 'Alan David',
    reqTo: 'Mukesh Sinha',
    status: 'Pending',
    date: '2025-09-08',
    items: [
      {
        activityName: 'Field work',
        productName: 'Cement',
        materialId: 'MAT-00001',
        orderQuantity: '90 Kg',
        remainingQuantity: '710 Kg'
      },
      {
        activityName: 'Construction',
        productName: 'Steel',
        materialId: 'MAT-00002',
        orderQuantity: '200 Kg',
        remainingQuantity: '500 Kg'
      }
    ]
  },
  {
    id: 'GH101-INDENT-00026',
    reqBy: 'Alan David',
    reqTo: 'Mukesh Sinha',
    status: 'Approved',
    date: '2025-09-08',
    items: [
      {
        activityName: 'Plumbing',
        productName: 'PVC Pipes',
        materialId: 'MAT-00003',
        orderQuantity: '50 Pcs',
        remainingQuantity: '150 Pcs'
      },
      {
        activityName: 'Electrical',
        productName: 'Wires',
        materialId: 'MAT-00004',
        orderQuantity: '100 M',
        remainingQuantity: '400 M'
      }
    ]
  },
   {
    id: 'GH101-INDENT-00027',
    reqBy: 'Alan David',
    reqTo: 'Mukesh Sinha',
    status: 'Approved',
    date: '2025-09-08',
    items: [
      {
        activityName: 'Plumbing',
        productName: 'PVC Pipes',
        materialId: 'MAT-00003',
        orderQuantity: '50 Pcs',
        remainingQuantity: '150 Pcs'
      },
      {
        activityName: 'Electrical',
        productName: 'Wires',
        materialId: 'MAT-00004',
        orderQuantity: '100 M',
        remainingQuantity: '400 M'
      }
    ]
  }
];

// Status Indicator Component
const StatusIndicator = ({ status }) => {
  const statusConfig = {
    'Pending': { color: '#f59e0b', bg: '#fef3c7', icon: 'clock-outline' },
    'Approved': { color: '#10b981', bg: '#d1fae5', icon: 'check-circle' },
    'Rejected': { color: '#ef4444', bg: '#fee2e2', icon: 'close-circle' },
    'Completed': { color: '#10b981', bg: '#d1fae5', icon: 'check-all' },
  };

  const config = statusConfig[status] || statusConfig['Pending'];

  return (
    <View style={{ 
      flexDirection: 'row', 
      alignItems: 'center', 
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 16,
      backgroundColor: config.bg,
      alignSelf: 'flex-start'
    }}>
      <Icon name={config.icon} size={14} color={config.color} style={{ marginRight: 4 }} />
      <Text style={{ 
        fontSize: 12, 
        fontWeight: '600', 
        color: config.color 
      }}>
        {status}
      </Text>
    </View>
  );
};

// Indent Item Component
const IndentItem = ({ item }) => {
  return (
    <Animated.View 
      entering={FadeInUp.duration(300)}
      style={{ 
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
        <Text style={{ fontSize: 16, fontWeight: '700', color: '#1f2937' }}>
          {item.productName}
        </Text>
        <Text style={{ fontSize: 14, color: '#6b7280' }}>
          {item.materialId}
        </Text>
      </View>
      
      <Text style={{ fontSize: 14, color: '#6b7280', marginBottom: 12 }}>
        Activity: {item.activityName}
      </Text>
      
      <View style={{ 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        backgroundColor: '#f8fafc',
        borderRadius: 8,
        padding: 12
      }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>
            Order Qty
          </Text>
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#3b82f6' }}>
            {item.orderQuantity}
          </Text>
        </View>
        
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>
            Remaining Qty
          </Text>
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#10b981' }}>
            {item.remainingQuantity}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};

// Indent Card Component
const IndentCard = ({ item, toggleExpand, expandedItems }) => {
  const isExpanded = expandedItems[item.id];
  const hasItems = item.items && item.items.length > 0;

  return (
    <Animated.View entering={FadeInDown.duration(500)}>
      <TouchableOpacity
        onPress={() => hasItems && toggleExpand(item.id)}
        style={{
          borderRadius: 20,
          backgroundColor: '#ffffff',
          marginBottom: 16,
          overflow: 'hidden',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 4,
        }}
      >
        {/* Header */}
        <LinearGradient
          colors={['#3b82f6', '#2563eb']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ padding: 20 }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              {hasItems && (
                <Icon
                  name={isExpanded ? 'chevron-down' : 'chevron-right'}
                  size={24}
                  color="#ffffff"
                  style={{ marginRight: 12 }}
                />
              )}
              <View style={{ flex: 1 }}>
                <Text style={{ 
                  fontSize: 18, 
                  fontWeight: '700', 
                  color: '#ffffff',
                  marginBottom: 4
                }}>
                  {item.id}
                </Text>
                <Text style={{ 
                  fontSize: 13, 
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: 8
                }}>
                  Date: {item.date}
                </Text>
              </View>
            </View>
            <StatusIndicator status={item.status} />
          </View>
        </LinearGradient>

        {/* Content */}
        <View style={{ padding: 20, gap: 16 }}>
          {/* Request Info */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flex: 1, gap: 4 }}>
              <Text style={{ fontSize: 12, color: '#6b7280' }}>Requested By</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="account-outline" size={16} color="#6b7280" />
                <Text style={{ 
                  fontSize: 14, 
                  fontWeight: '600', 
                  color: '#374151',
                  marginLeft: 8
                }}>
                  {item.reqBy}
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, gap: 4 }}>
              <Text style={{ fontSize: 12, color: '#6b7280' }}>Requested To</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="account-check-outline" size={16} color="#6b7280" />
                <Text style={{ 
                  fontSize: 14, 
                  fontWeight: '600', 
                  color: '#374151',
                  marginLeft: 8
                }}>
                  {item.reqTo}
                </Text>
              </View>
            </View>
          </View>

          {/* Items Count */}
          <View style={{ 
            backgroundColor: '#f8fafc', 
            borderRadius: 16, 
            padding: 16,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <View style={{ gap: 4 }}>
              <Text style={{ fontSize: 12, color: '#6b7280' }}>Total Items</Text>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#374151' }}>
                {item.items.length}
              </Text>
            </View>
            <View style={{ alignItems: 'flex-end', gap: 4 }}>
              <Text style={{ fontSize: 12, color: '#6b7280' }}>Action</Text>
              <View style={{ flexDirection: 'row', gap: 8 }}>
                <TouchableOpacity
                  style={{ 
                    padding: 8,
                    backgroundColor: '#ecfdf5',
                    borderRadius: 8
                  }}
                  onPress={() => console.log('Approve', item.id)}
                >
                  <Icon name="check" size={16} color="#059669" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ 
                    padding: 8,
                    backgroundColor: '#fee2e2',
                    borderRadius: 8
                  }}
                  onPress={() => console.log('Reject', item.id)}
                >
                  <Icon name="close" size={16} color="#dc2626" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Expanded Items */}
        {isExpanded && hasItems && (
          <Animated.View entering={SlideInRight} style={{ padding: 20, paddingTop: 0 }}>
            <Text style={{ 
              fontSize: 16, 
              fontWeight: '600', 
              color: '#374151',
              marginBottom: 16
            }}>
              Items List
            </Text>
            {item.items.map((item, index) => (
              <IndentItem key={index} item={item} />
            ))}
          </Animated.View>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

// Filter Modal Component
const FilterModal = ({ visible, onClose, currentFilter, onApplyFilter }) => {
  const [tempFilter, setTempFilter] = useState(currentFilter);

  const filters = ['All', 'Pending', 'Approved', 'Rejected', 'Completed'];

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end' }}>
        <Animated.View entering={FadeInUp} style={{ 
          backgroundColor: '#ffffff', 
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          padding: 24
        }}>
          <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: 24
          }}>
            <Text style={{ 
              fontSize: 20, 
              fontWeight: '700', 
              color: '#1f2937' 
            }}>
              Filter Indents
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={24} color="#6b7280" />
            </TouchableOpacity>
          </View>
          
          <View style={{ gap: 12 }}>
            <Text style={{ 
              fontSize: 16, 
              fontWeight: '600', 
              color: '#374151' 
            }}>
              Status
            </Text>
            {filters.map((status) => (
              <TouchableOpacity
                key={status}
                style={{
                  padding: 16,
                  borderRadius: 16,
                  borderWidth: 2,
                  borderColor: (tempFilter === status || (status === 'All' && !tempFilter)) 
                    ? '#3b82f6' 
                    : '#e5e7eb',
                  backgroundColor: (tempFilter === status || (status === 'All' && !tempFilter)) 
                    ? '#eff6ff' 
                    : '#ffffff'
                }}
                onPress={() => setTempFilter(status === 'All' ? null : status)}
              >
                <Text style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: (tempFilter === status || (status === 'All' && !tempFilter))
                    ? '#3b82f6'
                    : '#374151'
                }}>
                  {status}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <View style={{ 
            flexDirection: 'row', 
            gap: 12, 
            marginTop: 24 
          }}>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: '#f3f4f6',
                padding: 16,
                borderRadius: 16,
                alignItems: 'center'
              }}
              onPress={onClose}
            >
              <Text style={{ 
                fontSize: 14, 
                fontWeight: '600', 
                color: '#374151' 
              }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: '#3b82f6',
                padding: 16,
                borderRadius: 16,
                alignItems: 'center'
              }}
              onPress={() => {
                onApplyFilter(tempFilter);
                onClose();
              }}
            >
              <Text style={{ 
                fontSize: 14, 
                fontWeight: '600', 
                color: '#ffffff' 
              }}>
                Apply Filter
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

// Main Indent Screen Component
const IndentScreen = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState(null);

  const toggleExpand = useCallback((id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  }, []);

  const handleRefresh = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  const filteredIndents = useMemo(() => {
    let result = [...indentData];
    
    // Apply search filter
    if (searchQuery.trim()) {
      result = result.filter(item => 
        item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.reqBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.reqTo.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply status filter
    if (filterStatus) {
      result = result.filter(item => item.status === filterStatus);
    }
    
    return result;
  }, [filterStatus, searchQuery]);

  if (isLoading) {
    return (
      <MainLayout title="Indent List">
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
              Loading indents...
            </Text>
          </View>
        </View>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Indent List">
      <View style={{ flex: 1, backgroundColor: '#f8fafc' }}>
        {/* Header */}
        <LinearGradient 
          colors={['#3b82f6', '#2563eb', '#1e40af']} 
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ padding: 20 }}
        >
          <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: 20
          }}>
            <View>
              <Text style={{ 
                fontSize: 24, 
                fontWeight: '700', 
                color: '#ffffff' 
              }}>
                Indent List
              </Text>
              <Text style={{ 
                fontSize: 14, 
                color: 'rgba(255, 255, 255, 0.8)',
                marginTop: 4
              }}>
                {filteredIndents.length} indents • {filterStatus || 'All statuses'}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <TouchableOpacity
                style={{ 
                  padding: 12, 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                  borderRadius: 16 
                }}
                onPress={handleRefresh}
              >
                <Icon name="refresh" size={20} color="#ffffff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ 
                  padding: 12, 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                  borderRadius: 16 
                }}
                onPress={() => console.log('Add indent')}
              >
                <Icon name="plus" size={20} color="#ffffff" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Search Bar */}
          <View style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            borderRadius: 16, 
            padding: 16,
            marginBottom: 16
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="magnify" size={20} color="#ffffff" style={{ marginRight: 12 }} />
              <TextInput
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Search indents, requesters..."
                placeholderTextColor="rgba(255, 255, 255, 0.6)"
                style={{ 
                  flex: 1, 
                  color: '#ffffff', 
                  fontSize: 16 
                }}
              />
              {searchQuery.length > 0 && (
                <TouchableOpacity onPress={() => setSearchQuery('')}>
                  <Icon name="close-circle" size={20} color="rgba(255, 255, 255, 0.6)" />
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* Filter Control */}
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            <TouchableOpacity
              style={{ 
                flexDirection: 'row', 
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 16
              }}
              onPress={() => setShowFilterModal(true)}
            >
              <Icon name="filter-outline" size={16} color="#ffffff" />
              <Text style={{ 
                color: '#ffffff', 
                fontWeight: '600',
                marginLeft: 8
              }}>
                Filter
              </Text>
              {filterStatus && (
                <View style={{ 
                  marginLeft: 8, 
                  backgroundColor: 'rgba(255, 255, 255, 0.3)', 
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 12
                }}>
                  <Text style={{ 
                    fontSize: 12, 
                    color: '#ffffff' 
                  }}>
                    {filterStatus}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Indents List */}
        <ScrollView 
          contentContainerStyle={{ padding: 16 }}
          showsVerticalScrollIndicator={false}
        >
          {filteredIndents.length > 0 ? (
            filteredIndents.map((item) => (
              <IndentCard
                key={item.id}
                item={item}
                toggleExpand={toggleExpand}
                expandedItems={expandedItems}
              />
            ))
          ) : (
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
              <Icon name="file-search-outline" size={64} color="#d1d5db" />
              <Text style={{ 
                fontSize: 18, 
                fontWeight: '600', 
                color: '#6b7280',
                marginTop: 16
              }}>
                No indents found
              </Text>
              <Text style={{ 
                fontSize: 14, 
                color: '#9ca3af',
                marginTop: 8,
                textAlign: 'center'
              }}>
                {searchQuery ? 
                  'Try adjusting your search terms or filters' : 
                  'Get started by creating your first indent'
                }
              </Text>
              <TouchableOpacity 
                style={{ 
                  backgroundColor: '#3b82f6', 
                  paddingHorizontal: 24,
                  paddingVertical: 12,
                  borderRadius: 16,
                  marginTop: 16
                }}
                onPress={() => console.log('Add first indent')}
              >
                <Text style={{ 
                  color: '#ffffff', 
                  fontWeight: '600' 
                }}>
                  Create Indent
                </Text>
              </TouchableOpacity>
            </Animated.View>
          )}
        </ScrollView>

        {/* Filter Modal */}
        <FilterModal
          visible={showFilterModal}
          onClose={() => setShowFilterModal(false)}
          currentFilter={filterStatus}
          onApplyFilter={setFilterStatus}
        />
      </View>
    </MainLayout>
  );
};

export default IndentScreen;