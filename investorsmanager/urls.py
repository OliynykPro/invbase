from rest_framework import routers
from .api import InverstorViewSet, InteractionStatusViewSet, TypeOfInvestorViewSet

router = routers.DefaultRouter()
router.register('api/investors', InverstorViewSet, 'investors')
router.register('api/interactionstatus', InteractionStatusViewSet, 'interaction-status')
router.register('api/typeofinvestor', TypeOfInvestorViewSet, 'type-of-investor')

urlpatterns = router.urls